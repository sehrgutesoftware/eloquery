<?php

namespace SehrGut\Eloquery\Tests;

use Illuminate\Http\Request;
use SehrGut\Eloquery\OperationCollection;
use SehrGut\Eloquery\Operations\Filter;
use SehrGut\Eloquery\Operations\Paginate;
use SehrGut\Eloquery\Operations\Search;
use SehrGut\Eloquery\Operations\Sideload;
use SehrGut\Eloquery\Operations\Sort;
use SehrGut\Eloquery\RequestParser;

class RequestParserTest extends TestCase
{
    public function test_it_extracts_paginate_operations()
    {
        $request = new Request(['page' => 3, 'limit' => 13]);
        $parser = new RequestParser($request, $this->getDefaultConfig());

        $operations = $parser->extract();
        $this->assertInstanceOf(OperationCollection::class, $operations);

        $operation = $operations->dump()[0];
        $this->assertInstanceOf(Paginate::class, $operation);
        $this->assertEquals(13, $operation->limit);
        $this->assertEquals(3, $operation->page);
    }

    public function test_it_extracts_sort_operations()
    {
        $request = new Request([
            'sort' => [
                [
                    'key' => 'field_one',
                    'direction' => 'asc',
                ],
                [
                    'key' => 'field_two',
                    'direction' => 'desc',
                ],
            ]
        ]);
        $parser = new RequestParser($request, $this->getDefaultConfig());

        $operations = $parser->extract();
        $this->assertInstanceOf(OperationCollection::class, $operations);

        $operationOne = $operations->dump()[0];
        $this->assertInstanceOf(Sort::class, $operationOne);
        $this->assertEquals('field_one', $operationOne->attribute);
        $this->assertTrue($operationOne->ascending);

        $operationTwo = $operations->dump()[1];
        $this->assertInstanceOf(Sort::class, $operationTwo);
        $this->assertEquals('field_two', $operationTwo->attribute);
        $this->assertFalse($operationTwo->ascending);
    }

    public function test_it_extracts_filter_operations()
    {
        $request = new Request([
            'filter' => [
                [
                    'key' => 'field_one',
                    'value' => 'value_one',
                    'operator' => 'equals',
                ],
                [
                    'key' => 'field_two',
                    'value' => 'value_two',
                    'operator' => 'contains',
                    'negated' => true,
                ],
            ]
        ]);
        $config = $this->getDefaultConfig();
        $config['filter']['config']['whitelist'] = ['field_one', 'field_two'];
        $parser = new RequestParser($request, $config);

        $operations = $parser->extract();
        $this->assertInstanceOf(OperationCollection::class, $operations);

        $operationOne = $operations->dump()[0];
        $this->assertInstanceOf(Filter::class, $operationOne);
        $this->assertEquals('field_one', $operationOne->attribute);
        $this->assertEquals('value_one', $operationOne->value);
        $this->assertEquals('EQUALS', $operationOne->operator);
        $this->assertFalse($operationOne->negated);

        $operationTwo = $operations->dump()[1];
        $this->assertInstanceOf(Filter::class, $operationTwo);
        $this->assertEquals('field_two', $operationTwo->attribute);
        $this->assertEquals('value_two', $operationTwo->value);
        $this->assertEquals('CONTAINS', $operationTwo->operator);
        $this->assertTrue($operationTwo->negated);
    }

    public function test_it_extracts_include_operations()
    {
        $relations = [
            'firstRelation',
            'secondRelation',
            'nested.relation',
        ];

        $request = new Request(['include' => $relations]);

        $config = $this->getDefaultConfig();
        $config['include']['config']['whitelist'] = $relations;
        $parser = new RequestParser($request, $config);

        $operations = $parser->extract();
        $this->assertInstanceOf(OperationCollection::class, $operations);

        $count = 0;
        foreach ($relations as $relation) {
            $operation = $operations->dump()[$count];
            $this->assertInstanceOf(Sideload::class, $operation);
            $this->assertEquals($relation, $operation->relationship);
            $count++;
        }
    }

    public function test_it_extracts_search_operations()
    {
        $query = 'findMe';
        $attributes = ['attribute1', 'attribute2'];

        $request = new Request(['search' => $query]);

        $config = $this->getDefaultConfig();
        $config['search']['config']['attributes'] = $attributes;
        $parser = new RequestParser($request, $config);

        $operations = $parser->extract();
        $this->assertInstanceOf(OperationCollection::class, $operations);

        $operation = $operations->dump()[0];
        $this->assertInstanceOf(Search::class, $operation);
        $this->assertEquals($query, $operation->query);
        $this->assertEquals($attributes, $operation->attributes);
    }

    public function test_it_returns_config_variables()
    {
        $parser = new RequestParser(new Request(), $this->getDefaultConfig());
        $this->assertEquals($this->getDefaultConfig(), $parser->getConfig());
    }

    public function test_it_updates_config_variables()
    {
        $parser = new RequestParser(new Request(), $this->getDefaultConfig());
        $retval = $parser->setConfig('filter.whitelist', ['item1', 'item2']);

        $newConfig = array_merge_recursive($this->getDefaultConfig(), [
            'filter' => ['whitelist' => ['item1', 'item2']]
        ]);

        $this->assertEquals($parser, $retval);
        $this->assertEquals($newConfig, $parser->getConfig());
    }
}
