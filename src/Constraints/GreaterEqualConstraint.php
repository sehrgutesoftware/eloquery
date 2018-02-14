<?php

namespace SehrGut\EloQuery\Constraints;

class GreaterEqualConstraint extends AbstractConstraint
{
    /** {@inheritDoc} */
    protected function getOperator()
    {
        return $this->negated ? '<' : '>=';
    }
}
