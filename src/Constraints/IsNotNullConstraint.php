<?php

namespace SehrGut\Eloquery\Constraints;

class IsNotNullConstraint extends AbstractConstraint
{
    /** {@inheritDoc} */
    protected function getOperator()
    {
        return null;
    }

    /** {@inheritDoc} */
    protected function getBuilderMethod(): string
    {
        return $this->negated ? 'whereNull' : 'whereNotNull';
    }

    /** {@inheritDoc} */
    protected function getPreparedValue()
    {
        return null;
    }
}
