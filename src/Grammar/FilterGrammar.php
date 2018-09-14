<?php

namespace SehrGut\Eloquery\Grammar;

use Illuminate\Http\Request;
use SehrGut\Eloquery\Contracts\Grammar;
use SehrGut\Eloquery\Operations\Filter;
use SehrGut\Eloquery\Operators;
use UnexpectedValueException;

/**
 * Rules for extracting filter constraints from a Request.
 *
 * Syntax: `?filter[][key]=first_name&filter[][value]=John+Doe&filter[][operator]=equals&filter[][negated]=false`
 */
class FilterGrammar implements Grammar
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
                'filter must be an array, eg. [["key" => "someField", "value" => "desiredValue",'.
                ' "operator" => "equals"], […], …'
            );
        }

        foreach ($filters as $filter) {
            // Ensure that key and value are present
            if (!isset($filter['key']) or !isset($filter['value'])) {
                throw new UnexpectedValueException('each filter must contain both key and value');
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

            // Default negation
            if (!isset($filter['negated'])) {
                $filter['negated'] = false;
            }
        }

        return $filters;
    }
}
