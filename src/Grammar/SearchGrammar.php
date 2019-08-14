<?php

namespace SehrGut\Eloquery\Grammar;

use Illuminate\Http\Request;
use Illuminate\Support\Arr;

/**
 * Rules for extracting search queries from a Request.
 *
 * Syntax: `?search=find-me`
 */
class SearchGrammar extends AbstractGrammar
{
    /**
     * Extract search queries from the request.
     *
     * @param Request $request
     * @return array
     */
    public function extract(Request $request): array
    {
        if (!$request->has('search')) {
            return [];
        }

        $search = $request->get('search');

        if (is_null($search) or $search === '') {
            return [];
        }

        return [
            [
                'query' => $search,
                'attributes' => Arr::get($this->config, 'attributes', []),
            ],
        ];
    }
}
