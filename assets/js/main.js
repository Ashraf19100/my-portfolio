// console.log() is used to display objects
// alert() is used to show an alrming messege to the user 
// promt() is likely alert() and it can take value from the users

// =========Function==============

// there are mainly two version of JS 1) es5 2)es6
// es5 has three types of function=>1. function statements 2.function expression 3.anonymous function
// es6 has only one type of function which is => fat arrow function and it can be written in three form 1.) basic fat arrow 2.) fat arrow with one param (3.) fat arrow with impilicit return

// function test(){} --> function statement
// var test=function(){} --> function expression
// function(){} --> anonymous function
// ()=>{} fat arrow function also called basic fat arrow function
// (a)=>{} fat arrow function also called fat arrow with one param function this can be written like this --> "a=>{}""
// ()=>"value" fat arrow function also called fat arrow with implicite return function 

 console.log(this); //output ===> window

 function absc(){
    console.log(this); } //output ===> window
 absc();
// method => object
 var obj={
    name: function(){
        console.log(this);//output ===> object
    },
    age: 25,
    Id: 191001412
 }

 obj.name();
//  function inside method => window
var obj2= {
   method: function(){
      console.log(this); //output ===> object
      function obj(){
         console.log(this); //output ==> window
      }
      obj();
   }
}
obj2.method();