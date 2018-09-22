# Changelog (sehrgut/eloquery)

### v0.3.4
- Rename `Eloquery::withRequest(Request)` to `Eloquery::from(Request)`

### v0.3.3
- Allow manually setting the request
- Add `extract()` proxy method to Eloquery class

### v0.3.2
- Fix passing of filter config down to the grammar instance

### v0.3.1
- Prepend table name to field when filtering on a relationship

### v0.3.0
- Refactor Extractors into separate classes
- Introduce config file
- Allow whitelisting of filter keys

### v0.2.2
- Add missing test for filtering on relationships
- Fix a critical bug when filtering on relationships

### v0.2.1
- `Eloqery->apply()` is now required to return an `OperationResult` by static return type hint

### v0.2.0
- Change namespace from `SehrGut\EloQuery` to `SehrGut\Eloquery`
- Add Facade and Service Provider

### v0.1.4
- `applyToBuilder()` methods now return an `OperationResult` which can contain pagination meta data
- Drop support for PHP 7.0

### v0.1.3
- Replace `Database\Builder` with `Eloquent\Builder` in type checks

### v0.1.2
- Add tests for RequestParser
- Fix major bugs in RequestParser

### v0.1.1
- Handle Pagination
- Style fixes
- Restructure tests

### v0.1.0
- (Initial Release)
