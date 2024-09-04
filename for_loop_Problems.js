/***

"I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.

*/



for (let range = 1 ; range <= 100 ; ++range) {
    console.log(range, "I will invest at least 6 hrs every single day for next 60 days!",);
}


/***
Subtask-1:
Find all the odd numbers from 61 to 100.
*/

for ( let num = 61; num<= 100; num++){
    if(num % 2 !== 0){
        console.log("Odd Numbre is:", num)
    }
}
//----------------------------------------------------
/*
Subtask-2:

Find all the even numbers from 78 to 98.
*/

for (let evenNum =78; evenNum <= 100; evenNum++){
    if (evenNum % 2 === 0){
        console.log("Even Number is:", evenNum)
    }
}


//----------------------------------------------------

/***

Subtask-3:

Display sum of all the odd numbers from 91 to 129.
*/

let sum = 0;
for ( let i = 91; i <= 129; i++ ){
    if (i % 2 !== 0){
        sum = sum+ i; 
        // console.log(i)
    }
}
console.log("total sum of odd number is:", sum)

//----------------------------------------------------
/*
Subtask-4:

Display sum of all the even numbers from 51 to 85.
*/

let sumEven = 0;
for (let i = 51; i<= 85; i++){
    if(i % 2 ===0){
        // console.log(i);
        sumEven = sumEven + i
    }
}
console.log("Total sum of even Number is:", sumEven)

//----------------------------------------------------

/***
Generate a multiplication table for number 9*/

let number = 9;
console.log("Multiplication Table for 9")

for ( let i = 1; i <= 10; i++){
    console.log(`${number}  x ${i} = ${number * i}`)
}

//---------------------countdown--------------------

let count = 81; // Start of the countdown

console.log(`Countdown starting from ${count}:`);

const timer = setInterval(() => {
  console.log(count); // Display the current count
  count--; // Decrement the count by 1

  if (count < 65) { // When the count goes below 65
    clearInterval(timer); // Stop the timer
    console.log('Countdown complete!');
  }
}, 1000); // 1000 milliseconds = 1 second




