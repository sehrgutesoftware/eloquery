<?php

namespace SehrGut\Eloquery\Extractors;

use Illuminate\Http\Request;
use SehrGut\Eloquery\OperationCollection;

class PaginateExtractor extends AbstractExtractor
{
    /**
     * Extract pagination parameters from the request.
     *
     * @param \Illuminate\Http\Request $request
     * @return \SehrGut\Eloquery\Contracts\OperationCollection
     */
    public function extract(Request $request): OperationCollection
    {
        $grammar = $this->makeGrammar();
        $operation = $this->getOperationClass();

        $params = $grammar->extract($request);

        return new OperationCollection([
            new $operation($params['limit'], $params['page'])
        ]);
    }
}
