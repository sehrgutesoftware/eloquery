<?php

namespace SehrGut\Eloquery\Grammar;

use Illuminate\Http\Request;
use SehrGut\Eloquery\Contracts\Grammar;

abstract class AbstractGrammar implements Grammar
{
    /**
     * Configuration options for this Grammar instance.
     *
     * @var array
     */
    protected $config = [];

    /** @inheritDoc */
    public function __construct(array $config = [])
    {
        $this->config = $config;
    }

    /** @inheritDoc */
    abstract public function extract(Request $request): array;
}
