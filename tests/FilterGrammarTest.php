<?php

namespace SehrGut\EloQuery\Tests;

use Illuminate\Http\Request;
use Mockery;
use SehrGut\EloQuery\Grammar\FilterGrammar;
use SehrGut\EloQuery\Operations\Filter;
use SehrGut\EloQuery\Operators;

class FilterGrammarTest extends TestCase
{
    protected $request;

    public function setUp()
    {
        parent::setUp();

        $this->request = Mockery::mock(Request::class);
    }

    public function test_it_extracts_filters_from_request()
    {
        $this->request->shouldReceive('get')
            ->once()
            ->with('filter')
            ->andReturn([
                ['key' => 'someField', 'value' => 'desiredValue', 'operator' => 'BETWEEN', 'negated' => true]
            ]);

        $grammar = new FilterGrammar();
        $result = $grammar->extract($this->request);

        $this->assertEquals([
            [
                'key' => 'someField',
                'value' => 'desiredValue',
                'operator' => 'BETWEEN',
                'negated' => true,
            ],
        ], $result);
    }

    public function test_it_fills_defaults_when_extracting_filters_from_request()
    {
        $this->request->shouldReceive('get')
            ->once()
            ->with('filter')
            ->andReturn([
                ['key' => 'someField', 'value' => 'desiredValue']
            ]);

        $grammar = new FilterGrammar();
        $result = $grammar->extract($this->request);

        $this->assertEquals([
            [
                'key' => 'someField',
                'value' => 'desiredValue',
                'operator' => Operators::EQUALS,
                'negated' => false,
            ],
        ], $result);
    }

    /**
     * @expectedException UnexpectedValueException
     */
    public function test_it_bails_when_filters_are_not_an_array()
    {
        $this->request->shouldReceive('get')
            ->once()
            ->with('filter')
            ->andReturn('a bad return value');

        $grammar = new FilterGrammar();
        $result = $grammar->extract($this->request);
    }

    /**
     * @expectedException UnexpectedValueException
     */
    public function test_it_bails_when_key_is_missing_from_filters()
    {
        $this->request->shouldReceive('get')
            ->once()
            ->with('filter')
            ->andReturn([
                ['key' => 'not missing', 'value' => 'something'],
                ['value' => 'something'],
            ]);

        $grammar = new FilterGrammar();
        $result = $grammar->extract($this->request);
    }

    /**
     * @expectedException UnexpectedValueException
     */
    public function test_it_bails_when_value_is_missing_from_filters()
    {
        $this->request->shouldReceive('get')
            ->once()
            ->with('filter')
            ->andReturn([
                ['key' => 'something', 'value' => 'not missing'],
                ['key' => 'something'],
            ]);

        $grammar = new FilterGrammar();
        $result = $grammar->extract($this->request);
    }

    /**
     * @expectedException UnexpectedValueException
     */
    public function test_it_bails_when_operator_is_invalid()
    {
        $this->request->shouldReceive('get')
            ->once()
            ->with('filter')
            ->andReturn([
                ['key' => 'something', 'value' => 'someValue', 'operator' => 'BOGUS'],
            ]);

        $grammar = new FilterGrammar();
        $result = $grammar->extract($this->request);
    }
}
