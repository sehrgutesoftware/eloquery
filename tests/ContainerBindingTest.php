<?php

namespace SehrGut\Eloquery\Tests;

use Illuminate\Database\Eloquent\Builder;
use Mockery;
use Orchestra\Testbench\TestCase as OrchestraTestCase;
use SehrGut\Eloquery\Eloquery;
use SehrGut\Eloquery\Facades\Eloquery as EloqueryFacade;
use SehrGut\Eloquery\OperationResult;

class ContainerBindingTest extends OrchestraTestCase
{
    /** @inhertDoc */
    protected function getPackageProviders($app)
    {
        return ['SehrGut\Eloquery\Providers\EloqueryServiceProvider'];
    }

    public function test_it_resolves_eloquery_through_the_container()
    {
        $this->assertInstanceOf(Eloquery::class, $this->app->make(Eloquery::class));
    }

    public function test_it_can_be_called_through_its_facade()
    {
        $builder = Mockery::mock(Builder::class);
        $builder->shouldReceive('count')->once()->andReturn(10);
        $builder->shouldReceive('limit')->once();
        $builder->shouldReceive('offset')->once();
        $result = EloqueryFacade::apply($builder);

        $this->assertInstanceOf(OperationResult::class, $result);
    }
}
