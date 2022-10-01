// conditionals //

/**
 * If and Else 
 * Switch 
*/

/*
if( // condition  ){
    // code to be carried out if condition met 

} else if() {
    
} else {

} */


let age = 19;

// <= , >, &&

if(age <= 1){
    console.log('you are infant');
} else if(age > 1 && age <= 10){
    console.log('you are a child');
} else if(age > 10 && age <= 18 ){
    console.log('You are a tenager');
} else {
    console.log('you are an adult ');
}


let num1;
let num2 = 20;

if(num1 == 10 || num2 == 20){
    console.log('correct');
} else {
    console.log('wrong');
}


if(!num1){
    console.log('num1 is not available');
} else {
    console.log('num1 is available');
}


// Prompt .

let userName = prompt('Enter your name');

console.log(userName);