<?php

namespace SehrGut\Eloquery\Extractors;

use Illuminate\Http\Request;
use SehrGut\Eloquery\OperationCollection;

class SortExtractor extends AbstractExtractor
{
    /**
     * Extract sort orders from the request.
     *
     * @param \Illuminate\Http\Request $request
     * @return \SehrGut\Eloquery\Contracts\OperationCollection
     */
    public function extract(Request $request): OperationCollection
    {
        $grammar = $this->makeGrammar();
        $operation = $this->getOperationClass();

        $sort = array_map(function ($sort) use ($operation) {
            return new $operation($sort['key'], $sort['direction'] === 'ASC');
        }, $grammar->extract($request));

        return new OperationCollection($sort);
    }
}
