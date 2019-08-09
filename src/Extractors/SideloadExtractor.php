<?php

namespace SehrGut\Eloquery\Extractors;

use Illuminate\Http\Request;
use SehrGut\Eloquery\OperationCollection;
use SehrGut\Eloquery\Operations\Sideload;

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

        $includes = array_map(function ($include) {
            return new Sideload($include['relationship']);
        }, $grammar->extract($request));

        return new OperationCollection($includes);
    }
}
