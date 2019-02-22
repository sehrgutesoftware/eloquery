<?php

namespace SehrGut\Eloquery\Tests\Operations;

use Illuminate\Database\Eloquent\Builder;
use Mockery;
use SehrGut\Eloquery\Tests\TestCase;

class OperationTestCase extends TestCase
{
    protected $builder;

    protected function setUp()
    {
        parent::setUp();

        $this->builder = Mockery::mock(Builder::class);
    }
}
