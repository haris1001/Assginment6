//                      chap 21-25 
// task 1
var first_name = prompt("Enter your first name");
var last_name = prompt("Enter your last name");
var full_name = (first_name + last_name);
alert("Welcome" + full_name);

// task 2

var str = prompt("Enter your favourite mobile phone model");
var display_length = str.length;
document.write("My favourite phone is : " + str);
document.write("Length Of string is : " + display_length);

// task 3

var value = "Pakistani"
var val_index = value.indexOf("n");
document.write("String : " + value);
document.write("Index of 'n' is " + val_index);


// task 4
var str1 = "Hello World";
var indexNum = str_1.lastIndexOf("l")
document.write("String :" + str1);
document.write("The last index of 'l' is :" + indexNum)

// task 5

var value = "Pakistani"
var char = value.charAt(3);
document.write("String " + value);
document.write("Character at index 3 is " + char);

// task 6

var firstName_1 = prompt("Enter your first name");
var LastName_2 = prompt("Enter your last name");
var fullName_1 = firstName_1.concat(" " + LastName_2)
alert("Hello" + "," + " " + fullName_1 + "!");

// task 7
var city = "Hyderabad";
var rep = city.replace("Hyder", "Islam");
document.write("City :" + city);
document.write("After Replacement" + rep);

// task 8
var message = "Ali and Sami are best friends. They play cricket and football together.";
var rep = message.replace(/and/g, "&");
document.write(rep);

// task 9
var str = "472";
var type = typeof (str);
document.write("Value " + str);
document.write("Type " + type);
var val = Number(str);
document.write("Value " + val);
var type1 = typeof (val);
document.write("Type " + type1);

// task 10
var inp = prompt("Enter any word ");
var cap = inp.toUpperCase();
document.write("User Input " + inp);
document.write("Upper Case " + cap);

// task 11
var Userinput = prompt("Enter any word ");
var copy = Userinput.slice(0, 1);
var other_char = Userinput.slice(1);
copy = copy.toUpperCase();
other_char = other_char.toLowerCase();
inp = copy + other_char;
document.write(inp);

// task 12
var num = 35.36;
var withoutDot = num.toString().replace(".", "");
document.write("Number" + ":" + " " + num + "<br>")
document.write("Result" + ":" + " " + withoutDot)

// task 13
var a = prompt("Enter your name");
if (a == "@" || a == "." || a == "," || a == "!") {
   alert("Enter valid username")
}
else {
   alert("Please enter correct input")
}

// task 14

var 




// task 15
var User_paswrd = prompt("Ente your password");
if (User_paswrd == typeof (String) && User_paswrd == typeof (Number) && User_paswrd == length(6)) {
   alert("")
}




// task 16
var university = "University of Karachi";
var arr = university.split("");
for (var i = arr; i < arr.length; i += 1) {
   console.log(i);
}
//Chk krle isko

// task 17
var inp = prompt("Enter user input");
var last_char = inp.charAt(inp.length - 1);
document.write("User Input " + inp);
document.write("Last Character of input is " + last_char);

// task 18

var temp = "The quick brown fox jumps over the lazy dog";

function countOcurrences(str, value) {
   var regExp = new RegExp(value, "gi");
   return (str.match(regExp) || []).length;
}

console.log(countOcurrences(temp, 'the'));
document.write("Text " + temp);
document.write(countOcurrences(temp, 'the'));

//                        chap 26-30 
// task 19 
// a
var num = prompt("Enter any positive number");
document.write("Number " + num);

// b
document.write("round Off value is " + Math.round(num));

// c
document.write("Floor value is " + Math.floor(num));

// d
document.write("Ciel value is " + Math.ceil(num));

// task 20
var num = prompt("Enter any negative number");
document.write("Number " + num);

// b
document.write("round Off value is " + Math.round(num));

// c
document.write("Floor value is " + Math.floor(num));

// d
document.write("Ciel value is " + Math.ceil(num));

// task 21
var num1 = prompt("Ente a number");
var abs = Math.abs(num1);
document.write(" The absolute value of " + num1 + "is" + abs);

// task 22
var diceRoll_1 = Math.floor(Math.random() * 6 ) +1;
alert("random dice value" + ":" + " " + diceRoll_1);
var diceRoll_2 = Math.floor(Math.random() * 6 ) +1;
alert("random dice value" + ":" + " " + diceRoll_2);

// task 23
var coin_1 = Math.floor(Math.random() * 2) +1;
if(coin_1 == 1){
    alert(coin_1 + "\r\n" + "random coin value" + ":" + " " + "Heads")
}
else{
    alert((coin_1 + "\r\n" + "random coin value" + ":" + " " + "Tails"))
}
var coin_2 = Math.floor(Math.random() * 2) +1;
if(coin_1 == 1){
    alert(coin_2 + "\r\n" + "random coin value" + ":" + " " + "Heads")
}
else{
    alert((coin_2 + "\r\n" + "random coin value" + ":" + " " + "Tails"))
}

// task 24
var b = Math.floor((Math.random() * 100) + 1);
document.write(b)

// task 25
var weight = prompt("Enter your weight");

// a
document.write(parseInt(weight))

// b

document.write(weight);

// c ,d
document.write(parseFloat(weight));

// task 26
var secret_num = Math.floor((Math.random() * 10) + 1);
var user_num = +prompt("Enter any number between 1 to 10");
if (user_num === secret_num) {
   alert("Congratulations! Your number is equal")
} else ("Try Again! ")


//                            chap 31 -34 
// task 27
var a = new Date();
document.write(a);

// task 28
var monthNames = ["January", "February", "March", "April", "May", "June",
   "July", "August", "September", "October", "November", "December"
];

var d = new Date();
alert("The current month is " + monthNames[d.getMonth()]);

// task 29
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var d = new Date();
alert("Today is" + " " + dayNames[d.getDay()]);

// task 30
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var now = new Date();
var theDay = now.getDay();
var nameOfToday = dayNames[theDay];
if (nameOfToday == dayNames[0] || nameOfToday == dayNames[6]) {
   alert("It's Fun day")
} else ("It's working day");

// task 31
var a = new Date();
var currentdate = a
alert(currentdate)
var milisec = a.getMilliseconds();
alert(milisec)
var minute = a .getMinutes();
alert(minute)



// task 32
var a = new Date();
var hour = a.getHours();
if(hour == 0){

alert("It's AM")
}
else{
    alert("It's PM")
}





// task 33

var month = 4; // January
var LaterDate = new Date(2020, month + 1, 0);
alert(LaterDate);


// task 34





// task 35







// task 36




// task 37
var a = new Date();
var b = a.setHours
alert("Current Date:" + a)
alert("1 hour ago, it was: " + a);




// task 38
var a = new Date();
var b = a.setFullYear(1920);
alert("Current Date:" + a)
alert("100 Years back, it was: " + a);



// task 39
var age = prompt("Enter your age");
var currentyear = 2020;
var birthyear = currentyear - age;
document.write("Your age is! " + age);
document.write("Your birth year is! " + birthyear);

// task 40






//                                 chap 31-34
// task 41
function date(){
   var a = new Date()
   document.write(a)
}
date()

// task 42
var first_name = prompt("Enter your first name");
var last_name = prompt("Enter your last name");
function fullname(first_name , last_name){
     return fullname
}
var a =fullname(first_name , last_name)
alert("Hello there " + a)


// task 43
var first_num = prompt("Enter your first num");
var second_num = prompt("Enter your second num");
function add(first_num , second_num){
   var x =  first_num + second_num;
   return x
}
var a = add(first_num , second_num);
alert("sum of two numbers is " + a)

// task 44
function calc(num1, num2, opr) {
   if (opr == '+') {
      return num1 + num2;
      alert("sum " + (num1 + num2));
   }
   else if (opr == "-") {
      return (num1 - num2);
   }
   else if (opr == "*") {
      return (num1 * num2);
   }
   else if (opr == "/") {
      return (num1 / num2);
   }
   else if (opr == "%") {
      return (num1 % num2);
   }
   else {
      return 0;
   }

}
var result = calc(5 , 10, '-');
document.write("Result is " + result);

// task 45

function squareIt(number) {
   return Math.pow(number, 2);
}
alert(squareIt(5));


// task 46
function factorial(n) {
   return (n != 1) ? n * factorial(n - 1) : 1;
}

alert(factorial(10)); 

// task 47

var a = prompt("Enter Starting Number");
var b = prompt("Enter Ending Number");
var count = [];

for(i = a; i <= b; ){
    count.slice();
    i++; 
}
alert(count)

// task 48

function hypot(base , perp){
   hypotnuse = math.pow(base, 2) + math.pow(perp, 2);
   hypotnuse = math.squrt(hypotnuse)
   return(hypotnuse);
   }

function square( base, perp){

   ans = math.pow(base , 2) + math.pow(perp , 2);
   alert(ans);

   }

var base = prompt("Enter Base Number");
var perp = prompt("Enter Perp Number");
alert(hypot()); 


// task 49
// a
function area (length, width) {
   return length * width;
}
var a = area(4,7);
document.write("Area of a arectangle is " + a);   

// b
var length = prompt("Enter a whole number for the length of your rectangle.");
var width = prompt ("Enter a whole number for the width of your rectangle.");

function area (length, width) {
   return length * width;
}
var b  = area(length , width)
document.write("Area of a arectangle is " + b); 

// task 50 

function check_Palindrome(str_entry){
   // Change the string into lower case and remove  all non-alphanumeric characters
      var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
       var ccount = 0;
   // Check whether the string is empty or not
       if(cstr==="") {
           console.log("Nothing found!");
           return false;
       }
   // Check if the length of the string is even or odd 
       if ((cstr.length) % 2 === 0) {
           ccount = (cstr.length) / 2;
       } else {
   // If the length of the string is 1 then it becomes a palindrome
           if (cstr.length === 1) {
               console.log("Entry is a palindrome.");
               return true;
           } else {
   // If the length of the string is odd ignore middle character
               ccount = (cstr.length - 1) / 2;
           }
       }
   // Loop through to check the first character to the last character and then move next
       for (var x = 0; x < ccount; x++) {
   // Compare characters and drop them if they do not match 
           if (cstr[x] != cstr.slice(-1-x)[0]) {
               console.log("Entry is not a palindrome.");
               return false;
           }
           
       }
       console.log("The entry is a palindrome.");
       return true;
   }


// task 51


// task 52



// task 53




// task 54
function calcCircumference(radius){
   return 2 * 3.142 * radius
}
var circum = calcCircumference(3);
document.write("The circumference is " + circum);


function calcArea(radius){
   return  3.142 * radius * radius
}
var calcarea = calcArea(5);
document.write("The Area is " + calcarea);