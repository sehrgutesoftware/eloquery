<?php

namespace SehrGut\Eloquery;

use Illuminate\Database\Eloquent\Builder;

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
     * @return OperationResult|null
     */
    public function apply(Builder $builder, ?array $components = null): ?OperationResult
    {
        $operations = $this->requestParser->extractOperations($components);

        return $operations->applyToBuilder($builder);
    }
}
