<?php

namespace SehrGut\Eloquery\Operations;

use Illuminate\Database\Eloquent\Builder;
use SehrGut\Eloquery\Contracts\Operation;
use SehrGut\Eloquery\OperationResult;
use SehrGut\Eloquery\Operators;

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
        Operators::EQUALS => \SehrGut\Eloquery\Constraints\EqualsConstraint::class,
        Operators::CONTAINS => \SehrGut\Eloquery\Constraints\ContainsConstraint::class,
        Operators::STARTS_WITH => \SehrGut\Eloquery\Constraints\StartsWithConstraint::class,
        Operators::ENDS_WITH => \SehrGut\Eloquery\Constraints\EndsWithConstraint::class,
        Operators::GREATER => \SehrGut\Eloquery\Constraints\GreaterConstraint::class,
        Operators::GREATER_EQUAL => \SehrGut\Eloquery\Constraints\GreaterEqualConstraint::class,
        Operators::LESS => \SehrGut\Eloquery\Constraints\LessConstraint::class,
        Operators::LESS_EQUAL => \SehrGut\Eloquery\Constraints\LessEqualConstraint::class,
        Operators::IN => \SehrGut\Eloquery\Constraints\InConstraint::class,
        Operators::BETWEEN => \SehrGut\Eloquery\Constraints\BetweenConstraint::class,
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
     * @return OperationResult|null
     */
    public function applyToBuilder(Builder $builder): ?OperationResult
    {
        if ($this->actsOnRelation()) {
            $builder->whereHas($this->getRelation(), function ($relatedBuilder) {
                $this->apply($relatedBuilder);
            });
        } else {
            $this->apply($builder);
        }

        return null;
    }

    /**
     * Apply the filter to a query builder (not checking for relationship).
     *
     * @param Builder $builder
     * @return void
     */
    protected function apply(Builder $builder)
    {
        $this->getOperation($builder)->applyToBuilder($builder);
    }

    /**
     * Determine if the filter acts on a relation (as opposed to the model we're querying for).
     *
     * @return bool
     */
    protected function actsOnRelation(): bool
    {
        return (strpos($this->attribute, '.') > -1);
    }

    /**
     * Get the relation on which to apply this filter.
     *
     * @return string
     */
    protected function getRelation(): string
    {
        if (!$this->actsOnRelation()) {
            return '';
        }

        return implode('.', array_slice($this->getAttributeFragments(), 0, -1));
    }

    /**
     * Get the attribute that this filter compares without relationship prefix.
     *
     * @param \Illuminate\Database\Eloquent\Builder $builder
     * @return string
     */
    protected function getBareAttribute(Builder $builder): string
    {
        if (!$this->actsOnRelation()) {
            return $this->attribute;
        }

        $fragments = $this->getAttributeFragments();
        $table = $builder->getModel()->getTable();

        return $table . '.' . end($fragments);
    }

    /**
     * Get an Operation instance for the current filter.
     *
     * @param \Illuminate\Database\Eloquent\Builder $builder
     * @return Operation
     */
    protected function getOperation(Builder $builder): Operation
    {
        $class = static::$constraints[$this->operator];

        return new $class($this->getBareAttribute($builder), $this->value, $this->negated);
    }

    /**
     * Get the "attribute" (relation + attribute in dot notation) as an array split by the dot.
     *
     * @return array
     */
    private function getAttributeFragments(): array
    {
        return explode('.', $this->attribute);
    }
}
