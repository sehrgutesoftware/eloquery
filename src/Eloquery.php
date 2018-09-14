<?php

namespace SehrGut\Eloquery;

use Illuminate\Database\Eloquent\Builder;
use SehrGut\Eloquery\Contracts\Operation;

class Eloquery
{
    /**
     * A RequestParser instance.
     *
     * @var RequestParser
     */
    protected $requestParser;

    /**
     * Construct a new instance.
     *
     * @param RequestParser $requestParser
     */
    public function __construct(RequestParser $requestParser)
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
        $operations = $this->requestParser->extractOperations($components);

        return $operations->applyToBuilder($builder);
    }
}
