<?php

namespace SehrGut\Eloquery;

use Illuminate\Database\Eloquent\Builder;
use SehrGut\Eloquery\Contracts\Operation;
use SehrGut\Eloquery\Contracts\Parser;

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
