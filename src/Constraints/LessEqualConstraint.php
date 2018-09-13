<?php

namespace SehrGut\Eloquery\Constraints;

class LessEqualConstraint extends AbstractConstraint
{
    /** {@inheritDoc} */
    protected function getOperator()
    {
        return $this->negated ? '>' : '<=';
    }
}
