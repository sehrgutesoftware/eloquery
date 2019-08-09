<?php

namespace SehrGut\Eloquery\Tests\Grammar;

use SehrGut\Eloquery\Grammar\SideloadGrammar;

class SideloadGrammarTest extends GrammarTestCase
{
    public function test_it_extracts_includes_from_request()
    {
        $this->request->shouldReceive('get')
            ->once()
            ->with('include')
            ->andReturn([
                'relationship',
                'anotherRelationship'
            ]);

        $grammar = new SideloadGrammar(['whitelist' => ['relationship', 'anotherRelationship']]);
        $result = $grammar->extract($this->request);

        $this->assertEquals([
            [
                'relationship' => 'relationship',
            ],
            [
                'relationship' => 'anotherRelationship',
            ],
        ], $result);
    }

    public function test_it_extracts_only_whitelisted_includes_from_request()
    {
        $this->request->shouldReceive('get')
            ->once()
            ->with('include')
            ->andReturn([
                'allowedRelationship',
                'disallowedRelationship',
            ]);

        $grammar = new SideloadGrammar(['whitelist' => ['allowedRelationship']]);
        $result = $grammar->extract($this->request);

        $this->assertEquals([
            [
                'relationship' => 'allowedRelationship',
            ],
        ], $result);
    }

    public function test_it_extracts_all_includes_from_request_when_whitelisting_is_disabled()
    {
        $this->request->shouldReceive('get')
            ->once()
            ->with('include')
            ->andReturn([
                'allowedRelationship',
                'anotherAllowedRelationship',
            ]);

        $grammar = new SideloadGrammar(['whitelist' => false]);
        $result = $grammar->extract($this->request);

        $this->assertEquals([
            [
                'relationship' => 'allowedRelationship',
            ],
            [
                'relationship' => 'anotherAllowedRelationship',
            ],
        ], $result);
    }
}
