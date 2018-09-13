<?php

namespace SehrGut\Eloquery\Tests\Operations;

use SehrGut\Eloquery\Operations\Filter;
use SehrGut\Eloquery\Operators;

class FilterTest extends OperationTestCase
{
    /**
     * @expectedException InvalidArgumentException
     */
    public function test_it_throws_an_exception_on_invalid_operator()
    {
        $filter = new Filter('field', 'value', 'non-exisiting-operator', false);
    }

    public function test_it_applies_equals_constraint()
    {
        // Positive
        $this->builder->shouldReceive('where')
            ->once()
            ->with('field', '=', 'value');

        $filter = new Filter('field', 'value', Operators::EQUALS, false);
        $filter->applyToBuilder($this->builder);

        // Negated
        $this->builder->shouldReceive('where')
            ->once()
            ->with('field', '!=', 'value');

        $filter = new Filter('field', 'value', Operators::EQUALS, true);
        $filter->applyToBuilder($this->builder);
    }

    public function test_it_applies_contains_constraint()
    {
        // Positive
        $this->builder->shouldReceive('where')
            ->once()
            ->with('field', 'LIKE', '%value%');

        $filter = new Filter('field', 'value', Operators::CONTAINS, false);
        $filter->applyToBuilder($this->builder);

        // Negated
        $this->builder->shouldReceive('where')
            ->once()
            ->with('field', 'NOT LIKE', '%value%');

        $filter = new Filter('field', 'value', Operators::CONTAINS, true);
        $filter->applyToBuilder($this->builder);
    }

    public function test_it_applies_starts_with_constraint()
    {
        // Positive
        $this->builder->shouldReceive('where')
            ->once()
            ->with('field', 'LIKE', 'value%');

        $filter = new Filter('field', 'value', Operators::STARTS_WITH, false);
        $filter->applyToBuilder($this->builder);

        // Negated
        $this->builder->shouldReceive('where')
            ->once()
            ->with('field', 'NOT LIKE', 'value%');

        $filter = new Filter('field', 'value', Operators::STARTS_WITH, true);
        $filter->applyToBuilder($this->builder);
    }

    public function test_it_applies_ends_with_constraint()
    {
        // Positive
        $this->builder->shouldReceive('where')
            ->once()
            ->with('field', 'LIKE', '%value');

        $filter = new Filter('field', 'value', Operators::ENDS_WITH, false);
        $filter->applyToBuilder($this->builder);

        // Negated
        $this->builder->shouldReceive('where')
            ->once()
            ->with('field', 'NOT LIKE', '%value');

        $filter = new Filter('field', 'value', Operators::ENDS_WITH, true);
        $filter->applyToBuilder($this->builder);
    }

    public function test_it_applies_greater_constraint()
    {
        // Positive
        $this->builder->shouldReceive('where')
            ->once()
            ->with('field', '>', 'value');

        $filter = new Filter('field', 'value', Operators::GREATER, false);
        $filter->applyToBuilder($this->builder);

        // Negated
        $this->builder->shouldReceive('where')
            ->once()
            ->with('field', '<=', 'value');

        $filter = new Filter('field', 'value', Operators::GREATER, true);
        $filter->applyToBuilder($this->builder);
    }

    public function test_it_applies_greater_equal_constraint()
    {
        // Positive
        $this->builder->shouldReceive('where')
            ->once()
            ->with('field', '>=', 'value');

        $filter = new Filter('field', 'value', Operators::GREATER_EQUAL, false);
        $filter->applyToBuilder($this->builder);

        // Negated
        $this->builder->shouldReceive('where')
            ->once()
            ->with('field', '<', 'value');

        $filter = new Filter('field', 'value', Operators::GREATER_EQUAL, true);
        $filter->applyToBuilder($this->builder);
    }

    public function test_it_applies_less_constraint()
    {
        // Positive
        $this->builder->shouldReceive('where')
            ->once()
            ->with('field', '<', 'value');

        $filter = new Filter('field', 'value', Operators::LESS, false);
        $filter->applyToBuilder($this->builder);

        // Negated
        $this->builder->shouldReceive('where')
            ->once()
            ->with('field', '>=', 'value');

        $filter = new Filter('field', 'value', Operators::LESS, true);
        $filter->applyToBuilder($this->builder);
    }

    public function test_it_applies_less_equal_constraint()
    {
        // Positive
        $this->builder->shouldReceive('where')
            ->once()
            ->with('field', '<=', 'value');

        $filter = new Filter('field', 'value', Operators::LESS_EQUAL, false);
        $filter->applyToBuilder($this->builder);

        // Negated
        $this->builder->shouldReceive('where')
            ->once()
            ->with('field', '>', 'value');

        $filter = new Filter('field', 'value', Operators::LESS_EQUAL, true);
        $filter->applyToBuilder($this->builder);
    }

    public function test_it_applies_in_constraint()
    {
        // Positive
        $this->builder->shouldReceive('whereIn')
            ->once()
            ->with('field', ['value1', 'value2']);

        $filter = new Filter('field', ['value1', 'value2'], Operators::IN, false);
        $filter->applyToBuilder($this->builder);

        // Negated
        $this->builder->shouldReceive('whereNotIn')
            ->once()
            ->with('field', ['value1', 'value2']);

        $filter = new Filter('field', ['value1', 'value2'], Operators::IN, true);
        $filter->applyToBuilder($this->builder);
    }

    public function test_it_applies_between_constraint()
    {
        // Positive
        $this->builder->shouldReceive('whereBetween')
            ->once()
            ->with('field', ['value1', 'value2']);

        $filter = new Filter('field', ['value1', 'value2'], Operators::BETWEEN, false);
        $filter->applyToBuilder($this->builder);

        // Negated
        $this->builder->shouldReceive('whereNotBetween')
            ->once()
            ->with('field', ['value1', 'value2']);

        $filter = new Filter('field', ['value1', 'value2'], Operators::BETWEEN, true);
        $filter->applyToBuilder($this->builder);
    }
}
