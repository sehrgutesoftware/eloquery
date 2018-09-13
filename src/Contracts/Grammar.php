<?php

namespace SehrGut\EloQuery\Contracts;

use Illuminate\Http\Request;

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
    public function extract(Request $request): array;
}
