<?php

namespace SehrGut\Eloquery;

use SehrGut\Eloquery\Contracts\Operation;
use SehrGut\Eloquery\OperationResult;
use SehrGut\Eloquery\Operations\Paginate;

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
     * @param array|Operation $operation_s One or more operations
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
     * @param mixed $builder
     * @return OperationResult
     */
    public function applyToBuilder($builder): OperationResult
    {
        // Ensure that Paginate operations are applied last
        usort($this->items, [$this, 'sortComparator']);

        $result = new OperationResult();

        foreach ($this->items as $operation) {
            $iterationResult = $operation->applyToBuilder($builder);

            if ($iterationResult instanceof OperationResult) {
                $result->merge($iterationResult);
            }
        }

        return $result;
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

    /**
     * Comparator function for sorting operations.
     *
     * Sorts pagination operations last.
     *
     * @param  Operation $a
     * @param  Operation $b
     * @return int
     */
    protected function sortComparator(Operation $a, Operation $b)
    {
        if ($a instanceof Paginate) {
            return 1;
        }

        if ($b instanceof Paginate) {
            return -1;
        }

        return 0;
    }
}
