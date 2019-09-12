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
        'include' => \SehrGut\Eloquery\Extractors\SideloadExtractor::class,
        'search' => \SehrGut\Eloquery\Extractors\SearchExtractor::class,
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

        // The Operation that is applied to the query builder
        'operation' => \SehrGut\Eloquery\Operations\Paginate::class,

        'config' => [

            // Maximum allowed page size that can be set via query param
            'max_limit' => 100,

            // Default limit to use if no other page size is specified via query param
            'default_limit' => 10,

        ],

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

        // The Operation that is applied to the query builder
        'operation' => \SehrGut\Eloquery\Operations\Filter::class,

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

        // The Operation that is applied to the query builder
        'operation' => \SehrGut\Eloquery\Operations\Sort::class,

    ],

    /*
    |--------------------------------------------------------------------------
    | Includes (sideloads)
    |--------------------------------------------------------------------------
    */
    'include' => [

        // Grammar classes contain the logic that is responsible for interpreting
        // the request and extracting the corresponding constraints from it.
        'grammar' => \SehrGut\Eloquery\Grammar\SideloadGrammar::class,

        // The Operation that is applied to the query builder
        'operation' => \SehrGut\Eloquery\Operations\Sideload::class,

        'config' => [

            // This whitelist defines which includes are allowed. By default, no
            // includes are allowed. If you want to allow any include, set the
            // value of this to `false`. BEWARE OF THE PRIVACY IMPLICATIONS!
            'whitelist' => []

        ]

    ],

    /*
    |--------------------------------------------------------------------------
    | Search
    |--------------------------------------------------------------------------
    */
    'search' => [

        // Grammar classes contain the logic that is responsible for interpreting
        // the request and extracting the corresponding constraints from it.
        'grammar' => \SehrGut\Eloquery\Grammar\SearchGrammar::class,

        // The Operation that is applied to the query builder
        'operation' => \SehrGut\Eloquery\Operations\Search::class,

        'config' => [

            // This whitelist defines which attributes on the model are respected in search
            'attributes' => []

        ]

    ],

];
