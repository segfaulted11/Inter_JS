// JSON is a data format and it is used for storing and communicating/transferring data.

/*
When we say “JSON notation”, we mean:

The rules and structure for how data must be written.

So yes — it refers to how JSON is expressed, including:

Keys must be in double quotes

Strings must use double quotes

No trailing commas

Only specific data types allowed (string, number, object, array, boolean, null)

No functions, no comments, no undefined

Those are all part of the notation rules.

Think of it like this:

If JavaScript objects are:

🧠 A working data structure in memory

JSON notation is:

📝 The strict grammar for writing that data as plain text

Notation just means:

A system or format for writing something down

It doesn’t specifically mean “quotes.”
It means a standardized way of representing data.

So in JSON, notation means:

A standardized text format for writing structured data.

🧠 So Why the Quotes?

The quotes aren’t what “notation” means —
they’re just part of the rules of this notation system.

JSON says:

Keys must be strings

Strings must use double quotes

That’s just one rule of the JSON “notation.”

JSON is just text. A text format for representing pure data only

It doesn’t execute.
It doesn’t “auto-convert.”
It doesn’t assume anything.

It needs to follow strict grammar rules so any programming language can parse it safely.
*/


// object syntax -->
let obj = {
    name : "JW",
    age : 11,
    isFunny : true,
}

// JSON syntax -->
let json = '{"name" : "JW", "age" : 11, "isFunny" : true, "numbers" : {"num1":1,"num2":2,"num3":3}}'

// unlike object in JSON function, undefined and or date cant be stored as the value of a property. but it can have other primitive or reference data types as values like string, boolean, number, array, object, null.

// objects(no matter the layer) as values in JSON must follow the JSON syntax.

// --------------------------------------------

// JSON.stringify & JSON.parse method ---->


//JSON.stringify --> converts an obejct in JSON 
let xyz = {
    fname : "Jabir", lname : "W", age : 11
}
const xyzJsonString = JSON.stringify(xyz)//The JSON.stringify() method in JavaScript converts a JavaScript value (usually an object or array) into a JSON-formatted string.
console.log(xyzJsonString);//{"fname":"Jabir","lname":"W","age":11}



//JSON.parse--> converts JSON in an object

//converting it to an object again using json.parse method ->
const xyzJsonParse = JSON.parse(xyzJsonString)
console.log(xyzJsonParse);//{ fname: 'Jabir', lname: 'W', age: 11 }

// NOTE : whether a json is syntactically valid or not, it can be checked using JSON.parse method because a json is passed as the argument to convert to string from a json and if json is wrong in the first place, it cant possibly convert to object from a non-json format. so if using this method throws an error, its because the argument is not syntactically json formatted.



// for object parse method takes a function as the second argument and gets you all the key, valur or key-value pair-->

let second = '{"fname":"Jabir","lname":"W","age":11}'

let secondArg = JSON.parse(second, function (key,value){
    console.log(`${key} - ${value}`);
    console.log(`${key}`);
    console.log(`${value}`);
})
/*output ->
fname - Jabir
lname - W
age - 11
 - [object Object]
*/

// ---------------------------------------------------

// previously its seen that a json looks like a js object. however a json can look like an array or Array of Objects. In fact, a JSON document can start with either:

//{ } → JSON object & [ ] → JSON array

/* JSON supports arrays because:

- JavaScript supports arrays
- JSON was designed using JavaScript’s literal syntax
- Arrays are essential for representing lists of data

So JSON includes both: Object structure & Array structure

Not because arrays are objects — but because both were copied into the JSON format.
*/

// JSON as array ----->

// synatx -
let jsonArray = '["a","b","c"]'

// you can convert it to an array using the parse method -

let parsejsonArray = JSON.parse(jsonArray)
console.log(parsejsonArray);//[ 'a', 'b', 'c' ]

// or you can convert an array to a json using the stringify method-

let makeArrayJson = JSON.stringify(parsejsonArray)
console.log(makeArrayJson);//["a","b","c"]

//NOTE : JSON.stringify() doesn’t return single quotes, how do we know it’s JSON and not just an array? well, JSON is just a string so you check in the following way -

console.log(typeof makeArrayJson);//string, see? even tho it looks like an array but actually has become a string using the stringify method.
// or -
console.log(Array.isArray(makeArrayJson));//false, see again?
