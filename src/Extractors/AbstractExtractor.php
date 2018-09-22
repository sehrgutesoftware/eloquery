<?php

namespace SehrGut\Eloquery\Extractors;

use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use SehrGut\Eloquery\Contracts\Extractor;
use SehrGut\Eloquery\Contracts\Grammar;
use SehrGut\Eloquery\OperationCollection;

abstract class AbstractExtractor implements Extractor
{
    /**
     * Configuration options for the Extractor.
     *
     * @var array
     */
    protected $config = [];

    /** @inheritDoc */
    abstract public function extract(Request $request): OperationCollection;

    /** @inheritDoc */
    public function __construct(array $config)
    {
        $this->config = $config;
    }

    /**
     * Get an instance of the associated Grammar for this Extractor.
     *
     * @return \SehrGut\Eloquery\Contracts\Grammar
     */
    protected function makeGrammar(): Grammar
    {
        $class = $this->config['grammar'];
        $config = Arr::get($this->config, 'config', []);

        return new $class($config);
    }
}
