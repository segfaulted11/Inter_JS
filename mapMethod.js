// ## Basics

// //map() goes through each element of an array and transforms/changes each element into something new and returns a new array consisting those transformed elements.

// /* NOTE : 
// filter() decides who stays.
// map() decides what they become.
// */

// // Basic Syntax ->
// /*
// let array = []
// array.map(function(elements){
//     return expression;
// });*/

// // Example 1 — Multiply numbers ->

// let array = [2,3,5,10,7]

// let result = array.map((elements)=>{
//         return elements * 2;
//     })
//     console.log(result)//[ 4, 6, 10, 20, 14 ]
    
// // Heres, What happens internally ->
    
//     let numbers = [1,2,3,4];
//     let resulty = [];
    
//     for(let i = 0; i < numbers.length; i++){

//     let newValue = numbers[i] * 2;

//     result.push(newValue);
// }
//     console.log(resulty);

// // ----------------------------------------------------

// // Example 2 — Add 10 to each number

// let array2 = [2,3,5,10,7]

// let result2 = array2.map((elements)=>{
//     return elements + 10;
// })
// console.log(result2)//[ 12, 13, 15, 20, 17 ]

// //NOTE : map() always keeps the same length.

// /*Example:
// input length → 4
// output length → 4
// Because every element gets transformed.
// */

// //--------------------------------------------

// // Example 3 - Add 5% tax 
// let prices = [10, 20, 30, 40];

// let result = prices.map((elements)=>{
//     let afterTax = (elements+(elements*(5/100)))
//     return afterTax;
// })
// console.log(result);//[ 10.5, 21, 31.5, 42 ]
// ```

// ### Arrays of objects

// ```
// let users = [
//  {name: "John", age: 17},
//  {name: "Sarah", age: 25},
//  {name: "Mike", age: 30}
// ];

// // callback parameter stores one element of the array at a time. Each element of the array is an object so it receives each object one by one. Here,  map() collects each of them and returns them in a new array.

// let result = users.map((user)=>{
//     return (user);
// })
// console.log(result);

// /* output -> 
// [
//   { name: 'John', age: 17 }, 
//   { name: 'Sarah', age: 25 },
//   { name: 'Mike', age: 30 }  
// ]
// */

// // think map() like this ->
// /*
// users array
//    ↓
// take first object → return it
// take second object → return it
// take third object → return it
//    ↓
// collect results into new array
// */

// ------------------------------------------------------

// let users = [
//  {name: "John", age: 17},
//  {name: "Sarah", age: 25},
//  {name: "Mike", age: 30}
// ];

// // getting the values of the objects from an array of objects using map-->

// let result = users.map((user)=>{
//     return (user.name);
// });
// console.log(result);//[ 'John', 'Sarah', 'Mike' ]

// let result2 = users.map((user)=>{
//     return (user.age);
// });
// console.log(result2);//[ 17, 25, 30 ]

// // NOTE : map() is designed to always return an array with the same length as the original array.

// -------------------------------------------------

// // changing values ------->

// let result3 = users.map((user)=>{
//     user.name = "JW"
//     return (user.name);
// });
// console.log(result3);//[ 'JW', 'JW', 'JW' ]

// let result4 = users.map((user)=>{
//     user.name = "JW"
//     user.age = 30
//     return (user);
// });
// console.log(result4);
// /* output ->
// [
//   { name: 'JW', age: 30 },
//   { name: 'JW', age: 30 },
//   { name: 'JW', age: 30 } 
// ]
// */

// ------------------------------------------------------------------

// //Reshaping Objects using map() ----->

// let users = [
//  {name: "John", age: 17},
//  {name: "Sarah", age: 25}
// ];

// let result = users.map(function(user){

//     return {
//         username: user.name,
//         adult: user.age >= 18
//     };//So we changed the structure of the data.
// });
// console.log(result);

// /* output ->
// [
//   { username: 'John', adult: false },
//   { username: 'Sarah', adult: true }
// ]
// */

// ------------------------------------------------------------------

// //More Stuff --->

// let products = [
//  {name: "Laptop", price: 1000},
//  {name: "Phone", price: 500}
// ];

// // you can add stuff (of any data types) w the value ->

// let result = products.map((object)=>{
//     return object.name + " YO"
// })
// console.log(result);//[ 'Laptop YO', 'Phone YO' ]

// let result3 = products.map((object)=>{
//     return "$" + object.price 
// })
// console.log(result3);//[ '$1000', '$500' ]

// // transforming the number value into string ->

// let result2 = products.map((object)=>{
//     return object.price + ""
// })
// console.log(result2);//[ '1000', '500' ]

// // you can add methods like toUpperCase() to the value ->
// let result4 = products.map((object)=>{
//     return object.name.toUpperCase()
// })
// console.log(result4);//[ 'LAPTOP', 'PHONE' ]