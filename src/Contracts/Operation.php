<?php

namespace SehrGut\EloQuery\Contracts;

use Illuminate\Database\Query\Builder;

/**
 * Describes an operation on a Query Builder, like eg. a filter constraint or sort order.
 */
interface Operation
{
    /**
     * Apply the operation to a query builder.
     *
     * @param Builder $builder
     * @return void
     */
    public function applyToBuilder(Builder $builder);
}
