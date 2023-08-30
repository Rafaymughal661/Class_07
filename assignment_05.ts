// Q: Write a program that uses filter to remove all negative numbers from an array of numbers:

let array:number[] = [0,1,-2,3,-4,5,-6,7,-8,-9];
let updatedArray3 = array.filter((numbers) => {
     if (numbers<0) {
        return false;
     }
     else{
        return true;
     }
})
console.log(updatedArray3);


// Q: Given an array of numbers [1, 2, 3, 4, 5], use the map method to create a new array where each number is multiplied by 2.

let array1:number[] = [1,2,3,4,5];
let updatedArray4 = array1.map((values)=>{
if (values>0) {
    return (values * 2);
}
else {
    return values;
}
})

console.log(updatedArray4);

// Q: Given an array of strings ["apple", "banana", "cherry", "date", "grape"], use the filter method to create a new array containing only the fruits with more than 5 characters.

let array3:string[] = ["apple", "banana", "cherry", "date", "grape"];
let updatedArray5 = array3.filter((fruits)=>{
    if (fruits) {
        return fruits.length > 5;
    }
    else{
        return fruits;
    }
})
console.log(updatedArray5);


// Q: Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use the map and filter methods together to create a new array containing the squares of even numbers.
let num:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let updatedArray6 = num.filter((num)=>{
    if (num%2===0) {
        return num
    }

}).map((num)=>{
   return (num**2 )
})
console.log(updatedArray6);


// Q: Given an array of temperatures in Celsius [0, 10, 20, 30, 40], use the map method to create a new array where each temperature is converted to Fahrenheit using the formula (Celsius * 9/5) + 32.
let temp:number[] = [0, 10, 20, 30, 40];
let updatedArray7 = temp.map((Celsius_to_fahrenheit)=>{
    return (Celsius_to_fahrenheit*9/5)+32;
})
console.log(updatedArray7);


// Q: Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods together to create a new array containing the doubled values of odd numbers.
let array_of_num:number[] = [3, 6, 9, 12, 15, 18];
let updatedArray8 = array_of_num.filter((odd_num)=>{
    if (odd_num % 2 != 0) {
        return odd_num;
    }
}).map((odd_num)=>{
    return odd_num*2;
})
console.log(updatedArray8);

// Q: Given an array of names ["Alice", "Bob", "Charlie", "David", "Emily"], use the forEach method to log each name with an exclamation mark at the end, e.g., "Alice!".

let array_of_names:string[] = ["Alice", "Bob", "Charlie", "David", "Emily"];
let updatedArray9 = array_of_names.forEach((name)=>{
   console.log(`${name}! `);
    
})
console.log(updatedArray9);





















