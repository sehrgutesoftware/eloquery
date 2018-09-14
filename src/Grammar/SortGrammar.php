<?php

namespace SehrGut\Eloquery\Grammar;

use Illuminate\Http\Request;
use SehrGut\Eloquery\Contracts\Grammar;
use UnexpectedValueException;

/**
 * Rules for extracting sort orders from a Request.
 *
 * Syntax: `?sort[][key]=first_name&sort[][direction]=ASC`
 */
class SortGrammar implements Grammar
{
    /**
     * Extract an array of sort options from the request.
     *
     * @param Request $request
     * @return array
     */
    public function extract(Request $request): array
    {
        $sorts = $request->get('sort');

        if (is_null($sorts)) {
            return [];
        }

        $this->validate($sorts);

        return $this->fillWithDefaults($sorts);
    }

    /**
     * Validate the extacted array.
     *
     * @param array $sorts
     * @return void
     */
    protected function validate($sorts)
    {
        if (!is_array($sorts)) {
            throw new UnexpectedValueException(
                'sort must be an array, eg. [["key" => "someField", "direction" => "desc"], […], …'
            );
        }

        foreach ($sorts as $sort) {
            // Ensure that key is present
            if (!isset($sort['key'])) {
                throw new UnexpectedValueException('Each sort order must at least specify a key.');
            }

            // Ensure that direction is valid
            if (isset($sort['direction']) and !in_array(strtoupper($sort['direction']), ['ASC', 'DESC'])) {
                throw new UnexpectedValueException('direction must be either "asc" or "desc" (or omitted)');
            }
        }
    }

    /**
     * Replace missing values with their defaults.
     *
     * @param array $sorts
     * @return array
     */
    protected function fillWithDefaults(array $sorts): array
    {
        foreach ($sorts as &$sort) {
            // Default direction
            if (isset($sort['direction'])) {
                $sort['direction'] = strtoupper($sort['direction']);
            } else {
                $sort['direction'] = 'ASC';
            }
        }

        return $sorts;
    }
}
