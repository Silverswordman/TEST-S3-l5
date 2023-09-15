/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

const sum = function (n1, n2) {
  return n1 + n2;
};
console.log("la somma è " + sum(10, 20));

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

const random = function () {
  const number = Math.floor(Math.random() * 21);
  return number;
};

console.log("Numero a caso tra 0 e 20! ", random());

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

const me = {
  name: "Giulia",
  surname: "Silvestrini",
  age: 29,
};

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

const removeAge = function () {
  delete me.age;
};
removeAge();
console.log(me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
const addAge = function () {
  me.skills = ["HTML", "CSS", "Javascript"];
};
addAge();
console.log(me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
const addNewSkill = function () {
  me.skills.push("sewing");
};
addNewSkill();
console.log(me);
/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

const removeNewSkill = function () {
  me.skills.pop();
};
removeNewSkill();
console.log(me);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
const dice = function () {
  const number = Math.ceil(Math.random() * 6);
  return number;
};

console.log("Tiro il dado ed esce", dice());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
const whoIsBigger = function (n1, n2) {
  if (n1 > n2) {
    console.log(n1, "è più grande di ", n2);
  } else {
    console.log(n2, "è più grande di ", n1);
  }
};

whoIsBigger(1, 500);
whoIsBigger(300, 2);

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

const splitMe = function (string) {
  const arrayString = string.split(" ");
  return arrayString;
};
console.log(splitMe("CIAO A TUTTI"));

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

const deleteOne = function (string, booleano) {
  if (booleano === true) {
    return console.log(string.slice(1));
  } else {
    return console.log(string.slice(0, -1));
  }
};

deleteOne("hello people", true);

deleteOne("hello people", false);

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

const onlyLetters = function (string) {
  const ReplacedString = string.replace(/[0-9]/g, "");
  // console.log (ReplacedString)
  return ReplacedString;
};

console.log(onlyLetters("hello 2 you"));
console.log(
  onlyLetters("33 trentini entrarono a 30ento tutti 33 trotterellando")
);

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

const isThisAnEmail = function (string) {
  arrayString = string.split("");
  console.log(arrayString);

  if (
    arrayString.filter((elemento) => elemento !== "@") &&
    arrayString.filter((elemento) => elemento === " ")
  ) {
    return console.log(string, " non è una mail");
  } else {
    return console.log(string, " è una mail");
  }
};

isThisAnEmail("ciaone hotmail.com");
// non funziona

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

const whatDayIsIt = function () {
  const today = new Date();
  console.log(today);
  const thisDay = today.getDay();
  console.log(thisDay);
  const weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  for (let i = 0; i < weekdays.length; i++) {
    const nomigiorni = weekdays[thisDay];

    if (thisDay === i) {
      console.log(weekdays[i - 1]);
    }
  }
};
whatDayIsIt();

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

const rollTheDices = function (rolls) {
  const values = [];
  let sum = 0;

  for (let i = 0; i < rolls; i++) {
    const diceRoll = dice();
    values.push(diceRoll);
    sum += diceRoll;
  }
  const rollResult = {
    sum: sum,
    values: values,
  };
  return rollResult;
};

console.log(rollTheDices(9));
console.log(rollTheDices(2));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

const howManyDays = function (data) {
  const today = new Date();
  const insertDate = new Date(data);
  const differenceDate = today - insertDate;
  const dayDifference = Math.floor(differenceDate / (1000 * 60 * 60 * 24));
  return dayDifference - 1;
};

console.log("Sono passati", howManyDays("2023-09-13"), " giorni");

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

const isTodayMyBirthday = function (data) {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth();
  if (day === 16 && month === 9) {
    console.log("Oggi è il mio compleanno!");
  } else {
    console.log("Oggi non è il mio compleanno");
  }
};

isTodayMyBirthday();

// Arrays & Oggetti

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

const deleteProp = function (obj, stringa) {
  delete obj[stringa];
  return obj;
};
const AltroFilm = {
  Title: "I Puffi",
  Year: "1993",
  imdbID: "boh",
  Type: "movie",
};
console.log(AltroFilm);

const NewAltroFilm = deleteProp(AltroFilm, "Year");
console.log(NewAltroFilm);

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

const newestMovie = function (array) {
  let newest = array[0];
  array.forEach((movie) => {
    if (parseInt(newest.Year) < parseInt(movie.Year)) {
      newest = movie;
    }
  });
  return newest;
};
console.log("Il film più nuovo è ", newestMovie(movies));

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
const countMovies = function () {
  const numberMovies = movies.length;
  return numberMovies;
};
console.log("Movies contiene ", countMovies(), " film");

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
const onlyTheYears = function () {
  const allYears = [];
  for (let i = 0; i < movies.length; i++) {
    allYears.push(movies[i].Year);
  }
  console.log("Tutti gli anni dei film", allYears);
};

onlyTheYears();

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

const onlyInLastMillennium = function (array) {
  const newMovies = array.filter((x) => {
    return parseInt(x.Year) > 1999;
  });

  console.log(newMovies);
};

onlyInLastMillennium(movies);

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

const sumAllTheYears = function (array) {
  const sumYears = array.reduce((Total, Acc) => {
    return (Total += parseInt(Acc.Year));
  }, 0);

  console.log(sumYears);
};

sumAllTheYears(movies);

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
//

const searchByTitle = function (stringa) {
  const movieTitle = movies.filter((movie) => {
    return movie.Title.toLowerCase().includes(stringa.toLowerCase());
  });
  console.log(movieTitle);
};
searchByTitle("avengers");

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

const match=[]
const unmatch=[]

const searchAndDivide = function (stringa) {
  movies.forEach((movie) => {
    if (movie.Title.toLocaleLowerCase().includes(stringa.toLowerCase())) {
      match.push(movie);
    } else {
      unmatch.push(movie);
    }
  });
  return { match, unmatch };
};
console.log(searchAndDivide("avengers"));

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

const removeIndex = function (number, array) {
  array.splice(number, 1);
  return array;
};
console.log(removeIndex(10, movies));
// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
const getContainer = function () {
  const Container = document.getElementById("container");
};
getContainer();

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
const allTd = function () {
  const TableData = document.getElementsByTagName("td");
  console.log(TableData);
};
allTd();

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
const writeInsideTd = function () {
  const TableData = document.getElementsByTagName("td");
  const writtenInside = [];
  for (let i = 0; i < TableData.length; i++) {
    writtenInside.push(TableData[i].innerText);
  }
  return writtenInside;
};
console.log(writeInsideTd());

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

const RedBack = function () {
  const links = document.querySelectorAll("body a");
  console.log(links);
  for (let i = 0; i < links.length; i++) {
    links[i].style.background = "red";
  }
};
RedBack();

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
const newLiElement = function () {
  const newLi = document.createElement("li");
  const uList = document.getElementById("myList");
  uList.appendChild(newLi);
};

newLiElement();

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
const noLiElement = function () {
  const uList = document.getElementById("myList");
  const listBabies = document.getElementsByTagName("li");

  for (let i = 0; i < listBabies.length; i++) {
    uList.removeChild(listBabies[i]);
  }
};
noLiElement();

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

const addClassTr = function () {
  const Trs = document.getElementsByTagName("tr");
  for (let i = 0; i < Trs.length; i++) {
    Trs[i].classList.add("test");
  }
};
addClassTr();

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *

  **
  ***

*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

/* Questo array viene usato per gli esercizi. Non modificarlo. */
