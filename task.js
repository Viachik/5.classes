// Задача 1

// 1. Создайте базовый класс `PrintEditionItem` со следующими свойствами:

class PrintEditionItem{
   constructor(name, releaseDate, pagesCount){
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = '100';
    this.type = 'null';
   }

// 2. Испорченное издание можно подклеить и тем самым улучшить его состояние.

   fix(){
    this.state *= 1,5;
   }

// 3. Cоздайте «сеттер» для свойства `state`

   set state(number){
     if(number < 0){
        this.state = 0;
     } else if(number > 100){
        this.state = 100;
     } else {
        this._state = number;
     }
   }

// 4. Создайте «геттер», который позволит читать значение свойства `state`

   get state(){
     return this._state;
   }
}

// 5. Создайте класс `Magazine`

class Magazine extends PrintEditionItem{
    constructor(type){
      super(type);
      this.type = 'magazine';
    }
}

// 6. Создайте класс `Book`

class Book extends PrintEditionItem{
    constructor(type, author){
    super(type);
    this.author = author;
    this.type = 'book';
    }
}

// 7. Создайте классы `NovelBook`, `FantasticBook` и `DetectiveBook`

class NovelBook extends Book{
    constructor(type){
      super(type);
      this.type = 'novel';
    }
}

class FantasticBook extends Book{
    constructor(type){
      super(type);
      this.type = 'fantastic';
    }
}

class DetectiveBook extends Book{
    constructor(type){
      super(type);
      this.type = 'detective';
    }
}

// Задача 2

// 1. Создайте класс `Library`

class Library{
    constructor(name){
        this.name = name;
        this.books = [];
    }

// 2. Реализуйте метод `addBook(book)`

    addBook(book){
        if(this.state > 30){
            this.books.push(book);
        }
    }

// 3. Создайте метод `findBookBy(type, value)`

    findBookBy(type, value){
        if(this.type !== value){
            this.type = 'null';
        } else{
            return this.type = value;
        }
    }

// 4. Создайте метод `giveBookByName(bookName)`

    giveBookByName(bookName){
        for(bookName of this.books) {
            if(bookName === ??????){
              delete bookName.this.books;
              break
            } else{
                return 'null'
            }
          }
    }
}

// 5. Протестируйте корректность работы классов и методов, разыграв тестовый сценарий:

library.addBook(
    new DetectiveBook(
      "Артур Конан Дойл",
      "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
      1919,
      1008
    )
  );
  library.addBook(
    new FantasticBook(
      "Аркадий и Борис Стругацкие",
      "Пикник на обочине",
      1972,
      168
    )
  );

library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("releaseDate", 1919).name);

/*
Испортите выданную книгу;
Почините выданную книгу;
Попытайтесь добавить починенную книгу обратно в библиотеку.
*/

