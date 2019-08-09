<?php

namespace SehrGut\Eloquery\Tests\Operations;

use SehrGut\Eloquery\Operations\Sideload;

class SideloadTest extends OperationTestCase
{
    public function test_it_applies_includes_to_builder()
    {
        // Descending
        $this->builder->shouldReceive('with')
            ->once()
            ->with('some.relationship');

        $include = new Sideload('some.relationship');
        $include->applyToBuilder($this->builder);
    }
}
