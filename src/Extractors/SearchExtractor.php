<?php

namespace SehrGut\Eloquery\Extractors;

use Illuminate\Http\Request;
use SehrGut\Eloquery\OperationCollection;

class SearchExtractor extends AbstractExtractor
{
    /**
     * Extract search queries from the request.
     *
     * @param \Illuminate\Http\Request $request
     * @return \SehrGut\Eloquery\Contracts\OperationCollection
     */
    public function extract(Request $request): OperationCollection
    {
        $grammar = $this->makeGrammar();
        $operation = $this->getOperationClass();

        $search = array_map(function ($search) use ($operation) {
            return new $operation($search['query'], $search['attributes']);
        }, $grammar->extract($request));

        return new OperationCollection($search);
    }
}
