/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics
console.log("-/*-/*-/*-/* JS BASICS -/*-/*-/*-/*");
/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
console.log("-------- ESERCIZIO A --------");
let sum = 10 + 20;
console.log("sum =", sum);
/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
console.log("-------- ESERCIZIO B --------");
let random = Math.floor(Math.random() * 20);
console.log("random =", random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
console.log("-------- ESERCIZIO C --------");
let me = { name: "Vincenzo", surname: "Maiorana", age: 29 };
console.log(me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
console.log("-------- ESERCIZIO D --------");
delete me.age;
console.log(me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
console.log("-------- ESERCIZIO E --------");
me.skills = ["php", "javascript", "c#"];
console.log(me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
console.log("-------- ESERCIZIO F --------");
me.skills.push("python");
console.log(me);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
console.log("-------- ESERCIZIO G --------");
me.skills.splice(me.skills.length - 1, 1);
console.log(me);

// Funzioni
console.log("-/*-/*-/*-/* FUNZIONI -/*-/*-/*-/*");

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
console.log("-------- ESERCIZIO 1 --------");

const dice = () => {
  return Math.floor(Math.random() * 5) + 1;
};
console.log("Il dado dice", dice());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
console.log("-------- ESERCIZIO 2 --------");
const whoIsBigger = (a, b) => {
  return a > b ? a : b;
};
console.log("il numero più grande è", whoIsBigger(3, 5));

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
console.log("-------- ESERCIZIO 3 --------");

const splitMe = (string) => {
  return string.split(" ");
};
console.log(splitMe("Test di splitMe in Javascript"));

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
console.log("-------- ESERCIZIO 4 --------");

const deleteOne = (string, dFirst) => {
  return dFirst === true ? string.slice(1) : string.slice(0, -1);
};
console.log(deleteOne("Ciao a tutti", false));

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
console.log("-------- ESERCIZIO 5 --------");
const onlyLetters = (string) => {
  return string
    .replace(/[0-9]/g, "")
    .split(" ")
    .filter((x) => x !== "")
    .join(" ");
};
console.log(onlyLetters("Avevo 5 conigli e ora ho 3 pecore"));

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

console.log("-------- ESERCIZIO 6 --------");

const isThisAnEmail = (email) => {
  return email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    ? true
    : false;
};
console.log(
  "E' un indirizzo email?",
  isThisAnEmail("vincenzomaiorana@gmail.com")
);

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
console.log("-------- ESERCIZIO 7 --------");
const whatDayIsIt = () => {
  const dayOfWeek = [
    "Domenica",
    "Lunedì",
    "Martedì",
    "Mercoledì",
    "Giovedì",
    "Venerdì",
    "Sabato",
  ];
  return dayOfWeek[new Date().getDay()];
};
console.log("Oggi è", whatDayIsIt());

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

console.log("-------- ESERCIZIO 8 --------");
const rollTheDices = (n) => {
  const values = [];
  for (let i = 0; i < n; i++) {
    values.push(dice());
  }
  sum = values.reduce((a, value) => a + value);
  return { sum, values };
};
console.log(rollTheDices(3));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
console.log("-------- ESERCIZIO 9 --------");
const howManyDays = (data) => {
  let today = new Date();
  let dateTo = new Date(data);
  let timeDiff = today.getTime() - dateTo.getTime();
  return Math.floor(timeDiff / (1000 * 60 * 60 * 24));
};
console.log("Sono passati", howManyDays("2021-12-14"), "giorni");

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
console.log("-------- ESERCIZIO 10 --------");

const isTodayMyBirthday = (birthDate) => {
  const today = new Date();
  const todayObj = {
    anno: today.getFullYear(),
    mese: today.getMonth() + 1,
    giorno: today.getDate(),
  };
  const birth = new Date(birthDate);
  const birthObj = {
    anno: birth.getFullYear(),
    mese: birth.getMonth() + 1,
    giorno: birth.getDate(),
  };

  if (todayObj.mese === birthObj.mese && todayObj.giorno === birthObj.giorno) {
    return true;
  } else {
    return false;
  }
};
console.log("E' il mio compleanno?", isTodayMyBirthday("2022-12-17"));

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
console.log("-------- ESERCIZIO 11 --------");

const oggetto11 = {
  nome: "Vincenzo",
  cognome: "Maiorana",
  età: 29,
  altezza: 183,
};
const deleteProp = (obj, str) => {
  delete obj[str];
  return obj;
};
console.log(deleteProp(oggetto11, "età"));

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

const newestMovie = (array) => {
  let lastYearSet = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i].Year > lastYearSet) {
      lastYearSet = array[i].Year;
      newer = array[i];
    }
  }
  return newer;
};

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
const countMovies = (array) => {
  return array.filter((movie) => movie.Type === "movie").length;
};

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
const onlyTheYears = (array) => {
  return array.map((x) => x.Year);
};

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
const onlyInLastMillennium = (array) => {
  return array.filter((x) => x.Year >= "2000");
};

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
const sumAllTheYears = (array) => {
  return array.map((x) => parseInt(x.Year)).reduce((a, y) => a + y);
};

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
const searchByTitle = (array, text) => {
  return array.filter(
    (x) => x.Title.toLowerCase().search(text.toLowerCase()) > 0
  );
};

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

const searchAndDivide = (array, text) => {
  const queryResult = { match: [], unmatch: [] };
  for (let i = 0; i < array.length; i++) {
    if (array[i].Title.toLowerCase().search(text.toLowerCase()) > 0) {
      queryResult.match.push(array[i]);
    } else {
      queryResult.unmatch.push(array[i]);
    }
  }
  return queryResult;
};

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

const removeIndex = (array, index) => {
  array.splice(index, 1);
  return array;
};

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)
console.log("-/*-/*-/*-/* DOM -/*-/*-/*-/*");

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
console.log("-------- ESERCIZIO 20 --------");

const selID = (string) => {
  return document.getElementById(string);
};
console.log(selID("container"));
/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
console.log("-------- ESERCIZIO 21 --------");

const selTds = () => {
  return document.getElementsByTagName("td");
};
console.log(selTds());

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
console.log("-------- ESERCIZIO 22 --------");
const whatsIn = (sel) => {
  for (let i = 0; i < sel.length; i++) {
    console.log(sel[i].innerText);
  }
};
whatsIn(selTds());

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
const aBgRed = () => {
  console.log("-------- ESERCIZIO 23 --------");
  const aElements = document.getElementsByTagName("a");
  for (let a = 0; a < aElements.length; a++) {
    aElements[a].style = "background-color: red";
  }
  console.log("Ho aggiunto il background ROSSO a tutti gli elmenti A");
};
aBgRed();

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
const newLine = (string) => {
  console.log("-------- ESERCIZIO 24 --------");
  const list = document.getElementById("myList");
  const newLine = document.createElement("li");
  newLine.innerHTML = string;
  list.append(newLine);
  console.log("Ho aggiunto una nuova riga a #myList");
};
newLine("Questa stringa l'ho aggiunta in JavaScript");

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

const removeAllLis = () => {
  console.log("-------- ESERCIZIO 25 --------");
  const ulElements = document.querySelector("#myList");
  ulElements.innerHTML = "";
  console.log("Ho rimosso tutti gli item della lista #myList");
};
removeAllLis();

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

const trTest = () => {
  console.log("-------- ESERCIZIO 26 --------");
  const trElements = document.getElementsByTagName("tr");
  for (let a = 0; a < trElements.length; a++) {
    trElements[a].classList.add("test");
  }
  console.log("Ho aggiunto la classe TEST a tutti gli elmenti TR");
};
trTest();

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

/* console.log("-------- ESERCIZIO 12 --------");
console.log(`Il film più nuovo è:`, newestMovie(movies));
console.log("-------- ESERCIZIO 13 --------");
console.log(`Ci sono:`, countMovies(movies), "film nell'array");
console.log("-------- ESERCIZIO 14 --------");
console.log(onlyTheYears(movies));
console.log("-------- ESERCIZIO 15 --------");
console.log(onlyInLastMillennium(movies));
console.log("-------- ESERCIZIO 16 --------");
console.log(sumAllTheYears(movies));
console.log("-------- ESERCIZIO 17 --------");
console.log(searchByTitle(movies, "salem"));
console.log("-------- ESERCIZIO 18 --------");
console.log(searchAndDivide(movies, "lord"));
console.log("-------- ESERCIZIO 19 --------");
console.log(removeIndex(movies, 1));
 */
