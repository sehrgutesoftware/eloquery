<?php

namespace SehrGut\EloQuery\Constraints;

class ContainsConstraint extends AbstractConstraint
{
    /** {@inheritDoc} */
    protected function getOperator()
    {
        return ($this->negated ? 'NOT ' : '') . 'LIKE';
    }

    /** {@inheritDoc} */
    protected function getPreparedValue()
    {
        return sprintf('%%%s%%', $this->value);
    }
}
