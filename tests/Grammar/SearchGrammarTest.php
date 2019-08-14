<?php

namespace SehrGut\Eloquery\Tests\Grammar;

use SehrGut\Eloquery\Grammar\SearchGrammar;

class SearchGrammarTest extends GrammarTestCase
{
    public function test_it_extracts_search_query_from_request()
    {
        $this->request->shouldReceive('has')
            ->once()
            ->with('search')
            ->andReturn(true);
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

    public function test_it_extracts_ignores_search_when_query_param_is_missing()
    {
        $this->request->shouldReceive('has')
            ->once()
            ->with('search')
            ->andReturn(false);

        $grammar = new SearchGrammar();
        $result = $grammar->extract($this->request);

        $this->assertEquals([], $result);
    }
}
