
// Funcitons 

/**
 *Functions are reusable blocks of code.
 *
 * 
 * parameters are the values passed into the ( ) during the declaration of a new function.
 * e.g function myFunction(//parameters){
 *  // codes to execute
 * }
 * 
 * 
 * arguments are the values passed into the ( ) during the call / instantiation of a function 
 * e.g myFunction(//arguments);
 */



function addition(/* parameter */){

    // codes you want to be executed 
}

addition(/* arguments */ );

// function declaration

function hello(){
    console.log('hello world');
}


// function instantiation

// hello();


// addition with function 

function add(num1, num2){
    let result = num1 + num2;
    console.log(result);
}

// example 1
// add(4,5);


// example 2 

// adding a plus sign converts string to number e.g '35' (string) will be converted to 35 (number)

// let userNum1 = +prompt('enter first num');
// let userNum2 = +prompt('enter second num');

// add(userNum1, userNum2);


// Task one .
/**
 * a function that minus two numbers , the first num must be greater than or equal to the second number. 
 * if the second number is greater than the first num then we show an error message.
 */

function minus(num1, num2){
    if(num1 >= num2){
        let result = num1 - num2;
        console.log(result);
    } else {
        console.log('first number must be greater than or equal to second number');
    }
}

let userNumber1 = 3;
let userNumber2 = 6;

// minus(5,5);



// Task two .
// create a greeter function that greets a person based on time of the day.

let time = 'evening';

function greet(name, time){
    if(time == 'morning'){
        let message = 'Good morning ' + name;
        console.log(message);
    } else if( time == 'afternoon'){
        let message = 'Good afternoon ' + name;
        console.log(message);
    } else if(time == 'evening') {
        let message = 'Good evening ' + name;
        console.log(message);
    }
}

let name = 'joseph';

greet(name, time);