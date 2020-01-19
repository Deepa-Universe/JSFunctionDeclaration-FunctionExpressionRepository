"use strict";


//I. Function Declaration

//It can be called here as well
onTestDemo();

//Defining function
function onTestDemo()
{
    console.log("Hello Demo");
}

//Calling function
onTestDemo();


//II. Function Expression- We encapsulate the function in a variable

//Throw Exception
//onTestDemoExpression1(); //Cannot access 'onTestDemoExpression1' before initialization
//Note- Function is called through variable


let onTestDemoExpression1 = function(){
    console.log("Hello Function Expression");
}

let onTestDemoExpression2 = function(strName){
    console.log(strName);
}

let onTestDemoExpression3 = function(strFirstName, strLastName){
    return `${strFirstName} - ${strLastName}`;   //String Interpolation
}

//Calling Function
onTestDemoExpression1();
onTestDemoExpression2("Deepa");
let result = onTestDemoExpression3("Deepa", "RamiReddy");
console.log(result);

//If we dont want to use result variable- we can still call function directly in log
console.log(onTestDemoExpression3("Deepa", "RamiReddy"));