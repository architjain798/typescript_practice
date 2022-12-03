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
console.log("ebokk is " + JSON.stringify(ebook));

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

console.log(" ----------------------------------------------------");

//9
//TYPE 9 ADD PROPERTY IN INTERFACE

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
