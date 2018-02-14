<?php

namespace SehrGut\EloQuery\Constraints;

class GreaterConstraint extends AbstractConstraint
{
    /** {@inheritDoc} */
    protected function getOperator()
    {
        return $this->negated ? '<=' : '>';
    }
}
