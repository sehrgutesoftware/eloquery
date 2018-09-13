<?php

namespace SehrGut\EloQuery\Constraints;

use Illuminate\Database\Eloquent\Builder;
use SehrGut\EloQuery\Contracts\Operation;

abstract class AbstractConstraint implements Operation
{
    /**
     * The attribute that we're comparing.
     *
     * @var string
     */
    protected $attribute;

    /**
     * The reference value against we're comparing the attribute.
     *
     * @var mixed
     */
    protected $value;

    /**
     * Whether the operation needs to be negated (logical not).
     *
     * @var bool
     */
    protected $negated = false;

    /**
     * Get the operator to feed into the builder method.
     *
     * @return string|null
     */
    abstract protected function getOperator();

    /**
     * Construct a Constraint instance.
     *
     * @param string $attribute
     * @param mixed $value
     * @param bool $negated
     */
    public function __construct(string $attribute, $value, bool $negated = false)
    {
        $this->attribute = $attribute;
        $this->value = $value;
        $this->negated = $negated;
    }

    /**
     * Apply the operation to the query builder.
     *
     * @param Builder $builder
     * @return void
     */
    public function applyToBuilder(Builder $builder)
    {
        $builder->{$this->getBuilderMethod()}(...$this->getBuilderArguments());
    }

    /**
     * Attributes to the builder method.
     *
     * @return array
     */
    protected function getBuilderArguments() : array
    {
        $arguments = [$this->attribute];

        if (!is_null($this->getOperator())) {
            $arguments[] = $this->getOperator();
        }

        $arguments[] = $this->getPreparedValue();

        return $arguments;
    }

    /**
     * The method to call on the builder.
     *
     * @return string
     */
    protected function getBuilderMethod() : string
    {
        return 'where';
    }

    /**
     * The value transformed to match the operation.
     *
     * @return mixed
     */
    protected function getPreparedValue()
    {
        return $this->value;
    }
}
