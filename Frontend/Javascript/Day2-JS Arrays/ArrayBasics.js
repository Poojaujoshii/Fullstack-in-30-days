//✅ Task 1: Create an array of your 5 favorite movies
let Movies = ["Chhava","RRR","Do Patti","83","K3G"]
// Output the first and last movie using index
console.log(Movies[0] + " and " + Movies[4]);


//✅ Task 2: Create an array of numbers from 1 to 10
let num = [1,2,3,4,5,6,7,8,9,10];
// Access the 3rd and 7th number
// Print the total length of the array
console.log(num[2] + " And " + num[6]);
console.log(num.length);


//✅ Task 3: Create an array of 4 fruits
let fruits = ["Grapes","Apple","Pineapple","Papaya"]
// Replace the second fruit with "Mango"
// Print the updated array
fruits[1]="Mango";
console.log(fruits);


//✅ Task 4: Create a nested array of subjects with marks
let Marks = [["Math", 95], ["English", 88], ["Science", 92]]
// Access and print only the marks of English
console.log(Marks[1][1]);

//✅ Task 5: Access array using a variable index
const colors = ["red", "green", "blue", "yellow"];
let index = 2;
// Print the color at that index
console.log(colors[index]);


let fruits1 = ["Grapes", "Mango", "Pineapple", "Papaya"];

// 1. Add "Orange" at the end
// 2. Remove the last fruit
// 3. Remove the first fruit
// 4. Add "Kiwi" to the beginning
// Log the array after each step
fruits1.push("orange");
console.log(fruits1);
fruits1.pop(fruits1[-1])
console.log(fruits1);
fruits1.shift(fruits1[0])
console.log(fruits1);
fruits1.unshift("Kiwi")
console.log(fruits1);



//Task 2: Looping with for and for...of
let movies = ["Chhava", "RRR", "Do Patti", "83", "K3G"];

// 1. Use a regular for loop to print: 1. Chhava, 2. RRR, ...
// 2. Use for...of to just print all movie names
for(let i = 0; i<=movies.length-1;i++){
    console.log(`${i+1}. ${movies[i]}`);  
}
for(let name of movies){
    console.log(name);
}
for(let num in movies){
    console.log(num);
}



//Task 3: .includes() and .indexOf()
// Check if "RRR" is in the movies array using includes()
// Also find the index of "83" using indexOf()
console.log(movies.includes("RRR"));
console.log(movies.indexOf("83"));


//Task 4: .slice() vs .splice()
let nums = [1,2,3,4,5,6,7,8,9,10];

// 1. Use slice(3, 7) and log the result (non-destructive)
// 2. Use splice(3, 2) and log nums (removes 2 elements from index 3)
let num1 = nums.slice(3,7);
console.log(num1);
let num2 = nums.splice(3,2);
console.log(nums);



//Task 5: .reverse() and .sort()
let colours = ["red", "green", "blue", "yellow"];

// 1. Reverse the array and log it
// 2. Create a copy and sort it alphabetically without changing the original
let cols = colours.reverse();
console.log(cols);
let col = [...colours];
col.sort()
console.log(colours);
console.log(col);



//Task 1: Use map() to double each number
let numbers = [1, 2, 3, 4, 5];
// Use map to create a new array: [2, 4, 6, 8, 10]

let res = numbers.map((n)=>{
    return n*2;
})
console.log(res);


//Task 2: Use filter() to extract even numbers
let nums1 = [10, 13, 18, 21, 24, 27];

// Use filter to get only even numbers: [10, 18, 24]
let res1 = nums1.filter((n)=>{
    if(n%2==0){
        return n;
    }
})
console.log(res1);


//Task 3: Use reduce() to calculate total
let marks = [85, 92, 78, 90, 88];

// Use reduce to calculate the total of marks
let result = marks.reduce((acc,mark)=>{
    acc+=mark;
    return acc;
})
console.log(result);


//Task 4: Chain map + filter
let prices = [100, 150, 80, 200, 50];

// 1. First use map to add 10% tax to each price
// 2. Then filter to keep prices greater than 100
let ress = prices.map((p)=>{
    let tax = p*0.10;
    return p+tax;
})
console.log(ress);

let ress1 = ress.filter((r)=>{
    if(r>100){
        return r;
    }
})
console.log(ress1);


//Task 5 : Find average marks using reduce
let scores = [80, 90, 100];
// Calculate average using reduce
let op = scores.reduce((acc,score)=>{
    acc+=score;

    return(acc);
    
},0)

let avg = op/scores.length;
console.log(avg);










    
    













 






 
