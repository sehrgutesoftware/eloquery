<?php

namespace SehrGut\EloQuery\Constraints;

class LessConstraint extends AbstractConstraint
{
    /** {@inheritDoc} */
    protected function getOperator()
    {
        return $this->negated ? '>=' : '<';
    }
}
