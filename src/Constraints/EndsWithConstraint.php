<?php

namespace SehrGut\Eloquery\Constraints;

class EndsWithConstraint extends AbstractConstraint
{
    /** {@inheritDoc} */
    protected function getOperator()
    {
        return ($this->negated ? 'NOT ' : '') . 'LIKE';
    }

    /** {@inheritDoc} */
    protected function getPreparedValue()
    {
        return sprintf('%%%s', $this->value);
    }
}
