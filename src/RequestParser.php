<?php

namespace SehrGut\Eloquery;

use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use SehrGut\Eloquery\Contracts\Parser;

class RequestParser implements Parser
{
    /**
     * The request from which to extract query options.
     *
     * @var Illuminate\Http\Request
     */
    protected $request;

    /**
     * Configuration options.
     *
     * @var array
     */
    protected $config = [];

    /**
     * Construct a RequestParser instance.
     *
     * @param Request $request
     */
    public function __construct(Request $request, array $config)
    {
        $this->request = $request;
        $this->config = $config;
    }

    /**
     * Extract all query Operations from the request.
     *
     * @return OperationCollection
     */
    public function extract(): OperationCollection
    {
        $operations = new OperationCollection();

        foreach ($this->makeExtractors() as $extractor) {
            $operations->merge($extractor->extract($this->request));
        }

        return $operations;
    }

    /**
     * Retrieve the configuration variables of the parser.
     *
     * @return array
     */
    public function getConfig(): array
    {
        return $this->config;
    }

    /**
     * Set config value on the parser.
     *
     * @param string $key
     * @param mixed $value
     * @return $this
     */
    public function setConfig(string $key, $value): Parser
    {
        Arr::set($this->config, $key, $value);

        return $this;
    }

    /**
     * Override the request.
     *
     * @param \Illuminate\Http\Request $request
     * @return $this
     */
    public function setRequest(Request $request): Parser
    {
        $this->request = $request;

        return $this;
    }

    /**
     * Instantiate the extractors.
     *
     * @return array
     */
    protected function makeExtractors(): array
    {
        foreach (Arr::get($this->config, 'extractors', []) as $type => $class) {
            $extractors[] = new $class($this->config[$type]);
        }

        return $extractors;
    }
}
