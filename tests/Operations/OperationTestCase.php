<?php

namespace SehrGut\EloQuery\Tests\Operations;

use Illuminate\Database\Query\Builder;
use Mockery;
use SehrGut\EloQuery\Tests\TestCase;

class OperationTestCase extends TestCase
{
    protected $builder;

    public function setUp()
    {
        parent::setUp();

        $this->builder = Mockery::mock(Builder::class);
    }
}
