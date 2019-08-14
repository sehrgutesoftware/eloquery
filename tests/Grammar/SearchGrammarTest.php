<?php

namespace SehrGut\Eloquery\Tests\Grammar;

use SehrGut\Eloquery\Grammar\SearchGrammar;

class SearchGrammarTest extends GrammarTestCase
{
    public function test_it_extracts_search_query_from_request()
    {
        $this->request->shouldReceive('get')
            ->once()
            ->with('search')
            ->andReturn('findMe');

        $grammar = new SearchGrammar();
        $result = $grammar->extract($this->request);

        $this->assertEquals([
            [
                'query' => 'findMe',
                'attributes' => [],
            ],
        ], $result);
    }
}
