<?php

namespace SehrGut\Eloquery\Contracts;

use Illuminate\Http\Request;

/**
 * Describes a "grammar" according to which we extract structured parameters from a request.
 */
interface Grammar
{
    /**
     * Construct a new Grammar instance.
     *
     * @param array $config
     */
    public function __construct(array $config = []);

    /**
     * Extract all options from the request.
     *
     * @param Request $request
     * @return array
     */
    public function extract(Request $request): array;
}
