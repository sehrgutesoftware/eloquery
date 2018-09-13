<?php

namespace SehrGut\Eloquery\Constraints;

class GreaterEqualConstraint extends AbstractConstraint
{
    /** {@inheritDoc} */
    protected function getOperator()
    {
        return $this->negated ? '<' : '>=';
    }
}
