<?php

namespace SehrGut\EloQuery\Tests;

use SehrGut\EloQuery\Operations\Paginate;

class PaginateTest extends TestCase
{
    public function test_it_applies_pagination_constraints_to_builder()
    {
        $this->builder->shouldReceive('limit')
            ->once()
            ->with(15);
        $this->builder->shouldReceive('offset')
            ->once()
            ->with(45);

        $sort = new Paginate(15, 4);
        $sort->applyToBuilder($this->builder);
    }
}
