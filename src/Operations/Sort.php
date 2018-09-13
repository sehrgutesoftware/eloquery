<?php

namespace SehrGut\EloQuery\Operations;

use Illuminate\Database\Eloquent\Builder;
use SehrGut\EloQuery\Contracts\Operation;
use SehrGut\EloQuery\OperationResult;

class Sort implements Operation
{
    /**
     * The attribute that is sorted by.
     *
     * @var string
     */
    public $attribute;

    /**
     * Sort direction.
     *
     * @var bool
     */
    public $ascending = true;

    /**
     * Construct a Sort instance.
     *
     * @param string $attribute
     * @param bool $ascending
     */
    public function __construct(string $attribute, bool $ascending = true)
    {
        $this->attribute = $attribute;
        $this->ascending = $ascending;
    }

    /**
     * Apply the sort order to a query builder.
     *
     * @param Builder $builder
     * @return OperationResult|null
     */
    public function applyToBuilder(Builder $builder): ?OperationResult
    {
        $builder->orderBy($this->attribute, $this->getDirection());

        return null;
    }

    /**
     * Get the sort direction as SQL string.
     *
     * @return string
     */
    private function getDirection() : string
    {
        return $this->ascending ? 'ASC' : 'DESC';
    }
}
