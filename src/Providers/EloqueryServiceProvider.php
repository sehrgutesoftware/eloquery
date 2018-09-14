<?php

namespace SehrGut\Eloquery\Providers;

use Illuminate\Support\ServiceProvider;

class EloqueryServiceProvider extends ServiceProvider
{
    /** @inheritDoc */
    public function register()
    {
        $this->registerConfig();
        $this->registerBindings();
    }

    /**
     * Register and publish the config file.
     *
     * @return void
     */
    protected function registerConfig()
    {
        $configPath = __DIR__ . '/../../config/eloquery.php';
        $this->publishes([$configPath => config_path('eloquery.php')]);
        $this->mergeConfigFrom($configPath, 'eloquery');
    }

    /**
     * Register bindings to the service container.
     *
     * @return void
     */
    protected function registerBindings()
    {
        $this->app->bind(\SehrGut\Eloquery\Contracts\Parser::class, function ($app) {
            return new \SehrGut\Eloquery\RequestParser(
                $app->make(\Illuminate\Http\Request::class),
                $app['config']->get('eloquery')
            );
        });

        $this->app->alias(\SehrGut\Eloquery\Eloquery::class, 'eloquery');
    }
}
