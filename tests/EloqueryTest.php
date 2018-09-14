<?php

namespace SehrGut\Eloquery\Tests;

use Illuminate\Database\Eloquent\Builder;
use Mockery;
use SehrGut\Eloquery\Eloquery;
use SehrGut\Eloquery\OperationCollection;
use SehrGut\Eloquery\Operations\Sort;
use SehrGut\Eloquery\RequestParser;

class EloqueryTest extends TestCase
{
    public function test_it_applies_request_parameters_to_a_query()
    {
        $builder = Mockery::mock(Builder::class);
        $builder->shouldReceive('orderBy')
            ->once()
            ->with('attr_name', 'DESC');

        $parser = Mockery::mock(RequestParser::class);
        $parser->shouldReceive('extractOperations')
            ->once()
            ->andReturn(new OperationCollection([new Sort('attr_name', false)]));

        $eloquery = new Eloquery($parser);
        $eloquery->apply($builder);
    }
}
