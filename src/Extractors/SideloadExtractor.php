<?php

namespace SehrGut\Eloquery\Extractors;

use Illuminate\Http\Request;
use SehrGut\Eloquery\OperationCollection;

class SideloadExtractor extends AbstractExtractor
{
    /**
     * Extract includes from the request.
     *
     * @param \Illuminate\Http\Request $request
     * @return \SehrGut\Eloquery\Contracts\OperationCollection
     */
    public function extract(Request $request): OperationCollection
    {
        $grammar = $this->makeGrammar();
        $operation = $this->getOperationClass();

        $includes = array_map(function ($include) use ($operation) {
            return new $operation($include['relationship']);
        }, $grammar->extract($request));

        return new OperationCollection($includes);
    }
}
