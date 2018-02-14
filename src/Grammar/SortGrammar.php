<?php

namespace SehrGut\EloQuery\Grammar;

use Illuminate\Http\Request;
use UnexpectedValueException;

/**
 * Rules for extracting sort orders from a Request.
 *
 * Syntax: `?sort[][key]=first_name&sort[][direction]=asc`
 */
class SortGrammar
{
    /**
     * Extract an array of sort options from the request.
     *
     * @param Request $request
     * @return void
     */
    public function extract(Request $request)
    {
        $sorts = $request->get('sort');

        $this->validate($sorts);

        return $this->fillWithDefaults($sorts);
    }

    /**
     * Validate the extacted array.
     *
     * @param array $sorts
     * @return void
     */
    protected function validate($sorts) : void
    {
        if (!is_array($sorts)) {
            throw new UnexpectedValueException('sort must be an array, eg. [["key" => "someField", "direction" => "desc"], […], …');
        }

        foreach ($sorts as $sort) {
            // Ensure that key is present
            if (!isset($sort['key'])) {
                throw new UnexpectedValueException('Each sort order must at least specify a key.');
            }

            // Ensure that direction is valid
            if (isset($sort['direction']) and !in_array(strtolower($sort['direction']), ['asc', 'desc'])) {
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
    protected function fillWithDefaults(array $sorts) : array
    {
        foreach ($sorts as &$sort) {
            // Default direction is set through Sort::__construct() when passed as `null`
            if (!isset($sort['direction'])) {
                $sort['direction'] = null;
            }
        }

        return $sorts;
    }
}
