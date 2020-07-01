document.getElementById("first").innerHTML = "1";
document.getElementsByClassName("first")[0].innerHTML = "2";
//console.log("error");

const pi = 3.14;

function test(){
    for(var i = 0; i <= 1; i++){
        var a = "hello";
        let b = "world";
    }
    alert(a);
    alert(b);
}

//STRINGS

var myStr = "I am a \"double quoted\" string inside \"double quotes\"";

var myStr2 = `"<div id="first" class="first"></div>"`;

var ourStr = "I come first. " + "I come second.";

var char = ourStr[0];

var myArray = [[1 , "Gui",], [2, "Noor"]];

//ADD ELEMENT TO THE END OF ARRAY
myArray.push([3, "Lilly"]);

//ADD ELEMENT TO THE BEGINNING OF ARRAY
myArray.unshift([3, "Lilly"]);

//REMOVE LAST ELEMENT FROM ARRAY
myArray.pop();

//REMOVE FIRST ELEMENT FROM ARRAY
myArray.shift();

//determines whether an array includes a certain value among its
myArray.includes(2);

document.write(myArray[0][1]);
document.write(myArray[1][1]);
//document.write(myArray[2][1]);

//console.log(myArray);

var myGlobal = '3';

//CHECK IF IT IS NOT NULL OR NOT EMPTY
if(myGlobal){
    //console.log("NOT EMPTY");
}

if(myGlobal === "3"){
    //console.log("funfou");
}

typeof(true);

var teste = prompt('What is your name?');

function fun2(){
    if(typeof myGlobal != "undefined"){
        //console.log("is defined");
        myGlobal += " 2";
    }
}

fun2();

//console.log(myGlobal);

console.log(JSON.stringify(myArray));
console.log(JSON.parse(JSON.stringify(myArray)));


Math.round(3.57);
Math.sqrt(10);
Math.pow(10);


//OBJECTS
var ourDog = {
    "name" : "Camper",
    "legs" : 4,
    "tails" : 1,
    "friends" : ["everthing!"],
}
console.log(ourDog.friends);

//ACCESSING PROPERTY SEPARATED BY SPACE
var testObj = {
    "an entree" : "Test"
}
console.log(testObj["an entree"]);

//ACCESSING PROPERTY SEPARATED BY VARIABLE
var attribute = "name";
var testObj2 = {
    "name" : "Camper",
}
console.log(ourDog[attribute]);

//ADDING PROPERTY TO AN EXISTING OBJECT
var myDog = {
    "name" : "Camper",
}
myDog["bark"] = "woof";
console.log(myDog.bark);

//DELETING PROPERTY FROM OBJECT
delete myDog.bark;

// KEY VALUE PAIR
var lookup = {
    "alpha" : "Adams",
    "bravo" : "Boston",
    "charlie" : "Chicago",
    "delta" : "Denver",
    "echo" : "Easy",
    "foxtrot" : "Frank",
};

console.log(lookup["bravo"]);

//CHECK IF OBJECT HAS PROPERTY
console.log(myDog.hasOwnProperty("name"));


//LOOPS
do {
    console.log(i);
    i++;
} while(i < 5)

//MATH
//random number
Math.random();

//random decimal number between 0 and 19
Math.floor(Math.random() * 20);

//random number within a range
function ourRandomRange(ourMin, ourMax) {
    // return Math.florr(Math.random() * (ourMax - ourMin + 1)) + ourMin;
    // return (Math.floor(Math.random() * (ourMax - ourMin + 1) + ourMin));
    return (Math.floor(Math.random() * ourMax) + ourMin);
}


ourRandomRange(5, 15);

//converting
function convertToInteger(str) {
    return parseInt(str);
}
convertToInteger("10");

function convertToBinary(str) {
    //2 is the base. default is 10
    return parseInt(str, 2);
}
convertToBinary("10011");

//COMPOSITE TERNARY
function checkSign(num){
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}

//REASSIGN A CONST ARRAY (MUTATION)
const s = [5, 7, 2];
function editInPlace(){
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
}
console.log(s);

//PREVENT OBJECT MUTATION 
const MATH_CONSTANTS = {
    PI : 3.14,
};
Object.freeze(MATH_CONSTANTS);
try{
    MATH_CONSTANTS.PI = 99;
} catch(ex) {
    console.log(ex);
}

//ANONYMOUS FUNCTIONS
var magic = function() {
    return new Date();
}

var magic = () => {
    return new Date(); 
} 

const magic = () => new Date();

var myConcat = function(arr1, arr2){
    return arr1.concat(arr2);
}

var myConcat = (arr1, arr2) => {
    return arr1.concat(arr2);
}

const myConcat = (arr1, arr2) => arr1.concat(arr2);

const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    return squaredIntegers;
}

//FILTER ARRAY
var numbers = [1, 3, 6, 8, 11];
var lucky = numbers.filter(function(number) {
    return number > 7;
});

//DEFAULT PARAMETER VALUES
//If no value is passed to the parameter, it will use the default value assigned in the 
//function signature
const increment = (function(){
    return function increment(number, value = 1){
        return number + value;
    }
});
console.log(increment(5,2));
console.log(increment(5));

//REST OPERATORS WITH FUNCTION PARAMETERS (...args)
//It gets the parameters and convert them into an array called 'args'
function sum(...args){
    return args.reduce((a, b) => a + b, 0);
}

//USE THE SPREAD OPERATOR TO EVALUATE ARRAYS IN-PLACE arr2 = [...arr1]
//Makes a copy of the array, instead of assigning the same object on memory 
const arr1 = ['JAN', 'FEB', 'MAR'];
let arr2;
(function(){
    arr2 = [...arr1];
    arr1[0] = 'potato'
})();
console.log(arr2);

//USE DESTRUCTURING ASSIGNMENT TO ASSIGN VARIABLES FROM OBJECTS
//OLD WAY
var voxel = {x : 3.6, y: 7.4, z: 6.54};
var x = voxel.x;
var y = voxel.y;
var z = voxel.z;
//NEW WAY
const {x : a, y : b, z : c} = voxel;

const[z, x, y] = [1, 2, 3];
console.log(z, x, y);
//switching values inside an array
[a,b] = [b, a];

//DESTRUCTURING WITH REST OPERATOR
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {

    //This example will ignore the first two elements in the array and assign all the others
    //to the rest operator
    //const [, , ...arr] = list;

    const [a, b, ...arr] = list;
}

//USE DESTRUCTURING ASSIGNMENT TO PASS AN OBJECT AS A FUNCTION'S PARAMETERS half({max, min})
const stats = {
    max : 56.78,
    min : -0.75,
    average: 35.85
}
const half = (function(){
    return function half({max, min}){
        return (max + min) / 2.0;
    }
})
console.log(half(stats));

//STRINGS WITH TEMPLATE LITERALS. Ex: `Hello World`
const greeting = `Hello, my name is ${person.name}!`;

//CREATING OBJECTS
const createPerson = (name, age, gender) => {
    return {
        name: name,
        age: age,
        gender: gender
    };
};
console.log(createPerson("Shaka de virgem", 56, "male"));
//CONCISE
const createPerson = (name, age, gender) => ({name, age, gender});

//FUNCTIONS WITHIN AN OBJECT
const bicycle = {
    gear: 2,
    setGear: function(newGear) {
        "use strict";
        this.gear = newGear;
    }
};
//CONCISE
const bicycle = {
    gear: 2,
    setGear(newGear) {
        "use strict";
        this.gear = newGear;
    }
};

//INSTANTIATING AN OBJECT
//OLD WAY
var SpaceShuttle = function(targetPlanet) {
    this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter');
console.log(zeus.targetPlanet);
//NEW WAY
class SpaceShuttle {
    constructor(targetPlanet){
        this.targetPlanet = targetPlanet;
    }
}
var zeus = new SpaceShuttle('Jupiter');
console.log(zeus.targetPlanet);

//getter and setters
function makeClass(){
    class Thermostat {
        constructor(temp){
            this._temp = 5/9 * (temp - 32);
        }
        get temperature(){
            return this._temp;
        }
        set temperature(updatedRemp){
            this._temp = updatedTemp;
        }
    }
    return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;


function BellBoy(name, age, hasWorkPermit, languages){
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;
    moveSuitcase: function() {
        alert('May I take your suitcase?');
        pickUpSuitcase();
        moveBy();
    }
}

var bellBoy = new BellBoy('Gui', 29, true, ['French', 'English']);

//differences between import and require
//We can import files, functions or variables in javascript

export const capitalizeString = str => str.toUpperCase()

import { capitalizeString } from "./string_function";

import * as capitalizeStrings from "capitalize_strings";

//export default fallback
export default function subtract(x,y){return x-y};

//import default fallback

import subtract from "math_functions";


/*OBS

- Javascript is case sensitive
- Operators: +, -, *, /, ++, --, +=, -=, *=, /=
- remainder(mod): 11 % 3 = 2
- using let upon declaring a variable avoid that two variables with the same name are defined
for the same scope
- Whenever one function takes another function as an argument, that's a good time for an arrow 
function


ESCAPING OPTIONS:
\'
\"
\\
\n  new line
\r  carriage return
\t  tab
\b  backspace
\f  form feed

*/


//DOM MANIPULATION
// window.onload = function () {
//     refresh();
// }

console.log('caralho');
document.querySelectorAll(".fodase").innerHTML = "Hello World!";
var divs = document.getElementsByClassName('fodase');
var divs = document.querySelectorAll("div");
[].forEach.call(divs, function (div) {
    div.innerHTML = 'fodase';
});

const numbers = [1,2,3,4,5];
const doubled = numbers.map(n => n * 2);
console.log(doubled);
document.querySelectorAll('div').forEach(i => i.innerHTML = 'fodase2');
document.querySelector(".img1").setAttribute("src", "images/dice" + p1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + p2 + ".png");
document.querySelector("h1").textContent = "⛳Player 1 wins";

document.querySelector("#btn-play").addEventListener("click", function () {
    refresh();
});

//PASSANDO FUNCAO COM PARAMETROS COMO PARAMETRO

function add(num1, num2){
    return num1 + num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function calculator(num1, num2, operator){
    return operator(num1, num2);
}

//call
calculator(4, 5, multiply);


var audio = new Audio('audio_file.mp3');
audio.play();