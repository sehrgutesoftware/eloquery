<?php

namespace SehrGut\Eloquery\Tests\Operations;

use Illuminate\Database\Eloquent\Builder;
use Mockery;
use TypeError;
use SehrGut\Eloquery\Contracts\Operation;
use SehrGut\Eloquery\OperationCollection;

class OperationCollectionTest extends OperationTestCase
{
    public function test_it_rejects_non_operation_items()
    {
        $this->expectException(TypeError::class);

        new OperationCollection(['foo']);
    }

    public function test_it_constructs_with_some_operations_and_dumps_them()
    {
        $operations = [
            Mockery::mock(Operation::class),
            Mockery::mock(Operation::class),
            Mockery::mock(Operation::class),
        ];

        $collection = new OperationCollection($operations);

        $this->assertEquals($operations, $collection->dump());
    }

    public function test_it_adds_an_operation_and_dumps_it()
    {
        $operations = [
            Mockery::mock(Operation::class),
        ];

        $collection = new OperationCollection($operations);
        $this->assertEquals($operations, $collection->dump());

        $added = Mockery::mock(Operation::class);
        $operations[] = $added;
        $collection->add($added);
        $this->assertEquals($operations, $collection->dump());
        $this->assertCount(2, $collection->dump());
    }

    public function test_it_adds_operations_and_dumps_them()
    {
        $operations = [
            Mockery::mock(Operation::class),
        ];

        $collection = new OperationCollection($operations);
        $this->assertEquals($operations, $collection->dump());

        $added = [
            Mockery::mock(Operation::class),
            Mockery::mock(Operation::class),
        ];

        $operations = array_merge($operations, $added);
        $collection->add($added);

        $this->assertEquals($operations, $collection->dump());
        $this->assertCount(3, $collection->dump());
    }

    public function test_it_merges_two_collections()
    {
        $operations1 = [
            Mockery::mock(Operation::class),
            Mockery::mock(Operation::class),
        ];
        $operations2 = [
            Mockery::mock(Operation::class),
            Mockery::mock(Operation::class),
        ];
        $collection1 = new OperationCollection($operations1);
        $collection2 = new OperationCollection($operations2);

        $this->assertCount(2, $collection1->dump());
        $this->assertCount(2, $collection2->dump());

        $collection1->merge($collection2);

        $this->assertEquals(array_merge($operations1, $operations2), $collection1->dump());
        $this->assertCount(4, $collection1->dump());
    }

    public function test_it_applies_all_operations_to_builder()
    {
        $operations = [
            Mockery::mock(Operation::class),
            Mockery::mock(Operation::class),
            Mockery::mock(Operation::class),
        ];
        $builder = Mockery::mock(Builder::class);

        foreach ($operations as $operation) {
            $operation->shouldReceive('applyToBuilder')
                ->once()
                ->with($builder)
                ->andReturn(null);
        }

        $collection = new OperationCollection($operations);
        $collection->applyToBuilder($builder);
    }
}
