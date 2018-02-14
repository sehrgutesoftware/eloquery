<?php

namespace SehrGut\EloQuery\Constraints;

class BetweenConstraint extends AbstractConstraint
{
    /** {@inheritDoc} */
    protected function getOperator()
    {
        return null;
    }

    /** {@inheritDoc} */
    protected function getBuilderMethod() : string
    {
        return $this->negated ? 'whereNotBetween' : 'whereBetween';
    }
}
