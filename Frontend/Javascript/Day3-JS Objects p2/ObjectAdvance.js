// Create an object for your favorite book
const book = {
  title: "Atomic Habits",
  author: "James Clear",
  pages: 320
};

// 👉 Print only the keys using Object.keys()
console.log(Object.keys(book));

// 👉 Use Object.values() to print only the values of book object
console.log(Object.values(book));

// 👉 Use Object.entries() with forEach to print:
// title: Atomic Habits
// author: James Clear
// pages: 320
console.log(Object.entries(book));



const car = {
  brand: "Hyundai",
  model: "i20",
  price: 800000
};

// 👉 Use for...in to print each property and value

for(key in car){
    console.log(`${key} : ${car[key]}`);  
}


const student = {
  name: "Pooja",
  class: "10th",
  address: {
    city: "Mumbai",
    pin: 400001
  },
  marks: {
    math: 95,
    english: 88,
    science: 92
  }
};
function collectValues(student,arr=[]){
    for(key in student){
        const val = student[key];
        if(typeof val == "object" && val !==null){
            collectValues(val,arr);
        }else{
            arr.push(val)
        }
        
    }
    return arr;
}
const values = collectValues(student);
console.log(values.join(", "));


const user = {
  name: "Pooja",
  role: "Admin",
  location: "Bangalore"
};

let input = "role";
// 👉 Print the value of key stored in `input` variable (i.e., user["role"])
console.log(user[input]);

//merging objects
const personal = { name: "Pooja", city: "Mumbai" };
const job = { role: "Developer", company: "NextGen" };
// Merge into one object using both assign and ...
const merge = Object.assign({},personal,job);
console.log(merge);
const merged = {...personal, ...job}
console.log(merged);


const defaultSettings = { darkMode: false, fontSize: 14 };
const userSettings = { fontSize: 18 };
const final  = {...defaultSettings,...userSettings}
console.log(final);

//task 1
const baseProfile = { name: "Pooja", role: "Student", level: 1 };
const progressUpdate = { level: 2, badge: "Beginner" };

// ➤ Merge these into a new object and print it.
let obj = {...baseProfile,...progressUpdate};
console.log(obj);


//task 2
const systemDefaults = {
  notifications: true,
  darkMode: false,
  layout: "grid"
};

const userPrefs = {
  darkMode: true,
  layout: "list"
};

// ➤ Merge preferences and log the final user config.
const finalSettings = Object.assign({},systemDefaults,userPrefs);
console.log(finalSettings);


//task 3
const stats = { views: 1200, likes: 250 };
const comments = { count: 35 };
const shares = { fb: 10, twitter: 7 };

// ➤ Merge all into one `dashboardData` object.
const dashboard = Object.assign({},stats,comments,shares);
console.log(dashboard);


//optional chaining
const post = {
  title: "My Blog",
  author: {
    name: "Pooja"
  }
};

// Print author's name
// Print author's email (which doesn't exist)
// Use optional chaining for both
console.log(post?.author?.name);
console.log(post?.email);


const students = {
  list: ["Aman", "Shreya"]
};

// Print the first student
// Try to print the first admin (doesn't exist)

console.log(students?.list?.[0]);
console.log(students?.admin?.[0]);


//nullush Coalescing 
const settings = {
  username: "Pooja",
  theme: null,
  fontSize: undefined
};

// Use ?? to set:
// - theme to "light" if null
// - fontSize to 14 if undefined
const theme = settings.theme??"light";
console.log(theme);
const fontSize = settings.fontSize??14;
console.log(fontSize);

const users = {
  score: 0,
  verified: false
};

// Use ?? to set:
// - score to 100 if undefined
// - verified to true only if undefined
// (Note: don't override false)
const finalScore = user.score ?? 100;       // ✅ 0 (because it's NOT null/undefined)
const isVerified = user.verified ?? true;   // ✅ false (also NOT null/undefined)

console.log(finalScore);  // Output: 0
console.log(isVerified);  // Output: false


//freeze
const userss= {
  theme: "dark",
  fontSize: 16
};

Object.freeze(userss);

// Try changing theme, adding new key, and deleting fontSize
user.name = "Shreya";     // ❌ won't change
user.city = "Mumbai";     // ❌ can't add
delete user.role;         // ❌ can't delete

console.log(userss);  

//seal
const config = {
  notifications: true,
  layout: "grid"
};

Object.seal(config);

// Try modifying layout, adding new key, and deleting notifications
config.layout = "list";
console.log(config);
config.name = "pooja"
console.log(config);

//destructuring

const books = {
  title: "Atomic Habits",
  author: "James Clear",
  pages: 320
};

// Destructure title and author

const {title ,author}=books
console.log(title);
console.log(author);

const person = {
  name: "Pooja",
  details: {
    age: 22,
    city: "Bangalore"
  }
};

// Destructure city and age from nested object
const {details:{age,city}} = person;
console.log(age);

console.log(city);


const cars = {
  brand: "Hyundai",
  model: "i20",
  fuel: "Petrol"
};

// Destructure brand as vehicleBrand and model as carModel

const {brand:vehicleBrand, model:carModel} = cars;
console.log(vehicleBrand,carModel);

const carss = { brand: "Hyundai", model: "i20", fuel: "Petrol" };

// 👉 Use hasOwnProperty to check if "model" exists

let res = carss.hasOwnProperty("brand");
console.log(res);


const User = { name: "Shreya", city: "Pune", role: "Admin" };

// 👉 Print all keys
// 👉 Print all values
let res1 = Object.keys(User);
console.log(res1);
let res2 = Object.values(User);
console.log(res2);


const product = { name: "Laptop", price: 50000, stock: 20 };

// 👉 Loop through entries and print key: value
Object.entries(product).forEach(([key,value])=>{
    console.log(`${key}:${value}`);
    
})

const arr = [['lang', 'JavaScript'], ['level', 'Advanced']];

// 👉 Convert this to an object using fromEntries
const newobj = Object.fromEntries(arr);
console.log(newobj);
