<?php

namespace SehrGut\Eloquery\Constraints;

class GreaterConstraint extends AbstractConstraint
{
    /** {@inheritDoc} */
    protected function getOperator()
    {
        return $this->negated ? '<=' : '>';
    }
}
