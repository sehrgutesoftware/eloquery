<?php

namespace SehrGut\EloQuery\Constraints;

class EqualsConstraint extends AbstractConstraint
{
    /** {@inheritDoc} */
    protected function getOperator()
    {
        return $this->negated ? '!=' : '=';
    }
}
