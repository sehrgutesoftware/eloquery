<?php

namespace SehrGut\EloQuery;

use Illuminate\Http\Request;
use SebastianBergmann\ObjectReflector\InvalidArgumentException;

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
        'filter' => SehrGut\EloQuery\Grammar\FilterGrammar::class,
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
    public function extractOperations(array $components = null) : OperationCollection
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
     * Extract filter constraints from the request.
     *
     * @return OperationCollection
     */
    public function extractFilters() : OperationCollection
    {
        $grammarClass = $this->grammar['filter'];
        $grammar = new $grammarClass();

        $filters = array_map(function ($f) {
            return new Filter($f['key'], $f['value'], $f['operator'], $f['negated']);
        }, $grammar->extract($request));

        return new OperationCollection($filters);
    }

    /**
     * Extract all operations for a given component.
     *
     * @param string $component
     * @return OperationCollection
     */
    protected function getOperationsForComponent(string $component) : OperationCollection
    {
        if (!array_key_exists($component, static::ALLOWED_COMPONENTS)) {
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
    protected function getNameOfExtractMethod(string $component) : string
    {
        return Str::camel('extract_' . $component . 's');  // eg. extractFilters
    }
}
