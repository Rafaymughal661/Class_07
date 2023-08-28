"use strict";
let numbers = [2, 3, 3, 4, 6, 5, 45, 28, 1000, 10000033];
// ["even", "odd", "odd"];
let updatedArray2 = numbers.map((number) => {
    //   console.log(index);
    if (number % 2 === 0) {
        return "even";
    }
    else {
        return "odd";
    }
});
console.log(updatedArray2);
let updatedArray = numbers.filter((data) => {
    if (data !== 0) {
        return true;
    }
});
console.log(updatedArray);
let oddNumbers = numbers.filter((item) => {
    if (item % 2 !== 0) {
        return true;
    }
});
console.log(oddNumbers);
console.log("Original Array", numbers);
let names = ["abu hurairah", "naveed", "ali"];
names.forEach((data) => {
    console.log(`Your class on sundy will be onTime ${data}`);
});
