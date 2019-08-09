<?php

namespace SehrGut\Eloquery\Operations;

use SehrGut\Eloquery\Contracts\Operation;
use SehrGut\Eloquery\OperationResult;

class Sideload implements Operation
{
    /**
     * The relationship that should be included.
     *
     * @var string
     */
    public $relationship;

    /**
     * Construct a Sideload instance.
     *
     * @param string $relationship
     */
    public function __construct(string $relationship)
    {
        $this->relationship = $relationship;
    }

    /**
     * Apply the sideload to a query builder.
     *
     * @param mixed $builder
     * @return OperationResult|null
     */
    public function applyToBuilder($builder): ?OperationResult
    {
        $builder->with($this->relationship);

        return null;
    }
}
