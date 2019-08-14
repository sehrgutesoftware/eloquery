<?php

namespace SehrGut\Eloquery\Tests\Operations;

use Illuminate\Database\Eloquent\Builder;
use Mockery;
use SehrGut\Eloquery\Operations\Search;

class SearchTest extends OperationTestCase
{
    public function test_it_applies_search_to_builder()
    {
        $this->builder->shouldReceive('where')
            ->withArgs(function ($closure) {
                $nestedBuilder = Mockery::mock(Builder::class);
                $nestedBuilder->shouldReceive('whereRaw')
                    ->with('0 = 1');
                $nestedBuilder->shouldReceive('orWhere')
                    ->with('field1', 'LIKE', '%abc%');
                $nestedBuilder->shouldReceive('orWhere')
                    ->with('field2', 'LIKE', '%abc%');
                $closure($nestedBuilder);

                return true;
            });

        $search = new Search('abc', ['field1', 'field2']);
        $search->applyToBuilder($this->builder);
    }
}
