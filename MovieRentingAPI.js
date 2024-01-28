const readlineSync = require('readline-sync');

class Movie {
    constructor(title, genre, releaseYear, availableCopies) {
      this.title = title;
      this.genre = genre;
      this.releaseYear = releaseYear;
      this.availableCopies = availableCopies;
    }
  
    rentMovie() {
      if (this.availableCopies > 0) {
        this.availableCopies--;
        return `Enjoy watching ${this.title}!`;
      } else {
        return `Sorry, ${this.title} is currently out of stock.`;
      }
    }
  
    returnMovie() {
      this.availableCopies++;
      return `Thank you for returning ${this.title}.`;
    }
  }
  
  class RentalStore {
    constructor() {
      this.movies = [];
    }
  
    addMovie(movie) {
      this.movies.push(movie);
      return `${movie.title} has been added to the store.`;
    }
  
    listMovies() {
      if (this.movies.length === 0) {
        return "No movies available in the store.";
      }
  
      return this.movies.map(movie => `${movie.title} (${movie.releaseYear}) - ${movie.availableCopies} copies available`).join('\n');
    }
  
    rentMovie(title) {
      const movie = this.findMovie(title);
  
      if (movie) {
        return movie.rentMovie();
      } else {
        return `Movie with title ${title} not found in the store.`;
      }
    }
  
    returnMovie(title) {
      const movie = this.findMovie(title);
  
      if (movie) {
        return movie.returnMovie();
      } else {
        return `Movie with title ${title} not found in the store.`;
      }
    }
  
    findMovie(title) {
      return this.movies.find(movie => movie.title === title);
    }
  }
  
  // Example Usage
  const store = new RentalStore();
  
  const movie1 = new Movie("Inception", "Sci-Fi", 2010, 5);
  const movie2 = new Movie("The Shawshank Redemption", "Drama", 1994, 3);
  
  store.addMovie(movie1);
  store.addMovie(movie2);
  
  console.log(store.listMovies());
  
  console.log(store.rentMovie("Inception"));
  console.log(store.rentMovie("The Matrix")); // Movie not found
  
  console.log(store.listMovies());
  
  console.log(store.returnMovie("Inception"));
  console.log(store.returnMovie("The Matrix")); // Movie not found
  
  console.log(store.listMovies());
  
