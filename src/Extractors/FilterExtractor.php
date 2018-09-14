<?php

namespace SehrGut\Eloquery\Extractors;

use Illuminate\Http\Request;
use SehrGut\Eloquery\OperationCollection;
use SehrGut\Eloquery\Operations\Filter;

class FilterExtractor extends AbstractExtractor
{
    /**
     * Extract filter constraints from the request.
     *
     * @param \Illuminate\Http\Request $request
     * @return \SehrGut\Eloquery\Contracts\OperationCollection
     */
    public function extract(Request $request): OperationCollection
    {
        $grammar = $this->makeGrammar();

        $filters = array_map(function ($f) {
            return new Filter($f['key'], $f['value'], $f['operator'], $f['negated']);
        }, $grammar->extract($request));

        return new OperationCollection($filters);
    }
}
