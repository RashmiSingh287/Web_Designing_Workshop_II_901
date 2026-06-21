//object data type
let person={
    name: "John",
    age: 30, 
    city: "New York"
};

console.log(person);
console.log(person.name);//John
console.log(person.age);//30
console.log(person.city);//New York
typeof
console.log(typeof(person));

//array data type
let numbers = [1,2,3,4,5];
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[4]);
typeof
console.log(typeof(numbers));

let mixedArray=[1,"Hello",true,
    {name:"Alice"},
    [1,2,3]];
console.log(mixedArray[0]);
console.log(mixedArray[1]);
console.log(mixedArray[2]);
console.log(mixedArray[3]);
console.log(mixedArray[4]);
//to find the length of the array
console.log(mixedArray.length);

function greet()
{
    console.log("Hello , World!");
}
greet(); //Hello , World!

//normal function
function multiply(a,b)
{
    return a*b;
};
console.log(multiply(2,3));

//function expression
let divide=function(a,b)
{
    return a/b;
};
console.log(divide(10,2));

//arrow function with no parameters 
let sayHi = () => console.log("Hi!");
sayHi(); // Hi!

//arrow function with one parameters 
let square = x => x*x;
console.log(square(2));

let animals=["lion","tiger","dog","cat"];
animals.forEach((animals) => console.log(animals));

 
 



