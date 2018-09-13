<?php

namespace SehrGut\Eloquery\Tests\Operations;

use SehrGut\Eloquery\Operations\Sort;

class SortTest extends OperationTestCase
{
    public function test_it_applies_sort_order_to_builder()
    {
        // Ascending
        $this->builder->shouldReceive('orderBy')
            ->once()
            ->with('field', 'ASC');

        $sort = new Sort('field');
        $sort->applyToBuilder($this->builder);

        // Descending
        $this->builder->shouldReceive('orderBy')
            ->once()
            ->with('field', 'DESC');

        $sort = new Sort('field', false);
        $sort->applyToBuilder($this->builder);
    }
}
