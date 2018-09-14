<?php

namespace SehrGut\Eloquery\Extractors;

use Illuminate\Http\Request;
use SehrGut\Eloquery\OperationCollection;
use SehrGut\Eloquery\Operations\Sort;

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

        $sort = array_map(function ($sort) {
            return new Sort($sort['key'], $sort['direction'] === 'ASC');
        }, $grammar->extract($request));

        return new OperationCollection($sort);
    }
}
