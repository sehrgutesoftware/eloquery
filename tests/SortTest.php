<?php

namespace SehrGut\EloQuery\Tests;

use SehrGut\EloQuery\Operations\Sort;

class SortTest extends TestCase
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
