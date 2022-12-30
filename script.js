const prompt = require("prompt-sync")();

let name = prompt(`Welcome to the Movie Store, what is your name?  `);
console.log(`Welcome, ${name}\n`);

class Movies {
  numberOfAvailableMovies = 5
  rentedMovies = []
  availableMovies = ['Avatar', 'Westworld', 'Blacklist', 'Avengers', 'Spiderman']
  pricePerMovie = 5 // In dollars
  totalIncome = 0

  rentMovie(movieName){
    if (this.availableMovies.includes(movieName)){
      this.totalIncome += this.pricePerMovie
      this.rentedMovies.push(movieName)
      this.numberOfAvailableMovies = this.numberOfAvailableMovies - 1
      this.availableMovies.splice(this.availableMovies.indexOf(movieName),1)
    }
  }

  returnMovie(){
    this.rentedMovies.pop(movieName)
    this.numberOfAvailableMovies = this.numberOfAvailableMovies + 1
  }
}

const movies = new Movies();

console.log(`Available movies: ${movies.availableMovies}\n`)

let rent = prompt(`Do you want to rent a movie? (Y/N): `)
let retMovie;

if (rent === 'Y' || rent === 'y'){
  while (rent === `Y` || rent === `y`) {
    let movieName = prompt(`Select movie title: `);
    movies.rentMovie(movieName)

    console.log(`Movies rented: ${movies.rentedMovies}\n`);
    console.log(`Available movies: ${movies.availableMovies}\n`)
    console.log(`Total amount payable: ${movies.totalIncome} dollars\n`)

    let rent = prompt(`Do you want to rent another movie? (Y/N): `);
    if (rent === `N` || rent === `n`) {
      break;
    }
  }

  console.log(`Thank you for renting ${movies.rentedMovies}. Total amount + tax will be ${movies.totalIncome + 0.50} dollars. Your reciept will be sent to your mail\n`)

}else if (rent === 'N' || rent === 'n'){
  retMovie = prompt(`Do you want to return a movie? (Y/N): `)
  if (retMovie === 'y' || retMovie === 'Y'){
    while (retMovie === `Y` || retMovie === `y`) {
      movieName = prompt(`Enter movie title: `);
      console.log(`\n`)
      movies.availableMovies.push(movieName);

      let retMovie = prompt(`Do you want to return another movie? (Y/N): `);
      if (retMovie === `N` || retMovie === `n`) {
        break;
      }
    }
    console.log(`\n`)
    console.log(`Avalaible movies: ${movies.availableMovies}\n`);
    console.log(`Thank you for your continued patronage ${name}, come back next time.\n`)
  }
}