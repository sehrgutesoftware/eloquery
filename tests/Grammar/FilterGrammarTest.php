<?php

namespace SehrGut\Eloquery\Tests\Grammar;

use SehrGut\Eloquery\Grammar\FilterGrammar;
use SehrGut\Eloquery\Operators;

class FilterGrammarTest extends GrammarTestCase
{
    public function test_it_extracts_filters_from_request()
    {
        $this->request->shouldReceive('get')
            ->once()
            ->with('filter')
            ->andReturn([
                ['key' => 'someField', 'value' => 'desiredValue', 'operator' => 'BETWEEN', 'negated' => true]
            ]);

        $grammar = new FilterGrammar(['whitelist' => ['someField']]);
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

        $grammar = new FilterGrammar(['whitelist' => ['someField']]);
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

    public function test_it_allows_missing_value_with_null_operations()
    {
        $this->request->shouldReceive('get')
            ->once()
            ->with('filter')
            ->andReturn([
                ['key' => 'something', 'value' => 'not missing'],
                ['key' => 'something', 'operator' => 'IS_NULL'],
                ['key' => 'something', 'operator' => 'IS_NOT_NULL'],
            ]);

        $grammar = new FilterGrammar(['whitelist' => false]);
        $result = $grammar->extract($this->request);
        $this->assertCount(3, $result);
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

    public function test_it_ignores_keys_not_contained_in_whitelist()
    {
        $this->request->shouldReceive('get')
            ->once()
            ->with('filter')
            ->andReturn([
                ['key' => 'wantedField', 'value' => 'wantedValue'],
                ['key' => 'badField', 'value' => 'unwantedValue'],
                ['key' => 'anotherBadField', 'value' => 'unwantedValue'],
            ]);

        $grammar = new FilterGrammar(['whitelist' => ['wantedField']]);
        $result = $grammar->extract($this->request);

        $this->assertCount(1, $result);
        $this->assertEquals([
            [
                'key' => 'wantedField',
                'value' => 'wantedValue',
                'operator' => 'EQUALS',
                'negated' => false,
            ],
        ], $result);
    }

    public function test_it_defaults_to_ignoring_all_keys_if_no_whitelist_is_present()
    {
        $this->request->shouldReceive('get')
            ->once()
            ->with('filter')
            ->andReturn([
                ['key' => 'badField', 'value' => 'unwantedValue'],
                ['key' => 'anotherBadField', 'value' => 'unwantedValue'],
            ]);

        $grammar = new FilterGrammar();
        $result = $grammar->extract($this->request);

        $this->assertCount(0, $result);
        $this->assertEquals([], $result);
    }
}
