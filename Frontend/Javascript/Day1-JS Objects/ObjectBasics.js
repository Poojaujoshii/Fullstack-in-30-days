// 1. Creating objects
// 1.1 Object Literal

let alien = {} // Completely valid object

let aliens = {
    Name : "Pooja",
    Age: 25,
    Address: "Ballari"
}
console.log(aliens);

// 1.2 Object Constuctor
let user = new Object(); //this creates an empty object
user.name = "Pooja";
user.age = 25;
console.log(user);

// 1.3 object.create()
let  baseuse = {
    greet(){
        return `Hello ${this.name} `
    }
}
let user1 = Object.create(baseuse);
user1.name = "Pooja"
console.log(user1);
console.log(user1.greet());


//1.4 Function constructor
function student(name,std){
    this.name = name;
    this.std = std;

}
let student1 = new student("pooja",'11th')
let student2 = new student("shreya",'11th')
console.log(student1);
console.log(student2);

//1.5 ES6 Classes
class teacher{
    constructor(name,subject){
        this.name = name;
        this.subject = subject;
    }
    greet(){
        return `My name is ${this.name} and I take ${this.subject}`
    }
}
let teacher1 = new teacher("Shalini", "Math");
let teacher2 = new teacher("Shweta", "Emglish");
console.log(teacher1);
console.log(teacher2);


//1.6 Factory function
function createUser(name,role){
    return {
        name,role,greet(){
            return `Hi My name is ${name} and I'm ${role}`
        }
    }
}
let u1 = createUser("Pooja","Developer");
console.log((u1.greet()));
let u2 = createUser("Shreya","Sales Manager");
console.log((u2.greet()));

function createStudent(name,age,std,grade){
    return{
        name,age,std,grade,greet(){
            return  `Hi My name is ${name} and I'm studying in ${std}`
        }
    }
}
let s1 = createStudent("Shreya",15,"10th","A+")
console.log(s1.greet());



//2.Accessing the properties of object
//2.1 dot notation
let laptop = {
    ram:"6gb",
    Storages:"512gb",
    Processor:"Intel Iris",
    Size:"15inches"
}
console.log(laptop.Size);
let input = "Processor";
console.log(laptop.input);
//2.bracket notation
console.log(laptop[input]);




// Tasks on Creating object and accessing properties
// task-1
let person = {
  name: "Aditi",
  age: 21,
  city: "Bangalore"
} //Print the name using dot notation. Print the city using bracket notation.  
console.log(person.name);
console.log(person["city"]);



// task-2
let book = {
  title: "JavaScript Deep Dive",
  "publish-year": 2023,
  author: {
    first: "Kyle",
    last: "Simpson"
  }
}//Print the book title. Print author's last name. Print publish year using bracket notation.
console.log(book.title);
console.log(book.author.last);
console.log(book["publish-year"]);


// task-3
const field = "price";
const product = {
  name: "Cricket Bat",
  price: 4500,
  brand: "SG"
};
//Use bracket notation and the variable field to access the price.

console.log(product[field]);


//task-4
let stud = {
  name: "Neha",
  grade: "A",
  address: {
    city: "Delhi",
    pin: 110001
  }
}
//Access city using dot notation. Access pin using destructuring.Try accessing student.guardian?.phone using optional chaining (should not throw error).
console.log(stud.address.city);
const {city,pin} = stud.address;
console.log(pin);
console.log(stud.gardian?.phone);


//task-5
const user2 = {
  username: "Pooja",
  login() {
    return `${this.username} has logged in`;
  }
};
//Call user.login() and log the result. Add a new key dynamically: email = "pooja@gmail.com" and print the updated object
console.log(user2.login());
 user2.email = "pooja@gmail.com";
 console.log(user2);

const laptop1 = {
  brand: "HP",
  ram: "16GB"
};
//Check if ram exists using "ram" in laptop Check if processor exists using .hasOwnProperty("processor")
console.log("ram" in laptop1);
console.log(laptop1.hasOwnProperty("processor"));


//task-7
const marks = {
  Math: 95,
  English: 88,
  Science: 91
};
// loop  through object
for(let sub in marks){
    if(sub==="Math"){
        console.log(`${marks[sub]}`);
        
    }
}
 

















