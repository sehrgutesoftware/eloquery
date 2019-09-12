<?php

namespace SehrGut\Eloquery\Constraints;

class IsNullConstraint extends AbstractConstraint
{
    /** {@inheritDoc} */
    protected function getOperator()
    {
        return null;
    }

    /** {@inheritDoc} */
    protected function getBuilderMethod(): string
    {
        return $this->negated ? 'whereNotNull' : 'whereNull';
    }

    /** {@inheritDoc} */
    protected function getPreparedValue()
    {
        return null;
    }
}
