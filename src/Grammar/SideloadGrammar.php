<?php

namespace SehrGut\Eloquery\Grammar;

use Illuminate\Http\Request;
use Illuminate\Support\Arr;

/**
 * Rules for extracting includes from a Request.
 *
 * Syntax: `?include[]=firstRelationship&include[]=secondRelationship&include[]=nested.relationship`
 */
class SideloadGrammar extends AbstractGrammar
{
    /**
     * Extract an array of included relationships from the request.
     *
     * @param Request $request
     * @return array
     */
    public function extract(Request $request): array
    {
        $includes = array_filter(Arr::wrap($request->get('include')));

        return array_map(function ($include) {
            return [
                'relationship' => $include,
            ];
        }, $this->applyWhitelist($includes));
    }

    private function applyWhitelist(array $includes): array
    {
        $whitelist = Arr::get($this->config, 'whitelist', []);

        if ($whitelist === false) {
            return $includes;
        }

        return array_intersect($includes, $whitelist);
    }
}
