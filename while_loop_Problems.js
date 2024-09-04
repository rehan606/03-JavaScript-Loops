/**
"I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.
*/
let count = 1;
while (count < 5){
    console.log("I will invest at least 6 hrs every single day for next 60 days!");
    count++;
}
console.log("Finish Print 60 Times");

//----------------------------------------------------
/***
Subtask-1:

Find all the odd numbers from 61 to 100.
*/

let num = 61;

while(num <= 100){
    // console.log(num);

    if(num % 2 !==0){
        console.log("Odd nUmber:", num)
    };
    num++;
}

//----------------------------------------------------
/***

Subtask-2:

Find all the even numbers from 78 to 98.
*/

let evenNumber = 78;
while(evenNumber<=98){
    if(evenNumber % 2 === 0){
        console.log("Even Number is:", evenNumber)
    }
    evenNumber++;
}
//----------------------------------------------------

/***
Subtask-3:
Display sum of all the odd numbers from 81 to 131.
*/
let oddNum= 81;
let oddSum = 0;

while (oddNum <= 131){

    if(oddNum % 2 !==0){
        oddSum = oddSum + oddNum;
        // console.log(oddNum);
    }
    oddNum++;
}
console.log("total Sum is:", oddSum)
//----------------------------------------------------

/***
Subtask-4:
Display sum of all the even numbers from 206 to 311.
*/

let evenNum = 206;
let sumEven = 0;

while(evenNum<= 311){
    if(evenNum % 2 ===0){
        sumEven = sumEven + evenNum;
        // console.log(evenNum)
    }
    evenNum++;
}
console.log("Total Even Number Sum=", sumEven)
//----------------------------------------------------

/***
As Ersa is learning now, she wants to explore more and more. 
Tell Ersa to generate a multiplication table for number 5
*/

let multiPlication = 5;
let i = 1;
result = 0
console.log("The Multiplicatio Table of 5")

while(i <= 10){
    result = multiPlication * i;
    
    console.log(`${multiPlication} x ${i} = ${result}`)
    i++;
}

//----------------------------------------------------

/*
Implement a countdown timer that counts down from 21 to 15.
*/

let counts = 21;
console.log(`CountDown Start From ${counts}`)

const timer = setInterval(() =>{
    console.log(count);
    counts--;

    while(counts < 15){
        clearInterval(timer);
        
    };

}, 1000)

//----------------------------------------------------


/*
display odd number from 55 to 85 and skip the numbers divisible by 5.
*/

let number = 55;

while (number <= 85){
    if(number % 2 !==0 && number % 5 !==0){
        console.log(number) 
    }
    number++;
   
}

//----------------------------------------------------

/* 
Write a loop 1 to 200. Use break to exit the loop once you find 100.
*/

let numb = 1;

while(numb < 20){
    if(numb <= 10){
        break
        
    }
    numb++;
    console.log("loop Push")
}

//----------------------------------------------------




