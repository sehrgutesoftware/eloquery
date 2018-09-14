<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Grammar
    |--------------------------------------------------------------------------
    |
    | Here you can choose which classes should be used to parse the parameters
    | from the query string of a request. They can be overridden to support
    | a different structure or set of query params for various operations.
    |
    */

    'paginate' => [
        'grammar' => \SehrGut\Eloquery\Grammar\PaginateGrammar::class,
    ],

    'filter' => [
        'grammar' => \SehrGut\Eloquery\Grammar\FilterGrammar::class,
    ],

    'sort' => [
        'grammar' => \SehrGut\Eloquery\Grammar\SortGrammar::class,
    ],


];
