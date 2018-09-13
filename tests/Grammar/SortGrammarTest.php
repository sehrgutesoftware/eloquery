<?php

namespace SehrGut\EloQuery\Tests\Grammar;

use SehrGut\EloQuery\Grammar\SortGrammar;

class SortGrammarTest extends GrammarTestCase
{
    public function test_it_extracts_sorts_from_request()
    {
        $this->request->shouldReceive('get')
            ->once()
            ->with('sort')
            ->andReturn([
                ['key' => 'someField', 'direction' => 'asc'],
                ['key' => 'otherField', 'direction' => 'desc'],
            ]);

        $grammar = new SortGrammar();
        $result = $grammar->extract($this->request);

        $this->assertEquals([
            [
                'key' => 'someField',
                'direction' => 'ASC',
            ],
            [
                'key' => 'otherField',
                'direction' => 'DESC',
            ],
        ], $result);
    }

    public function test_it_fills_defaults_when_extracting_sorts_from_request()
    {
        $this->request->shouldReceive('get')
            ->once()
            ->with('sort')
            ->andReturn([
                ['key' => 'someField']
            ]);

        $grammar = new SortGrammar();
        $result = $grammar->extract($this->request);

        $this->assertEquals([
            [
                'key' => 'someField',
                'direction' => 'ASC',
            ],
        ], $result);
    }

    /**
     * @expectedException UnexpectedValueException
     */
    public function test_it_bails_when_sorts_are_not_an_array()
    {
        $this->request->shouldReceive('get')
            ->once()
            ->with('sort')
            ->andReturn('a bad return value');

        $grammar = new SortGrammar();
        $result = $grammar->extract($this->request);
    }

    /**
     * @expectedException UnexpectedValueException
     */
    public function test_it_bails_when_key_is_missing_from_sorts()
    {
        $this->request->shouldReceive('get')
            ->once()
            ->with('sort')
            ->andReturn([
                ['key' => 'not missing', 'direction' => 'asc'],
                ['direction' => 'asc'],
            ]);

        $grammar = new SortGrammar();
        $result = $grammar->extract($this->request);
    }

    /**
     * @expectedException UnexpectedValueException
     */
    public function test_it_bails_when_direction_is_invalid()
    {
        $this->request->shouldReceive('get')
            ->once()
            ->with('sort')
            ->andReturn([
                ['key' => 'someKey', 'direction' => 'asc'],
                ['key' => 'someKey', 'direction' => 'descc'],  // Bad direction
            ]);

        $grammar = new SortGrammar();
        $result = $grammar->extract($this->request);
    }
}
