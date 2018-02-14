<?php

namespace SehrGut\EloQuery;

class TestController
{
    public function show($id, Request $request, RequestParser $parser)
    {
        $builder = Model::newQuery();

        $filters = $parser->extractFilter();
    }
}
