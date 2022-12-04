import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>`;

//1

console.log("TYPE 1");

function multpler(num: number) {
  return num * 2;
}
console.log(`multipler ${multpler(2)}`);

console.log();
console.log();
console.log();
console.log();
console.log();

// ----------------------------------------------------

//2

console.log("TYPE 2");

function sumOfArray(arr: number[]) {
  return arr.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
}

function sumAr(arr: Array<number>) {
  return arr.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
}

console.log(`sum of array is ${sumOfArray([1, 2, 3, 4])}`);
console.log(`sum of ar is  ${sumAr([1, 2, 3, 4])}`);

console.log();
console.log();
console.log();
console.log();
console.log();
console.log();

// ----------------------------------------------------

// 3
console.log("TYPE 3 BENEFITS OF USING TYPESCRIPT ");

const obj = {
  firtName: "archit",
  lastName: "jain",
  city: "delhi"
};

console.log(obj.firtName);

console.log();
console.log();
console.log();
console.log();
console.log();

// ------------------------------------------------

//4
//type alias

// number
// string
// boolean
// number[] or string[]

console.log("TYPE 4 HOW TO DEFINE TYPE ALIAS");

type User = {
  name: string;
  city: string;
  mobile: number;
  country?: string; // ? is used for optional property in type alias
};

const user: User = {
  name: "ajay",
  city: "delhi",
  mobile: 902789223
};

console.log(user);

console.log();
console.log();
console.log();
console.log();

// ----------------------------------------------------

//5
// function ki return type

console.log("TYPE 5 RETURN TYPE OF FUCNTION");

function login(userData: User): User {
  return userData;
}

console.log(login(user));
console.log(
  login({ name: "ritika", city: "delhi", country: "india", mobile: 901321 })
);

console.log();
console.log();
console.log();
console.log();
console.log();

// ----------------------------------------------------

// TYPE 6

console.log("TYPE 6 HEAVY FEATURE OF TYPESCRIPT");

type ID = number | string;
const userId: ID = 1234;
console.log(userId);

console.log();
console.log();
console.log();
console.log();
console.log();

// ----------------------------------------------------

// TYPE 7

console.log("TYPE 7 INTERFACE");

interface Transaction {
  payerAccountNumber: number;
  payeeAccountNumber: number;
}

interface BankAccount {
  accountNumber: number;
  accountHolder: string;
  balance: number;
  isActive: boolean;
  transcations: Transaction[];
}

const bankAccount: BankAccount = {
  accountNumber: 123,
  accountHolder: "deepak",
  balance: 4000,
  isActive: true,
  transcations: [
    { payerAccountNumber: 123, payeeAccountNumber: 456 },
    { payerAccountNumber: 123, payeeAccountNumber: 567 }
  ]
};
console.log(bankAccount);

console.log();
console.log();
console.log();
console.log();
console.log();

// ----------------------------------------------------

// TYPE 8
console.log("TYPE 8 EXTENDING OF INTERFACE");

interface Book {
  name: string;
  price: number;
}

interface Ebook extends Book {
  fileSize: number;
  format: string;
}

interface AudioBook extends Ebook {
  duration: number;
}

const book: Book = {
  name: "rd sharma",
  price: 120
};
console.log("book ", book);

const ebook: Ebook = {
  name: "amazon audio book",
  price: 999,
  fileSize: 500,
  format: "mp4"
};
console.log("ebook is " + JSON.stringify(ebook));

const audioBook: AudioBook = {
  duration: 30,
  fileSize: 450,
  format: "mp4",
  name: "sachin ",
  price: 99
};
console.log("audiobook " + JSON.stringify(audioBook));

console.log();
console.log();
console.log();
console.log();
console.log();

//9
//TYPE 9 MERGING OF INTERFACE
console.log("TYPE 9 MERGING OF INTERFACE");

interface Car {
  name: string;
  price: number;
}
interface Car {
  numberOfWheels: number;
}
const car: Car = {
  name: "swift",
  price: 122323,
  numberOfWheels: 4
};
console.log("Car is " + JSON.stringify(car));

// type ke andar interface jisi merging possible nhi hai
// par interface ke andar primitives(string,number ,...) use nhi krte kunki interface are for objects

/*
type SantiziedString = string;
type EvenNumber = string;

interface SantiziedString extends string
*/

console.log();
console.log();
console.log();
console.log();
console.log();

// ----------------------------------------------------

// TYPE 10
console.log("TYPE 10 UNIONS");

type CardId = number | string;

//NARROWING
function printCardId(cardId: CardId) {
  if (typeof cardId === "string") {
    console.log(cardId.toUpperCase());
  } else {
    console.log(cardId);
  }
}
console.log(printCardId(123));
console.log(printCardId("acbdrf"));

console.log();
console.log();
console.log();
console.log();
console.log();

// ----------------------------------------------------

// TYPE 11
console.log(`TYPE 11 union in function `);

// union in function

function getFirstThree(x: string | number[]) {
  return x.slice(0, 3);
}

console.log(getFirstThree("12345"));
console.log(getFirstThree([1, 2, 3, 4, 5, 6]));

console.log();
console.log();
console.log();
console.log();
console.log();

// ----------------------------------------------------

// TYPE 12
console.log("TYPE 12 GENERICS");

function logAnything<T>(args: T): T {
  console.log(args);
  return args;
}
console.log(logAnything("2323"));
console.log(logAnything(["12", "12", "12", "90"]));

console.log();
console.log();
console.log();
console.log();
console.log();

// ----------------------------------------------------
// TYPE 13
console.log("TYPE 13 GENERIC-2");

interface HasAge {
  age: number;
}

function getOldest<T extends HasAge>(people: T[]): T {
  return people.sort((a, b) => b.age - a.age)[0];
}

const people: HasAge[] = [{ age: 30 }, { age: 45 }, { age: 10 }];

interface Player extends HasAge {
  name: string;
}

const players: Player[] = [
  { name: "ramu", age: 23 },
  { name: "shyam", age: 56 },
  { name: "monu", age: 34 }
];

// ASSERTION IS LIKE TYPE CASTING

// console.log(getOldest((Player)people).age);
// const oldestPerson = getOldest(players) as HasAge;
// console.log(oldestPerson.age);

console.log(getOldest(people));
console.log(getOldest(players));

console.log();
console.log();
console.log();
console.log();
console.log();

// ----------------------------------------------------
// TYPE 14
console.log("TYPE 14 GENERIC-3");

interface Insaan {
  name: string;
  age: number;
  city: string;
}

interface IPost{
  title:string;
  id:number;
  description:string
}

const fetchUser = async (path: string): Promise<Insaan[]> => {
  const response = await fetch(`www.api.com${path}`);
  return response.json();
};


const fetchPost = async (path: string): Promise<IPost[]> => {
  const response = await fetch(`www.api.com${path}`);
  return response.json();
};

const fetchDatafromApi = async <T>(path: string): Promise<T[]> => {
  const response = await fetch(`www.api.com${path}`);
  return response.json();
};


(async () => {
  // const userData = await fetchUser("/users");
  //  userData[0]

  // const postData=await fetchPost("/posts");
  // postData[0]

  const dataFromApi=await fetchDatafromApi<IPost[]>("/posts");
  // dataFromApi[0].

})();

