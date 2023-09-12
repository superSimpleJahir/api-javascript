let text1 = '{ "employees" : [' +
  '{ "firstName":"John" , "lastName":"Doe" },' +
  '{ "firstName":"Anna" , "lastName":"Smith" },' +
  '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

// console.log(JSON.parse(text1));


let person = {
  FirstName: 'Jahir',
  lastName: 'Khan',
  jahir: ['Mijan', 'Jahid', 'Arif', 'Saifulla', 'tuhin'],
  johirobj: { firstName: 'Jahir', lastName: 'Mijan', score: '10.5' }
}
// console.log(JSON.stringify(person));

let newObj = `{
  "firstName": "Jahir",
  "score": 10.5,
  "isAdmin": false,
  "jahir": ["Mijan", "Jahid", "Arif", "Saifulla", "tuhin"],
  "johirobj":{"firstName":"Jahir","lastName":"Mijan","score":10.5}
}`;
let new1Obj = JSON.parse(newObj);
// console.log(new1Obj);

let jahir1 = [
  { Name: "Jahir", FirstName: "MD jahir", lastName: "Islam" },
  { Name: "Mijan", FirstName: "MD jahir", lastName: "Islam" },
  { Name: "Arif", FirstName: "MD jahir", lastName: "Islam" },
  { Name: "Rifat", FirstName: "MD jahir", lastName: "Islam" },
  { Name: "Sifat", FirstName: "MD jahir", lastName: "Islam" },
  { Name: "Masum", FirstName: "MD jahir", lastName: "Islam" },
  { Name: "Ismail", FirstName: "MD jahir", lastName: "Islam" },
  { Name: "Eshak", FirstName: "MD jahir", lastName: "Islam" },
  { Name: "Mohammad", FirstName: "MD jahir", lastName: "Islam" },
  { Name: "Alamin", FirstName: "MD jahir", lastName: "Islam" },
  { Name: "Abdullah", FirstName: "MD jahir", lastName: "Islam" },
  { Name: "Abdul-rahim", FirstName: "MD jahir", lastName: "Islam" }
];

let a = { Name: "Jahir", FirstName: "MD Jahirul", lastName: "Islam" };

for (const jahir in jahir1) {
  // console.log(jahir1[jahir].FirstName);
}
let c = ['Mijan', 'Jahid', 'Arif', 'Saifulla', 'tuhin'];
let d = 'jahir';
for (const b of d) {
  // console.log(b);
}

const myArray = ['js', 'rb', 'python', 'cpp', 'java'];

for (const key in myArray) {
  // console.log(myArray[key]);
}

let greeting = "Hello world!";
for (const greet of greeting) {
  if (greet === ' ') {
    continue
  }
  // console.log(greet);
}

let jahir5 = jahir1.forEach((val, index, array) => {
  // console.log(val);
  return val;
});

let myArray3 = [
  { Name: "Jahir", FirstName: "MD jahir", lastName: "Islam" },
  { Name: "Mijan", FirstName: "MD arif", lastName: "ahmed" },
  { Name: "Arif", FirstName: "MD jahir", lastName: "Islam" },
  { Name: "Rifat", FirstName: "MD jahir", lastName: "hosain" },
  { Name: "Sifat", FirstName: "MD jahir", lastName: "Islam" },
  { Name: "Masum", FirstName: "MD jahir", lastName: "Islam" },
  { Name: "Ismail", FirstName: "MD jahir", lastName: "rahman" },
  { Name: "Eshak", FirstName: "MD mijan", lastName: "Islam" },
  { Name: "Mohammad", FirstName: "MD jahir", lastName: "karim" },
  { Name: "Alamin", FirstName: "MD arif", lastName: "Islam" },
  { Name: "Abdullah", FirstName: "MD mijan", lastName: "rahman" },
  { Name: "Abdul-rahim", FirstName: "MD jahir", lastName: "karim" }
];
let e = myArray3.filter((num) => {
  return num.FirstName === 'MD mijan' && num.lastName === 'Islam';
});
// console.log(e);
const arr = ["John", "Peter", "Sally", "Jane"];
const myJSON1 = JSON.stringify(arr);

console.log(myJSON1);



// Storing data:
const myObj = { name: "John", age: 31, city: "New York" };
const myJSON = JSON.stringify(myObj);
localStorage.setItem("testJSON", myJSON);

// Retrieving data:
let text = localStorage.getItem("testJSON");
let obj = JSON.parse(text);
document.getElementById("demo").innerHTML = obj.name;
