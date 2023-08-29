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





















