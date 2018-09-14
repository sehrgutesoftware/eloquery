<?php

namespace SehrGut\Eloquery;

use Illuminate\Http\Request;
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
     * Names of the query params for each component.
     *
     * @var array
     */
    protected static $extractors = [
        'filter' => \SehrGut\Eloquery\Extractors\FilterExtractor::class,
        'sort' => \SehrGut\Eloquery\Extractors\SortExtractor::class,
        'paginate' => \SehrGut\Eloquery\Extractors\PaginateExtractor::class,
    ];

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
     * Instantiate the extractors.
     *
     * @return array
     */
    protected function makeExtractors(): array
    {
        foreach (static::$extractors as $type => $class) {
            $extractors[] = new $class($this->config[$type]);
        }

        return $extractors;
    }
}
