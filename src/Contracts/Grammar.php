<?php

namespace SehrGut\EloQuery\Contracts;

use Illuminate\Database\Query\Builder;

/**
 * Describes a "grammer" that is capable of extracting structured parameters from a request.
 */
interface Grammar
{
    /**
     * Extract all options from the request.
     *
     * @param Builder $builder
     * @return array
     */
    public function extract(Builder $builder) : array;
}
