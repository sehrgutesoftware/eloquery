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

    /**
     * Retrieve the configuration variables of the parser.
     *
     * @return array
     */
    public function getConfig(): array;

    /**
     * Set config value on the parser.
     *
     * @param string $key
     * @param mixed $value
     * @return $this
     */
    public function setConfig(string $key, $value): Parser;
}
