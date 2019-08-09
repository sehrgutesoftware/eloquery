<?php

namespace SehrGut\Eloquery\Tests;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
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
        $parser->shouldReceive('extract')
            ->once()
            ->andReturn(new OperationCollection([new Sort('attr_name', false)]));

        $eloquery = new Eloquery($parser);
        $eloquery->apply($builder);
    }

    public function test_it_passes_a_filter_whitelist_to_the_parser()
    {
        $parser = Mockery::mock(RequestParser::class);
        $parser->shouldReceive('setConfig')
            ->once()
            ->with('filter.config.whitelist', ['item1', 'item2']);

        $eloquery = new Eloquery($parser);

        $retval = $eloquery->allowFilterKeys(['item1', 'item2']);
        $this->assertEquals($eloquery, $retval);
    }

    public function test_it_passes_an_include_whitelist_to_the_parser()
    {
        $parser = Mockery::mock(RequestParser::class);
        $parser->shouldReceive('setConfig')
            ->once()
            ->with('include.config.whitelist', ['relation1', 'relation2']);

        $eloquery = new Eloquery($parser);

        $retval = $eloquery->allowIncludes(['relation1', 'relation2']);
        $this->assertEquals($eloquery, $retval);
    }

    public function test_it_extracts_an_operation_collection()
    {
        $collection = new OperationCollection();
        $parser = Mockery::mock(RequestParser::class);
        $parser->shouldReceive('extract')
            ->once()
            ->andReturn($collection);

        $eloquery = new Eloquery($parser);
        $this->assertEquals($collection, $eloquery->extract());
    }

    public function test_it_sets_the_request_instance()
    {
        $request = new Request();

        $parser = Mockery::mock(RequestParser::class);
        $parser->shouldReceive('setRequest')
            ->once()
            ->with($request);

        $eloquery = new Eloquery($parser);
        $retval = $eloquery->from($request);
        $this->assertEquals($eloquery, $retval);
    }
}
