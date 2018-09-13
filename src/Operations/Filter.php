<?php

namespace SehrGut\EloQuery\Operations;

use Illuminate\Database\Eloquent\Builder;
use SehrGut\EloQuery\Contracts\Operation;
use SehrGut\EloQuery\Operators;

class Filter implements Operation
{
    /**
     * The attribute name that this filter compares.
     *
     * @var string
     */
    public $attribute;

    /**
     * The value against which this filter compares.
     *
     * @var mixed
     */
    public $value;

    /**
     * The filter operator.
     *
     * @var bool
     */
    public $operator = 'EQUALS';

    /**
     * Whether the filter is negated (logical not).
     *
     * @var bool
     */
    public $negated = false;

    /**
     * Constraints by operator.
     *
     * @var array
     */
    protected static $constraints = [
        Operators::EQUALS => \SehrGut\EloQuery\Constraints\EqualsConstraint::class,
        Operators::CONTAINS => \SehrGut\EloQuery\Constraints\ContainsConstraint::class,
        Operators::STARTS_WITH => \SehrGut\EloQuery\Constraints\StartsWithConstraint::class,
        Operators::ENDS_WITH => \SehrGut\EloQuery\Constraints\EndsWithConstraint::class,
        Operators::GREATER => \SehrGut\EloQuery\Constraints\GreaterConstraint::class,
        Operators::GREATER_EQUAL => \SehrGut\EloQuery\Constraints\GreaterEqualConstraint::class,
        Operators::LESS => \SehrGut\EloQuery\Constraints\LessConstraint::class,
        Operators::LESS_EQUAL => \SehrGut\EloQuery\Constraints\LessEqualConstraint::class,
        Operators::IN => \SehrGut\EloQuery\Constraints\InConstraint::class,
        Operators::BETWEEN => \SehrGut\EloQuery\Constraints\BetweenConstraint::class,
    ];

    /**
     * Construct a Filter instance.
     *
     * @param string $attribute
     * @param mixed $value
     * @param string $operator
     * @param bool $negated
     */
    public function __construct(
        string $attribute,
        $value,
        string $operator = 'EQUALS',
        bool $negated = false
    ) {
        if (!array_key_exists($operator, static::$constraints)) {
            throw new \InvalidArgumentException('Invalid operator: ' . $operator);
        }

        $this->attribute = $attribute;
        $this->value = $value;
        $this->operator = $operator;
        $this->negated = $negated;
    }

    /**
     * Apply the filter to a query builder.
     *
     * @param Builder $builder
     * @return void
     */
    public function applyToBuilder(Builder $builder)
    {
        if ($this->actsOnRelation()) {
            $builder->whereHas($this->getRelation(), function ($relatedBuilder) {
                $this->apply($relatedBuilder);
            });
        } else {
            $this->apply($builder);
        }
    }

    /**
     * Apply the filter to a query builder (not checking for relationship).
     *
     * @param Builder $builder
     * @return void
     */
    protected function apply(Builder $builder)
    {
        $this->getOperation()->applyToBuilder($builder);
    }

    /**
     * Determine if the filter acts on a relation (as opposed to the model we're querying for).
     *
     * @return bool
     */
    protected function actsOnRelation() : bool
    {
        return (strpos($this->attribute, '.') > -1);
    }

    /**
     * Get the relation on which to apply this filter.
     *
     * @return string
     */
    protected function getRelation() : string
    {
        if (!$this->actsOnRelation()) {
            return '';
        }

        return implode('.', array_slice($this->getAttributeFragments(), 0, -1));
    }

    /**
     * Get the attribute that this filter compares without relationship prefix.
     *
     * @return string
     */
    protected function getBareAttribute() : string
    {
        if (!$this->actsOnRelation()) {
            return $this->attribute;
        }

        return end($this->getAttributeFragments());
    }

    /**
     * Get an Operation instance for the current filter.
     *
     * @return Operation
     */
    protected function getOperation() : Operation
    {
        $class = static::$constraints[$this->operator];

        return new $class($this->getBareAttribute(), $this->value, $this->negated);
    }

    /**
     * Get the "attribute" (relation + attribute in dot notation) as an array split by the dot.
     *
     * @return array
     */
    private function getAttributeFragments() : array
    {
        return explode('.', $this->attribute);
    }
}
