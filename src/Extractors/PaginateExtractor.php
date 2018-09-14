<?php

namespace SehrGut\Eloquery\Extractors;

use Illuminate\Http\Request;
use SehrGut\Eloquery\OperationCollection;
use SehrGut\Eloquery\Operations\Paginate;

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

        $params = $grammar->extract($request);

        return new OperationCollection([
            new Paginate($params['limit'], $params['page'])
        ]);
    }
}
