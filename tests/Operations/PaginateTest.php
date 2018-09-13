<?php

namespace SehrGut\Eloquery\Tests\Operations;

use SehrGut\Eloquery\Operations\Paginate;

class PaginateTest extends OperationTestCase
{
    public function test_it_applies_pagination_constraints_to_builder()
    {
        $this->builder->shouldReceive('limit')
            ->once()
            ->with(15);
        $this->builder->shouldReceive('offset')
            ->once()
            ->with(45);
        $this->builder->shouldReceive('count')
            ->once()
            ->andReturn(61);

        $paginate = new Paginate(15, 4);
        $result = $paginate->applyToBuilder($this->builder);

        $this->assertEquals([
            'page' => 4,
            'limit' => 15,
            'total' => 61,
            'last_page' => 5,
        ], $result->getPaginationMeta());
    }
}
