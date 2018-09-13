<?php

namespace SehrGut\EloQuery\Tests\Grammar;

use Illuminate\Http\Request;
use Mockery;
use SehrGut\EloQuery\Tests\TestCase;

class GrammarTestCase extends TestCase
{
    protected $request;

    public function setUp()
    {
        parent::setUp();

        $this->request = Mockery::mock(Request::class);
    }
}
