<?php

namespace SehrGut\EloQuery\Tests\Operations;

use SehrGut\EloQuery\Operations\Paginate;

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

        $paginate = new Paginate(15, 4);
        $paginate->applyToBuilder($this->builder);
    }
}
