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
var Status1;
(function (Status1) {
    Status1[Status1["Pending"] = 1] = "Pending";
    Status1[Status1["Processing"] = 2] = "Processing";
    Status1[Status1["Shipped"] = 3] = "Shipped";
    Status1[Status1["Delivered"] = 4] = "Delivered";
})(Status1 || (Status1 = {}));
let currentStatus = Status1.Pending;
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
// **Описание**: Создайте type alias для объединения типов и функцию для обработки идентификатора пользователя
// **Входные данные**: Встроенные в код значения разных типов для тестирования
// **Выходные данные**: Вывод в консоль обработанного идентификатора с указанием его типа
// **Ограничения**: Идентификатор может быть строкой или числом
// **Примеры**:
// Input: "user123"
// Output: "String ID: user123"
// Input: 42
// Output: "Number ID: 42"
// Ваш код здесь
// Тестовые данные
const testIds = ["user123", 42, "admin456", 999];
function printId(id) {
    if (typeof id === 'string') {
        console.log(`String ID: ${id}`);
    }
    else {
        console.log(`Number ID: ${id}`);
    }
}
testIds.forEach(id => {
    printId(id);
});
// **Описание**: Создайте интерфейс для объекта товара и функцию для отображения информации о товаре
//
// **Входные данные**: Встроенные в код объекты товаров для тестирования
//
// **Выходные данные**: Вывод в консоль информации о товаре с проверкой опциональных свойств
//
// **Ограничения**: Товар имеет обязательные поля (id, name, price) и опциональное поле (description)
//
// **Примеры**:
// Input: {id: 1, name: "Laptop", price: 999.99}
// Output: "Product: Laptop - $999.99 (No description)"
//
// Input: {id: 2, name: "Mouse", price: 25.50, description: "Wireless optical mouse"}
// Output: "Product: Mouse - $25.50 (Wireless optical mouse)"
// Ваш код здесь
// Тестовые данные
const products = [
    { id: 1, name: "Laptop", price: 999.99 },
    { id: 2, name: "Mouse", price: 25.50, description: "Wireless optical mouse" },
    { id: 3, name: "Keyboard", price: 75.00, description: "Mechanical gaming keyboard" }
];
function productInfo(product) {
    if ('description' in product) {
        console.log(`Product: ${product.name} - $${product.price} (${product.description})`);
    }
    else {
        console.log(`Product: ${product.name} - $${product.price} (No description)`);
    }
}
products.forEach(product => {
    productInfo(product);
});
// Ваш код здесь
const testUsers = [
    { role: 'admin', name: 'John', permissions: ['read', 'write'] },
    { role: 'guest', name: 'Jane' },
    { role: 'admin', name: 'Bob', permissions: ['read', 'write', 'delete'] }
];
// Ваш код здесь
function isAdmin(obj) {
    return 'permissions' in obj;
}
function defineUser(user) {
    if (isAdmin(user)) {
        console.log(`Admin ${user.name} has ${user.permissions.length} permissions`);
    }
    else {
        console.log(`Guest ${user.name} has limited access`);
    }
}
testUsers.forEach(user => {
    defineUser(user);
});
// **Описание**: Создайте literal тип для статуса заказа и функцию для обработки изменения статуса
//
// **Входные данные**: Встроенные в код значения статусов для тестирования
//
// **Выходные данные**: Вывод в консоль сообщения о смене статуса
//
// **Ограничения**: Статус может быть только 'pending', 'shipped', 'delivered' или 'cancelled'
//
// **Примеры**:
// Input: 'pending'
// Output: "Order status changed to: pending - Awaiting processing"
//
// Input: 'shipped'
// Output: "Order status changed to: shipped - Package in transit"
//
// Input: 'delivered'
// Output: "Order status changed to: delivered - Order completed"
//
// Input: 'cancelled'
// Output: "Order status changed to: cancelled - Order terminated"
// Ваш код здесь
// Тестовые данные
const testStatuses = ['pending', 'shipped', 'delivered', 'cancelled'];
const pending = 'pending';
function setStatus(status) {
    switch (status) {
        case 'pending':
            console.log("Order status changed to: pending - Awaiting processing");
            break;
        case 'shipped':
            console.log("Order status changed to: shipped - Package in transit");
            break;
        case 'delivered':
            console.log("Order status changed to: delivered - Order completed");
            break;
        case 'cancelled':
            console.log("Order status changed to: cancelled - Order terminated");
            break;
        default:
            break;
    }
}
testStatuses.forEach(item => {
    setStatus(pending);
});
function processUser(user) {
    const name = user.name ?? "Unknown";
    const age = user.age ?? "unknown";
    console.log(`Processing: ${name} (age: ${age})`);
}
/*
const url = 'https://dummyjson.com/users';
let userData = null;

interface Response {
    users: User[],


}

async function fetchApi(url: string) {
    try {
        const response = await fetch(url);
    
        if(!response.ok) {
        throw new Error ('Something went wrong')
    }
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.log('Error: ' , error);
        
    }

}

async function startApp() {
    userData = await fetchApi(url);
    console.log(userData);
}

startApp()


*/ 
//# sourceMappingURL=app.js.map