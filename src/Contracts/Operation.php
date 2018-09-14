<?php

namespace SehrGut\Eloquery\Contracts;

use Illuminate\Database\Eloquent\Builder;
use SehrGut\Eloquery\OperationResult;

/**
 * Describes an operation on a Query Builder, eg. a filter constraint or sort order.
 */
interface Operation
{
    /**
     * Apply the operation to a query builder.
     *
     * @param Builder $builder
     * @return null|OperationResult
     */
    public function applyToBuilder(Builder $builder): ?OperationResult;
}
