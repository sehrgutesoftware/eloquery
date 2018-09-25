<?php

namespace SehrGut\Eloquery\Tests;

use SehrGut\Eloquery\OperationResult;
use SehrGut\Eloquery\Operators;

class OperationResultTest extends TestCase
{
    public function test_it_returns_pagination_meta()
    {
        $meta = ['foo' => 'bar'];
        $result = new OperationResult($meta);

        $this->assertEquals($meta, $result->getPaginationMeta());
    }

    public function test_it_merges_contents()
    {
        $meta1 = ['foo' => 'bar'];
        $result1 = new OperationResult($meta1);
        $meta2 = ['foo' => 'baz', 'qux' => 'thud'];
        $result2 = new OperationResult($meta2);
        $result2->merge($result1);

        $this->assertEquals([
            'foo' => ['baz', 'bar'],
            'qux' => 'thud',
        ], $result2->getPaginationMeta());
    }
}
