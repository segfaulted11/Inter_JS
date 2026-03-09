// //method chaining in the context of arrays, just means running methods one after another on the same array.

// // raw data -> filter -> map -> reduce -> final result
// // Each step processes the result of the previous step.

// // Why chaining works? -> Because methods like filter() and map() return a new array. Since the result is an array, we can immediately call another array method on it.

// let numbers = [1,2,3,4,5,6];

// // n -> represnts each element of the array

// let result = numbers
// .filter(function(n){
//     return n % 2 === 0;
// })
// .map(function(n){
//     return n * 10;
// })
// .reduce(function(acc,n){
//     return acc + n;
// },0);

// console.log(result);//120

// /*How this works -
// [1,2,3,4,5,6]
// ↓ filter even
// [2,4,6]
// ↓ map *10
// [20,40,60]
// ↓ reduce sum
// 120*/


// /* read it as -> 
// take the data
// filter it
// then map it
// then reduce it */

// //----------------------------------------

// //Real world example ->

// //Imagine API data and the Goal is get names of adults.
// let users = [
//  {name:"John", age:17},
//  {name:"Sarah", age:25},
//  {name:"Mike", age:30},
//  {name:"Tom", age:15}
// ];

// let result = users.filter((user)=>{
// return user.age >= 18;
// })//here the callback function (user) refers to the each object of the array
// .map((user)=>{
//     return user.name;
// })
// console.log(result);//[ 'Sarah', 'Mike' ]

// //how this works -> you filter the 'users' array based on a condition and that returns the following array -> [ { name: 'Sarah', age: 25 }, { name: 'Mike', age: 30 } ], then we map on that array to access the values of the 'name' property among the objects within the array. and that returns the following array - [ 'Sarah', 'Mike' ]


// //--------------------------------------------

// //A Program using chain method 
// //Goal : keep prices above 200 -> add 10% tax -> get total

// let prices = [100,200,300,400];

// let result = prices.filter((element)=>{
//     return element>200;
// })
// .map((element)=>{
//     return (element * 1.1)
// })
// .reduce((acc,element)=>{
//     return acc+element
// },0)
// console.log(result);