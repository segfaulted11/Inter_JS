// filter() goes through all the elements of an array and only keeps the elements that pass a condition and returns a new array consisting those elements. It goes through the array, checks a condition, keeps the elements that return true and throws the the elements that return false.

// Basic Syntax ->

/*
let array = []
array.filter(function(element){
    return condition;
});*/

// Key idea:

// if return true → element stays
// if return false → element removed


// // Example 1 — Filter Numbers greater than 5
// let array = [1,2,4,5,6,7,3]

// NOTE : When you use filter() on an array, the callback parameter do return the elements(each one of them) of the array.

// let result = array.filter(function(element){
    //     return element > 5
    // })
    // console.log(result);//[ 6, 7 ]
    
    // // using arrow function ->
    
    // // syntax-1
    // let result2 = array.filter((element) => element > 5)
    // console.log(result2)//[ 6, 7 ]
    
// // syntax-2
// let result3 = array.filter((element) => {
// return element > 5})
// console.log(result2)//[ 6, 7 ]

//----------------------------------------------------


// Example 2 — Filter Even numbers

// let array = [1,2,4,5,6,7,3]

// let result = array.filter((elements)=>{
// return elements%2 === 0
// })
// console.log(result);//[ 2, 4, 6 ]

//----------------------------------------------------

// Example 3 - Filtering objects

// let users = [
//  {name: "JH", age: 17},
//  {name: "JK", age: 25},
//  {name: "JW", age: 30}
// ];

// // NOTE : When you use filter() on an array of objects, the callback parameter does NOT return the keys of the objects. It returns each of the whole object itself.

// let result = users.filter((objects)=>{
// return objects.age > 18
// })
// console.log(result);
// //output ->[ { name: 'JK', age: 25 }, { name: 'JW', age: 30 } ]

//----------------------------------------------------

// Important Things to Know ->

// filter() does NOT change(Mutate) the original array. Its an immutable method.
// filter() always returns an array. Even if only one element matches. Or If nothing matches it returns an empty array.


// Heres, how How filter() works internally -> 

/*
let numbers = [1,4,6,8,3];
let result = [];

for(let i = 0; i < numbers.length; i++){

    if(numbers[i] > 5){
        result.push(numbers[i]);
    }

}

console.log(result);
*/

// So filter() is basically: loop + condition + push into new array