// Objects  => Objects are variables with many values .

// methods => methods are functions that live inside an object 

let car = {
    name: 'bmw',
    model: '2000',
    color: 'red',
};
 
// console.log(car.name); //accessing value object using the . notation 
// console.log(car['name']);   //  accessing object value using the [] 


// let book = {
//     title: prompt('enter title'),
//     author: prompt('enter author'),
//     date: prompt('enter date'),
//     summary: function(){
//         console.log('Book title: ' +this.title+ ' book author: ' +this.author);
//     }
// }


// book.summary();

let human = {
    name: 'jc',
    age: 25,
    gender: 'male',
    move: function(){
        console.log(this.name+ ' is moving');
    },
    eat: function(){
        console.log(this.name+ ' is eating ');
    }
};


// human.eat();


// Arrays => arrays are variable that hold many values .
// difference between array and object is that an object have key and value pair , while array have only values.
// array values are accessed by their index num. every array value index starts at 0.

// arrays of strings
// let fruits = ['mango', 'apple', 'pear']; // method 1 

// arrays of numbers 
let fruit2 = Array(1,2,3,4,5);// method 2

// arrays of objects 
let cars = [
    {
        name: 'bmw',
        model: 2022
    },
    {
        name: 'volvo',
        model: 2000
    }
]

// console.log(fruits); // ['mango','apple','pear']
// console.log(fruit2); // [1,2,3,4,5]
// console.log(cars[0].name); // bmw



//  Array methods 

/**
 * toString -> this is used to convert array to string.
 * push -> this adds a new element at the end of an array
 * pop -> this removes the last element in an array
 * shift -> this removes the first element in an aarray
 * unshift -> this adds a new element to the begining of an array
 * delete -> this deletes element from an arry using the index .
 */



let fruits = ['mango', 'apple', 'pear'];

// toString 
let stringFruits = fruits.toString()

// console.log(stringFruits);


// push 
fruits.push('orange','banana', 'pawpaw')


// pop 
fruits.pop()

// shift 
fruits.shift()

// unshift 
fruits.unshift('strawberry')

// delete 
delete(fruits[1]);


// console.log(fruits);


// project 1 -> class attence for a sec school 

let names = [];

function attendance(){
    let username = prompt('enter your name');

    names.push(username);
    console.log(names);
}

function deleteAttend(index){
    delete(names[index]);
    console.log('name deleted');
    console.log(names);
}


// project 2 ->  create an app to manage your book store , 
// books have a title and price .
// book app should have the following functions
// 1. you can add new book
// 2. you can delete book

let books = [];

function bookStore(){
    let bookTitle = prompt('enter title');
    let price = prompt('enter price');

    books.push({
        bookTitle, price
    })
    console.log(books);
}


function deleteBook(index){
    delete(books[index]);
    console.log('book deleted');
    console.log(books);
}


// Assignment 1 => create an app to manage your ecommerce store inventory 
// products should have {id, name, price ,quantity, description}
// you can add new products 
// you can delete products 
// convert all products to string 
// get total of all products

