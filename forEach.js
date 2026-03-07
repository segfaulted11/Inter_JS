//  forEach is not a loop. its an array method. it can print all the elements of an array.

let array = ["A","B","C","D","E"]

array.forEach((element,index)=>{
    console.log(element+" YO "+index);
})
/* output ->
A YO 0
B YO 1
C YO 2
D YO 3
E YO 4
*/
console.log(array);

// here, the forEach function(or method) is a higher order function because a function is passed as an argument to it. and the passed function is called a callback function. this is also a anonymous function (since it doesnt have a name) and an arrow function.