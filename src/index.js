class User {
  constructor (name, surname) {
    this.name = name;
    this.surname = surname;
    this.books = [];
    this.pets = [];
  }

  getFullName = () => {
    return `${this.name} ${this.surname}`;
  };

  addPet = (pets) => {
    pets.forEach(item => this.pets.push(item));
  };

  countPets = () => {
    return `${this.pets.length}`;
  };

  addBooks = (name, author) => {
    const booksObj = {
      name,
      author
    };

    this.books.push(booksObj);
  };

  getBooksNames = () => {
    const getNames = this.books.map(book => book.name);
    return getNames;
  };

  getUser = () => {
    const nameComplete = this.getFullName();
    const pets = this.pets;
    const quantityPets = this.countPets();
    const books = this.books;
    const nameBooks = this.getBooksNames();
    
    const user = {
      nameComplete,
      pets,
      quantityPets,
      books,
      nameBooks
    };

    return user;
  };

}

const manager = new User("Elon", "Musk");
const manager2 = new User("Jeff", "Bezos");

const pets = ["perro", "gato", "hamster"];
manager.addPet(pets);

const pets2 = ["conejo", "loro"];
manager2.addPet(pets2);

manager.addBooks("El señor de los anilos", "William Golding");
manager2.addBooks("Padre Rico Padre Pobre", "Robert Kiyosaki");


console.log(manager.getUser());
console.log(manager2.getUser());