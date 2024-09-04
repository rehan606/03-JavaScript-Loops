//For of Loop

//Example 1
const number = [ 1,2,3,4,5,6,7,8,9,10]
console.log(number)

for (let num of number){
    console.log(num);
}

//Example 2

const fruits = ['Apple', 'Mango', 'Banana', 'Orange']

for (const fruit of fruits){
    console.log(fruit);
    console.log("I want to eat")
}



//While Loop

let num = 1;

while (num < 10){
    console.log(num);
    num++;
}


let numbers = 1;
let sum;

while(numbers <= 10){
    console.log(numbers);
    sum = sum + numbers
    console.log("sum is:", sum );
    numbers++;
}

for ( let range = 1; range <= 60; range++ ){
    console.log("I will invest at least 6 hrs every single day for next 60 days!");
}