/* ========= DOM  =========  */
//DOM ( Document Object Model )  is a standard way of accessing documents .

// methods of accessing html dom 
// these methods are the different methods used in accessing the html dom elements

let h1 = document.getElementsByClassName('heading-one');
let h2 = document.getElementById('heading-two');
let h3 = document.querySelector('.heading-three');
let username = document.querySelector('.username');


// changing style of html elements 

// textContent and innerText -  used to access content of html element
// console.log(h3.textContent);
// console.log(h3.innerText); 



// innerHTML  = this is used to access the html content of an element 
let item = document.querySelector('.item');
// console.log(item.innerHTML);


// value - this is used to acces values of elements (e.g input form elements)
// console.log(username.value);