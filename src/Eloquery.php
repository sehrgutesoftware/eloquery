<?php

namespace SehrGut\Eloquery;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use SehrGut\Eloquery\Contracts\Operation;
use SehrGut\Eloquery\Contracts\Parser;
use SehrGut\Eloquery\OperationCollection;

class Eloquery
{
    /**
     * A Parser instance.
     *
     * @var \SehrGut\Eloquery\Contracts\Parser
     */
    protected $requestParser;

    /**
     * Construct a new instance.
     *
     * @param \SehrGut\Eloquery\Contracts\Parser $requestParser
     */
    public function __construct(Parser $requestParser)
    {
        $this->requestParser = $requestParser;
    }

    /**
     * Extract operations from the request.
     *
     * @return OperationColection
     */
    public function extract(): OperationCollection
    {
        return $this->requestParser->extract();
    }

    /**
     * Apply query params from the request to given query builder.
     *
     * @param  Builder $builder
     * @return OperationResult
     */
    public function apply(Builder $builder, ?array $components = null): OperationResult
    {
        $operations = $this->requestParser->extract($components);

        return $operations->applyToBuilder($builder);
    }

    /**
     * Override the request from which to extract.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return $this
     */
    public function from(Request $request): Eloquery
    {
        $this->requestParser->setRequest($request);

        return $this;
    }

    /**
     * Set the filter whitelist.
     *
     * @param  array  $keys
     * @return $this
     */
    public function allowFilterKeys(array $keys): Eloquery
    {
        $this->requestParser->setConfig('filter.config.whitelist', $keys);

        return $this;
    }
}
