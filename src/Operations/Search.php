<?php

namespace SehrGut\Eloquery\Operations;

use SehrGut\Eloquery\Contracts\Operation;
use SehrGut\Eloquery\OperationResult;

class Search implements Operation
{
    /**
     * The string to query by.
     *
     * @var string
     */
    public $query;

    /**
     * The model attributes by which to filter.
     *
     * @var array
     */
    public $attributes;

    /**
     * Construct a Sort instance.
     *
     * @param string $query
     * @param array $attributes
     */
    public function __construct(string $query, array $attributes)
    {
        $this->query = $query;
        $this->attributes = $attributes;
    }

    /**
     * Apply the search filter to a query builder.
     *
     * @param mixed $builder
     * @return OperationResult|null
     */
    public function applyToBuilder($builder): ?OperationResult
    {
        $builder->where(function ($builder) {
            $builder->whereRaw('0 = 1');

            foreach ($this->attributes as $attribute) {
                $builder->orWhere($attribute, 'LIKE', sprintf('%%%s%%', $this->query));
            }
        });

        return null;
    }
}
