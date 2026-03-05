// // Callback Function --->

// //  callback is a different type of function in js. a function is called callback function when that function is passed as an arguement to another function. this technique allows a function to call another function. we pass a callback function in another function so that once a function is finished, that callback function can run. The name "callback" stems from the idea that the outer function will "call you back" later when it has finished its task




// // in javascript no matter which function is defined first, the function that is called first, will run first. --->

// function name(){
//     console.log("JW")
// }
// function name2(){
//     console.log("SF")
// }

// name2();
// name();

// /* output -> 
// SF
// JW */

// // Sequence Control --->

// //Sometimes you would like to have better control over when to execute a function.

// // why? becasue javascript is a functional programming language. think things in functions. use each function to accomplish an individual task. and the best practise is to complete one task using one function.

// // Suppose you want to do a calculation, and then display the result. so better use one function for the calculation stuff and another function for displaying the calculation. you could use one function for both of these tasks but that wont be the best practise. functions should be independent to each other.

// // (example-1) heres an example of doing this ->

// function display(showResult){
//     console.log(showResult);
// }

// function calculation(num1,num2){
//     let sum = num1+num2;
//     return sum;
// }
// let result = calculation(10,5);//1st function calling

// display(result);//2nd function calling


// // (example-2) heres another way of doing this (calling a function in another function) ->

// function display2(showResult){
//     console.log(showResult);
// }
// function calculation2(num1,num2){
//     let sum = num1+num2;
//     display2(sum)//auto gets called
// }
// calculation2(10,11)//1st calling
// //the display2 function is called within the calculation2 function so when the calculation2 function is called, the display2 function will be called too and console the result. 



// // NOTE-1 : the problem w the first example above, is that you need to call two functions to display the result.

// // NOTE-2 : the problem w the second example above, is that you cant prevent the calculation2 function from displaying the result.(since it gets auto called whenever the calculation2 function is being called). the problem is, here one function is being depenednt on  the other.

// // so, whats the solution to these problems? the solution is using callback function.

// // heres how ->



//  using callback function -->

function display3(parameter){
     console.log(parameter)
}
function calculator3(num1,num2,callback){
    let sum = num1+num2

    callback(sum)//calling the display3 function. here display3 is the callback function. since its passed as the argument to calculator3 function.
   
    //now using a condition that the following code will be executed if the display3 function is passed as an argument. if not, then it wont be executed.
   
    /*if(callback){
        callback(sum)
    }*/
   
}
calculator3(11,10,display3/* dont call the fuction just pass the function's name*/)

// or you could just pass the function definition w/o defining it first above from here --> 
/*calculator3(11,10,function display3(parameter){
     console.log(parameter)
})*/
