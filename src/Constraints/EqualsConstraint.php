<?php

namespace SehrGut\Eloquery\Constraints;

class EqualsConstraint extends AbstractConstraint
{
    /** {@inheritDoc} */
    protected function getOperator()
    {
        return $this->negated ? '!=' : '=';
    }
}
