<?php

namespace SehrGut\Eloquery\Tests\Operations;

use Illuminate\Database\Eloquent\Builder;
use Mockery;
use SehrGut\Eloquery\Tests\TestCase;

class OperationTestCase extends TestCase
{
    protected $builder;

    public function setUp(): void
    {
        parent::setUp();

        $this->builder = Mockery::mock(Builder::class);
    }
}
