<?php

namespace SehrGut\Eloquery\Constraints;

class LessConstraint extends AbstractConstraint
{
    /** {@inheritDoc} */
    protected function getOperator()
    {
        return $this->negated ? '>=' : '<';
    }
}
