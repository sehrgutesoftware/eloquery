<?php

namespace SehrGut\Eloquery;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use SebastianBergmann\ObjectReflector\InvalidArgumentException;
use SehrGut\Eloquery\Contracts\Grammar;
use SehrGut\Eloquery\Operations\Filter;
use SehrGut\Eloquery\Operations\Paginate;
use SehrGut\Eloquery\Operations\Sort;

class RequestParser
{
    /**
     * Names of the components that can be requested from the parser.
     *
     * @var array
     */
    const ALLOWED_COMPONENTS = ['filter', 'sort', 'paginate'];

    /**
     * The request from which to extract query options.
     *
     * @var Illuminate\Http\Request
     */
    protected $request;

    /**
     * Names of the query params for each component.
     *
     * @var array
     */
    protected $grammar = [
        'paginate' => \SehrGut\Eloquery\Grammar\PaginateGrammar::class,
        'filter' => \SehrGut\Eloquery\Grammar\FilterGrammar::class,
        'sort' => \SehrGut\Eloquery\Grammar\SortGrammar::class,
    ];

    /**
     * Construct a RequestParser instance.
     *
     * @param Request $request
     */
    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    /**
     * Extract all query Operations from the request.
     *
     * @param array $components
     * @return OperationCollection
     */
    public function extractOperations(array $components = null): OperationCollection
    {
        if (is_null($components)) {
            $components = static::ALLOWED_COMPONENTS;
        }

        $operations = new OperationCollection();

        foreach ($components as $component) {
            $operations->merge($this->getOperationsForComponent($component));
        }

        return $operations;
    }

    /**
     * Extract pagination parameters from the request.
     *
     * @return OperationCollection
     */
    public function extractPaginate(): OperationCollection
    {
        $grammar = $this->getGrammarForOperation('paginate');

        $params = $grammar->extract($this->request);

        return new OperationCollection([
            new Paginate($params['limit'], $params['page'])
        ]);
    }

    /**
     * Extract filter constraints from the request.
     *
     * @return OperationCollection
     */
    public function extractFilter(): OperationCollection
    {
        $grammar = $this->getGrammarForOperation('filter');

        $filters = array_map(function ($f) {
            return new Filter($f['key'], $f['value'], $f['operator'], $f['negated']);
        }, $grammar->extract($this->request));

        return new OperationCollection($filters);
    }

    /**
     * Extract sort orders from the request.
     *
     * @return OperationCollection
     */
    public function extractSort(): OperationCollection
    {
        $grammar = $this->getGrammarForOperation('sort');

        $sort = array_map(function ($sort) {
            return new Sort($sort['key'], $sort['direction'] === 'ASC');
        }, $grammar->extract($this->request));

        return new OperationCollection($sort);
    }

    /**
     * Extract all operations for a given component.
     *
     * @param string $component
     * @return OperationCollection
     */
    protected function getOperationsForComponent(string $component): OperationCollection
    {
        if (!in_array($component, static::ALLOWED_COMPONENTS)) {
            throw new InvalidArgumentException(sprintf(
                '%s is not an allowed component (%s)',
                $component,
                implode(', ', static::ALLOWED_COMPONENTS)
            ));
        }

        $methodName = $this->getNameOfExtractMethod($component);

        return $this->{$methodName}();
    }

    /**
     * Build the extract method name for given component.
     *
     * @param string $component
     * @return string
     */
    protected function getNameOfExtractMethod(string $component): string
    {
        return Str::camel('extract_' . $component);  // eg. extractFilter
    }

    /**
     * Get the appropriate grammar for given operation.
     *
     * @param string $operation
     * @return Grammar
     */
    protected function getGrammarForOperation(string $operation): Grammar
    {
        $grammarClass = $this->grammar[$operation];

        return new $grammarClass();
    }
}
