<?php

namespace SehrGut\Eloquery;

use ReflectionClass;

class Operators
{
    const EQUALS = 'EQUALS';

    const CONTAINS = 'CONTAINS';
    const STARTS_WITH = 'STARTS_WITH';
    const ENDS_WITH = 'ENDS_WITH';

    const GREATER = 'GREATER';
    const GREATER_EQUAL = 'GREATER_EQUAL';
    const LESS = 'LESS';
    const LESS_EQUAL = 'LESS_EQUAL';

    const IN = 'IN';
    const BETWEEN = 'BETWEEN';

    const IS_NULL = 'IS_NULL';
    const IS_NOT_NULL = 'IS_NOT_NULL';

    /**
     * Retrieve all possible operations.
     *
     * @return array
     */
    public static function all(): array
    {
        $reflection = new ReflectionClass(__class__);

        return array_keys($reflection->getConstants());
    }

    /**
     * Check if given operation exists / is defined.
     *
     * @param string $operator
     * @return bool
     */
    public static function exists(string $operator): bool
    {
        return in_array($operator, static::all());
    }
}
