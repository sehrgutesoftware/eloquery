<?php

namespace SehrGut\EloQuery\Contracts;

use Illuminate\Database\Query\Builder;

/**
 * Describes a "grammar" according to which we extract structured parameters from a request.
 */
interface Grammar
{
    /**
     * Extract all options from the request.
     *
     * @param Request $request
     * @return array
     */
    public function extract(Request $request) : array;
}
