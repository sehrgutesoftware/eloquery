<?php

namespace SehrGut\EloQuery\Tests;

use Illuminate\Database\Query\Builder;
use Mockery;
use PHPUnit\Framework\TestCase as PhpUnitTestCase;

class TestCase extends PhpUnitTestCase
{
    protected $builder;

    public function setUp()
    {
        parent::setUp();

        $this->builder = Mockery::mock(Builder::class);
    }

    public function tearDown()
    {
        parent::tearDown();
        if ($container = Mockery::getContainer()) {
            $this->addToAssertionCount($container->mockery_getExpectationCount());
        }
        Mockery::close();
    }
}
