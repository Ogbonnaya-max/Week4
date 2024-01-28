# Movie Renting API

The Movie Renting API is a simple JavaScript application that simulates renting and returning movies from a movie store. It utilizes ES6 JavaScript classes and objects/functions to manage movies and movie store operations.

## Movie Class

The `Movie` class represents individual movies with the following attributes:

- Title
- Genre
- Available Copies
- Rented Copies

### Methods:

1. **`rent()`**: Allows a user to rent a copy of the movie.
2. **`returnMovie()`**: Allows a user to return a rented copy of the movie.

## MovieStore Class

The `MovieStore` class manages the movie inventory and provides methods for store operations. It maintains an array of `Movie` instances.

### Methods:

1. **`addMovie(title, genre, copies)`**: Adds a new movie to the store with the specified title, genre, and number of copies.
2. **`rentMovie(title)`**: Simulates renting a movie from the store.
3. **`returnMovie(title)`**: Simulates returning a rented movie to the store.
4. **`findMovie(title)`**: Finds a movie in the store by title.


