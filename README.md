# eloquery (WIP)

[![Build Status](https://travis-ci.org/sehrgutesoftware/eloquery.svg?branch=master)](https://travis-ci.org/sehrgutesoftware/eloquery)
[![Test Coverage](https://api.codeclimate.com/v1/badges/2a41564ac07501a7bd66/test_coverage)](https://codeclimate.com/github/sehrgutesoftware/eloquery/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/2a41564ac07501a7bd66/maintainability)](https://codeclimate.com/github/sehrgutesoftware/eloquery/maintainability)
[![Latest Stable Version](https://poser.pugx.org/sehrgut/eloquery/v/stable)](https://packagist.org/packages/sehrgut/eloquery)

> Apply query parameters (filter, sort, paginate, eager-load) to a Laravel Eloquent query builder.

## Todo
- [ ] Refactor: Throw custom exception when parameters are invalid / insufficient
- [ ] Implement Paginate & Include grammar
- [ ] Implement Include operation
- [ ] Refactor: Query params should be customizable
- [ ] Document query params syntax/usage

## Usage
### Example usage directly in Controller
```php
use App\Models\Book;
use Illuminate\Routing\Controller;
use SehrGut\EloQuery\RequestParser;

class BooksController extends Controller
{
    /**
     * List all records of type `Book`.
     */
    public function index(RequestParser $parser)
    {
        $builder = Book::newQuery();

        $operations = $parser->extractOperations();
        $operations->applyToBuilder($builder);

        return $builder->get();
    }
}
```

## Changelog
Please refer to [CHANGELOG.md](CHANGELOG.md).

## Compatibility
> TBD

## Testing
```bash
composer install
composer test
```

## Generate API Docs
```bash
composer docs
```

## Alternatives
- Bruno: [https://github.com/esbenp/bruno](https://github.com/esbenp/bruno)

## License
This software is licensed under the [MIT License](https://opensource.org/licenses/MIT). See [LICENSE.txt](LICENSE.txt) for details.
