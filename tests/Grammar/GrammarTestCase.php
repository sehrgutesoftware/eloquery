<?php

namespace SehrGut\Eloquery\Tests\Grammar;

use Illuminate\Http\Request;
use Mockery;
use SehrGut\Eloquery\Tests\TestCase;

class GrammarTestCase extends TestCase
{
    protected $request;

    protected function setUp()
    {
        parent::setUp();

        $this->request = Mockery::mock(Request::class);
    }
}
