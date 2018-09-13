<?php

namespace SehrGut\Eloquery\Tests;

use Illuminate\Database\Eloquent\Builder;
use Mockery;
use PHPUnit\Framework\TestCase as PhpUnitTestCase;

class TestCase extends PhpUnitTestCase
{
    public function tearDown()
    {
        parent::tearDown();
        if ($container = Mockery::getContainer()) {
            $this->addToAssertionCount($container->mockery_getExpectationCount());
        }
        Mockery::close();
    }
}
