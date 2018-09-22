# eloquery

[![Build Status](https://travis-ci.org/sehrgutesoftware/eloquery.svg?branch=master)](https://travis-ci.org/sehrgutesoftware/eloquery)
[![Test Coverage](https://api.codeclimate.com/v1/badges/2a41564ac07501a7bd66/test_coverage)](https://codeclimate.com/github/sehrgutesoftware/eloquery/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/2a41564ac07501a7bd66/maintainability)](https://codeclimate.com/github/sehrgutesoftware/eloquery/maintainability)
[![Latest Stable Version](https://poser.pugx.org/sehrgut/eloquery/v/stable)](https://packagist.org/packages/sehrgut/eloquery)

## Table of Contents
- [Usage](#usage)
    - [Example usage directly in Controller](#example-usage-directly-in-controller)
- [API Documentation](#api-documentation)
- [Changelog](#changelog)
- [Todo](#todo)
- [Compatibility](#compatibility)
- [Testing](#testing)
- [Generate API Docs](#generate-api-docs)
- [Alternatives](#alternatives)
- [License](#license)

## Usage
### Example usage directly in Controller
```php
use App\Models\Book;
use Illuminate\Routing\Controller;
use SehrGut\Eloquery\Facades\Eloquery;

class BooksController extends Controller
{
    /**
     * List all records of type `Book`.
     */
    public function index(RequestParser $parser)
    {
        $builder = Book::query();
        Eloquery::apply($builder);

        return $builder->get();
    }
}
```

## API Documentation
[https://sehrgutesoftware.github.io/eloquery/api/v0.3.1/](https://sehrgutesoftware.github.io/eloquery/api/v0.3.1/)

## Changelog
Please refer to [CHANGELOG.md](CHANGELOG.md).

## Todo
- [ ] Refactor: Throw custom exception when parameters are invalid / insufficient
- [ ] Implement "include" grammar & operation
- [ ] Refactor: Query params should be customizable
- [ ] Document query params syntax/usage

## Compatibility
Tested with PHP 7.1 and 7.2

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
