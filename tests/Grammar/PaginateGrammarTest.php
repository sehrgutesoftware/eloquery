<?php

namespace SehrGut\Eloquery\Tests\Grammar;

use Illuminate\Http\Request;
use Mockery;
use SehrGut\Eloquery\Grammar\PaginateGrammar;

class PaginateGrammarTest extends GrammarTestCase
{
    public function test_it_extracts_paginate_params_from_request()
    {
        $this->request->shouldReceive('get')
            ->with('limit', PaginateGrammar::DEFAULT_LIMIT)
            ->andReturn(12);

        $this->request->shouldReceive('get')
            ->with('page', PaginateGrammar::DEFAULT_PAGE)
            ->andReturn(3);

        $grammar = new PaginateGrammar();
        $result = $grammar->extract($this->request);

        $this->assertEquals([
            'limit' => 12,
            'page' => 3,
        ], $result);
    }
    public function test_it_cant_exceed_the_maximum_value_for_limit()
    {
        $this->request->shouldReceive('get')
            ->with('limit', PaginateGrammar::DEFAULT_LIMIT)
            ->andReturn(PaginateGrammar::MAX_LIMIT * 2);

        $this->request->shouldReceive('get')
            ->with('page', PaginateGrammar::DEFAULT_PAGE)
            ->andReturn(3);

        $grammar = new PaginateGrammar();
        $result = $grammar->extract($this->request);

        $this->assertEquals([
            'limit' => PaginateGrammar::MAX_LIMIT,
            'page' => 3,
        ], $result);
    }
}
