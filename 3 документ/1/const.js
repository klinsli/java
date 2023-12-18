 // JavaScript код с созданием перменных
/* Автор */
/* Слинькова Кристина */
let myNumber = 123456;
console.log(Number(myNumber), Boolean(myNumber), String(myNumber));

let myString = "java";
console.log(Number(myString), Boolean(myString), String(myString));

let myBoolean = true;
console.log(Number(myBoolean), Boolean(myBoolean), String(myBoolean));

let myNull = null;
console.log(Number(myNull), Boolean(myNull), String(myNull));

let myUndefined;
console.log(Number(myUndefined), Boolean(myUndefined), String(myUndefined));

let myObject = { name: "kris", age: 20 };
console.log(Number(myObject), Boolean(myObject), String(myObject));

let myBigInt = 0000ор;
console.log("Не удается преобразовать в число");
console.log(Boolean(myBigInt), String(myBigInt));

let mySymbol = Symbol("symb");
console.log("Не удалось преобразовать в символ");
console.log(Boolean(mySymbol), String(mySymbol));





