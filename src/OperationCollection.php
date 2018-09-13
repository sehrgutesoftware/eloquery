<?php

namespace SehrGut\EloQuery;

use Illuminate\Database\Eloquent\Builder;
use SehrGut\EloQuery\Contracts\Operation;

class OperationCollection implements Operation
{
    /**
     * Underlying array of operations.
     *
     * @var array
     */
    protected $items = [];

    /**
     * Construct a OperationCollection instance.
     *
     * @param array $items Initial operations
     */
    public function __construct(array $items = [])
    {
        $this->add($items);
    }

    /**
     * Add one or more operations to the collection.
     *
     * @param array|Operation $operation One or more operations
     * @return self
     */
    public function add($operation_s): self
    {
        if (is_array($operation_s)) {
            foreach ($operation_s as $operation) {
                $this->append($operation);
            }
        } else {
            $this->append($operation_s);
        }

        return $this;
    }

    /**
     * Merge another OperationCollection into this one.
     *
     * @param OperationCollection $new
     * @return self
     */
    public function merge(OperationCollection $new): self
    {
        $this->add($new->dump());

        return $this;
    }

    /**
     * Return all contained operations.
     *
     * @return array
     */
    public function dump(): array
    {
        return $this->items;
    }

    /**
     * Apply all operations in the collection to the builder.
     *
     * @param Builder $builder
     * @return void
     */
    public function applyToBuilder(Builder $builder)
    {
        foreach ($this->items as $operation) {
            $operation->applyToBuilder($builder);
        }
    }

    /**
     * Add an operation to the collection.
     *
     * This method is present to enable static type checking, which
     * would not happen when plainly appending to the items array.
     *
     * @param Operation $operation
     * @return void
     */
    protected function append(Operation $operation)
    {
        $this->items[] = $operation;
    }
}
