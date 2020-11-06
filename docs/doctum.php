<?php

$dir = __DIR__ . '/../src';

$iterator = Symfony\Component\Finder\Finder::create()
    ->files()
    ->name('*.php')
    ->in($dir);

$versions = Doctum\Version\GitVersionCollection::create($dir)
    ->addFromTags('v0.8.1');

$options = [
    'theme' => 'default',
    'title' => 'Eloquery API Documentation',
    'versions' => $versions,
    'build_dir' => __DIR__ . '/api/%version%',
    'cache_dir' => __DIR__ . '/cache/%version%',
];

$sami = new Doctum\Doctum($iterator, $options);

return $sami;
