let containerTest = document.querySelectorAll(".container > p");
console.log(containerTest);
let listTest = document.querySelectorAll(".list > li");
console.log(listTest);

let listSecondTest = document.querySelectorAll(".listSecond > .row");
console.log(listSecondTest);

let arrayNumbers = [12, 3, 23, 54];
console.log(arrayNumbers[2]);

if (arrayNumbers.includes(123)) {
  console.log("ok finded");
} else {
  console.log("not finded");
}

// array + function
let numbersSecond = [12, 3, 23, 54];
function testArray(number) {
  console.log(number);
}
testArray(numbersSecond);

// object

let car = {
  model: "audi",
  color: "green",
  year: 2022,
}; // key + value

let car_second = {
  model: "renault",
  color: "red",
  year: 2020,
};
console.log(car.color);

// JSON тип данных Json

let cars = [
  {
    model: "audi",
    color: "green",
    year: 2022,
  },
  {
    model: "renault",
    color: "red",
    year: 2020,
  },
];
console.log(cars[0].model);


// конкатенация массивов
let numbers = [12, 3, 23, 54];
let numbersSec = [125, 5, 25, 55];
let result = []
result = result.concat(numbers)
result = result.concat(numbersSec)
console.log(result);

let resultSec = [...numbers, ...numbersSec]
console.log(resultSec);

//    --------  HOMEWORK ------------

// --------- 1 --------
//  a) get first element (выведи первую цифру)
// b) get last element (выведи последнию цифру)
const arr = [1, 2, 3, 4, 5];
console.log(arr[0]);
console.log(arr.at(-1));
// arr.at(i)  arr[i] if i >= 0
// or
// console.log(arr[arr.length - 1])

// --------- 2 --------
// Используйте метод push чтобы добавить «Qiwi» в fruits массив.
const fruits = ["Banana", "Orange", "Apple"];
const fruit_second = fruits.push("Qiwi"); 
console.log(fruits
  );

// --------- 3 --------

myCountry = {  
  continent: "Asia",
  country: "Japan",
};
console.log(myCountry.country);
// Выведи 'Japan'

// --------- 4 --------
// Добавьте к объекту person ключ и значение: country: Norway.
const person = {      
  firstName: "Jony",
  lastName: "Bush",
  // _______:________
};
person.country = "Norway";
console.log(person);

// --------- 5 --------

// Заполните поля чтобы получить в console.log ('Jony is 50')
const pers = {
  name: "John",
  age: 50
};
console.log(pers.name + " is " + pers.age);

// --------- 6 --------
let txt = "Hello World!";
let x = txt;
console.log(x.length);

// --------- 7 --------
// Объедините две строки, чтобы получить «Hello World!».

let str1 = "Hello ";
let str2 = "World!";
// alert(str1 + str2);

// --------- 8 --------
// Преобразуйте текст в верхнем регистре:

let txt_sec = "Hello World!";
let txt_th = txt_sec.toUpperCase();  

console.log(txt_th)  

// --------- 9 --------

let myColor = ["Red", "Green", "White", "Black"];
let text = myColor.toString()
 console.log(text);


