# eloquery (WIP)
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

## Alternatives
- Bruno: [https://github.com/esbenp/bruno](https://github.com/esbenp/bruno)

## License
This software is licensed under the [MIT License](https://opensource.org/licenses/MIT). See [LICENSE.txt](LICENSE.txt) for details.
