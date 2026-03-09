// Example —> Arrays of objects

// Usage-1) you can get or change the values from objects in an array of objects using map.

let users = [
 {name: "John", age: 17},
 {name: "Sarah", age: 25},
 {name: "Mike", age: 30}
];


let xyz = users.map((user)=>{
    return (user);
})
console.log(xyz);

// callback parameter stores one element of the array at a time, it receives each object one by one. Here, Each element of the array is an object. map() collects each of them and returns them in a new array.