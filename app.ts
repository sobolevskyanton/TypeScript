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

/*
Необходимо сделать корзину (Cart) на сайте,

которая имееет список продуктов (Product), добавленных в корзину

и переметры доставки (Delivery). Для Cart реализовать методы:

Добавить продукт в корзину
Удалить продукт из корзины по ID
Посчитать стоимость товаров в корзине
Задать доставку
Checkout - вернуть что всё ок, если есть продукты и параметры доставки
Product: id, название и цена

Delivery: может быть как до дома (дата и адрес) или до пункта выдачи (дата = Сегодня и Id магазина)
*/



class Cart {
    private products: Product[] = [];
    private delivery: HomeDelivery | PickUpDelivery | null = null;

    private findIndexById(productId: number): number {
        return this.products.findIndex(p => p.id === productId);
    }

    addProduct(product: Product): void {
        this.products.push(product)
    }

    removeProduct(productId: number): void {
        const index = this.findIndexById(productId);
        if(index !== -1) {
            this.products.splice(index,1)
        }
        
    }

    totalPrice(): number {
        return this.products.reduce((sum, product) => sum + product.price,0)
        
    }
    
    

    checkout(): void {
        if(this.products.length !== 0 && this.delivery) {
            console.log('Success');
        } else {
            throw new Error('Please add product and set delivery method')
        }
    }

    setDelivery(delivery: HomeDelivery | PickUpDelivery): void {
        this.delivery = delivery;
    }

    
}

class Product {
    id: number;
    name: string;
    price: number;

    constructor(id: number, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}


abstract class Delivery {
    constructor (public date: Date) {}
}

class HomeDelivery extends Delivery {
    address: string;
    
    constructor(date: Date, address: string) {
        super(date)
        this.address = address
    }
}

class PickUpDelivery extends Delivery {
    id: string;
    
    constructor(date: Date, id: string) {
        super(date)
        this.id = id
    }
}

//const testDelivery = new HomeDelivery();

//console.log(testDelivery)

const Cart1 = new Cart()





Cart1.addProduct(new Product(1,'test',5));
Cart1.addProduct(new Product(2,'test2',10));

const totalPrice = Cart1.totalPrice();

Cart1.setDelivery(new HomeDelivery(new Date(), 'Test address'))

console.log(totalPrice);
console.log(Cart1);

console.log(Cart1.checkout());





/*
Необходимо реализовать абстрактный класс Logger с 2-мя методами абстрактным 
- log(message): void и printDate - выводящий в log дату.

К нему необходимо сделать реальный класс, который бы имел метод: 
logWithDate,выводящий сначала дату, а потом заданное сообщение
*/


abstract class Logger {
    abstract log(message: string): void;
    printDate(date:Date): void {
        this.log(date.toString())
    }
}


class myLogger extends Logger{
    log(message: string): void {
        console.log(message);
    }
    printWithDate(date: Date, message: string): void {
        this.printDate(date);
        this.log(message);
    }
}


const log = new myLogger()


log.printWithDate(new Date, 'test');





/*

Описание: Создайте простой класс Product с одним свойством name типа string и конструктором для его инициализации. 
Создайте экземпляр класса и выведите значение свойства в консоль.

Входные данные: Встроенные данные - название продукта как строка

Выходные данные: Вывод в консоль значения свойства name

Ограничения:

Класс должен иметь только одно свойство name типа string
Конструктор должен принимать один параметр для инициализации свойства
Необходимо создать экземпляр класса и вывести свойство
Примеры:
Входные данные: название продукта "Laptop"
Output: Laptop

Входные данные: название продукта "Phone" 
Output: Phone

*/


class Product1 {
    constructor(public name:string) {}
}

const p1 = new Product1('Laptop')
console.log(p1.name)




/*

// **Описание**: Создайте класс Car с приватным свойством speed типа number и методом accelerate(), который увеличивает скорость на 10. 
// Добавьте метод getSpeed() для получения текущей скорости. Создайте экземпляр и продемонстрируйте работу методов.
//
// **Входные данные**: Встроенные данные - начальная скорость 0
//
// **Выходные данные**: Вывод в консоль текущей скорости после ускорения
//
// **Ограничения**: 
// - Свойство speed должно быть приватным
// - Метод accelerate() увеличивает скорость на 10
// - Метод getSpeed() возвращает текущую скорость
// - Необходимо создать экземпляр и вызвать методы
//
// **Примеры**:
// Входные данные: начальная скорость 0
// Output: 10
//
// Входные данные: после двух вызовов accelerate()
// Output: 20

*/


class Car {
    private speed: number = 0;
    accelerate(): number {
        this.speed += 10;
        return this.speed;
    }
    getSpeed(): number {
        return this.speed;
    }
}

const car = new Car()
console.log(car.getSpeed());
console.log(car.accelerate());
console.log(car.getSpeed());
console.log(car.accelerate());
console.log(car.getSpeed());




/*

// **Описание**: Создайте класс Book с приватным свойством pages типа number и геттером getPages() для получения количества страниц. 
// Инициализируйте свойство через конструктор и продемонстрируйте работу геттера.
//
// **Входные данные**: Встроенные данные - количество страниц как число
//
// **Выходные данные**: Вывод в консоль количества страниц через геттер
//
// **Ограничения**: 
// - Свойство pages должно быть приватным
// - Конструктор должен принимать параметр для инициализации pages
// - Геттер getPages() должен возвращать значение приватного свойства
// - Необходимо создать экземпляр и вызвать геттер
//
// **Примеры**:
// Входные данные: количество страниц 250
// Output: 250
//
// Входные данные: количество страниц 180
// Output: 180

class Book {
    // Ваш код здесь
}

// Ваш код здесь

*/

class Book {
    private _pages: number;

    get getPages(): number {
        return this._pages
    }
    constructor(_pages: number) {
        this._pages = _pages
    }
}

const book1 = new Book(5);

console.log(book1.getPages)




/*

// **Описание**: Создайте класс Student с приватным свойством grade типа number и сеттером setGrade(), 
// который устанавливает оценку только если она находится в диапазоне от 1 до 5. 
// Создайте экземпляр класса и продемонстрируйте работу сеттера.
//
// **Входные данные**: Встроенные данные - различные значения оценок для проверки валидации
//
// **Выходные данные**: Вывод в консоль значения приватного свойства grade после попыток установки
//
// **Ограничения**: 
// - Свойство grade должно быть приватным
// - Сеттер setGrade() должен принимать число и устанавливать значение только если оно от 1 до 5 включительно
// - При некорректном значении свойство не должно изменяться
// - Необходимо создать экземпляр и продемонстрировать валидацию
//
// **Примеры**:
// Входные данные: попытка установить grade = 4
// Output: 4
//
// Входные данные: попытка установить grade = 7, затем grade = 3
// Output: 3

class Student {
    // Ваш код здесь
}

*/


class Student {
    private _grade: number | undefined;

    set grade(value: number) {
        if(value >= 1 && value <= 5) {
            this._grade = value;
            console.log(this._grade);
        } else {
            console.log('error')
        }
    }

    constructor(grade?: number) {
        if(grade !== undefined) {
            this.grade = grade;
        }
        
    }
}


const student1 = new Student()

student1.grade = 4
student1.grade = 7
student1.grade = 3




// **Описание**: Создайте класс Library с статическим свойством totalBooks типа number (инициализированным значением 0) 
// и статическим методом addBook(), который увеличивает totalBooks на 1. 
// Продемонстрируйте работу статического метода и вывод статического свойства.
//
// **Входные данные**: Встроенные данные - работа со статическими членами класса без создания экземпляров
//
// **Выходные данные**: Вывод в консоль значения статического свойства totalBooks после вызовов статического метода
//
// **Ограничения**: 
// - Свойство totalBooks должно быть статическим и типа number
// - Метод addBook() должен быть статическим и увеличивать totalBooks на 1
// - Не создавать экземпляры класса - работать только со статическими членами
// - Продемонстрировать несколько вызовов addBook() и вывод результата
//
// **Примеры**:
// Входные данные: вызов Library.addBook() один раз
// Output: 1
//
// Входные данные: вызов Library.addBook() три раза
// Output: 3



class Library {
    static totalBooks: number = 0;
    static addBook(): void {
        this.totalBooks ++;
    }
}


console.log(Library.totalBooks);
Library.addBook();
console.log(Library.totalBooks);





/*

// **Описание**: Создайте класс Rectangle с двумя приватными свойствами width и height типа number. 
// Добавьте конструктор для инициализации этих свойств и метод getArea(), который возвращает площадь прямоугольника. 
// Создайте экземпляр класса и выведите площадь в консоль.
//
// **Входные данные**: Встроенные данные - ширина и высота прямоугольника как числа
//
// **Выходные данные**: Вывод в консоль площади прямоугольника
//
// **Ограничения**: 
// - Свойства width и height должны быть приватными и типа number
// - Конструктор должен принимать два параметра для инициализации свойств
// - Метод getArea() должен возвращать произведение width и height
// - Необходимо создать экземпляр класса и вывести результат
//
// **Примеры**:
// Входные данные: ширина 5, высота 3
// Output: 15
//
// Входные данные: ширина 7, высота 4
// Output: 28

class Rectangle {
    // Ваш код здесь
}

*/



class Rectangle {
    private width: number;
    private height: number; 

    constructor(width:number, height: number) {
        this.width = width;
        this.height = height;
    }

    getArea(): number {
        return this.width*this.height;
    }
}


const rect = new Rectangle(5,6);

console.log(rect.getArea());




// **Описание**: Создайте класс Employee с защищенным свойством department типа string и создайте подкласс Manager, 
// который наследует от Employee. В подклассе добавьте метод getDepartment(), 
// который возвращает значение защищенного свойства. Создайте экземпляр Manager и выведите департамент в консоль.
//
// **Входные данные**: Встроенные данные - название департамента как строка
//
// **Выходные данные**: Вывод в консоль названия департамента через метод подкласса
//
// **Ограничения**: 
// - Свойство department должно быть защищенным (protected)
// - Класс Manager должен наследовать от Employee
// - Конструктор Employee должен инициализировать department
// - Метод getDepartment() должен быть в подклассе Manager
// - Необходимо использовать super() в конструкторе подкласса
//
// **Примеры**:
// Входные данные: департамент "IT"
// Output: IT
//
// Входные данные: департамент "Sales"
// Output: Sales

class Employee {
    protected department: string;
    constructor(department: string) {
        this.department = department;
    }
}

class Manager extends Employee {
    getDepartment() {
        return this.department;
    }
    constructor(department:string) {
        super(department);
    }
}


const manager = new Manager('test department');
console.log(manager.getDepartment());



// **Описание**: Создайте абстрактный класс Shape с абстрактным методом getArea() и создайте конкретный класс Circle, 
// который наследует от Shape и реализует метод getArea() для вычисления площади круга. 
// Создайте экземпляр Circle и выведите площадь в консоль.
//
// **Входные данные**: Встроенные данные - радиус круга как число
//
// **Выходные данные**: Вывод в консоль площади круга
//
// **Ограничения**: 
// - Класс Shape должен быть абстрактным с абстрактным методом getArea()
// - Класс Circle должен наследовать от Shape
// - Метод getArea() в Circle должен возвращать площадь круга (π * r²)
// - Необходимо создать экземпляр Circle и вывести результат
//
// **Примеры**:
// Входные данные: радиус 3
// Output: 28.274333882308138
//
// Входные данные: радиус 5
// Output: 78.53981633974483

// Ваш код здесь


abstract class Shape {
    abstract getArea(): number
}

class Circle extends Shape {
    radius:number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    getArea(): number {
        return Math.PI*this.radius*this.radius;
    }
}

const circle = new Circle(5);
console.log(circle.getArea());



// **Описание**: Создайте интерфейс Vehicle с двумя свойствами: brand (строка) и year (число). 
// Затем создайте класс Motorcycle, который реализует этот интерфейс. 
// Добавьте конструктор для инициализации свойств и создайте экземпляр класса.
//
// **Входные данные**: Встроенные данные - марка мотоцикла как строка и год выпуска как число
//
// **Выходные данные**: Вывод в консоль значений свойств brand и year созданного экземпляра
//
// **Ограничения**: 
// - Интерфейс Vehicle должен содержать свойства brand: string и year: number
// - Класс Motorcycle должен реализовывать интерфейс Vehicle
// - Конструктор должен принимать два параметра для инициализации свойств
// - Необходимо создать экземпляр класса и вывести оба свойства
//
// **Примеры**:
// Входные данные: марка "Yamaha", год 2020
// Output: Yamaha 2020
//
// Входные данные: марка "Honda", год 2019
// Output: Honda 2019


// Ваш код здесь


interface Vehicle {
    brand: string;
    year: number;
}

class Motorcycle implements Vehicle {

    constructor(public brand: string, public year: number) {

    }
}

const mot = new Motorcycle('test', 2005)
console.log(mot.brand);
console.log(mot.year)



// **Описание**: Создайте класс BankAccount с приватным свойством balance типа number и методом withdraw(), 
// который уменьшает баланс на указанную сумму только если на счету достаточно средств. 
// Добавьте метод getBalance() для получения текущего баланса. Создайте экземпляр класса и продемонстрируйте работу методов.
//
// **Входные данные**: Встроенные данные - начальный баланс и сумма для снятия как числа
//
// **Выходные данные**: Вывод в консоль текущего баланса после операций
//
// **Ограничения**: 
// - Свойство balance должно быть приватным и типа number
// - Конструктор должен принимать начальный баланс
// - Метод withdraw() должен уменьшать баланс только при достаточных средствах
// - Метод getBalance() должен возвращать текущий баланс
// - При недостатке средств баланс не должен изменяться
//
// **Примеры**:
// Входные данные: начальный баланс 1000, снятие 300
// Output: 700
//
// Входные данные: начальный баланс 500, попытка снять 600, затем снять 200
// Output: 300

class BankAccount {
    private balance: number;
    withdraw(value: number): void {
        if( value <= this.balance) {
            this.balance -= value;
        } else {
            console.log('not enough money');
        }  
    }
    getBalance() {
        return this.balance;
    }
    constructor(balance:number) {
        this.balance = balance;
    }
}

const account = new BankAccount(500);

account.withdraw(100);

console.log(account.getBalance());

account.withdraw(500);
console.log(account.getBalance());


// Ваш код здесь