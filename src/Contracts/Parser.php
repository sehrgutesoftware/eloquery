<?php

namespace SehrGut\Eloquery\Contracts;

use Illuminate\Http\Request;

interface Parser
{
    /**
     * Construct a Parser instance.
     *
     * @param \Illuminate\Http\Request $request
     * @param array $config
     */
    public function __construct(Request $request, array $config);
}
