<?php

namespace SehrGut\EloQuery\Tests;

use SehrGut\EloQuery\Operators;

class OperatorsTest extends TestCase
{
    protected static $operators = [
        'EQUALS',
        'CONTAINS',
        'STARTS_WITH',
        'ENDS_WITH',
        'GREATER',
        'GREATER_EQUAL',
        'LESS',
        'LESS_EQUAL',
        'IN',
        'BETWEEN',
    ];

    public function test_it_lists_all_operators()
    {
        $this->assertEquals(static::$operators, Operators::all());
    }

    public function test_it_checks_the_validity_of_an_operator()
    {
        foreach (static::$operators as $operator) {
            $this->assertTrue(Operators::exists($operator));
        }

        $fakeOperators = [
            'foo',
            'BAR',
            'buzz'
        ];
        foreach ($fakeOperators as $operator) {
            $this->assertFalse(Operators::exists($operator));
        }
    }
}
