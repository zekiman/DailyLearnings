// //*****  COURSE 154 - VARIABLES 

// //age is a variable, declared with var 
// var age;

// //assigned a value to age variable
// age=21;

// //console shows to value of the variable
// console.log(age)

// //a new value assigned to 'age' variable
// age='twenty-one'

// //we are getting the new string value
// console.log(age)

// //note: in console, string is shown with grey colour, number is blue.


// //------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//


// //* RULES FOR DEFINING VARIABLE

// //* 1- Variable names cannot start with a digit

// // because it can cause some problems;

// // for example; 
// // var a = 2
// // var 2 = 5
// // var b = 2 * a

// // what is the value of b? 4 or 10? So variable names have to start with letters or special characters like below

// var age1;
// var _age2;
// var $age3;

// //* 2- Variable names cannot be a keyword (if, while, for etc.)

// //* 3- Variable names are case sensitive

// // these are different variables;

// var firstName= 'Zekiman'
// var FirstName= 'Kubrawoman'

// console.log(firstName+' '+FirstName)


// //------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//


// //* DIFFERENCES OF 'var, let, const'

// //***  'var' variables can be updated and re-declared

// var nameZ= 'Zekiman'
// console.log(nameZ)

// var nameZ = 'ZekimanX'
// console.log(nameZ)

// //***  'let' variables can be updated but not re-declared

// let city = 'Istanbul'
// console.log(city)

// // we can updated the variable;
// city = 'Ankara'
// console.log(city)

// // but when we try to re-declaring the city variable like below, 
// // let city = 'Ankara' 

// // we will get an error like this;
// // 'Uncaught SyntaxError: Identifier 'city' has already been declared'

// //***  'const' variables can neither be updated and re-declared

// const surnameX = 'Kara'
// console.log(surnameX)

// // when we try to update or re-declare  the const variable like below, we get error.
// // surnameX = 'Akgün'
// // const surnameX = 'Akgün Kara'


//**------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//


// //***** COURSE 155 - TYPES OF VALUE
// // 'typeof' is a keyword that will return the type of a variable
// // console.log(typeof xVariable) >> result >> string, number etc.

// //*** 1. Primitive Values

// //*** 1.1. String Type
// let stringVariable = 'String Statement'
// console.log(typeof stringVariable)


// //*** 1.2. Number Type
// let numberVariable = 21;
// console.log(typeof numberVariable)


// //*** 1.3. Boolean Type
// let isActive = true;
// console.log(typeof isActive)


// //*** 1.4. Null Type
// let nullValue = null;
// console.log(typeof nullValue)


// //*** 1.5. Undefined Type
// let undefinedValue;
// console.log(typeof undefinedValue)



// //*** 2. Objects

// //*** 2.1. Array
// let names= ['Zekiman','Kubrawoman']
// console.log(typeof names)


// //*** 2.2. Object
// let personInfo= {
//     city:'Antalya',
//     country:'Turkey',
//     postCode:'07100'
// }
// console.log(typeof personInfo)


// //***  2.3. Function
// let calculator = function(){
//     return 21;
// };
// console.log(typeof calculator)


//**------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//


// //***** COURSE 156 - TYPE CONVERSION


// //*** 1. Converting Strings to Numbers
// //* We can convert a string type to number by type 'Number' before the string 

// let str1 = '5';
// let str2 = '10';
// console.log(str1+str2); 

// //we will get 510 result. Because this is a string statement, not a number. Therefore, it combined the two value.

// // but if we would convert the strings to numbers, we could get sum value (15)
// str1 = Number('5');
// str2 = Number('10');
// console.log(str1+str2)

// ////
// //* NOTE: toFixed()
// //* toFixed() function defines how many digits will shown after decimal 

// let valA = 11.02
// console.log(valA.toFixed(2))


// //* NOTE: value of 'true' equals to 1, 'false' and 'null' are 0.
// let valTest = Number(true);
// console.log(valTest); // 1
// console.log(typeof valTest); // number
// console.log(valTest.toFixed(2)); // 1.00

// valTest = Number(false);
// console.log(valTest); // 0
// console.log(typeof valTest); // number
// console.log(valTest.toFixed(2)); // 0.00

// valTest = Number(null);
// console.log(valTest); // 0
// console.log(typeof valTest); // number
// console.log(valTest.toFixed(2)); // 0.00

// valTest = Number('a');
// console.log(valTest); // NaN (Not a Number)
// console.log(typeof valTest); // number
// console.log(valTest.toFixed(2)); // NaN


// //*** 2. Converting Numbers to Strings
// //* To convert from numbers to strings we need to type 'String' before Number 

// let num1 = 4;
// let num2 = 6;
// console.log(num1) //we will get 4 result
// console.log(num2) //we will get 6 result
// console.log(num1+num2) //we will get 10 result

// //when we put string before the number...
// num1 = String(4)
// num2 = String(6)

// console.log(num1+num2) // result will be 46


// //*** 3. Converting Booleans to Strings
// let val = true;
// console.log(val)
// console.log(typeof val)
// //** Need to type 'String' before the boolean statement. for example;

// val = String(true);
// console.log(val)
// console.log(typeof val) //string
// console.log(val.length) //4


// //*** 4. Converting Dates to Numbers
// let date = new Date()
// console.log(date) //Wed Oct 2021 21:53 GMT+0300

// date = String(date)
// console.log(typeof date) //string


// //*** 5. Array to String
// let newVal;
// newVal = [1,2,3,4,5]
// console.log(newVal) // (5) [1, 2, 3, 4, 5]

// newVal = String(newVal)
// console.log(newVal) // 1,2,3,4,5
// console.log(typeof newVal) // string
// console.log(newVal.length) // 9


// //*** 5. Converting Booleans to Numbers
// //*** 6. Converting Numbers to Booleans
// //*** 7. Converting Numbers to Dates


// //*** More Easy Way To Converting To String!!
// //*** Needs to use 'toString()' function after the value

// let valX = (10).toString();
// console.log(valX);
// console.log(typeof valX);

// // valX = valX.toString()
// // console.log(typeof valX) 

// valX = new Date().toString(); 
// console.log(valX); // Thu Oct 21 2021 20:43:45 GMT+0300
// console.log(typeof valX); // string


// //* NOTE: '.length' is usable for only String statements 

// let valY = 11
// let valZ = 'eleven'

// console.log(valY.length) // undefined
// console.log(valZ.length) // 6


// //* parseInt
// //* The function parses a string argument and returns an integer of the specified radix.
// val = parseInt('10')
// console.log(val); // 10
// console.log(val.toFixed(2)); // 10.00
// //////
// val = parseInt('10.99')
// console.log(val); // 10
// console.log(val.toFixed(2)); // 10.00

// //* parseFloat 
// //* The function parses an argument and returns a floating point number.
// val = parseFloat('10.5');
// console.log(val); // 10.5
// console.log(val.toFixed(2)); // 10.50


//**------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//


// //***** COURSE 157 - EXERCISE

// //* Create following variables;

// //* Customer name:
// let customerName = 'Zekiman';

// //* Customer surname:
// let customerSurname = 'Kara';

// //* Customer ID:
// let customerID = '123123123'

// //* Total order amount:
// let customerOrderAmount = 350;

// //* Customer gender:
// let customerGender = 1;

// //* Customer adress:
// let customerAdress = 'Istanbul, Turkey';

// //* Customer hobbies:
// let customerHobbies = ['reading','coding']


// //* Or we can type easily like this;
// let customer = {
//     name: 'Zekiman',
//     surname: 'Kara',
//     ID: '123123123',
//     orderAmount: 350,
//     gender: 'male',
//     adress: {
//         city: 'Istanbul', 
//         district: 'Kadikoy',
//         body: 'Omeraga Mahallesi Sakine Hanim Sokak No:12/25',
//         country: 'Turkey'},
//     hobbies: ['reading','coding']
// }

// console.log(customer)


// //** Calculate the sum of order amount below:

// let order1='250';
// let order2='350';

// let totalAmount = Number(order1)+Number(order2)
// console.log(String(totalAmount)+'₺') // 600₺


// //*** Calculate the sum of order amount below:

// let order3='100.7';
// let order4='150.8';

// totalAmount = Number(order3)+Number(order4)
// console.log(String(totalAmount)+'₺') // 250.7₺


// //*** calculate the sum of order amount as integer

// let order5 = '100.7';
// let order6 = '150.8';

// totalAmount = parseInt(Number(order5)+Number(order6));
// console.log(totalAmount)


// //**** Calculate the birthday according to birth year below:

// let birthYear = 1994;

// function calculateAge(x){
//     let y = new Date().getFullYear()-x
//     console.log(y)
//     return y;
// }

// calculateAge(1994);


//**------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//


// //***** COURSE 158 - OPERATORS

// let val;
// const a = 10;
// const b = 5;


// //*** 1. Arithmetic Operators

// //*** '+' :  addition
// val = a+b;
// console.log(val) // 15

// //*** '-' :  subtraction
// val = a-b;
// console.log(val) // 5

// //*** '*' :  multiplication
// val = a*b
// console.log(val) // 50

// //*** '**' :  exponentiation
// val = a**2
// console.log(val) // 100

// //*** '/' :  division
// val = a/b
// console.log(val) // 2

// //*** '%' :  modulus (remainder)
// val = a%7
// console.log(val) // 3

// //*** '++' :  increment
// let c = 5;
// valF = c++ 
// console.log(valF) // 5
// console.log(c) // 6

// let d = 5;
// valG = ++d
// console.log(valG) // 6  

// //*** '--' :  decrement
// let e = 5;
// valH = --e;
// console.log(valH) // 4


// //*** 2. Assignment Operators
// //---------------------------------------------
// val = 10
// //---------------------------------------------
// //***   Operator    Example     Same As
// //---------------------------------------------
// //***   =           x = y       x = y
// //---------------------------------------------
// //***   +=          x += y      x = x + y
// //---------------------------------------------
// //***   -=          x -= y      x = x - y
// //---------------------------------------------
// //***   *=          x *= y      x = x * y
// //---------------------------------------------
// //***   /=          x /= y      x = x / y
// //---------------------------------------------
// //***   %=          x %= y      x = x % y
// //---------------------------------------------
// //***   <<=         x <<= y     x = x << y
// //---------------------------------------------
// //***   >>=         x >>= y     x = x >> y
// //---------------------------------------------
// //***   >>>=        x >>>= y    x = x >>> y
// //---------------------------------------------
// //***   &=          x &= y      x = x & y
// //---------------------------------------------
// //***   ^=          x ^= y      x = x ^ y
// //---------------------------------------------
// //***   |=          x |= y      x = x | y
// //---------------------------------------------
// //***   **=         x **= y      x = x ** y
// //---------------------------------------------

// //---------------------------------------------
// val = 10;               console.log(val); // 10
// val = 10;   val += 1;   console.log(val); // 11
// val = 10;   val -= 1;   console.log(val); // 9
// val = 10;   val *= 2;   console.log(val); // 20
// val = 10;   val /= 2;   console.log(val); // 5
// val = 10;   val %= 3;   console.log(val); // 1
// val = 10;   val <<= 3;  console.log(val); // 80 - ASK LATER i dont understand how it works
// val = 10;   val >>= 2;  console.log(val); // 2 - ASK LATER
// val = 10;   val >>>= 2; console.log(val); // 2 - ASK LATER
// val = 10;   val &= 2;   console.log(val); // 2 - ASK LATER
// val = 10;   val ^= 2;   console.log(val); // 8 - ASK LATER
// val = 10;   val |= 2;   console.log(val); // 10 - ASK LATER
// val = 10;   val **= 2;  console.log(val); // 100 - ASK LATER
// //---------------------------------------------


// //*** 3. Comparison Operators
// //---------------------------------------------
// //***   ==  equal to
// console.log(1 == 1)         // true
// console.log(1 == '1')       // true
// console.log(1 == 2)         // false 
// //---------------------------------------------
// //***   ===  equal value and equal type
// console.log(1 === 2)        // false 
// console.log(2 === '2')      // false 
// console.log(2 === 2)        // true 
// console.log('2' === '2')    // true
// //---------------------------------------------
// //***   !=  not equal
// console.log(1 != 2)         // true
// console.log(1 != 1)         // false
// //---------------------------------------------
// //***   !==  not equal value or not equal type
// console.log(1 != 2)         // true
// console.log(1 != '1')       // false
// console.log(1 != 1)         // false
// console.log('1' != '1')     // false
// //---------------------------------------------
// //***   >   greater than
// console.log(2 > 1)          // true
// console.log(2 > 2)          // false
// //---------------------------------------------
// //***   <   less than
// console.log(1 < 2)          // true
// console.log(1 < 1)          // false
// //---------------------------------------------
// //***   >=   greater than or equal to
// console.log(2 >= 1)         // true
// console.log(2 >= 2)         // true
// console.log(2 >= 3)         // false
// //---------------------------------------------
// //***   <=   less than or equal to
// console.log(1 <= 1)         // true
// console.log(1 <= 2)         // true
// console.log(1 <= 0)         // false
// //---------------------------------------------


// //*** 4. Logical Operators
// //---------------------------------------------
// //***   &&  and  

// //***   true && true    : true
// //***   true && false   : false
// //***   false && false  : false

// console.log(1 < 2 && 3 > 2) // true
// console.log(2 < 2 && 3 > 2) // false
// console.log(1 < 2 && 3 > 3) // false

// //---------------------------------------------
// //***   ||  or  

// //***   true || true    : true
// //***   true || false   : true
// //***   false || false  : false

// console.log(1 < 2 || 3 < 4)  // true
// console.log(1 < 2 || 1 < 1)  // true
// console.log(2 < 1 || 1 < 2)  // true
// console.log(2 < 2 || 2 < 2)  // false

// //---------------------------------------------
// //***   !   not

// //***   ! true              : false
// //***   ! false             : true
// //***   ! true || false     : false
// //***   ! false || false    : true
// //***   ! true && false     : true

// console.log(!(2 < 2))           //  true
// console.log(!(2 < 2 || 3 < 3))  //  true
// console.log(!(1 < 2))           //  false
// console.log(!(2 < 2 || 1 < 3))  //  false
// console.log(!(1 < 2 && 2 < 2))  //  true
// //---------------------------------------------


//**------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//


// //***** COURSE 159 - EXERCISES

// //---------------------------------------------

// //*** Get John and Ada height and weight infos
// let johnW = 105;
// let johnH = 1.73;
// let adaW = 45;
// let adaH = 1.60;

// console.log('John\'s weight: '+johnW+' kg and John\'s height: '+johnH+' m' )
// // John's weight: 105 kg and John's height: 173 cm
// console.log('Ada\'s weight: '+adaW+' kg and Ada\'s height: '+adaH+' m' )
// // Ada's weight: 45 kg and Ada's height: 160 cm

// //---------------------------------------------

// //*** Calculate Body mass index according to the info
// //****** Formula; Weight / square of height
// let indexJohn = johnW / (johnH*johnH)
// let indexAda = adaW / (adaH*adaH)

// console.log('John\'s BMI: '+indexJohn.toFixed(2)) // John's BMI: 35.08
// console.log('Ada\'s BMI: '+indexAda.toFixed(2)) // John's BMI: 35.08

// //---------------------------------------------

// //*** Compare people by BMI
// let indexAdaHigherThanJohn = indexAda > indexJohn
// let indexJohnHigherThanAda = indexJohn > indexAda

// console.log('indexAda > indexJohn :'+indexAdaHigherThanJohn) // false
// console.log('indexJohn > indexAda :'+indexJohnHigherThanAda) // true

// //---------------------------------------------

// //*** According to the following classes, in which groups can we put people?
// //****** 0,0 - 18,4     underweight 
// //****** 18,5 - 24,9    normal
// //****** 25,0 - 29,9    overweight
// //****** 30,0 - 35,9    obese

// let isJohnUnderweight = indexJohn>0 && indexJohn<18.5
// console.log('Is John Underweight? :'+isJohnUnderweight) // false

// let isJohnNormal = indexJohn>18.4 && indexJohn<25
// console.log('Is John normal weight? :'+isJohnNormal) // false

// let isJohnOverweight = indexJohn>24.9 && indexJohn<30
// console.log('Is John Overweight? :'+isJohnOverweight) // false

// let isJohnObese = indexJohn>29.9 && indexJohn<36
// console.log('Is John Obese? :'+isJohnObese) // true

// //---------------------------------------------

// let isAdaUnderweight = indexAda>0 && indexAda<18.5
// console.log('Is Ada Underweight? :'+isAdaUnderweight) // false

// let isAdaNormal = indexAda>18.4 && indexAda<25
// console.log('Is Ada normal weight? :'+isAdaNormal) // false

// let isAdaOverweight = indexAda>24.9 && indexAda<30
// console.log('Is Ada Overweight? :'+isAdaOverweight) // false

// let isAdaObese = indexAda>29.9 && indexAda<36
// console.log('Is Ada Obese? :'+isAdaObese) // true

// //---------------------------------------------


//**------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//


// //***** COURSE 160 - DATES & TIMES
// //* https://www.udemy.com/course/komple-web-developer-kursu/learn/lecture/17801888#overview
// //* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

// let d = new Date();

// console.log(d) // Tue Oct 26 2021 08:05:05 GMT+0300 (Doğu Avrupa Yaz Saati)
// console.log(typeof d) // object

// //let's check which methods can use with date object.
// //to see, put '.' after d variable
// // console.log(d.)

// //---------------------------------------------
// //*** A. Constructor

// //*** 1. new Date()
// //*** When called as a constructor, returns a new Date object.
// val = new Date();
// console.log(val);
// console.log(typeof val); // object

// //*** 2. Date()
// //*** When called as a function, returns a string representation of the current date and time like that;
// val = new Date().toString();
// console.log(val);
// console.log(typeof val); // string

// //---------------------------------------------

// //*** B. Static Methods

// //*** 1. Date.now()
// //*** Returns the numeric milisecond value corresponding to the current time (the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC)

// let dateNowInMS = Date.now()
// console.log(dateNowInMS) // 1635311973716



// //*** 2. Date.parse()
// //*** The method parses a string represantation of a date, and return number of miliseconds since 01/01/1970 00:00:000 UTC

// val = Date.parse('01/01/1970 00:00:00:03 GMT'); console.log(val) // 3
// val = Date.parse('1970-01-01 00:00:00:02 GMT'); console.log(val) // 2
// val = Date.parse('01.01.1970 00:00:00:01 GMT'); console.log(val) // 1

// //---------------------------------------------
// //* calculating Age
// let birthDayinMS = Date.parse('1994-11-04 03:00:00:00 GMT+3')
// console.log(birthDayinMS)

// let allTimeInMS = dateNowInMS-birthDayinMS

// let days = Math.trunc(allTimeInMS/86400000)
// console.log('I live for '+days+' days.')

// let month = Math.trunc((allTimeInMS/(2.62974383*(10**9))))
// console.log('I live for '+month+' months.')

// let year = Math.trunc((allTimeInMS/(3.1556926*(10**10))))
// console.log('I live for '+year+' years.')
// //---------------------------------------------


// //---------------------------------------------
// //** NOTE: Some Useful Methods (i will note these methods with more details later)
// //---------------------------------------------
// //** Math.pow(10,2)     similar to     10**2
// val = Math.pow(10,2);   console.log(val)    // 100
// val = Math.pow(8,3);    console.log(val)    // 512
// val = 10**2;            console.log(val)    // 100    
// val = 8**3;             console.log(val)    // 512
// //---------------------------------------------
// //**  Math.trunc()       will remove any fractional digits
// val = 5.67567;
// console.log(Math.trunc(val))    // 5  
// //---------------------------------------------
// //**  Math.round()      to round to the nearest integer.
// val = 5.67567;
// console.log(Math.round(val))    // 6  
// //---------------------------------------------
// //**  parseInt()        to parse to the nearest whole number.
// // Note that if looking for performance this is the slowest method. 
// val = 5.67567;
// console.log(Math.round(val))    // 6 
// //---------------------------------------------
// //**  toFixed()         to remove a certain amount of decimals.
// val = 5.67567;
// console.log(val.toFixed())      // 6
// console.log(val.toFixed(2))     // 5.68
// console.log(val.toFixed(1))     // 5.7
// //---------------------------------------------


// //*** 3. Date.UTC() 
// //*** The method is similar to the Date constructor, but treats them as UTC. It returns the miliseconds since 1970-1-1 UTC

// //*** Syntax >>
// //*** Date.UTC(year, month, day, hour, minute, second, millisecond) 

// val = Date.UTC();
// console.log(val)

// val = new Date(Date.UTC(2021, 9, 27, 9, 33, 0)) 
// console.log(val) // Wed Oct 27 2021 12:33:00 GMT+0300

// //---------------------------------------------


// //*** C. Instance Methods

// //---------------------------------------------
// //*** 1. getDate()
// //*** The method returns the day of the month for the specified date according to local time

// val = new Date();               console.log(val);   // Wed Oct 27 2021 12:33:00 GMT+0300
// val = new Date().getDate();     console.log(val);   // 27

// //---------------------------------------------

// //*** 2. getDay()
// //*** The method returns the days of the week according to local time. Each number (0-6) represents a day by starts from 0. (0: Sunday - 1: Monday - 2: Tuesday ... 6: Saturday)

// val = new Date();               console.log(val);   // Wed Oct 27 2021 12:33:00 GMT+0300
// val = new Date().getDay();      console.log(val);   // 3 (it means Wednesday) 

// let birthday = new Date('1994-11-04');
// console.log(birthday.getDay());                     // 5 (it means Friday)
// console.log('I was born in '+birthday.getDay()+'. day of the week')

// //---------------------------------------------

// //*** 3. getFullYear()
// //*** Returns the year (4 digits for 4-digit years) of the specified date according to local time.
// //The value returned by getFullYear() is an absolute number. For dates between the years 1000 and 9999, getFullYear() returns a four-digit number, for example, 1995. Use this function to make sure a year is compliant with years after 2000.

// let moonLanding = new Date('July 20, 69 00:20:18');

// console.log(moonLanding.getFullYear());
// // expected output: 1969

// //---------------------------------------------

// //*** 4. getMonth()
// //*** Returns the month (0–11) in the specified date according to local time.
// // Return value is an integer number, between 0 and 11, representing the month in the given date according to local time. 0 corresponds to January, 1 to February, and so on.

// var Xmas95 = new Date('December 25, 1995 23:15:30');
// month = Xmas95.getMonth();

// console.log(month); // 11

// //------------------

// //* Note: If needed, the full name of a month (January for example) can be obtained by using Intl.DateTimeFormat() with an options parameter. Using this method, internationalization is made easier:

// var options = { month: 'long'};
// console.log(new Intl.DateTimeFormat('en-US', options).format(Xmas95));
// // December

// // more detail about Intl.DateTimeFormat(); 
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat#using_options


// //---------------------------------------------

// //*** 5. getHours()
// //*** Returns the hour (0–23) in the specified date according to local time.

// Xmas95 = new Date('December 25, 1995 23:15:30');
// let hours = Xmas95.getHours();

// console.log(hours); // 23

// //---------------------------------------------

// //*** 6. getMinutes()
// //*** Returns the minutes (0–59) in the specified date according to local time.

// Xmas95 = new Date('December 25, 1995 23:15:30');
// var minutes = Xmas95.getMinutes();

// console.log(minutes); // 15

// //---------------------------------------------

// //*** 7. getSeconds()
// //*** Returns the seconds (0–59) in the specified date according to local time.

// Xmas95 = new Date('December 25, 1995 23:15:30');
// var seconds = Xmas95.getSeconds();

// console.log(seconds); // 30

// //---------------------------------------------

// //*** 8. getMilliseconds()
// //*** Returns the milliseconds (0–999) in the specified date according to local time.

// //---------------------------------------------

// //*** 9. getTime()
// //*** Returns the numeric value of the specified date as the number of milliseconds since January 1, 1970, 00:00:00 UTC. (Negative values are returned for prior times.)

// //Return value: a number representing the milliseconds elapsed between 1 January 1970 00:00:00 UTC and the given date.

// //** using getTime() examples;
// //** for copying dates

// // Since month is zero based, birthday will be Feb 10 1994
// birthday = new Date(1994, 1, 10);
// var copy = new Date();
// copy.setTime(birthday.getTime());
// console.log(copy) // Feb 10 1994

// //----

// //Measuring execution time

// var end, start;

// start = new Date(2021,9,27,18,41);
// end = new Date();

// console.log('Operation took ' + (end.getTime() - start.getTime()) + ' msec' ); 
// // Operation took 268 msec

// //---------------------------------------------

// //*** 10. setDate()
// //*** Sets the day of the month for a specified date according to local time.
// //*** The setDate() method changes the day of the month of a given Date instance, based on local time.

// let event = new Date('August 19, 1975 23:15:30');

// event.setDate(24);

// console.log(event.getDate());
// // expected output: 24

// event.setDate(32);
// // Only 31 days in August!

// console.log(event.getDate());
// // expected output: 1

// //If the dayValue is outside of the range of date values for the month, setDate() will update the Date object accordingly.

// //For example, if 0 is provided for dayValue, the date will be set to the last day of the previous month.

// //If a negative number is provided for dayValue, the date will be set counting backwards from the last day of the previous month. -1 would result in the date being set to 1 day before the last day of the previous month.

// let theBigDay = new Date(1962, 6, 7, 12); 
// console.log(theBigDay); // noon of 1962-07-07 (7th of July 1962,  month is 0-indexed)
// theBigDay.setDate(24);  console.log(theBigDay);     // 1962-07-24 (24th of July 1962)
// theBigDay.setDate(32);  console.log(theBigDay);     // 1962-08-01 (1st of August 1962)
// theBigDay.setDate(22);  console.log(theBigDay);     // 1962-08-22 (22nd of August 1962)
// theBigDay.setDate(0);   console.log(theBigDay);     // 1962-07-31 (31st of July 1962)
// //-------------
// theBigDay.setDate(98);  console.log(theBigDay);     // 1962-10-06 (6th of October 1962)
// //in this case, if setDate would be 32, date would be 1962-08-01, 63--> 1962-09-01, 93--> 1962-10-01, 98--> 1962-10-06  
// //-------------
// theBigDay.setDate(-50); console.log(theBigDay);     // 1962-08-11 (11th of August 1962)

// //---------------------------------------------

// //*** 11. - 16. set/FullYear,Month,Hours,Minutes,Miliseconds,Time
// //*** note: we dont have method like 'setDay()' due to we can define the day of the mont by setDate()

// //***setFullYear()
// //*** Sets the full year (e.g. 4 digits for 4-digit years) for a specified date according to local time.
// //---------------------------------------------
// //*** setMonth()
// //*** Sets the month for a specified date according to local time.
// //---------------------------------------------
// //*** setHours()
// //*** Sets the hours for a specified date according to local time.
// //---------------------------------------------
// //*** setMinutes()
// //*** Sets the minutes for a specified date according to local time.
// //---------------------------------------------
// //*** setMilliseconds()
// //*** Sets the milliseconds for a specified date according to local time.
// //---------------------------------------------
// //*** setTime()
// //*** Sets the Date object to the time represented by a number of milliseconds since January 1, 1970, 00:00:00 UTC. Use negative numbers for times prior.

// theBigDay = new Date('July 1, 1999');
// var sameAsBigDay = new Date();
// sameAsBigDay.setTime(theBigDay.getTime());

// console.log(sameAsBigDay) // Thu Jul 01 1999 00:00:00

// //---------------------------------------------


//**------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//


// //***** COURSE 161 - EXERCISES (Date & Time)
// //* https://www.udemy.com/course/komple-web-developer-kursu/learn/lecture/17801890#overview
// //* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

// //---------------------------------------------
// //* 1. Print the today's date (day & month & year)

// let today, todayDay, todayMonth, todayYear;
// today = new Date(2021,9,28);
// todayDay = today.getDate();
// todayMonth = today.getMonth();
// todayYear = today.getFullYear();

// console.log('Today is '+todayDay+' '+(todayMonth+1)+' '+todayYear+'.');
// // Today is 28 10 2021.

// //---------------------------------------------

// //* 2. Create a Date object which includes date & hour

// let dateObject = new Date(1994,10,4,3,30);
// console.log(dateObject) // Fri Nov 04 1994 03:30:00 GMT+0200 

// //---------------------------------------------

// //* 3. Print one day before the 1/1/1990 date

// let date;

// //first way
// date = new Date('1990-1-1') 
// date.setDate(0);    console.log(date);      // Sun Dec 31 1989 00:00:00

// //second way
// date = new Date('1990-1-1') 
// let oneDayBefore = date.getDate()-1;
// date.setDate(oneDayBefore);  
// console.log(date)                           // Sun Dec 31 1989 00:00:00

// //---------------------------------------------

// //* 4. Calculate the passing time 2 dates

// let startDate, finishDate, passingTime;

// startDate = new Date(2021,9,21);
// finishDate = new Date(2021,9,28);

// passingTime = finishDate-startDate

// console.log(passingTime/86400000+' day passed from '+startDate+' to '+finishDate)

// //---------------------------------------------

// //* 5. How to do age calculating? 

// let birthday;
// birthday = new Date(1994,10,4)
// today = new Date(2021,9,28)

// //first way
// let ageInMS = today-birthday;           console.log(ageInMS);   //851468400000
// let ageInMonth = ageInMS / 2592000000
// let ageInYear = ageInMonth/12
// console.log(ageInYear)              // 27.37488425925926

// //second way
// let birthdayMS = birthday.getTime();    console.log(birthdayMS)
// let todayMS = today.getTime();          console.log(todayMS)    
// //Date.now() returns same value as new Date().getTime()

// let ageMS = todayMS - birthdayMS;       console.log(ageMS)      //851468400000

// age = new Date(ageMS).getFullYear()-1970;   console.log(age)

// //---------------------------------------------

// //* 6. When did celebrate Mommy's Day which be celebrating monday in second week of  every may, in 2019?

// let momday = new Date();
// momday.setHours(0,0,0,0);
// momday.setFullYear(2019);
// momday.setMonth(4);
// momday.setDate(1);

// while(momday.getDay() != 0){
//     momday.setDate(momday.getDate()+1)
// }
// //* It's mean is while getday value of mom's day is not equal to 0 (sunday), increase the getDate value by 1 until get Day value would be equal to 0. 
// //* When getDay value be equal to 0, set date as getDate value.

// console.log(momday)  // Sun May 05 2019
// // but this is the first monday in may 2019, we need to find second monday. so we can go to next week to find it

// momday.setDate(momday.getDate()+7)

// console.log(momday) //* Answer is; Sun May 12 2019

// //---------------------------------------------


//**------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//


// //***** COURSE 162 - NUMBERS & NUMBER METHODS
// //* https://www.udemy.com/course/komple-web-developer-kursu/learn/lecture/17801892#overview
// //* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

// val = '10';
// console.log(val)        //10
// console.log(typeof val) //string
// //---------------------------------------------
// val = Number('10');
// console.log(val)        //10
// console.log(typeof val) //number
// //---------------------------------------------
// val = parseInt('10.5');
// console.log(val)        //10
// console.log(typeof val) //number
// // we are using parseInt if we want to the it returns a integer

// //---------------------------------------------
// // but if we wait to decimal value, we can use parseFloat()
// val = parseFloat('10.5');
// console.log(val)        //10.5
// console.log(typeof val) //number
// //---------------------------------------------
// val = parseFloat('a10');
// console.log(val)        //NaN
// console.log(typeof val) //number

// //---------------------------------------------
// //*** STATIC METHODS */

// //** 1. isNan 
// //** The isNaN() function determines whether a value is NaN or not.
// // Return value true if the given value is NaN; otherwise, false.

// val = isNaN('10');  console.log(val);   //false
// val = isNaN('10');  console.log(val);   //false
// val = isNaN('a10');  console.log(val);  //true

// //---------------------------------------------

// //*** INSTANCE METHODS */

// //*** 1. toPrecision()
// //*** The method returns how many digits will shown from left
// //*** The toPrecision() method returns a string representing the Number object to the specified precision.

// let numObj = 5.123456

// console.log(numObj.toPrecision())    // logs '5.123456'
// console.log(numObj.toPrecision(5))   // logs '5.1235'
// console.log(numObj.toPrecision(2))   // logs '5.1'
// console.log(numObj.toPrecision(1))   // logs '5'

// //---------------------------------------------

// //*** 2. toFixed()
// //*** The toFixed() method formats a number using fixed-point notation.

// numObj = 12345.6789

// console.log(numObj.toFixed())       // Returns '12346': note rounding, no fractional part
// console.log(numObj.toFixed(1))      // Returns '12345.7': note rounding
// console.log(numObj.toFixed(6))      // Returns '12345.678900': note added zeros
// console.log(2.34.toFixed(1))        // Returns '2.3'
// console.log(2.35.toFixed(1))        // Returns '2.4'. Note it rounds up
// console.log(2.55.toFixed(1))        // Returns '2.5'. Note it rounds down - see warning above
// console.log(-2.34.toFixed(1))       // Returns -2.3 (due to operator precedence, negative number literals don't return a string...)
// console.log((-2.34).toFixed(1))     // Returns '-2.3'

// //---------------------------------------------

// //***** MATH METHODS
// //*** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

// //** Math.PI
// val = Math.PI;
// console.log(val)        // 3.141592653589793

// //---------------------------------------------

// //** Math.round()
// //*** The Math.round() function returns the value of a number rounded to the nearest integer.

// console.log(Math.round(2.4))        // 2
// console.log(Math.round(5.95), Math.round(5.5), Math.round(5.05));
// // expected output: 6 6 5

// console.log(Math.round(-5.05), Math.round(-5.5), Math.round(-5.95));
// // expected output: -5 -5 -6

// //---------------------------------------------

// //** Math.ceil()
// //** The Math.ceil() function always rounds a number up to the NEXT largest integer.

// console.log(Math.ceil(.95));    // expected output: 1
// console.log(Math.ceil(4));      // expected output: 4
// console.log(Math.ceil(7.004));  // expected output: 8
// console.log(Math.ceil(-7.004)); // expected output: -7

// //---------------------------------------------

// //** Math.floor()
// //** The Math.floor() function returns the largest integer less than or equal to a given number.

// console.log(Math.floor(5.95)); // expected output: 5
// console.log(Math.floor(5.05)); // expected output: 5
// console.log(Math.floor(-5.05)); // expected output: -6

// //---------------------------------------------

// //** Math.pow()
// //** The Math.pow() function returns the base to the exponent power, as in base^exponent.
// //** similar to '**' 

// console.log(Math.pow(7, 3)); // expected output: 343
// console.log(7**3);           // expected output: 343

// console.log(Math.pow(4, 0.5));  // expected output: 2
// console.log(4**0.5);            // expected output: 2

// //---------------------------------------------

// //** Math.random()
// //** The Math.random() function returns a floating-point, pseudo-random number in the range 0 to less than 1 (inclusive of 0, but not 1) with approximately uniform distribution over that range — which you can then scale to your desired range. The implementation selects the initial seed to the random number generation algorithm; it cannot be chosen or reset by the user.
// //** Return value: A floating-point, pseudo-random number between 0 (inclusive) and 1 (exclusive).

// val = Math.floor(Math.random()*100+1)   // from 1 - to 100

// //* Getting a random number between 0 (inclusive) and 1 (exclusive)
// function getRandom() {
//   return Math.random();
// }

// //* Getting a random number between two values
// // This example returns a random number between the specified values. The returned value is no lower than (and may possibly equal) min, and is less than (and not equal) max.

// function getRandomArbitrary(min, max) {
//   return Math.random() * (max - min) + min;
// }

// //* Getting a random integer between two values
// // This example returns a random integer between the specified values. The value is no lower than min (or the next integer greater than min if min isn't an integer), and is less than (but not equal to) max.

// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min) + min); 
//   //The maximum is exclusive and the minimum is inclusive
// }

// //* Getting a random integer between two values, inclusive
// // While the getRandomInt() function above is inclusive at the minimum, it's exclusive at the maximum. What if you need the results to be inclusive at both the minimum and the maximum? The getRandomIntInclusive() function below accomplishes that.

// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1) + min); 
//   //The maximum is inclusive and the minimum is inclusive
// }

// //---------------------------------------------

// //** Math.sqrt()
// //** The square root of the given number. If the number is negative, NaN is returned.

// Math.sqrt(9); // 3
// Math.sqrt(2); // 1.414213562373095

// Math.sqrt(1);  // 1
// Math.sqrt(0);  // 0

// //---------------------------------------------

// //** Math.trunc()
// //** The Math.trunc() function returns the integer part of a number by removing any fractional digits.

// console.log(Math.trunc(13.37));     // expected output: 13
// console.log(Math.trunc(42.84));     // expected output: 42
// console.log(Math.trunc(0.123));     // expected output: 0
// console.log(Math.trunc(-0.123));    // expected output: -0

// //---------------------------------------------

// //** Math.abs()
// //** The Math.abs() function returns the absolute value of a number. That is, it returns x if x is positive or zero, and the negation of x if x is negative.

// console.log(Math.abs('-1'));     // 1
// console.log(Math.abs(-2));       // 2

// //---------------------------------------------

// //** Math.min()
// //** The static function Math.min() returns the lowest-valued number passed into it, or NaN if any parameter isn't a number and can't be converted into one.

// console.log(Math.min(2, 3, 1));     // expected output: 1
// console.log(Math.min(-2, -3, -1));  // expected output: -3

// const array1 = [2, 3, 1];
// console.log(Math.min(...array1));   // expected output: 1

// //---------------------------------------------

// //** Math.max()
// //** The Math.max() function returns the largest of the zero or more numbers given as input parameters, or NaN if any parameter isn't a number and can't be converted into one.

// console.log(Math.max(1, 3, 2));     // expected output: 3
// console.log(Math.max(-1, -3, -2));  // expected output: -1

// const array2 = [1, 3, 2];
// console.log(Math.max(...array2));   // expected output: 3


//**------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//


// //***** COURSE 163 - EXERCISES >> NUMBERS
// //* https://www.udemy.com/course/komple-web-developer-kursu/learn/lecture/17801894#overview
// //* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

// let num = 15.123456789;

// //* Print a 3 digit number.
// console.log(num.toPrecision(3))     // 15.1

// //* Print a number whose decimal part consists of 3 digits.
// console.log(num.toFixed(3))         // 15.123

// //* Round to the nearest number.
// console.log(Math.round(num))        // 15

// //* round to the lower number.
// console.log(Math.floor(num))        // 15

// //* round to the higher number.
// console.log(Math.ceil(num))         // 16

// //* find the max 1,2,10,56,20
// console.log(Math.max(1,2,10,56,20)) // 56

// //* generate random number in the range of 13 - 31
// console.log(Math.floor(13+Math.random()*18)) // random number


//**------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//


// //***** COURSE 164 - STRINGS & STRING METHODS
// //* https://www.udemy.com/course/komple-web-developer-kursu/learn/lecture/17801896#overview
// //* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

// //** Strings are useful for holding data that can be represented in text form. Some of the most-used operations on strings are to check their length, to build and concatenate them using the + and += string operators, checking for the existence or location of substrings with the indexOf() method, or extracting substrings with the substring() method.

// //---------------------------------------------

// let firstName, lastName, valString, age;

// firstName = 'Zekiman';
// lastName = "Black";
// age = 31;

// //---------------------------------------------

// //* Concatenating The Strings

// valString = firstName +' '+ lastName
// console.log(valString);     //  Zekiman Black

// valString += ' Surname'
// console.log(valString)      //  Zekiman Black Surname

// valString = 'My name is '+firstName+' '+lastName+' and I am '+age+' years old.'+" My dog's name is Vanilla."
// console.log(valString)      //  My name is Zekiman Black and I am 31 years old.

// //---------------------------------------------

// //* NOTE:
// //* To using (') in string, we should use (" ") while creating string. For example;
// let string10 = "His brother's name is ..." 
// console.log(string10)   //   His brother's name is ...

// //* or We can use it in (' ' ) but, we need to put (\) before ('). For example;
// let string11 = 'His brother\'s name is....'
// console.log(string11)   //   His brother's name is ...   

// //---------------------------------------------

// //* String.concat();
// //* The concat() method concatenates the string arguments to the calling string and returns a new string.

// str1 = 'Hello';
// str2 = 'World';
// str3 = str1.concat(' ', str2)
// str4 = str2.concat(', ', str1)

// console.log(str3);  // expected output: "Hello World"
// console.log(str4);  // expected output: "World, Hello"

// str5 = firstName.concat(' ',lastName,' is ',age,' years old.')

// console.log(str5);  // Zekiman Black is 31 years old.

// str6 = 'My name is '.concat(firstName,' and surname is ',lastName)

// console.log(str6);  //  My name isZekiman and surname is Black

// //---------------------------------------------

// //* String.length;
// //* The length property of a String object contains the length of the string. Length is a read-only data property of string instances.

// let myString = "bluebells";
// console.log(myString.length); // expected output: 9

// // Attempting to assign a value to a string's .length property has no observable effect.
// myString.length = 4;
// console.log(myString); // expected output: "bluebells"

// //---------------------------------------------

// //* toUpperCase();
// //* Returns the calling string value converted to uppercase.

// sentence = 'The quick brown fox jumps over the lazy dog.';

// console.log(sentence.toUpperCase());
// // expected output: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."

// //---------------------------------------------

// //* toLowerCase();
// //* Returns the calling string value converted to lowercase.

// sentence = 'The quick brown fox jumps over the lazy dog.';

// console.log(sentence.toLowerCase());
// // expected output: "the quick brown fox jumps over the lazy dog."

// //---------------------------------------------

// //* indexOf();
// //* Returns the index within the calling String object of the first occurrence of searchValue, or -1 if not found.

// stringVal = 'Zekiman Blackwolf';

// console.log(stringVal.indexOf('Z')) // 0
// console.log(stringVal.indexOf('k')) // 2
// console.log(stringVal.indexOf('d')) // -1

// //* Characters in a string are indexed from left to right. The index of the first character is 0, and the index of the last character of a string called stringName is stringName.length - 1.

// 'hello world'.indexOf('') // returns 0
// 'hello world'.indexOf('', 0) // returns 0
// 'hello world'.indexOf('', 3) // returns 3
// 'hello world'.indexOf('', 8) // returns 8

// //* However, with any fromIndex value equal to or greater than the string's length, the returned value is the string's length:

// 'hello world'.indexOf('', 22) // returns 11

// //---------------------------------------------

// //* substring();
// //* The method returns the part of the string between the start and end indexes, or to the end of the string.

// str = 'Mozilla';

// console.log(str.substring(1, 3));
// // expected output: "oz"

// console.log(str.substring(2));
// // expected output: "zilla"

// //* Exercise; Display the last 4 characters
// let anyString = 'Mozilla'
// let anyString4 = anyString.substring(anyString.length - 4)
// console.log(anyString4) // illa

// //---------------------------------------------

// //* slice();
// //* The method extracts a section of a string and returns it as a new string, without modifying the original string.

// str = 'The quick brown fox jumps over the lazy dog.';

// //* If beginIndex is negative, slice() begins extraction from str.length + beginIndex. (E.g. "test".slice(-2) returns "st")

// console.log(str.slice(-4));
// // expected output: "dog."

// console.log(str.slice(-9, -5));
// // expected output: "lazy"

// //* If beginIndex is greater than or equal to str.length, an empty string is returned. E.g.

// console.log("test".slice(4)) // ""

// //* If endIndex is greater than str.length, slice() also extracts to the end of the string. (E.g. "test".slice(2, 10) returns "st")

// //* If endIndex is negative, slice() is treated as str.length + endIndex. (E.g, if endIndex is -2, it is treated as str.length - 2 and "test".slice(1, -2) returns "e") .

// //* If endIndex represents a position that is before the one represented by startIndex, slice() returns "". (E.g "test".slice(2, -10), "test".slice(-1, -2) or "test".slice(3, 2)).


// str1 = 'The morning is upon us.', // the length of str1 is 23.
// str2 = str1.slice(1, 8),    console.log(str2)  // OUTPUT: he morn
// str3 = str1.slice(4, -2),   console.log(str3)  // OUTPUT: morning is upon u
// str4 = str1.slice(12),      console.log(str4)  // OUTPUT: is upon us.
// str5 = str1.slice(30);      console.log(str5)  // OUTPUT: ""

// //---------------------------------------------

// //* replace();
// //* The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. If pattern is a string, only the first occurrence will be replaced.

// let p = 'The quick brown fox jumps over the lazy dog. Dog is a animal';

// console.log(p.replace('dog', 'monkey'));
// // expected output: "The quick brown fox jumps over the lazy monkey. Dog is a animal"

// //---------------------------------------------

// //* replaceAll();
// //* The replaceAll() method returns a new string with all matches of a pattern replaced by a replacement. 

// p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

// console.log(p.replaceAll('dog', 'monkey'));
// // expected output: "The quick brown fox jumps over the lazy monkey. If the monkey reacted, was it really lazy?"


// //---------------------------------------------

// //* includes();
// //* The includes() method performs a case-sensitive search to determine whether one string may be found within another string, returning true or false as appropriate.

// sentence = 'The quick brown fox jumps over the lazy dog.';

// word = 'fox';

// console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);
// // expected output: "The word "fox" is in the sentence"


// //* The includes() method is case sensitive. For example, the following expression returns false:

// console.log('Blue Whale'.includes('blue')) // returns false


// str = 'To be, or not to be, that is the question.'

// console.log(str.includes('To be'))        // true
// console.log(str.includes('question'))     // true
// console.log(str.includes('nonexistent'))  // false
// console.log(str.includes('To be', 1))     // false
// console.log(str.includes('TO BE'))        // false
// console.log(str.includes(''))             // true

// //---------------------------------------------

// //* repeat();
// //* The repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.

// chorus = 'Because I\'m happy. ';

// console.log(`Chorus lyrics for "Happy": ${chorus.repeat(27)}`);

// // expected output: "Chorus lyrics for "Happy": Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. "


// // console.log('abc'.repeat(-1))        // RangeError
// console.log('abc'.repeat(0))            // ''
// console.log('abc'.repeat(1))            // 'abc'
// console.log('abc'.repeat(2))            // 'abcabc'
// console.log('abc'.repeat(3.5))          // 'abcabcabc' (count will be converted to integer)
// // console.log('abc'.repeat(1/0))       // RangeError

// //---------------------------------------------

// //* split();
// //* The split() method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.  The division is done by searching for a pattern; where the pattern is provided as the first parameter in the method's call.

// str = 'The quick brown fox jumps over the lazy dog.';

// words = str.split(' ');
// console.log(words);
// // expected output:
// // ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog.']
// console.log(words[3]);
// // expected output: fox


// chars = str.split('');
// console.log(chars);
// // expected output: ['T', 'h', 'e', ' ', 'q', 'u', 'i', 'c', 'k', ' ', 'b', 'r', 'o', 'w', 'n', ' ', 'f', 'o', 'x', ' ', 'j', 'u', 'm', 'p', 's', ' ', 'o', 'v', 'e', 'r', ' ', 't', 'h', 'e', ' ', 'l', 'a', 'z', 'y', ' ', 'd', 'o', 'g', '.']
// console.log(chars[8]); 
// // expected output: k


// strCopy = str.split();
// console.log(strCopy);
// // expected output: Array ["The quick brown fox jumps over the lazy dog."]

// //---------------------------------------------

// //* trim();
// //* The trim() method removes whitespace from both ends of a string. 

// greeting = '   Hello world!   ';

// console.log(greeting);
// // expected output: "   Hello world!   ";

// console.log(greeting.trim());
// // expected output: "Hello world!";

// //---------------------------------------------

// //* startsWith()  &  endsWith()
// //* Determines whether the calling string begins with the characters of string searchString. (searchString [, length])
// //* Determines whether a string ends with the characters of the string searchString. (searchString [, length])

// //---------------------------------------------

// //* NOTE: ESCAPE SEQUENCE

// //***    \0	    null character (U+0000 NULL)
// //***    \'	    single quote (U+0027 APOSTROPHE)
// //***    \"	    double quote (U+0022 QUOTATION MARK)
// //***    \\	    backslash (U+005C REVERSE SOLIDUS)
// //***    \n	    newline (U+000A LINE FEED; LF)
// //***    \r	    carriage return (U+000D CARRIAGE RETURN; CR)
// //***    \v	    vertical tab (U+000B LINE TABULATION)
// //***    \t	    tab (U+0009 CHARACTER TABULATION)
// //***    \b	    backspace (U+0008 BACKSPACE)
// //***    \f	    form feed (U+000C FORM FEED)

// //---------------------------------------------

//**------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//


// //***** COURSE 165 - EXERCISES (Strings)
// //* https://www.udemy.com/course/komple-web-developer-kursu/learn/lecture/17801902#overview

// sentence = "  Template Literals or template strings is the ability Have multi-line strings without any funny bussines."

// url = "http://sadikturan.com/Modern Javascript KURSU sıfırdan ileri seviye";

// //---------------------------------------------

// //* how many character includes the sentence?
// console.log(sentence.length)    //  106

// //---------------------------------------------

// //* how many words there is?
// wordsArray = sentence.trim().split(' ')
// console.log(wordsArray.length) // 15

// //---------------------------------------------

// //* Print the sentence with lowercase
// console.log(sentence.toLowerCase()) 
// //   template literals or template strings is the ability have multi-line strings without any funny bussines.

// //---------------------------------------------

// //* Delete the spaces in the sentence
// console.log(sentence.toUpperCase()) 
// //  TEMPLATE LITERALS OR TEMPLATE STRINGS IS THE ABILITY HAVE MULTI-LINE STRINGS WITHOUT ANY FUNNY BUSSINES.

// //---------------------------------------------

// //* Delete the '-' in the sentence
// console.log(sentence.replace('-',''))
// //   Template Literals or template strings is the ability Have multiline strings without any funny bussines.

// //---------------------------------------------

// //* Delete the str value from the url
// str = 'http://';

// //* first way
// console.log(url.replace(str,''))
// // sadikturan.com/Modern Javascript KURSU sıfırdan ileri seviye
// //* second way
// console.log(url.substring(str.length));
// // sadikturan.com/Modern Javascript KURSU sıfırdan ileri seviye
// //* third way
// console.log(url.slice(str.length));
// // sadikturan.com/Modern Javascript KURSU sıfırdan ileri seviye

// //---------------------------------------------

// //* Which protocol does the url have (http or https)

// //*1st way
// console.log(url.startsWith('http://'))  // true
// //*2nd way
// console.log(url.includes('https'))      // false

// //---------------------------------------------

// //* Does url includes '.com' ?

// //*1st way
// console.log(url.includes('.com'))       // true
// //*2nd way
// console.log(url.indexOf('.com'))        // 17

// //---------------------------------------------

// //* Edit the url as valid url
// url = "http://sadikturan.com/Modern Javascript KURSU sıfırdan ileri seviye";

// console.log( url.toLowerCase()
//                 .replaceAll(' ','-')
//                 .replaceAll('ı','i'))   
// // http://sadikturan.com/modern-javascript-kursu-sifirdan-ileri-seviye

// //---------------------------------------------

//**------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//


// //***** COURSE 166 - TEMPLATE LITERALS
// //* https://www.udemy.com/course/komple-web-developer-kursu/learn/lecture/17801898#overview
// //* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

// fullName = 'Zekiman';
// city = 'Kyiv';
// yearOfBirth = 1997;

// val =   'My name is '+fullName+
//         '. I\'m '+(new Date().getFullYear()-yearOfBirth)+' years old.'+
//         ' and I live in '+city+'.';

// console.log(val);

// //* SAME VAL IN TEMPLATE LITERALS >>>

// val = `My name is ${fullName}. I'm ${new Date().getFullYear()-yearOfBirth} years old and I live in ${city}.`

// console.log(val)

// //---------------------------------------------

// //* CONDITIONAL (TERNARY) OPERATOR
// //* The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy. This operator is frequently used as a shortcut for the if statement.

// val = `I'm ${new Date().getFullYear()-yearOfBirth >=18 ? 'over 18':'under 18'}.`
// // I'm over 18.

// console.log(val)


// function getFee(isMember) {
//     return (isMember ? '$2.00' : '$10.00');
//   }
  
//   console.log(getFee(true));
//   // expected output: "$2.00"
  
//   console.log(getFee(false));
//   // expected output: "$10.00"
  
//   console.log(getFee(null));
//   // expected output: "$10.00"
  
// //---------------------------------------------


//**------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//


// //***** COURSE 167 - ARRAY & ARRAY METHODS
// //* https://www.udemy.com/course/komple-web-developer-kursu/learn/lecture/7677646#overview
// //* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// //* Arrays are list-like objects whose prototype has methods to perform traversal and mutation operations.

// fruits = ['Apple', 'Banana']
// console.log(fruits)         // ['Apple', 'Banana']
// console.log(typeof fruits)  // object

// years = [2017,2019,1994,2003,1976];
// mix = ['zekiman','blackwolf',1994,null,undefined,['cinema','reading']]

// console.log(mix);   
// // (6) ['zekiman', 'blackwolf', 1994, null, undefined, Array(2)]

// //---------------------------------------------

// //* Get Item from array
// console.log(years[2]);  // 1994

// //---------------------------------------------

// //* Set The Item 
// years[2]=1999
// console.log(years,
//             years[2]);  
// // [2017, 2019, 1999, 2003, 1976] 
// // 1999

// //---------------------------------------------

// //* Add an item to the beginning of an Array
// //* unshift()

// years.unshift(1929);
// console.log(years); // (5) [1929, 2019, 1999, 2003, 1976]

// //---------------------------------------------

// //* Remove an item from the beginning of an Array
// //* shift()

// years.shift();
// console.log(years) // (4) [2019, 1999, 2003, 1976]

// //---------------------------------------------

// //* Add an item to the end of an Array
// //* push()

// console.log(years) // (5) [2017, 2019, 1999, 2003, 1976]
// years.push(2021)
// console.log(years) // (6) [2017, 2019, 1999, 2003, 1976, 2021]

// //---------------------------------------------

// //* Remove an item from the end of an Array
// //* pop()

// years.pop();
// console.log(years) // (5) [2017, 2019, 1999, 2003, 1976]

// //---------------------------------------------

// //* Find the index of an item in the Array
// //* indexOf()

// console.log(years.indexOf(1929)) // 0

// //---------------------------------------------

// //* reverse()
// //* The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.

// console.log(years);             // (5) [1929, 2019, 1999, 2003, 1976]
// console.log(years.reverse());   // (5) [1976, 2003, 1999, 2019, 1929]

// //---------------------------------------------

// //* sort();
// //* The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

// console.log(years);             // (5) [1976, 2003, 1999, 2019, 1929]
// console.log(years.sort());      // (5) [1929, 1976, 1999, 2003, 2019]

// //---------------------------------------------

// //* concat();
// //* The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

// console.log(mix);   // (6) ['zekiman', 'blackwolf', 1994, null, undefined, Array
// console.log(years); // (5) [1929, 1976, 1999, 2003, 2019]

// concatArray = mix.concat(years);  
// console.log(concatArray);           
// // (11) ['zekiman', 'blackwolf', 1994, null, undefined, Array(2), 1929, 1976, 1999, 2003, 2019]

// //---------------------------------------------

// //* splice();
// //* The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. To access part of an array without modifying it, see slice().

// console.log(years);                   // (5) [1929, 1976, 1999, 2003, 2019]
// yearsSplice = years.splice(3,1,2023); 
// console.log(years);                   // (5) [1929, 1976, 1999, 2023, 2019]

// //* splice(start)
// //* splice(start, deleteCount)
// //* splice(start, deleteCount, item1)
// //* splice(start, deleteCount, item1, item2, itemN)

// //* If deleteCount is 0 or negative, no elements are removed.
// console.log(years);                 // (5) [1929, 1976, 1999, 2023, 2019]
// years.splice(2,0,1977,1978,1979);
// console.log(years);                 // (8) [1929, 1976, 1977, 1978, 1979, 1999, 2023, 2019]

// //* e.g. Remove 1 element at index 3

// myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon']
// removed = myFish.splice(3, 1)

// // myFish is ["angel", "clown", "drum", "sturgeon"]
// // removed is ["mandarin"]

// //* e.g. Remove 0 (zero) elements before index 2, and insert "drum" and "guitar"

// myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
// removed = myFish.splice(2, 0, 'drum', 'guitar')

// // myFish is ["angel", "clown", "drum", "guitar", "mandarin", "sturgeon"]
// // removed is [], no elements removed

// //* e.g. Remove all elements, starting from index 2
// myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
// removed = myFish.splice(2)

// // myFish is ["angel", "clown"]
// // removed is ["mandarin", "sturgeon"]

// //---------------------------------------------

// //* filter();
// //* The filter() method creates a new array with all elements that pass the test implemented by the provided function.

// console.log(years); // (8) [1929, 1976, 1977, 1978, 1979, 1999, 2023, 2019]

// //* list the years under 1980 in the array
// console.log(years.filter(years => years < 1980)) // (5) [1929, 1976, 1977, 1978, 1979]

// //* list the years if passed less than 40
// console.log(years);  // (8) [1929, 1976, 1977, 1978, 1979, 1999, 2023, 2019]

// console.log(years.filter(
//     function over18(years) {
//         let howManyYears = new Date().getFullYear()-years
//         return howManyYears<=40
//     }
// ))                  // (3) [1999, 2023, 2019]

// //---------------------------------------------

// //* find();
// //* The find() method returns the value of the 'FIRST element' in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

// //* Dont Forget! Only the first element provided the criters

// array1 = [5, 12, 8, 130, 44];

// found = array1.find(element => element > 10);

// console.log(found); // expected output: 12

// //*--- Find the first year value that higher than or equal to 1980

// console.log(years); // (8) [1929, 1976, 1977, 1978, 1979, 1999, 2023, 2019]
// console.log(years.find(years => years >= 1980)) ; // 1999

// //*--- find the first year value (higher than 30 age)

// years = [1976, 1977, 1978, 1979, 1999, 1929, 2023, 2019]

// function over(year){
//     let age = 2021-year;
//     return age >=30;
// }

// val = years.find(over);
// console.log(val);       // 1976 (first value)

// //*--- to find all values (higher than 30 age)

// val = years.filter(over);
// console.log(val)        // (5) [1976, 1977, 1978, 1979, 1929]

// //---------------------------------------------


//**------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//


// //***** COURSE 168 - EXERCISES - ARRAY
// //* https://www.udemy.com/course/komple-web-developer-kursu/learn/lecture/9527390#overview
// //* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// //---------------------------------------------

// //* Create and array; BMW, Mercedes, Opel, Mazda 
// val = ['BMW', 'Mercedes', 'Opel', 'Mazda']
// console.log(val)

// //---------------------------------------------

// //* How many items there is in the array
// console.log(val.length) // 4

// //---------------------------------------------

// //* What is the first and last item in the array
// console.log(`First item is; ${val[0]} and Last item is; ${val[val.length-1]}`)
// //First item is; BMW and Last item is; Mazda

// //---------------------------------------------

// //* Add 'Renault' value as last item 
// val.push('Renault');
// console.log(val);       // (5) ['BMW', 'Mercedes', 'Opel', 'Mazda', 'Renault']

// //---------------------------------------------

// //* Add to first spot 'Toyota'
// val.unshift('Toyota');
// console.log(val);       // ['Toyota', 'BMW', 'Mercedes', 'Opel', 'Mazda', 'Renault']

// //---------------------------------------------

// //* Delete the 'Renault'
// val.pop();
// console.log(val);       // (5) ['Toyota', 'BMW', 'Mercedes', 'Opel', 'Mazda']

// //---------------------------------------------

// //* Delete the 'Toyota'
// val.shift();
// console.log(val);       // (4) ['BMW', 'Mercedes', 'Opel', 'Mazda']

// //---------------------------------------------

// //* Reverse the array
// console.log(val.reverse())  // (4) ['Mazda', 'Opel', 'Mercedes', 'BMW']

// //---------------------------------------------

// //* Sort by alphabetical
// console.log(val.sort());

// //---------------------------------------------

// //* [55,24,63,124,1,6,-5,504,-1000,3.5,61,53] sort the array
// val2 = [55,24,63,124,1,6,-5,504,-1000,3.5,61,53]

// console.log(val2.sort()); // alphabetical
// // (12) [-1000, -5, 1, 124, 24, 3.5, 504, 53, 55, 6, 61, 63]

// console.log(val2.sort((a,b)=>a-b)) // value
// // (12) [-1000, -5, 1, 3.5, 6, 24, 53, 55, 61, 63, 124, 504]

// //---------------------------------------------

// //* Is Opel belong to the array?
// console.log(val.includes('Opel')) // true

// //---------------------------------------------

// //* Convert to array str = 'Chevrolet, Dacia'
// str = 'Chevrolet, Dacia'
// val2 = str.split(',');     
// console.log(val2);       // (2) ['Chevrolet', ' Dacia']

// //---------------------------------------------

// //* Merge the arrays
// console.log(val);       // (4) ['BMW', 'Mazda', 'Mercedes', 'Opel']
// console.log(val2);      // (2) ['Chevrolet', ' Dacia']
// val3 = val.concat(val2);
// console.log(val3)       // (6) ['BMW', 'Mazda', 'Mercedes', 'Opel', 'Chevrolet', ' Dacia']

// //---------------------------------------------

// //* Delete last 2 items from the array
// val3.splice(val3.length-2);
// console.log(val3);      // (4) ['BMW', 'Mazda', 'Mercedes', 'Opel']

// //---------------------------------------------

// //* Create an array with informations below;
// //* students: Yiğit Bilgi 2010 - Sena Turan 1999 - Ahmet Turan 1998

// let students = [
//         {name: 'Zekiman',
//         surname: 'Blackwolf',
//         birthYear: 2010
//     },
//         {name: 'Kubrawoman',
//         surname: 'Whitewolf',
//         birthYear: 1999
//     },
//         {name: 'Mustafa',
//         surname: 'Pinkwolf',
//         birthYear: 1998
//     }
// ]

// console.log(students)
// // 0: {name: 'Zekiman', surname: 'Blackwolf', birthYear: 2010}
// // 1: {name: 'Kubrawoman', surname: 'Whitewolf', birthYear: 1999}
// // 2: {name: 'Mustafa', surname: 'Pinkwolf', birthYear: 1998}

// //---------------------------------------------


//**------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//


//***** COURSE 169 - Statement - If...Else
//* https://www.udemy.com/course/komple-web-developer-kursu/learn/lecture/7677654#overview
//* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else

firstName = 'Zekiman';
age = 29;
isStudent = false;
graduate = 'university';

if(firstName == 'Zekiman'){
    console.log(`Welcome ${firstName}.`)
    // Welcome Zekiman
}

if(age >= 18){
    console.log(`You are over 18.`)
}

//* The if statement executes a statement if a specified condition is truthy. If the condition is falsy, another statement can be executed.

if(isStudent){
    console.log(`You are a student`)
}else {
    console.log(`You aren't student anymore.`)
}

//---------------------------------------------

//* Syntax

//*---  if (condition) {
//*---      statement1
//*---   } else {
//*---      statement2
//*---   }


if (age >= 18){
    if (isStudent == false){
        if (graduate === 'university'){
            console.log(`You can apply to driver licence`)
        }else {
            console.log(`You need to graduate firstly.`)
        }
    }else {
        console.log(`You are still student.`)
    }
}else {
    console.log(`People under 18 cannot drive!`)
}


//**------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//


//***** COURSE 170 - SWITCH
//* https://www.udemy.com/course/komple-web-developer-kursu/learn/lecture/17801910#overview
//* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch

//* The switch statement evaluates an expression, matching the expression's value to a case clause, and executes statements associated with that case, as well as statements in cases that follow the matching case.

//* Syntax;

//*     switch (expression) {
//*         case value1:
//*           //Statements executed when the
//*           //result of expression matches value1
//*           [break;]
//*         case value2:
//*           //Statements executed when the
//*           //result of expression matches value2
//*           [break;]
//*         ...
//*         case valueN:
//*           //Statements executed when the
//*           //result of expression matches valueN
//*           [break;]
//*         [default:
//*           //Statements executed when none of
//*           //the values match the value of the expression
//*           [break;]]
//*       }

category = 'computer';

switch(category){
    case 'phone':
        console.log(`Phone category`)
    break;

    case 'computer':
        console.log(`Computer category`)
    break;

    default:
        console.log('Please select a category')
}  

//---------------------------------------------

const expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}


//* default (Optional): A default clause; if provided, this clause is executed if the value of expression doesn't match any of the case clauses.

