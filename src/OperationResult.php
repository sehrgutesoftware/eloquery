<?php

namespace SehrGut\Eloquery;

class OperationResult
{
    /**
     * Pagination metadata.
     *
     * @var array
     */
    protected $paginationMeta = [];

    /**
     * Construct a new instance.
     *
     * @param array $paginationMeta
     */
    public function __construct($paginationMeta = [])
    {
        $this->paginationMeta = $paginationMeta;
    }

    /**
     * Set the pagination metadata on the result.
     *
     * @param array $paginationMeta
     */
    public function setPaginationMeta(array $paginationMeta)
    {
        $this->paginationMeta = $paginationMeta;
    }

    /**
     * Get the pagination metadata.
     *
     * @return array
     */
    public function getPaginationMeta(): array
    {
        return $this->paginationMeta;
    }

    /**
     * Merge two OperationResults.
     *
     * @param  OperationResult $other
     * @return void
     */
    public function merge(OperationResult $other)
    {
        $this->paginationMeta = array_merge_recursive(
            $this->paginationMeta,
            $other->getPaginationMeta()
        );
    }
}
