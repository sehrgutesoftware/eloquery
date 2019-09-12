<?php

namespace SehrGut\Eloquery\Grammar;

use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use SehrGut\Eloquery\Operators;
use UnexpectedValueException;

/**
 * Rules for extracting filter constraints from a Request.
 *
 * Syntax: `?filter[][key]=first_name&filter[][value]=John+Doe&filter[][operator]=equals&filter[][negated]=false`
 */
class FilterGrammar extends AbstractGrammar
{
    /**
     * Extract an array of filter options from the request.
     *
     * @param Request $request
     * @return array
     */
    public function extract(Request $request): array
    {
        $filters = $request->get('filter');

        if (is_null($filters)) {
            return [];
        }

        $this->validate($filters);
        $filters = $this->applyWhitelist($filters);

        return $this->fillWithDefaults($filters);
    }

    /**
     * Validate the extacted array.
     *
     * @param array $filters
     * @return void
     */
    protected function validate($filters)
    {
        if (!is_array($filters)) {
            throw new UnexpectedValueException(
                'filter must be an array, eg. [["key" => "someField", "value" => "desiredValue",' .
                ' "operator" => "equals"], […], …'
            );
        }

        foreach ($filters as $filter) {
            $this->validateFilter($filter);
        }
    }

    /**
     * Validate a single filter.
     *
     * @param  array  $filter
     * @return void
     */
    protected function validateFilter(array $filter)
    {
        // Ensure that key is present
        if (!isset($filter['key'])) {
            throw new UnexpectedValueException('Each filter must contain a key');
        }

        // Ensure that a value is present
        if (isset($filter['operator'])
            and (
                strtoupper($filter['operator']) === Operators::IS_NULL
                or strtoupper($filter['operator']) === Operators::IS_NOT_NULL
            )
        ) {
            // IS_NULL and IS_NOT_NULL don't require a value
        } elseif (!isset($filter['value'])) {
            throw new UnexpectedValueException('Each filter must contain a value');
        }

        // Ensure that operator is valid
        if (isset($filter['operator']) and !Operators::exists(strtoupper($filter['operator']))) {
            throw new UnexpectedValueException(sprintf(
                'Invalid filter operator (%s). Must be one of (%s)',
                $filter['operator'],
                implode(', ', Operators::all())
            ));
        }
    }

    /**
     * Drop all items that are not contained in the whitelist.
     *
     * @param  array  $filters
     * @return array
     */
    protected function applyWhitelist(array $filters): array
    {
        $whitelist = Arr::get($this->config, 'whitelist', []);

        if ($whitelist === false) {
            return $filters;
        }

        return array_filter($filters, function ($item) use ($whitelist) {
            return in_array($item['key'], $whitelist);
        });
    }

    /**
     * Replace missing values with their defaults.
     *
     * @param array $filters
     * @return array
     */
    protected function fillWithDefaults(array $filters): array
    {
        foreach ($filters as &$filter) {
            // Default operator
            if (isset($filter['operator'])) {
                $filter['operator'] = strtoupper($filter['operator']);
            } else {
                $filter['operator'] = Operators::EQUALS;
            }

            // Default value
            if (!isset($filter['value'])) {
                $filter['value'] = null;
            }

            // Default negation
            if (!isset($filter['negated'])) {
                $filter['negated'] = false;
            }
        }

        return $filters;
    }
}
