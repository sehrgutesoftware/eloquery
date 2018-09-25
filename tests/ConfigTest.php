<?php

namespace SehrGut\Eloquery\Tests;

class ConfigTest extends TestCase
{
    public function test_it_defaults_to_an_empty_filter_whitelist()
    {
        $this->assertEquals([], $this->getDefaultConfig()['filter']['config']['whitelist']);
    }
}
