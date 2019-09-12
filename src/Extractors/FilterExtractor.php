<?php

namespace SehrGut\Eloquery\Extractors;

use Illuminate\Http\Request;
use SehrGut\Eloquery\OperationCollection;

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
        $operation = $this->getOperationClass();

        $filters = array_map(function ($f) use ($operation) {
            return new $operation($f['key'], $f['value'], $f['operator'], $f['negated']);
        }, $grammar->extract($request));

        return new OperationCollection($filters);
    }
}
