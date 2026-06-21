                 /****************   print 1 to 5 */
// for(let i=1; i<=5; i++){
//     console.log("hello world!");
// }
//    console.log("loop ended!");

 /************************************* PRINT SUM 1 TO 5*************************/
// let sum =0;
// let n=6;
// for(let i=1; i<=n; i++){
//     sum=sum+i;
   
// }
//     console.log("sum =",sum);
//      console.log("loop ended");


// for(let i=1; i<=5; i++){
//     // console.log("i=" ,i);
// }
//    console.log("i=",i); /// i only defined aND work in block of code 

/************************ INFINITE LOOP ************************************* */

// for(let i=1; i>=0; i++){
//     console.log("i=",i);
   
// }

/************************ while loop ************************************* */
// let i=1;
// while(i<=5){
//     i++;
//     console.log("hello world");
// }

/************************  DO while loop ************************************* */
// let i=1;
// do{
//      console.log("i=",i);
//       i++;
// }
// while(i<=5);
/************************  FOR OF LOOP ************************************* */
//used for strings and array
// let str="apna clg";
// for(let i of str){ ////iterator ->chracter
//     console.log("i=",i);
// }


// let str="javascript";
// let size=0;
// for(let i of str){ 
//     console.log("i=",i);
//     size++;
// }
// console.log("size",size);

/***********************FOR-IN LOOP ************************************************************/
// key value pair mai key return krta hai 
// let student ={
//     name:"rashmi",
//     rollno : 9,
//     class:12,
//     age:20,
//     cgpa:10,
//     ispass:true,
// };
// for( let key in student){
//     console.log("key",key , "value=" ,student[key]);
// }

/***************************************PRACTICE QUES */
//print number 1 to 100
// for(let i=1; i<=100;i++){
//     console.log("i=",i);
// }


//print even number 1 to 100

// for(let i=1; i<=100;i++){
//      if(i%2===0){
//     console.log("even number",i);
// }}

/****************PRACTICE QS2********************* */
// let gameNum=25;
//  let userNum =prompt("guess the game number");
//  while( userNum!=gameNum){//game
//     userNum= prompt("u enter a wrong number guess again");

//  }
//  console.log("You entered correct number congratulation!");


/***################################################################################################# */
//  /********STRING */
//  let str="rashmi";
//  //template literals
//  let sentence=`this is template literals`;
//  console.log(sentence);

//  let obj={
//     item:"pen",
//     price:10,
//  };
//  let output=`the cost of ${obj.item} is ${obj.price}`;
//  console.log(output);
//  console.log("the item is ",obj.item,"price is ",obj.price);

// let str="apna clg  ";
// let str2="rashmi";
// //  let newstr=str.toUpperCase(); original string mai koi change ni hota , new string mai change hoga
// // console.log(str.trim()); // remove whitespaces in starting and ending
// console.log(str.slice(0,4));///return specific part of string (start,end) ending index include nhi hote
// console.log(str.concat(str2));//add 2 string
// console.log(str.replace("a","r" ));// replace se 1 baar replace hoga(searchvalue,newwvalue)
// console.log(str.charAt(2));

/***************************************practice ques */
let fullName=prompt("enter your full name");
let username="@"+fullName+fullName.length;
console.log(username);


/************************* */

