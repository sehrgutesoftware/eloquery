<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Extractors
    |--------------------------------------------------------------------------
    */
    'extractors' => [
        'filter' => \SehrGut\Eloquery\Extractors\FilterExtractor::class,
        'sort' => \SehrGut\Eloquery\Extractors\SortExtractor::class,
        'paginate' => \SehrGut\Eloquery\Extractors\PaginateExtractor::class,
    ],

    /*
    |--------------------------------------------------------------------------
    | Pagination
    |--------------------------------------------------------------------------
    */
    'paginate' => [

        // Grammar classes contain the logic that is responsible for interpreting
        // the request and extracting the corresponding constraints from it.
        'grammar' => \SehrGut\Eloquery\Grammar\PaginateGrammar::class,

    ],

    /*
    |--------------------------------------------------------------------------
    | Filtering
    |--------------------------------------------------------------------------
    */
    'filter' => [

        // Grammar classes contain the logic that is responsible for interpreting
        // the request and extracting the corresponding constraints from it.
        'grammar' => \SehrGut\Eloquery\Grammar\FilterGrammar::class,

        'config' => [

            // This whitelist defines which filter keys are allowed. By
            // default, no filters are allowed. If you want to allow
            // filtering by any field, just set the value of this
            // to `false`. BEWARE OF THE PRIVACY IMPLICATIONS!
            'whitelist' => []

        ]

    ],

    /*
    |--------------------------------------------------------------------------
    | Sorting
    |--------------------------------------------------------------------------
    */
    'sort' => [

        // Grammar classes contain the logic that is responsible for interpreting
        // the request and extracting the corresponding constraints from it.
        'grammar' => \SehrGut\Eloquery\Grammar\SortGrammar::class,

    ],


];
