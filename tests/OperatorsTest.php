<?php

namespace SehrGut\Eloquery\Tests;

use SehrGut\Eloquery\Operators;

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
        'IS_NULL',
        'IS_NOT_NULL',
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
