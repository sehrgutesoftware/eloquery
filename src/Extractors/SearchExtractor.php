<?php

namespace SehrGut\Eloquery\Extractors;

use Illuminate\Http\Request;
use SehrGut\Eloquery\OperationCollection;
use SehrGut\Eloquery\Operations\Search;

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

        $search = array_map(function ($search) {
            return new Search($search['query'], $search['attributes']);
        }, $grammar->extract($request));

        return new OperationCollection($search);
    }
}
