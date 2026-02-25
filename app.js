"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const a = 1;
let revenue = 1000;
let bonus = 500;
let res = revenue + bonus;
console.log(res);
let info;
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = numbers.filter(i => i % 2 === 0);
console.log(evenNumbers);
var Status;
(function (Status) {
    Status[Status["Pending"] = 1] = "Pending";
    Status[Status["Processing"] = 2] = "Processing";
    Status[Status["Shipped"] = 3] = "Shipped";
    Status[Status["Delivered"] = 4] = "Delivered";
})(Status || (Status = {}));
let currentStatus = Status.Pending;
console.log(currentStatus);
let product;
product = [1, 'test', 2];
console.log(product[0]);
console.log(product[1]);
console.log(product[2]);
let book;
book = {
    title: "test",
    pages: 1,
    available: true
};
console.log(book.title);
console.log(book.pages);
console.log(book.available);
let cities;
cities = ["Минск", "Екатеринбург", "Челябинск"];
let searchLetter = "е";
console.log(cities.filter((city) => city.toLowerCase().includes(searchLetter.toLowerCase())));
const numberss = [1, 2, 3];
//numberss[0] = 100;
let strUnion = "test";
function detectType(str) {
    return `Тип переменной: ${typeof (str)}`;
}
console.log(detectType(strUnion));
let data = "test";
console.log(typeof (data = "test"));
console.log(typeof (data = 4));
console.log(typeof (data = true));
let nullValue = null;
console.log(typeof (nullValue));
let missingData = undefined;
console.log(typeof (missingData));
//# sourceMappingURL=app.js.map