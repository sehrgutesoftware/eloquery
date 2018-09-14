<?php

$dir = __DIR__ . '/../src';

$iterator = Symfony\Component\Finder\Finder::create()
    ->files()
    ->name('*.php')
    ->in($dir);

$versions = Sami\Version\GitVersionCollection::create($dir)
    ->addFromTags('v0.2.1');

$options = [
    'theme' => 'default',
    'title' => 'Eloquery API Documentation',
    'versions' => $versions,
    'build_dir' => __DIR__ . '/api/%version%',
    'cache_dir' => __DIR__ . '/cache/%version%',
];

$sami = new Sami\Sami($iterator, $options);

return $sami;
