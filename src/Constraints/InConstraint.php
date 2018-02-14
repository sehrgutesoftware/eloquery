<?php

namespace SehrGut\EloQuery\Constraints;

class InConstraint extends AbstractConstraint
{
    /** {@inheritDoc} */
    protected function getOperator()
    {
        return null;
    }

    /** {@inheritDoc} */
    protected function getBuilderMethod() : string
    {
        return $this->negated ? 'whereNotIn' : 'whereIn';
    }
}
