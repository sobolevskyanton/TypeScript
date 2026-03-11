const a = 1;
let revenue: number = 1000;
let bonus: number = 500;
let res: number = revenue + bonus;
console.log(res);

let info : {
    officeID: number;
    isOpened: boolean;
    contacts: {
        phone: string;
        email: string;
        address: {
            city: string;
        }
    }

}


const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNumbers = numbers.filter(i => i % 2 === 0);
console.log(evenNumbers);


enum Status1 {
  Pending = 1,
  Processing=2,
  Shipped=3,
  Delivered=4
}

let currentStatus:Status1 = Status1.Pending;
console.log(currentStatus);


let product: [number, string, number];

 product = [1,'test',2];
 console.log(product[0]);
 console.log(product[1]);
 console.log(product[2])


 let book: {
    title: string;
    pages: number;
    available: boolean;
 }
 book = {
    title: "test",
    pages: 1,
    available: true
 }
 console.log(book.title);
 console.log(book.pages);
 console.log(book.available);




 let cities: string[];
 cities = ["Минск", "Екатеринбург", "Челябинск"];
 let searchLetter: string = "е";
 console.log(cities.filter((city:string) => city.toLowerCase().includes(searchLetter.toLowerCase()) ))




 const numberss: readonly number[] = [1,2,3];

//numberss[0] = 100;

let strUnion: string | number = "test";

function detectType(str: string | number): string {
 return `Тип переменной: ${typeof(str)}`;
}

console.log(detectType(strUnion));


let data: any = "test";

console.log(typeof(data = "test"));
console.log(typeof(data = 4));
console.log(typeof(data = true));


let nullValue: null = null;

console.log(typeof(nullValue));

let missingData: undefined = undefined;

console.log(typeof(missingData));


type Status = 'success' | 'failed';



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


type ID = string | number;

function printId(id: ID): void {
    if(typeof id === 'string') {
        console.log(`String ID: ${id}`);
    } else {
        console.log(`Number ID: ${id}`);
    }
}

testIds.forEach(id => {
    printId(id)
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
  {id: 1, name: "Laptop", price: 999.99},
  {id: 2, name: "Mouse", price: 25.50, description: "Wireless optical mouse"},
  {id: 3, name: "Keyboard", price: 75.00, description: "Mechanical gaming keyboard"}
];

// Ваш код здесь


interface Products {
    id: number,
    name: string,
    price: number,
    description?: string
}

function productInfo(product: Products): void {
    if('description' in product) {
        console.log(`Product: ${product.name} - $${product.price} (${product.description})`);
    } else {
        console.log(`Product: ${product.name} - $${product.price} (No description)`);
    }
}

products.forEach(product => {
    productInfo(product);
});






// **Описание**: Создайте type guard функцию для проверки типа объекта и используйте её для безопасной обработки данных
//
// **Входные данные**: Встроенные в код объекты разных типов для тестирования
//
// **Выходные данные**: Вывод в консоль результата проверки и обработки объектов
//
// **Ограничения**: Объекты могут быть типа Admin или Guest с разными свойствами
//
// **Примеры**:
// Input: {role: "admin", name: "John", permissions: ["read", "write"]}
// Output: "Admin John has 2 permissions"
//
// Input: {role: "guest", name: "Jane"}
// Output: "Guest Jane has limited access"

interface Admin {
  role: 'admin'
  name: string
  permissions: string[]
}

interface Guest {
  role: 'guest'
  name: string
}

type User = Admin | Guest

// Ваш код здесь

const testUsers: User[] = [
  { role: 'admin', name: 'John', permissions: ['read', 'write'] },
  { role: 'guest', name: 'Jane' },
  { role: 'admin', name: 'Bob', permissions: ['read', 'write', 'delete'] }
]

// Ваш код здесь


function isAdmin(obj: User): obj is Admin {
    return 'permissions' in obj;
}

function defineUser(user: User): void {
    if(isAdmin(user)) {
        console.log(`Admin ${user.name} has ${user.permissions.length} permissions`);
    } else {
        console.log(`Guest ${user.name} has limited access`);
    }
}


testUsers.forEach(user => {
    defineUser(user)
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
const testStatuses: Status2[] = ['pending', 'shipped', 'delivered', 'cancelled'];

// Ваша реализация



type Status2 = 'pending' | 'shipped' | 'delivered' | 'cancelled';

const pending = 'pending';

function setStatus(status: Status2): void {
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
    setStatus(pending)
});



// **Описание**: Создайте mapped type для преобразования всех свойств объекта в опциональные и функцию для работы с таким объектом
//
// **Входные данные**: Встроенные в код объекты для тестирования
//
// **Выходные данные**: Вывод в консоль результата обработки объекта с опциональными свойствами
//
// **Ограничения**: Исходный объект имеет обязательные свойства, преобразованный - все опциональные
//
// **Примеры**:
// Input: {name: "Alice", age: 30}
// Output: "Processing: Alice (age: 30)"
//
// Input: {name: "Bob"}
// Output: "Processing: Bob (age: unknown)"

// Ваш код здесь


interface User3 {
    name: string;
    age: number;
}

type OptionalUser = {
    [K in keyof User3]?: User3[K];
}

function processUser(user: OptionalUser): void {
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