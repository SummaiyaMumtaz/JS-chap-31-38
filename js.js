// 31 - 34

//  1
var date = new Date();
document.write(date);

// 2

var month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

var d = new Date();
let m = month[d.getMonth()];
document.write(m);

// // method 2
var currentDate = new Date();
currentDate.toString;
var b = currentDate.toString();
var c = b.slice(4, 7);
document.write(c)


// // 3
var weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

var d = new Date();
var day = weekday[d.getDay()];
document.write(day);

// // 4
var weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

var d = new Date();
var day = weekday[d.getDay()];
if (day == "Saturday") {
  alert("Its fun day");
} else {
  alert("It's Work day");
}

// // 5
var d = new Date();
var day = [d.getDate()];
document.write(day);

if (day <= 15) {
  alert("first fifteen days of the Month");
} else {
  alert("last fifteen days of the Month");
}

//  6
// method 1
 
var date = new Date();
document.write("Current Date is " + date + "</br>");

var a = new Date();
document.write(a + " <br/>");

var b = new Date("9-10-2022");
var c = b.getTime();

var d = new Date("01-01-1970");
var e = d.getTime();

var f = (b - d) / (1000 * 60 * 60 * 24 * 365);
document.write(
  "Elapsed milliseconds since  Jan. 1, 1970 " + f * 31556952000 + " <br/>"
);

document.write(
  "Elapsed milliseconds since  Jan. 1, 1970 " + f * 525949.2 + " <br/>"
);

 //7 
var date = new Date();
if (date <= 12) {
  alert("its AM");
} else {
  alert("its PM");
}

 // 8
var laterDate = new Date("12-31-2020");
document.write(laterDate);

// 9
var firstRamzan = new Date("06-18-2015");
var currentDate = new Date();
var totalDays =
  (currentDate.getTime() - firstRamzan.getTime()) / (1000 * 60 * 60 * 24);
document.write(
  Math.round(totalDays) + " are the number of days passed since ramzan of 2015"
);

 // CHANGING CASE 

// 1
// var userInput = prompt("Enter Character alphabetic? ");
// userInput = userInput.toUpperCase();
// document.write(userInput)

// var userInput = prompt("Enter Character alphabetic? ");
// userInput = userInput.toLowerCase();
// document.write(userInput)

//2 
// 1
var favMob = prompt('Please enter your favourite mobile model ?')
document.write(favMob + '\n')
document.write(favMob.length)

// 2. Write a program to display the last character of a user input.

var character = prompt('Please enter your word to find the last character ?')
var lastCharacter =  character.charAt(character.length - 1)
document.write(lastCharacter);


// 1

var a = "Pakistani";
var b = a.indexOf("n");
document.write(b);

// 2
var userInput = prompt("enter your username?");

var symbol1 = userInput.indexOf("!")
var symbol2 = userInput.indexOf("@")
var symbol3 = userInput.indexOf(".")

if ( symbol1 !== -1 ||
     symbol2 !== -1 ||
      symbol3 !== -1) {
    alert("Please enter a valid username") ; 
} else{
    alert(" its valid");
}

// 3
var jumps = "The quick brown fox jumps over the lazy dog ";
var occur = 0;
for (var i = 0; i < jumps.length; i++) {
 var check = jumps.slice(i, i+3).toLowerCase();    
 if (check === "the" ){
   occur = occur + 1
 }
}
document.write(occur)

//
// 1. 

var a = "Pakistan";
var b =  a.charAt(3);
document.write(b)

var a = "Pakistan";
var b =  a.indexOf("i");
document.write(b)

// 1
var city = "Hyderabad";
 var text = city.replace("Hyder","Islam");
 document.write(text);

// 2
 var message = 'Ali and Sami are best friends. They play cricket and football together.';
var text = message.replace(/and/g, "&");
document.write(text);


// 1
var newNumber = parseInt(prompt("Enter number? ", 3.45214 ));
// b
var newNumber = parseInt(prompt("Enter number? ", 3.45214 ));
var a = Math.round(newNumber);
document.write(a)

// c. floor value of the number
var newNumber = parseInt(prompt("Enter number? ", 3.45214 ));
var a = Math.floor(newNumber);
document.write(a)

// d. ceil value of the number
var newNumber = parseInt(prompt("Enter number? ", 3.45214));
var a = Math.ceil(newNumber);
document.write(a)

// 2
// a
var Number = parseInt(prompt("Enter number? ", -2.678));

// b
var Number = parseInt(prompt("Enter number? ", -2.678));
var a = Math.round(Number);
document.write(a)



// c. floor value of the number
var Number = parseInt(prompt("Enter number? ", -2.678));
var a = Math.floor(Number);
document.write(a)



 // d. ceil value of the number
var Number = parseInt(prompt("Enter number? ", -2.678));
var a = Math.ceil(Number);
document.write(a)


// 1
var a = Math.random();
document.write(a);
var dice = parseFloat(Math.ceil(Math.random()*6));
document.write(dice);

//toss
var toss = Math.round(Math.random() * 2);
if (toss === 2) {
    document.write('Heads') 
} else if (toss === 1) {
    document.write('Tails')
} else {
    document.write('Try again')
}

// 3
var SecretNo = Math.ceil(Math.random()*10);
var userInput = parseInt(prompt("Enter a no to guess the secret no between 1 to 10: "));
if(userInput === SecretNo){
    alert("Congratulations!");
} else{
    alert("Better luck next time")
}

 
// Controlling the length of decimals
// 1
var percentage = (30 / 45) * 100;
var Decimals = percentage.toFixed(2);
document.write(Decimals);




//chap 35-38
// 1
// function date() {
//     var currentDate = new Date();
//     document.write(currentDate+ "<br><br>");
// }
// date();


// 2
//  var Name = prompt("your name ?");
//  var LastName = prompt("write your last name ?");
// function greeting() {
//    var greeting = Name + " " + LastName;
//    alert (" Hi! " + Name + '  ' + LastName );
// }
// greeting();

 


// 3

// function sum(a,b) {
//     var total = a + b;
//     document.write(total);
// }
// sum(5,8);


// 4

// function calculator(no1,no2,operation) {
//     if(operation === "+"){
//         document.write(no1 +  no2 + "<br><br>");
//     }
//     else if(operation === "-"){
//         document.write(no1 - no2 + "<br><br>"); 
//     }
//     else if(operation === "*"){
//         document.write(no1 * no2+ "<br><br>"); 
//     }
//     else if(operation === "/"){
//         document.write(no1 / no2+ "<br><br>"); 
//     }
// }
// calculator(8,3,'-')


// 5
// function sum(a) {
//     var total = a*8;
//     document.write(total)
// }
// sum(8);


// 6
// function factorial(n){
//     var answer = 1;
//     if(n == 0 || n == 1){
//         document.write(1 + "<br><br>");
//     }
//     else{
//         for(var i = n; i >= 1; i--){
//             answer = answer * i;
//           }
//           document.write(answer + "<br><br>");
//     }
// }
// factorial(4);


// 7
// document.write("<h1>Count to a range</h1><br>");
// function counting(no, range){
//     for(var i = no; i<=range; i++){
//         document.write(i + "<br>");
//     }
// }
// counting(1,10);

// 8
// Hypotenuse2 = Base2 + Perpendicular2.
// Outer function : Hypotenuse()
// Inner function: Square()

// function Hypotenuse(base, perpendicular){
//     var hypotenuse = Square(base) + Square(perpendicular);
//     function Square(para1){
//         return para1**2
//     }
//     document.write("Hypotenuse: " + hypotenuse + "<br><br>");
// }
// Hypotenuse(12,8);


// 9


// function area(width, height){
//     var A  = width * height;
//     document.write("Area of Rectangle: " + A  + "<br><br>");
// }
// area(2,4);
// var w = parseInt(prompt("Enter width of the rectangle: "));
// var h = parseInt(prompt("Enter height of the rectangle: "));
// area(w,h);








// 10

// function Palindrome(string) {
//     var len = string.length;
//     for (var i = 0; i < len / 2; i++) {
//         if (string[i] !== string[len - 1 - i]) {
//             document.write('It is not a palindrome' + "<br><br>");
//          }
//      }
//     document.write('It is a palindrome' + "<br><br>");
// }   
// var string = prompt('Enter a string: ');
// Palindrome(string);

// 12
// document.write("<h1>Longest word in the string</h1><br>");
// function longestWord(string){
//     var Split = string.split(' ');
//     var Word = 0;  
//     var word;
//     for(var i = 0; i < Split.length; i++){
//         if(Split[i].length > Word){
//         Word = Split[i].length;
//         word = Split[i]
//         }
//       }
//     document.write("The longest word in the string is: " + word + "<br><br>");
// }
// longestWord("Web Development Tutorial");

// 14
// function calcCircumference(radius){
//     document.write("The circumference is " + (2*Math.PI*radius) + "<br><br>");
// }
// calcCircumference(5);

// function calcArea(radius){
//     document.write("The area is " + ((Math.PI) * (radius**2)) + "<br><br>");
// }
// calcArea(15);



























































