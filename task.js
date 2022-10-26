// Задача 1

// 1. Создайте базовый класс `PrintEditionItem` со следующими свойствами:

class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}

	// 2. Испорченное издание можно подклеить и тем самым улучшить его состояние.

	fix() {
		this.state *= 1.5;
	}

	// 3. Cоздайте «сеттер» для свойства `state`

	set state(number) {
		if (number < 0) {
			this._state = 0;
		} else if (number > 100) {
			this._state = 100;
		} else {
			this._state = number;
		}
	}

	// 4. Создайте «геттер», который позволит читать значение свойства `state`

	get state() {
		return this._state;
	}
}

// 5. Создайте класс `Magazine`

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);

		this.type = 'magazine';
	}
}

// 6. Создайте класс `Book`

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);

		this.author = author;
		this.type = 'book';
	}
}
// 7. Создайте классы `NovelBook`, `FantasticBook` и `DetectiveBook`

class NovelBook extends Book {
	constructor(name, author, releaseDate, pagesCount) {
		super(name, author, releaseDate, pagesCount);

		this.type = 'novel';
	}
}

class FantasticBook extends Book {
	constructor(name, author, releaseDate, pagesCount) {
		super(name, author, releaseDate, pagesCount);

		this.type = 'fantastic';
	}
}

class DetectiveBook extends Book {
	constructor(name, author, releaseDate, pagesCount) {
		super(name, author, releaseDate, pagesCount);
		this.type = 'detective';
	}
}


// Задача 2

// 1. Создайте класс `Library`

class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}

	// 2. Реализуйте метод `addBook(book)`

	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		}
	}

	// 3. Создайте метод `findBookBy(type, value)`

	findBookBy(type, value) {
		return this.books.find(book => book[type] === value) || null;
	}

	// 4. Создайте метод `giveBookByName(bookName)`

	giveBookByName(bookName) {
		let findingBook = null;
		this.books = this.books.filter(book => {
			if (book.name === bookName) {
				findingBook = book;
				return false;
			}
			return true;
		})

		return findingBook;
	}
}

// 5. Протестируйте корректность работы классов и методов, разыграв тестовый сценарий:

const library = new Library("Jsut");

library.addBook(
	new DetectiveBook(
		"Артур Конан Дойл",
		1919,
		1008
	)
);
library.addBook(
	new FantasticBook(
		"Аркадий и Борис Стругацкие",
		1972,
		168
	)
);
const uells = new NovelBook("Герберт Уэллс", 1895, 138)
library.addBook(uells);
library.addBook(new Magazine("Мурзилка", 1924, 60));
uells.state = 30;