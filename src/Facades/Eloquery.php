<?php

namespace SehrGut\Eloquery\Facades;

use Illuminate\Support\Facades\Facade;

class Eloquery extends Facade
{
    /** @inheritDoc */
    protected static function getFacadeAccessor(): string
    {
        return 'eloquery';
    }
}
