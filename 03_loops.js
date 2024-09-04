//============Print 1-5 Loops==================
for (let range = 1 ; range <= 100 ; ++range) {
    console.log("Hello Rehan");
}



//=========Calculate Sum of 1 to 5 

// Example : 1
//----------------
let sum = 0;
for (let i=1; i<=5; i++){
    sum = sum + i;
}
console.log("Total Sum Is :", sum)


// Example : 2
// ----------------
let add = 0;
let x = 80;

for (let i=1; i<=x; i++){
    add = add + i;
}
console.log("Total sum Is :", add)




// ============While Loop==============

let num = 1;

while (num <= 10){
    console.log("While Loop"); 
    num++;
}

// ============Do While Loop==============

let i = 1;

do {
    console.log("DO While");
    i++;
} while( i<=5 );


// ============for of Loop==============

let str = "Rehan Khan";
let size = 0
for (let i of str){ //Iterator -> characters
    console.log("i =", i);
    size++;
}
console.log("the srting size is :", size)




// ============for in Loop==============

let student = {
    name: "Rehan",
    age: 25,
    cgpa: 3.69,
    isPass: true,

};

for (let key in student){
    console.log("key:", key, student[key]);
}




