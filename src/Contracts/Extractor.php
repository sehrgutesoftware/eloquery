<?php

namespace SehrGut\Eloquery\Contracts;

use Illuminate\Http\Request;
use SehrGut\Eloquery\OperationCollection;

interface Extractor
{
    /**
     * Construct an Extractor instance.
     *
     * @param \Illuminate\Http\Request $request
     * @return \SehrGut\Eloquery\Contracts\OperationCollection
     */
    public function __construct(array $config);

    /**
     * Extract operations from the request.
     *
     * @param  Request $request
     * @return OperationCollection
     */
    public function extract(Request $request): OperationCollection;
}
