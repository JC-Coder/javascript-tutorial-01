// Types of loops 

// loops are block of code that can be executed many times 

/**
 * for loop
 * while
 * do while loop
*/


// for loop
let num = 20;

// for(let i = 0; i <= num; i++){
//     console.log(i);
// }


// while loop 
let i = 0;

// while(i <= num){
//     console.log(i);
//     i++;
// }


// do while loop 
// the do while loop will execute the code block once before checking the condition 

/* 
    do {
    code block
    } while ( condition ) 
*/

let b = 0;

// do{
//     b++;
//     console.log(b);
// } while( b < 20);



// Example one 
// to check the total length of items in an array we use the .length property
let names = ['john', 'tope', 'coder', 'bolu', 'tayo', 'bayo'];

let no = 1;

// for(let i = 0; i < names.length; i++){
//     console.log('No: ' + no + ' is ' + names[i]);
//     no++;
// }


// break 
// the break is used to stop a running loop.

// let userNum = +prompt('enter a num');

// for(let a = 0; a < userNum; a++){
//     console.log(a);

//     if(a  == 100){
//         break;
//     }
// }



// examle two 

let animals = ['cat', 'dog', 'pig', 'goat', 'cow', 'sheep'];
// let userInput = prompt('enter name  of any animal');

// for(let i = 0; i < animals.length; i++) {
//     let oneAnimal = animals[i];

//     if(userInput == oneAnimal){
//         console.log('you win');
//         break;
//     }
// }