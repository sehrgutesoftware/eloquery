<?php

namespace SehrGut\Eloquery\Tests;

use Mockery;
use PHPUnit\Framework\TestCase as PhpUnitTestCase;

class TestCase extends PhpUnitTestCase
{
    /**
     * Get default configuration options.
     *
     * @return array
     */
    protected function getDefaultConfig(): array
    {
        return require __DIR__ . '/../config/eloquery.php';
    }

    public function tearDown(): void
    {
        parent::tearDown();
        if ($container = Mockery::getContainer()) {
            $this->addToAssertionCount($container->mockery_getExpectationCount());
        }
        Mockery::close();
    }
}
