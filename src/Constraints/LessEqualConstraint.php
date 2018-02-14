<?php

namespace SehrGut\EloQuery\Constraints;

class LessEqualConstraint extends AbstractConstraint
{
    /** {@inheritDoc} */
    protected function getOperator()
    {
        return $this->negated ? '>' : '<=';
    }
}
