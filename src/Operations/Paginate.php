<?php

namespace SehrGut\Eloquery\Operations;

use Psr\Log\InvalidArgumentException;
use SehrGut\Eloquery\Contracts\Operation;
use SehrGut\Eloquery\OperationResult;

class Paginate implements Operation
{
    /**
     * Number of records per page.
     *
     * @var int
     */
    public $limit;

    /**
     * Current page number (1-indexed).
     *
     * @var int
     */
    public $page = 1;

    /**
     * Construct a Paginate instance.
     *
     * @param int $limit
     * @param int $page
     */
    public function __construct(int $limit, int $page = 1)
    {
        if ($limit < 1) {
            throw new InvalidArgumentException('limit must be greater than 0.');
        }

        if ($page < 1) {
            throw new InvalidArgumentException('page must be greater than 0.');
        }

        $this->limit = $limit;
        $this->page = $page;
    }

    /**
     * Apply the pagination constraints to a query builder.
     *
     * @param mixed $builder
     * @return OperationResult|null
     */
    public function applyToBuilder($builder): ?OperationResult
    {
        $total = $builder->count();

        $builder->limit($this->limit);
        $builder->offset(($this->page - 1) * $this->limit);

        return new OperationResult([
            'limit' => $this->limit,
            'page' => $this->page,
            'total' => $total,
            'last_page' => (int) ceil($total / $this->limit),
        ]);
    }
}
