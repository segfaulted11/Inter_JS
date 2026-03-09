// //  Basics


// // reduce() reduces an entire array into a single value.

// /*Example outcomes:
// array → single number
// array → object
// array → string
// array → new structure
// Think: many values → one result
// */

// // filter → keep some elements
// // map → transform elements
// // reduce → combine everything into ONE result

// //Basic Syntax (regular function) ---->

// array.reduce((accumulator, currentElementValue)=>{
//     return expression;
// }, initialAccumulatorValue);

// //NOTE : reduce() takes two arguments, one - callback function, second - the intial accumulate value

// /*The Two Important Variables ->

// Inside reduce() there are two main players:
// 1) accumulator → stores the running result.
// 2) currentValue → current element in the array.

// Think of accumulator like a snowball rolling down a hill. It keeps getting bigger as it collects stuff.*/


// //Calculate The Sum Of The Numbers


// let numbers = [1,2,3,4];

// let result = numbers.reduce((acc,num)=>{
//     return acc+num;
// },0)
// console.log(result);//10

// /*Let's watch it step-by-step

// Initial value:

// acc = 0

// Iteration 1 -

// acc = 0
// num = 1

// 0 + 1 = 1

// Iteration 2 -

// acc = 1
// num = 2

// 1 + 2 = 3

// Iteration 3 -

// acc = 3
// num = 3

// 3 + 3 = 6

// Iteration 4 -

// acc = 6
// num = 4

// 6 + 4 = 10

// Final result: 10

// Boom. The array got reduced to one value.*/

// //What reduce is doing internally ->

// //Basically this:

// let numbers2 = [1,2,3,4];

// let acc = 0;

// for(let i = 0; i < numbers2.length; i++){
//     acc = acc + numbers2[i];
// }
// console.log(acc);//10

// //Same result. reduce() just wraps this logic neatly.


// //  Calculate The Product Of The Numbers


// let numbers = [2,3,4];

// let result = numbers.reduce((acc,num)=>{
//     return acc * num
// },1)
// console.log(result);//24


// //  Count total price


// let cart = [
//  {item: "Laptop", price: 1000},
//  {item: "Mouse", price: 50},
//  {item: "Keyboard", price: 100}
// ];

// //NOTE : for reduce(), in the case of objects of array, the 2nd parameter  refers to each object in the array, one at a time during the iteration. here, 'object' represents each object in the array during each iteration of reduce.

// let result = cart.reduce((acc,object)=>{
//     return acc + object.price;
// },0)
// console.log(result);//1150
