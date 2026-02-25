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


enum Status {
  Pending = 1,
  Processing=2,
  Shipped=3,
  Delivered=4
}

let currentStatus:Status = Status.Pending;
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



