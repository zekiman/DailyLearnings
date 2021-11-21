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


// //***** COURSE 169 - Statement - If...Else
// //* https://www.udemy.com/course/komple-web-developer-kursu/learn/lecture/7677654#overview
// //* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else

// firstName = 'Zekiman';
// age = 29;
// isStudent = false;
// graduate = 'university';

// if(firstName == 'Zekiman'){
//     console.log(`Welcome ${firstName}.`)
//     // Welcome Zekiman
// }

// if(age >= 18){
//     console.log(`You are over 18.`)
// }

// //* The if statement executes a statement if a specified condition is truthy. If the condition is falsy, another statement can be executed.

// if(isStudent){
//     console.log(`You are a student`)
// }else {
//     console.log(`You aren't student anymore.`)
// }

// //---------------------------------------------

// //* Syntax

// //*---  if (condition) {
// //*---      statement1
// //*---   } else {
// //*---      statement2
// //*---   }


// if (age >= 18){
//     if (isStudent == false){
//         if (graduate === 'university'){
//             console.log(`You can apply to driver licence`)
//         }else {
//             console.log(`You need to graduate firstly.`)
//         }
//     }else {
//         console.log(`You are still student.`)
//     }
// }else {
//     console.log(`People under 18 cannot drive!`)
// }


//**------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//


// //***** COURSE 170 - SWITCH
// //* https://www.udemy.com/course/komple-web-developer-kursu/learn/lecture/17801910#overview
// //* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch

// //* The switch statement evaluates an expression, matching the expression's value to a case clause, and executes statements associated with that case, as well as statements in cases that follow the matching case.

// //* Syntax;

// //*     switch (expression) {
// //*         case value1:
// //*           //Statements executed when the
// //*           //result of expression matches value1
// //*           [break;]
// //*         case value2:
// //*           //Statements executed when the
// //*           //result of expression matches value2
// //*           [break;]
// //*         ...
// //*         case valueN:
// //*           //Statements executed when the
// //*           //result of expression matches valueN
// //*           [break;]
// //*         [default:
// //*           //Statements executed when none of
// //*           //the values match the value of the expression
// //*           [break;]]
// //*       }

// category = 'computer';

// switch(category){
//     case 'phone':
//         console.log(`Phone category`)
//     break;

//     case 'computer':
//         console.log(`Computer category`)
//     break;

//     default:
//         console.log('Please select a category')
// }  

// //---------------------------------------------
// //* Using switch

// const expr = 'Papayas';
// switch (expr) {
//   case 'Oranges':
//     console.log('Oranges are $0.59 a pound.');
//     break;
//   case 'Mangoes':
//   case 'Papayas':
//     console.log('Mangoes and papayas are $2.79 a pound.');
//     // expected output: "Mangoes and papayas are $2.79 a pound."
//     break;
//   default:
//     console.log(`Sorry, we are out of ${expr}.`);
// }


// //* default (Optional): A default clause; if provided, this clause is executed if the value of expression doesn't match any of the case clauses.


// //---------------------------------------------

// //* In the following example, if expr evaluates to Bananas, the program matches the value with case case 'Bananas' and executes the associated statement. When break is encountered, the program breaks out of switch and executes the statement following switch. If break were omitted, the statement for the case 'Cherries' would also be executed.


// switch (expr) {
//     case 'Oranges':
//       console.log('Oranges are $0.59 a pound.');
//       break;
//     case 'Apples':
//       console.log('Apples are $0.32 a pound.');
//       break;
//     case 'Bananas':
//       console.log('Bananas are $0.48 a pound.');
//       break;
//     case 'Cherries':
//       console.log('Cherries are $3.00 a pound.');
//       break;
//     case 'Mangoes':
//     case 'Papayas':
//       console.log('Mangoes and papayas are $2.79 a pound.');
//       break;
//     default:
//       console.log('Sorry, we are out of ' + expr + '.');
//   }

//   console.log("Is there anything else you'd like?");

//   //---------------------------------------------

//   let whichDay;

//   switch(new Date().getDay()){
//         case 0:
//             whichDay = 'Sunday';
//     break;

//         case 1:
//             whichDay = 'Monday';
//     break;

//         case 2:
//             whichDay = 'Tuesday';
//     break;

//         case 3:
//             whichDay = 'Wednesday';
//     break;

//         case 4:
//             whichDay = 'Thursday';
//     break;

//         case 5:
//             whichDay = 'Friday';
//     break;

//         case 6:
//             whichDay = 'Saturday';
//     break;

//     default: 
//             whichDay = 'Date is wrong!'
//   }

//   console.log(`Today is ${whichDay}`);
//   // Today is Thursday

// //---------------------------------------------

// //* Multi-case : single operation
// //* This method takes advantage of the fact that if there is no break below a case clause it will continue to execute the next case clause regardless if the case meets the criteria. 

//     let weekDay;

//     switch(new Date().getDay()){
//         case 1:
//         case 2:
//         case 3:
//         case 4:
//         case 5:
//             weekDay= 'mid-week';
//             break;
//         case 6:
//         case 0:
//             weekDay= 'weekend';
//             break;
//         default:
//             weekDay= 'Wrong input!'
//     }

//     console.log(`Today is ${weekDay}.`)

// //--------------------------------------------- 


// var foo = 1;
// var output = 'Output: ';
// switch (foo) {
//   case 0:
//     output += 'So ';
//   case 1:
//     output += 'What ';
//     output += 'Is ';
//   case 2:
//     output += 'Your ';
//   case 3:
//     output += 'Name';
//   case 4:
//     output += '?';
//     console.log(output);
//     break;
//   case 5:
//     output += '!';
//     console.log(output);
//     break;
//   default:
//     console.log('Please pick a number from 0 to 5!');
// }

// // 
// //*     Value	Log text
// //*     0	    Output: So What Is Your Name?
// //*     1	    Output: What Is Your Name?
// //*     2	    Output: Your Name?
// //*     3	    Output: Name?
// //*     4	    Output: ?
// //*     5	    Output: !

// //--------------------------------------------- 

// age = 31;

// switch(true){
//     case (age>0 && age<13):
//         console.log(`${firstName} is a child.`)
//         break;

//     case (age>12 && age< 19):
//         console.log(`${firstName} is a teenager.`)
//         break;

//     case (age>18):
//         console.log(`${firstName} is an adult.`)
//         break;

//     default:
//         console.log(`Please enter the age.`)
// }

// //--------------------------------------------- 

// //* e.g. If statement

// result = prompt(`Who's there?`)

// if (result == 'cancel') {
//     console.log(`Cancelled.`);
// } else if (result == 'other') {
//     console.log(`I don't know you`)
// } else if (result == 'admin') {
//     let result2 = prompt(`What is the password?`);
//     if (result2 == 'cancel') {
//         console.log(`Cancelled.`)
//     } else if (result2 == 'other') {
//         console.log(`Wrong password.`)
//     } else if (result2 == 'themaster') {
//         console.log(`Welcome!`)
//     }
// } else {
//     console.log(`Invalid input.`)
// }



//**------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//


// //***** COURSE 172 - OBJECT LITERALS
// //* https://www.udemy.com/course/komple-web-developer-kursu/learn/lecture/7677648#overview
// //* 

// person = {
//     firstName : 'Zekiman',
//     lastName : 'Blackwolf',
//     age: 7,
//     hobbies: ['music','game'],
//     adress: {
//         city: 'London',
//         country: 'England'
//     },
//     getBirthYear: function(){
//         return new Date().getFullYear()-this.age
//     }
// };

// console.log(person)
// // {firstName: 'Zekiman', lastName: 'Blackwolf', age: 7, hobbies: Array(2), adress: {…}}

// console.log(person.firstName)
// // Zekiman

// console.log(person['firstName'])
// // Zekiman

// console.log(person.hobbies)
// // (2) ['music', 'game']

// console.log(person.hobbies[1])
// // game

// console.log(person.hobbies.length)
// // 2

// console.log(person.adress)
// // {city: 'London', country: 'England'}

// console.log(person.adress.city,person.adress.country)
// // London England

// console.log(person.getBirthYear())
// // 2014

// //---------------------------------------------

// people = [
//             {
//                 firstName: 'Kubrawoman',
//                 lastName: 'Blackbird',
//                 birthYear: 1994,
//                 city: 'Dirabzon'
//             },
//             {
//                 firstName: 'Zekiman',
//                 lastName: 'Blackwolf',
//                 birthYear: 1994,
//                 city: 'Rize'
//             },
//             {
//                 firstName: 'Salimov',
//                 lastName: 'Pancar',
//                 birthYear: 1976,
//                 city: 'Nahcivan',
//                 hobbies: ['reading','swimming','runing']
//             },
//         ]

// console.log(people)
// // 0: {firstName: 'Kubrawoman', lastName: 'Blackbird', birthYear: 1994, city: 'Dirabzon'}
// // 1: {firstName: 'Zekiman', lastName: 'Blackwolf', birthYear: 1994, city: 'Rize'}
// // 2: {firstName: 'Salimov', lastName: 'Pancar', birthYear: 1976, city: 'Nahcivan'}

// console.log(people[2])
// // {firstName: 'Salimov', lastName: 'Pancar', birthYear: 1976, city: 'Nahcivan'}

// console.log(people[1].firstName)
// // Zekiman

// console.log(people[2].hobbies)
// // (3) ['reading', 'swimming', 'runing']

// console.log(people[2].hobbies[0])
// // reading

// //---------------------------------------------

// for(let i=0; i<people.length; i++){
//     console.log(people[i].firstName)
// }
// // Kubrawoman
// // Zekiman
// // Salimov




//**------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//


// //***** COURSE 173 - EXERCISES
// //* https://www.udemy.com/course/komple-web-developer-kursu/learn/lecture/9534294#overview
// //* 

// carReports = [

//     {
//         id: 'bmw116d_1234',
//         model: '116d',
//         year: 2015,
//         color: 'white',
//         reports: [{
//                 id: 'bmw116d_1234_1',
//                 date: '30.01.2016',
//                 km: 13000,
//                 amount: 900,
//                 details: [{
//                         id: 1,
//                         process: 'changing part',
//                         amount: 300
//                     },
//                     {
//                         id: 2,
//                         process: 'changing part',
//                         amount: 300
//                     },
//                     {
//                         id: 3,
//                         process: 'changing part',
//                         amount: 300
//                     }
//                 ]
//             },
//             {
//                 id: 'bmw116d_1234_2',
//                 date: '10.01.2017',
//                 km: 28000,
//                 amount: 1800,
//                 details: [{
//                         id: 1,
//                         process: 'changing part',
//                         amount: 350
//                     },
//                     {
//                         id: 2,
//                         process: 'changing part',
//                         amount: 350
//                     },
//                     {
//                         id: 3,
//                         process: 'changing part',
//                         amount: 300
//                     },
//                     {
//                         id: 4,
//                         process: 'changing part',
//                         amount: 800
//                     }
//                 ]
//             }
//         ]
//     }

// ]

// console.log(carReports[0])
// // {id: 'bmw116d_1234', model: '116d', year: 2015, color: 'white', reports: Array(2)}

// console.log(carReports[0].id)
// // bmw116d_1234

// console.log(carReports[0].model)
// // 116d

// console.log(carReports[0].color)
// // white

// console.log(carReports[0].reports)
// // 0: {id: 'bmw116d_1234_1', date: '30.01.2016', km: 13000, amount: 900, details: Array(3)}
// // 1: {id: 'bmw116d_123

// console.log(carReports[0].reports[0])
// // {id: 'bmw116d_1234_1', date: '30.01.2016', km: 13000, amount: 900, details: Array(3)}

// console.log(carReports[0].reports[0].details)
// // 0: {id: 1, process: 'changing part', amount: 300}
// // 1: {id: 2, process: 'changing part', amount: 300}
// // 2: {id: 3, process: 'changing part', amount: 300}

// console.log(carReports[0].reports[0].details[0])
// // {id: 1, process: 'changing part', amount: 300}

// console.log(carReports[0].reports[0].details[0].amount)
// // 300



//**------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//


// //***** COURSE 174 - LOOP
// //* https://www.udemy.com/course/komple-web-developer-kursu/learn/lecture/7677658#overview
// //* https://developer.mozilla.org/en-US/docs/Glossary/loop

// //* A loop is a sequence of instructions that is continually repeated until a certain condition is met in computer programming. An example would be the process of getting an item of data and changing it, and then making sure some condition is checked such as, if a counter has reached a prescribed number.


// //* 1. 'FOR' LOOP

// //* Syntax
// //*         for (statement 1; statement 2; statement 3){
// //*          execute code block
// //*         }

// //* Statement 1 is executed once before the code block is run.
// //* Statement 2 defines the condition needed to execute the code block.
// //* Statement 3 is executed every time the code block is run.

// for(let i = 0; i < 10; i++){
//     console.log(i)
// }
// //This loop will print numbers 0-9, will stop when condition is met (i = 10)

// //* For the above example, the syntax is as follows:

// // Statement 1 sets the variable for the loop (var i = 0).
// // Statement 2 sets the loop condition (i < 10).
// // Statement 3 increases the value of i (i++) each time the code block is run.

// //---------------------------------------------

// for(let i=0; i<=25; i++){
//     if(i<=17){
//         console.log(`You cannot do anyting by yourself while you are ${i} years old.`)
//     }else if(i>=18 && i<21){
//         console.log(`You can do something by yourself while you are ${i} years old.`)
//     }else if(i>=21){
//         console.log(`You can do what do you want by yourself while you are ${i} years old.`)
//     }
// }

// //---------------------------------------------

// //* continue;
// //* If you use continue, loop would pass the condition. e.g.

// for(let i=0; i<10; i++){
//     if(i===7){
//         continue;
//     }
//     console.log(`${i} is a number.`)
// }

// // 7 number was passed by loop. result; 
// // 0 is a number.
// // 1 is a number.
// // 2 is a number.
// // 3 is a number.
// // 4 is a number.
// // 5 is a number.
// // 6 is a number.
// // 8 is a number.
// // 9 is a number.

// //---------------------------------------------

// //* break;
// //* It interrupts the loop. e.g.

// for(let i=0; i<10; i++){

//     console.log(`${i} is a number.`)

//     if(i===7){
//         break;
//     }

// }

// // 7 number was passed by loop. result; 
// // 0 is a number.
// // 1 is a number.
// // 2 is a number.
// // 3 is a number.
// // 4 is a number.
// // 5 is a number.
// // 6 is a number.
// // 7 is a number.

// //---------------------------------------------

// //* 2. 'WHILE' LOOP

// //* Syntax

// //*       while (condition){
// //*        execute code block
// //*       }

// //* The code block will continue to loop as long as the condition is true.

// //* Example;

// i = 0;
// while (i<5){
//     console.log(i);
//     i++
// }
// //This loop  will print number 0-4, will stop when condition becomes false (i >=5)

// //* For the above example, the syntax is as follows:

// //* The code block will continue to run as long as the variable (i) is less than 5.

// //---------------------------------------------

// n = 0;
// x = 0;

// while(n<3){
//     n++
//     console.log(x += n)
// }

// //* Each iteration, the loop increments n and adds it to x. Therefore, x and n take on the following values:
// //*----- After the first pass: n = 1 and x = 1
// //*----- After the second pass: n = 2 and x = 3
// //*----- After the third pass: n = 3 and x = 6

// //* After completing the third pass, the condition n < 3 is no longer true, so the loop terminates.

// //---------------------------------------------

// //* Continue and Break can also use in 'While' Loop

// //---------------------------------------------

// //* 3. DO-WHILE LOOP
// //* The do...while statement creates a loop that executes a specified statement until the test condition evaluates to false. The condition is evaluated after executing the statement, resulting in the specified statement executing *at least once*.

// //* Syntax
// //*         do
// //*            statement
// //*         while (condition);

//  i=0;
//  do {
//     i++
//     console.log(i)
//  }while(i===10)

//  // result: 1

//  //* This statement will print only '1' because of 'while' returns false

//  //* if while would be (i<10); loop would continue untill the statement is false.

//  i=0;
//  do {
//     i++
//     console.log(i)
//  }while(i<10)

//  // 1
//  // 2
//  // 3
//  // 4
//  // 5
//  // 6
//  // 7
//  // 8
//  // 9
//  // 10

// //---------------------------------------------

// sum=0;
// i=0

// do{
//     sum+=i;
//     i++

// }while(i<11)

// console.log(sum) // 55

// //---------------------------------------------

// for(let i=1;i<4;i++){
//     for(let j=1;j<4;j++){
//         console.log(`i=${i} & j=${j}`)
//     }
// }

// // i=1 & j=1
// // i=1 & j=2
// // i=1 & j=3
// // i=2 & j=1
// // i=2 & j=2
// // i=2 & j=3
// // i=3 & j=1
// // i=3 & j=2
// // i=3 & j=3

// //---------------------------------------------

// let val='\n'
// for(let i=0;i<10 ;i++){
//     for(let x=0;x<10;x++){
//         val += '* '
//     }
//     val+='\n';
// }

// console.log(val)


//**------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//


// //***** COURSE 175 - Javascript Basics
// //* https://www.udemy.com/course/komple-web-developer-kursu/learn/lecture/17801926#overview
// //* 

// cars = ['BMW', 'Mercedes', 'Toyota'];

// for(let i=0;i<cars.length;i++){
//     console.log(cars[i])
// }
// // BMW
// // Mercedes
// // Toyota

// //---------------------------------------------

// //** For...in 
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in


// for (let i in cars){
//     console.log(cars[i])
// }
// // BMW
// // Mercedes
// // Toyota

// console.log(typeof cars); // object

// //---------------------------------------------

// //** ForEach */
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

// cars.forEach(function(item){
//     console.log(item);
// })
// // BMW
// // Mercedes
// // Toyota

// people = [
//     {firstname:'Zekiman', lastname:'Blackwolf'},
//     {firstname:'Kubrawoman', lastname:'Blackwolf'},
//     {firstname:'Omer', lastname:'Fishwolf'},
// ]

// //---------------------------------------------

// for (let i=0; i<people.length; i++){
//     console.log(people[i].firstname);
// }
// // Zekiman
// // Kubrawoman
// // Omer

// for (let i in people){
//     console.log(people[i].firstname)
// };
// // Zekiman
// // Kubrawoman
// // Omer

// people.forEach(function(item){
//     console.log(item.firstname)
// });
// // Zekiman
// // Kubrawoman
// // Omer

// //---------------------------------------------

// //** map : returns an array

// val = people.map(function(item){
//     return item.firstname+' '+item.lastname
// })

// console.log(val) // (3) ['Zekiman Blackwolf', 'Kubrawoman Blackwolf', 'Omer Fishwolf']

// //----

// numbers = [1,5,6,8,10];

// val = numbers.map(function(item){
//     return item*item
// })

// console.log(val) // (5) [1, 25, 36, 64, 100]


//**------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//


// //***** COURSE 176 - EXERCISES - LOOPS
// //* https://www.udemy.com/course/komple-web-developer-kursu/learn/lecture/7677660#overview
// //* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration

// //* Generate a random number between 1-10
// //* Help them to find the number by giving tip like up and down
// //* Give them score
// //* Let user can say how many times they can guess

// number = Math.floor(Math.random() * 10) + 1
// // console.log(number)


// //* FIRST WAY >>>> (FUNCTIONAL) >>>>

// // claim = prompt('How many guess do you think you can find it?')
// // howManyTimes = 0;
// // predictor();
// // window.value = ''
// // score = 0;

// // function predictor() {
// //     howManyTimes++;
// //     // console.log(`TEST - howManyTimes: ${howManyTimes}`)
// //     window.value = prompt('Guess the number!')
// //     // console.log(`TEST - value: ${value}`);
// //     checker();
// // }

// // function controlChance() {
// //     if (howManyTimes >= claim) {
// //         console.log(`Game over! \n You tried ${claim} times. \n Correct answer was ${number}.`)
// //     } else {
// //         predictor();
// //     }
// // }

// // function scoreCalculator() {
// //     score = Math.round((100 / claim) * (claim - (howManyTimes - 1)))
// //     return score
// // }

// // function checker() {
// //     if (value == number) {
// //         return console.log(`Congratz!!! \n You found it in ${howManyTimes} times. \n YOUR SCORE: ${scoreCalculator()}`)
// //     } else if (value < number) {
// //         console.log(`You should try the numbers HIGHER than ${value}. \n Remaining chance: ${claim-howManyTimes}. `)
// //         controlChance()
// //     } else if (value > number) {
// //         console.log(`You should try the numbers LOWER than ${value}  \n Remaining chance: ${claim-howManyTimes}. `);
// //         controlChance()
// //     }
// // }


// //* SECOND WAY >>>> (WHILE LOOP) >>>>

// number = Math.floor(Math.random() * 10) + 1
// console.log(number)

// totalChance = prompt('How many chance do you want to find the number?');
// howManyGuess = 0;
// remainingChance = totalChance;
// console.log(`TEST - totalchance: ${totalChance} & howManyGuess ${howManyGuess} `)

// while (howManyGuess <= totalChance) {
//     // ask the guess
//     guessedNumber = prompt(`Enter your guess`);

//     // increase number of guess
//     howManyGuess++;

//     // decrease number of remaining chance
//     remainingChance--;

//     //check
//     // > if correct
//     if (guessedNumber == number) {
//         // calculate the score
//         let scoreCalculation = (100 / totalChance) * (remainingChance + 1)

//         // congratulate
//         console.log(`Congratz! \n You found the number in ${howManyGuess} times! \n Your score is ${scoreCalculation}`)

//         // finish the loop
//         break;
//     }
//     // if false - low 
//     if (guessedNumber < number) {
//         console.log(`Try the HIGHER than ${guessedNumber} \n Remaining chance: ${remainingChance}`)
//     }

//     // if false - high
//     if (guessedNumber > number) {
//         console.log(`Try the LOWER than ${guessedNumber} \n Remaining chance: ${remainingChance}`)
//     }

//     // if finish the chance
//     if (remainingChance <= 0) {
//         console.log(`GAME OVER! \n You couldn't find in ${howManyGuess} times. \n Correct answer was ${number}`)

//         // finish the loop
//         break;
//     }
// }



//**------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//


// //***** COURSE 177 - FUNCTIONS
// //* https://www.udemy.com/course/komple-web-developer-kursu/learn/lecture/7677662#overview
// //* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions

// function ageCalculator(birthyear){
//     return console.log(new Date().getFullYear()-birthyear)
// }

// ageCalculator(1963) // 58
// ageCalculator(1994) // 27

// //---------------------------------------------

// function square(number){
//     return console.log(number*number)
// }

// square(4)   // 16
// square(5)   // 25
// square(9)   // 81

// //---------------------------------------------

// factorial = function fac(n) { 
//     return n < 2 ? 1 : n * fac(n - 1) 
// }

// console.log(factorial(3))

// // 3 * fac(2)

// // Why error didnot return like fac is not defined?? ask later

// //---------------------------------------------

// function ageCalculator(birthYear){
//     return new Date().getFullYear()-birthYear
// }

// function remainingYear(birthYear, name){
//     age = ageCalculator(birthYear);
//     retired = 65-age;

//     if(retired>0){
//         console.log(`${name}, remaining years for retiring: ${retired}.`)
//     }else if(age===NaN || age==undefined){
//         console.log(`Check your information.`)
//     }
//     else{
//         console.log(`${name}, you are already retired.`)
//     }
// }

// remainingYear(1994,'Zekiman') // Zekiman, remaining years for retiring: 38.
// remainingYear(1956,'Zekiman') // Zekiman, you are already retired.


//**------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//


// //***** COURSE 178 - FUNCTION DECLARATION & EXPRESSION
// //* https://www.udemy.com/course/komple-web-developer-kursu/learn/lecture/7677662#overview
// //* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
// //* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function
// //* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function

// function sum(a,b){
//     c = a+b;
//     return c;
// }

// console.log(sum(10,20)) // 30

// //* Function above is similar to below

// sum = function(a,b){
//     c = a+b;
//     return c;
// }

// console.log(sum(10,20)) // 30

// //---------------------------------------------

// //* Default parameters

// sum = function(a,b){

//     //* First way to define default parameters
//     if(typeof a === 'undefined'){ a=0 }
//     if(typeof b === 'undefined'){ b=0 }

//     c = a+b;
//     return c;
// }

// console.log(sum(12));   // 12
// console.log(sum(20));   // 20
// console.log(sum(10,'20'));   // (string) 1020


// //* Alternative (easier) Way to defining default parameters;

// sum = function(a=0, b=0){
//     c = a+b;
//     return c;
// }

// console.log(sum(25,15));    // 40
// console.log(sum(40));       // 40


// //---------------------------------------------
// //* Arguments - The arguments object
// //* arguments is an Array-like object accessible inside functions that contains the values of the arguments passed to that function.

// function args() {
//     console.log(arguments)
// }

// args(10,20,30,40)      
// // Arguments(4) [10, 20, 30, 40, callee: ƒ, Symbol(Symbol.iterator): ƒ]

// function sumAll(){
//     total = 0;
//     for(let i=0; i<arguments.length;i++){
//         total += arguments[i]
//     }
//     return console.log(total);
// }

// sumAll(5,3,2)       // 10
// sumAll(40,15,25)    // 80


//**------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//


// //***** COURSE 179 - EXERCISES - FUNCTIONS
// //* https://www.udemy.com/course/komple-web-developer-kursu/learn/lecture/9534306#overview
// //* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions


// //* Enter amount withdrawal
// //* If there is enouh balance, do it
// //* if there is no balance, ask him to withdrwal from additional account (if has balance)

// mainAccountBalance= 1000;
// additionalBalance= 500;
// allBalance = mainAccountBalance+additionalBalance
// console.log(`Main: ${mainAccountBalance} 
//             \nAdditional: ${additionalBalance} 
//             \nALL: ${allBalance}`)

// withdraw();

// function withdraw() {
//     withdrawal = prompt(`Please enter amount do you want withdraw!`);

//     if (withdrawal <= allBalance) {
//         if (withdrawal <= mainAccountBalance) {
//             console.log(`You have withdrawal ${withdrawal}. \nRemaining balance: ${mainAccountBalance-withdrawal}`);
//             againProcess();
//         }else {
//             console.log(`You don't have enough main balance.`);

//             confirm(`Would you like to withdrawal also from additional account?`) ?
//                 console.log(`You have withdrawal ${withdrawal} from your main and additional accounts. 
//                 \nRemaining balances: 
//                 \nMain Account: 0 
//                 \nAdditional Account: ${mainAccountBalance-withdrawal+additionalBalance}`) :
//                 againProcess();

//             againProcess();
//         }
//     } else {
//         console.log(`You don't have enough balance.`);
//         againProcess();
//     }
// }

// function againProcess() {
//     confirm(`Would you like to start withdrawal process again?`) ?
//     withdraw() :
//     console.log(`You have cancelled.`)
// }


//**------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//


// //***** COURSE 180 - WINDOW
// //* https://www.udemy.com/course/komple-web-developer-kursu/learn/lecture/17801938#overview
// //* https://developer.mozilla.org/en-US/docs/Web/API/Window 

// let val;
// var a = 10;

// val = window;

// console.log(val);

// function abc(params) {
//     return 0;
// }

// //* METHODS;
// focus();

// //* alert();
// //* Displays an alert dialog.

// // alert('Hello world!')

// //---------------------------------------------

// //* prompt();
// //* Returns the text entered by the user in a prompt dialog.

// // prompt('Please enter username.')

// //---------------------------------------------

// //* confirm();
// //* Displays a dialog with a message that the user needs to respond to.

// // let valConfirm = confirm('Are you sure?')

// // //----- Using confirm - 1
// // // if(valConfirm){
// // //     console.log('OK Sir!')
// // // }else{
// // //     console.log('Nope!')
// // // }

// // //----- Using confirm - 2
// // valConfirm ? console.log('OK Sir!') : console.log('Nope!');

// //---------------------------------------------

// //* scrollX 
// //* scrollY 
// //* (Read only) Returns the number of pixels that the document has already been scrolled horizontally and vertically.

// console.log(scrollX, scrollY)

// //---------------------------------------------

// //* scrool();
// //* Scrolls the window to a particular place in the document.

// //---------------------------------------------

// //* location;
// //* Gets/sets the location, or current URL, of the window object.

// console.log(location);
// console.log(location.href);
// console.log(location.hostname);
// console.log(location.host);
// console.log(location.protocol);
// console.log(location.search);

// // location.href='https://developer.mozilla.org/en-US/docs/Web/API/Window/location'

// //---------------------------------------------

// //* reload();
// //* method reloads the current URL, like the Refresh button.

// // location.reload();

// //---------------------------------------------

// //* navigator;
// //* Returns a reference to the navigator object.

// window.navigator;

// //---------------------------------------------

// //* document;
// //* (READ ONLY) Returns a reference to the document that the window contains.

// window.document;

// //---------------------------------------------

// //* open(); Opens a new window.
// //* close(); Closes the current window.

// //---------------------------------------------

// //* focus(); Sets focus on the current window.
// //* blur(); Sets focus away from the window.

// //---------------------------------------------

// //* print(); Opens the Print Dialog to print the current document.

// //---------------------------------------------


//**------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//


// //***** COURSE 181 - SCOPE
// //* https://www.udemy.com/course/komple-web-developer-kursu/learn/lecture/17801940#overview
// //* https://developer.mozilla.org/en-US/docs/Glossary/Scope
// //* https://developer.mozilla.org/en-US/docs/Glossary/Global_scope
// //* https://developer.mozilla.org/en-US/docs/Glossary/Local_scope 


// //* SCOPE
// //* The context in which values and expressions are "visible" or can be referenced. If a variable or other expression is not "in the current scope," then it is unavailable for use. Scopes can also be layered in a hierarchy, so that child scopes have access to parent scopes.

// //* (for example) a variable defined exclusively within the function cannot be accessed from outside the function or within other functions. For instance, the following is invalid:

// function exampleFunction() {
//     var x = "declared inside function";  // x can only be used in exampleFunction
//     console.log("Inside function");
//     console.log(x);
// }

// console.log(x);  // Causes error

// //* However, the following code is valid due to the variable being declared outside the function, making it global:

// var x = "declared outside function";

// exampleFunction();

// function exampleFunction() {
//     console.log("Inside function");
//     console.log(x);
// }

// console.log("Outside function");
// console.log(x);

// //---------------------------------------------

// //* GLOBAL SCOPE
// //* In a programming environment, the global scope is the scope that contains, and is visible in, all other scopes.

// var name = 'Zekiman';

// function logName(){
//     console.log(name)
// };

// logName();  // Zekiman  (We could see the name variable from inside the function because of tha name variable is global.)


// //---------------------------------------------

// //* LOCAL SCOPE
// //* Local scope is a characteristic of variables that makes them local (i.e., the variable name is only bound to its value within a scope which is not the global scope).

// //* Variables are in functions has priority.

// var name = 'Zekiman';

// function logName(){
//     var name = 'Kubrawoman';
//     var age = 12
//     console.log(name)       
// }  // Kubrawoman  (Functions creates their own scopes)

// //-------

// console.log(name)   
// // Zekiman  - ('Kubrawoman' cannot not shown because of it is local)
// // console.log(age)    
// // // age is not defined (We couldn't variable which in a function from outside)

// //-------

// //*** Blocks doesn't create new scope!

// var nameTest = 'Zekiman';

// console.log(nameTest) // Zekiman

// //-------

// function blockScope(){
//     var nameTest = 'Kubrawoman';
//     console.log(nameTest)       
// } 

// blockScope(); // Kubrawoman

// console.log(nameTest); // Zekiman

// //-------

// a=1; b=2

// if(a!==b){
//     var nameTest = 'Omerman'
//     console.log(nameTest)
// } // Omerman

// //* NOTE THAT! Result is 'Omerman' instead of 'Zekiman'
// console.log(nameTest) // Omerman

//---------------------------------------------

// //* Turkish note: If bloğu oluşturduk ve yeni bir değişken tanımladık. Beklentimiz diğer dillerde olduğu gibi yeniDeg isken adındaki değişkenimizin yalnızca if bloğu içerisinde erişilebilir olması. Ancak ‘var’ ile oluşturulan değişkenler bu şekilde davranmıyor. Javascript’in uzun yıllardır kullanılan standart versiyonunda(ES5) değişkenler function scope tabanlı. Yani tanımlı olduğu fonksiyonda geçerli. If ya da for içerisinde değişkenler kendi yeni bir scope oluşturmuyor. Tanımlı olduğu fonksiyon içerisinde her yerde erişilebilir oluyorlar. O zaman şunu diyebiliriz ki ES5'de var ile tanımlı değişkenler function scope tabanlıdır. Bu durum ECMAScript 6 ile değişmiştir. 

// //* source: https://tugrulbayrak.medium.com/javascript-scope-65e86de65cff

// //-------

// // if(true){
// //     var model= 'Opel';
// //     let year = 2016;
// //     const color = 'white';

// //     console.log('block scope', model, year, color);
// // }   // block scope Opel 2016 white

// // //* var ile tanımlanan değişkene dışarıdan ulaşılır.
// // console.log(model)  // Opel

// // //* ES6 ile gelen let ve const block scope oluşturur.
// // console.log(year) // year is not defined
// // console.log(color) // color is not defined
// // console.log('block scope', model, year, color); // year is not defined

// //---------------------------------------------

// var i = 1;

// for (var i =0; i<10; i++ ){
//     console.log('i', i);
// }

// console.log(i)  // Result; >>
// //  i 0
// //  i 1
// //  i 2
// //  i 3
// //  i 4
// //  i 5
// //  i 6
// //  i 7
// //  i 8
// //  i 9
// //  10

// //-------

// var i = 1;

// for (let i =0; i<10; i++ ){
//     console.log('i', i);
// }

// console.log(i)  // Result; >>
// //  i 0
// //  i 1
// //  i 2
// //  i 3
// //  i 4
// //  i 5
// //  i 6
// //  i 7
// //  i 8
// //  i 9
// //  1

// //---------------------------------------------


//**------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//


// //***** COURSE 184 - DOM
// //* https://www.udemy.com/course/komple-web-developer-kursu/learn/lecture/7677630#overview
// //* https://developer.mozilla.org/en-US/docs/Glossary/DOM
// //* https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model

// // console.log(window.document);       // all html 
// // console.log(document.all);          // HTMLAllCollection(23)
// // console.log(document.all.length);   // 23
// // console.log(document.all[10]);      // <p>..</p>
// // console.log(document.head);         // <head>...</head>
// // console.log(document.body);         // <body>...</body>
// // console.log(document.anchors);      // HTMLCollection[]
// // console.log(document.URL);          // http://127.0.0.1:5500/notesHTML.html
// // console.log(document.domain);       // 127.0.0.1
// // console.log(document.images);       // HTMLCollection []
// // console.log(document.title);        // Daily Javascript Learnings
// // console.log(document.forms);        // HTMLCollection []
// // console.log(document.scripts);      // HTMLCollection(2) [script, script]
// // console.log(document.scripts[0].getAttribute('src'));   // notesJS.js

// //---------------------------------------------

// //***** COURSE 185 - DOM (Selecting Single Element)
// //* https://www.udemy.com/course/komple-web-developer-kursu/learn/lecture/7677630#overview
// //* https://developer.mozilla.org/en-US/docs/Glossary/DOM
// //* https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model

// //---------------------------------------------

// //* getElementById();
// //* https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById

// //* The Document method getElementById() returns an Element object representing the element whose id property matches the specified string. Since element IDs are required to be unique if specified, they're a useful way to get access to a specific element quickly.

// var val;

// val = document.getElementById('header');
// console.log(val) // <h1 class="app-title" id="header">To Do App</h1>

// //---------------------------------------------

// //* className
// //* The className property of the Element interface gets and sets the value of the class attribute of the specified element.
// console.log(document.getElementById('header').className);
// // app-title

// //---------------------------------------------

// //* id
// //* The id property of the Element interface represents the element's identifier, reflecting the id global attribute.

// //* If the id value is not the empty string, it must be unique in a document.

// //* The id is often used with getElementById() to retrieve a particular element. Another common case is to use an element's ID as a selector when styling the document with CSS.

// val = document.getElementById('header').id;
// console.log(val) // header

// val = document.getElementById('header');
// val = val.id;
// console.log(val) // header

// //---------------------------------------------

// //* style

// val = document.getElementById('header');
// val.style.fontSize='100px';
// val.style.color='red';
// // val.style.display='none';

// //---------------------------------------------

// //* innerText
// //* The innerText property of the HTMLElement interface represents the "rendered" text content of a node and its descendants.

// //* As a getter, it approximates the text the user would get if they highlighted the contents of the element with the cursor and then copied it to the clipboard.

// val = document.getElementById('header').innerText='My To Do App';
// val = document.getElementById('header').innerText='<b>My To Do App</b>'; //<b> doesn't affect

// //---------------------------------------------

// //* innerHTML
// //* The Element property innerHTML gets or sets the HTML or XML markup contained within the element. To insert the HTML into the document rather than replace the contents of an element, use the method insertAdjacentHTML().

// val = document.getElementById('header').innerHTML='Your To Do App';
// val = document.getElementById('header').innerHTML='<b>Your To Do App</b>'; // made bolder

// //---------------------------------------------

// //* querySelector();
// //* https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector

// //* The Document method querySelector() returns the first Element within the document that matches the specified selector, or group of selectors. If no matches are found, null is returned.

// console.log(document.querySelector('#header'));
// // <h1 class="app-title" id="header" style="font-size: 100px; color: red;"><b>Your To Do App</b></h1>

// console.log(document.querySelector('.card-header'));
// // <div class="card-header"> New Task </div>

// console.log(document.querySelector('div')); 
// // first div

// console.log(document.querySelector('p')); 
// // <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In fugit sapiente tempora praesentium minus cum quos alias, quam magni excepturi doloribus! Esse perspiciatis laborum repudiandae velit similique quidem pariatur culpa?</p>

// val = document.querySelector('li');
// console.log(val)
// //  <li class="list-group-item list-group-item-secondary">To do item
// //  <a href="#" class="delete-item float-right">
// //  <i class="fas fa-times"></i>
// //  </a>
// //  </li>

// val.style.color='red';  // Only first li will be red color

// val = document.querySelector('li:last-child');
// val.style.color='yellow';

// val = document.querySelector('li:nth-child(3)');
// val.style.color='orange';

// val = document.querySelector('li:nth-child(3)');
// val.textContent='task item';

// val = document.querySelector('li:nth-child(4)');
// val.textContent='task item';

// //---------------------------------------------


//**------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//


// //***** COURSE 186 - DOM (Selecting Multiple Elements)
// //* https://www.udemy.com/course/komple-web-developer-kursu/learn/lecture/17801948#overview
// //* https://developer.mozilla.org/en-US/docs/Glossary/DOM
// //* https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model


// //---------------------------------------------

// //* getElementsByClassName();
// //* https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName

// //* The getElementsByClassName method of Document interface returns an array-like object of all child elements which have all of the given class name(s).

// //* When called on the document object, the complete document is searched, including the root node. You may also call getElementsByClassName() on any element; it will return only elements which are descendants of the specified root element with the given class name(s).

// //* Warning: This is a live HTMLCollection. Changes in the DOM will reflect in the array as the changes occur. If an element selected by this array no longer qualifies for the selector, it will automatically be removed. Be aware of this for iteration purposes.

// val = document.getElementsByClassName('list-group-item');
// console.log(val)
// // HTMLCollection(4) [li.list-group-item.list-group-item-secondary, li.list-group-item.list-group-item-secondary, li.list-group-item.list-group-item-secondary, li.list-group-item.list-group-item-danger]

// val = val[0];
// console.log(val)
// // <li class="list-group-item list-group-item-secondary">To do item
// // <a href="#" class="delete-item float-right">
// // <i class="fas fa-times"></i>
// // </a>
// // </li>

// //---------------------------------------------

// val = document.getElementsByClassName('list-group-item');
// for(let i=0; i<val.length; i++){
//     console.log(val[i])
// }  

// // HTMLCollection(4) [li.list-group-item.list-group-item-secondary, li.list-group-item.list-group-item-secondary, li.list-group-item.list-group-item-secondary, li.list-group-item.list-group-item-danger]

// //------

// for(let i=0; i<val.length; i++){
//     val[i].style.color='brown';
//     val[i].textContent='New item';
// }  
// // this made brown the all val items, and changed the text content as 'new item'


// //---------------------------------------------

// //* getElementsTagName();
// //* The Element.getElementsByTagName() method returns a live HTMLCollection of elements with the given tag name.

// val = document.getElementsByTagName('li');
// console.log(val);
// // HTMLCollection(4) [li.list-group-item.list-group-item-secondary, li.list-group-item.list-group-item-secondary, li.list-group-item.list-group-item-secondary, li.list-group-item.list-group-item-danger]

// val = document.getElementsByTagName('a');
// console.log(val);
// // HTMLCollection [a#btnDeleteAll.btn.btn-outline-danger.btn-sm.delete-all.float-right, btnDeleteAll: a#btnDeleteAll.btn.btn-outline-danger.btn-sm.delete-all.float-right]

// val = document.getElementById('task-list').getElementsByTagName('a');
// console.log(val);

// //---------------------------------------------

// //* querySelectorAll()
// //* The Document method querySelectorAll() returns a static (not live) NodeList representing a list of the document's elements that match the specified group of selectors.

// val = document.querySelectorAll('li');

// console.log(val)
// // NodeList(4) [li.list-group-item.list-group-item-secondary, li.list-group-item.list-group-item-secondary, li.list-group-item.list-group-item-secondary, li.list-group-item.list-group-item-danger]

// val.forEach(function(item){
//     console.log(item.textContent)
// }) // 4 New item

// //------

// val.forEach(function(item,index){
//     console.log(item.textContent=`${index}`)
// }) // it ordered them all from 0 to 3

// //------

// val = document.querySelectorAll('li:nth-child(odd)');
// console.log(val)
// // NodeList(2) [li.list-group-item.list-group-item-secondary, li.list-group-item.list-group-item-secondary]

// val.forEach(function(item){
//     console.log(item.textContent)
// })  // result: 0 and 2 

// //------

// document.querySelectorAll('li:nth-child(even)').forEach(function(item){
//     console.log(item.textContent)
// })  // result; 1 and 3


//**------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//


// //***** COURSE 188 - DOM & EVENTS
// //* https://www.udemy.com/course/komple-web-developer-kursu/learn/lecture/17801950#overview


// var list = document.querySelector('.list-group');
// var val = list;

// console.log(val)
// // <ul id="task-list" class="list-group">
// // 				<li class="list-group-item list-group-item-secondary">To do item
// // 					<a href="#" class="delete-item float-right">
// // 						<i class="fas fa-times"></i>
// // 					</a>
// // 				</li>
// // 				<li class="list-group-item list-group-item-secondary">To do item
// // 					<a href="#" class="delete-item float-right">
// // 						<i class="fas fa-times"></i>
// // 					</a>
// // 				</li>
// // 				<li class="list-group-item list-group-item-secondary">To do item
// // 					<a href="#" class="delete-item float-right">
// // 						<i class="fas fa-times"></i>
// // 					</a>
// // 				</li>
// // 				<li class="list-group-item list-group-item-danger">To do item
// // 					<a href="#" class="delete-item float-right">
// // 						<i class="fas fa-times"></i>
// // 					</a>
// // 				</li>

// // 			</ul>

// //* Differences between NodeList and HTMLCollection

// //* ChildNodes
// //* The read-only childNodes property of the Node interface returns a live NodeList of child nodes of the given element where the first child node is assigned index 0. Child nodes include elements, text and comments.

// //* Note: The NodeList being live means that its content is changed each time new children are added or removed.


// console.log(list.childNodes);
// // NodeList(9) [text, li.list-group-item.list-group-item-secondary, text, li.list-group-item.list-group-item-secondary, text, li.list-group-item.list-group-item-secondary, text, li.list-group-item.list-group-item-danger, text]

// console.log(list.children);
// // HTMLCollection(4) [li.list-group-item.list-group-item-secondary, li.list-group-item.list-group-item-secondary, li.list-group-item.list-group-item-secondary, li.list-group-item.list-group-item-danger]

// console.log(list.childNodes[0]); // #text  (text node)
// console.log(list.childNodes[0].nodeName); // #text
// console.log(list.childNodes[0].nodeType); // 3 (text)

// //* An integer which specifies the type of the node. Possible values are:

// //*  Node.ELEMENT_NODE (1)
// //*  An Element node like <p> or <div>.

// //*  Node.ATTRIBUTE_NODE (2)
// //*  An Attribute of an Element.

// //*  Node.TEXT_NODE (3)
// //*  The actual Text inside an Element or Attr.

// //*  Node.CDATA_SECTION_NODE(4)
// //*  A CDATASection, such as <!CDATA[[ … ]]>

// //*  Node.PROCESSING_INSTRUCTION_NODE (7)
// //*  A ProcessingInstruction of an XML document, such as <?xml-stylesheet … ?>.

// //*  Node.COMMENT_NODE (8)
// //*  A Comment node, such as <!-- … -->.

// //*  Node.DOCUMENT_NODE (9)
// //*  A Document node.

// //*  Node.DOCUMENT_TYPE_NODE (10)
// //*  A DocumentType node, such as <!DOCTYPE html>.

// //*  Node.DOCUMENT_FRAGMENT_NODE (11)
// //*  A DocumentFragment node.

// console.log(list.childNodes[1].nodeType); // 1 (element node)

// //-------

// //* children
// //* The read-only children property returns a live HTMLCollection which contains all of the child elements of the element upon which it was called.

// console.log(list.children); 
// // HTMLCollection(4) [li.list-group-item.list-group-item-secondary, li.list-group-item.list-group-item-secondary, li.list-group-item.list-group-item-secondary, li.list-group-item.list-group-item-danger]

// console.log(list.children[0]);
// //  <li class="list-group-item list-group-item-secondary">To do item
// //  					<a href="#" class="delete-item float-right">
// //  						<i class="fas fa-times"></i>
// //  					</a>
// //  				</li>

// console.log(list.children[0].textContent='new ITEM');
// // new ITEM

// console.log(list.children[3].children);
// // HTMLCollection [a.delete-item.float-right]

// //---------------------------------------------

// //* Node.firstChild
// //* The read-only firstChild property of the Node interface returns the node's first child in the tree, or null if the node has no children.

// //* If the node is a Document, this property returns the first node in the list of its direct children.

// //* Note: This property returns any type of node that is the first child of this one. It may be a Text or a Comment node. If you want to get the first Element that is a child of another element, consider using Element.firstElementChild.

// console.log(list.firstChild);
// // #text

// //-------

// //* Element.firstElementChild
// //* The Element.firstElementChild read-only property returns an element's first child Element, or null if there are no child elements.

// //* Element.firstElementChild includes only element nodes. To get all child nodes, including non-element nodes like text and comment nodes, use Node.firstChild.

// console.log(list.firstElementChild);
// // <li class="list-group-item list-group-item-secondary">new ITEM</li>

// //-------

// //* Node.lastChild
// //* Element.lastElementChild

// console.log(list.lastChild);
// // #text

// console.log(list.lastElementChild);
// //   <li class="list-group-item list-group-item-danger">To do item
// //  <a href="#" class="delete-item float-right">
// //  <i class="fas fa-times"></i>
// //  </a>
// //  </li>


// //---------------------------------------------

// console.log(list.childElementCount) // 4
// console.log(list.parentNode)
// // body > div.container.p-3 > div.card.mt-3

// console.log(list.parentElement)
// // body > div.container.p-3 > div.card.mt-3

// console.log(list.parentElement.parentElement)
// // body > div.container.p-3

// //---------------------------------------------

// //* Node.nextSibling & Element.nextElementSibling
// //* https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling
// //* https://developer.mozilla.org/en-US/docs/Web/API/Element/nextElementSibling

// //* The read-only nextSibling property of the Node interface returns the node immediately following the specified one in their parent's childNodes, or returns null if the specified node is the last child in the parent element.

// //* Note: Browsers insert Text nodes into a document to represent whitespace in the source markup. Therefore a node obtained, for example, using Node.firstChild or Node.previousSibling may refer to a whitespace text node rather than the actual element the author intended to get.

// //* The article Whitespace in the DOM contains more information about this behavior.

// //* You can use Element.nextElementSibling to obtain the next element skipping any whitespace nodes, other between-element text, or comments.

// //* To navigate the opposite way through the child nodes list use Node.previousSibling.

// //* The Element.nextElementSibling read-only property returns the element immediately following the specified one in its parent's children list, or null if the specified element is the last one in the list.

// console.log(list.children[0]);
// // #task-list > li:nth-child(1)

// console.log(list.children[0].nextSibling);  
// // #text
// console.log(list.children[0].nextElementSibling);
// // <li class="list-group-item list-group-item-secondary">To do item </li>

// //* Element.previousElementSibling
// //* Node.previousSibling

// console.log(list.children[1].previousSibling);  
// // #text
// console.log(list.children[1].previousElementSibling);
// // <li class="list-group-item list-group-item-secondary">new ITEM</li>

// //-------

// for(let i=0; i<list.childNodes.length; i++){
//     if(list.childNodes[i].nodeType==1){
//         console.log(list.childNodes[i])
//     }
// }

// // it prints childnodes which only has type of element


//**------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//


// //***** COURSE 189 - CREATING ELEMENTS
// //* https://www.udemy.com/course/komple-web-developer-kursu/learn/lecture/17801952#overview

// //* createElement()
// //* In an HTML document, the document.createElement() method creates the HTML element specified by tagName, or an HTMLUnknownElement if tagName isn't recognized.

// li = document.createElement('li')

// //---------------------------------------------

// //* adding class (set class)
// li.className='list-group-item list-group-item-secondary'

// console.log(li) 
// // <li class="list-group-item list-group-item-secondary"></li>

// //---------------------------------------------

// //* setAttribute()
// //* https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute

// //* Sets the value of an attribute on the specified element. If the attribute already exists, the value is updated; otherwise a new attribute is added with the specified name and value.

// //* To get the current value of an attribute, use getAttribute(); to remove an attribute, call removeAttribute().

// li.setAttribute('title','new item')
// // <li class="list-group-item list-group-item-secondary" title="new item"></li>

// //---------------------------------------------

// //* Creating Text
// //* Document.createTextNode() 
// //* Creates a new Text node. This method can be used to escape HTML characters.

// text = document.createTextNode('NEW ITEM');

// //---------------------------------------------

// //* adding text node
// //* Node.appendChild()
// //* The appendChild() method of the Node interface adds a node to the end of the list of children of a specified parent node. If the given child is a reference to an existing node in the document, appendChild() moves it from its current position to the new position (there is no requirement to remove the node from its parent node before appending it to some other node).

// //* This means that a node can't be in two points of the document simultaneously. So if the node already has a parent, the node is first removed, then appended at the new position. The Node.cloneNode() method can be used to make a copy of the node before appending it under the new parent. Copies made with cloneNode are not be automatically kept in sync.

// //* If the given child is a DocumentFragment, the entire contents of the DocumentFragment are moved into the child list of the specified parent node.

// //* Note: Unlike this method, the Element.append() method supports multiple arguments and appending strings. You can prefer using it if your node is an element.

// li.appendChild(text);
// // <li class="list-group-item list-group-item-secondary" title="new item">NEW ITEM</li>

// //---------------------------------------------

// a = document.createElement('a');
// a.setAttribute('href','https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild')
// a.className='delete-item float-right'
// a.innerHTML='<i class="fas fa-times"></i>'

// li.appendChild(a)
// // <li class="list-group-item list-group-item-secondary" title="new item">NEW ITEM<a href="https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild" class="delete-item float-right"><i class="fas fa-times"></i></a></li>

// ulList = document.querySelector('ul')
// ulList.appendChild(li);

// console.log(ulList);
// // it added the created li element to at the end of ul


//**------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//


// //***** COURSE 190 - REMOVING & CHANGING NODES
// //* https://www.udemy.com/course/komple-web-developer-kursu/learn/lecture/17801956#overview

// taskList = document.querySelector('#task-list');
// console.log(taskList);

// //---------------------------------------------

// //* Element.remove()
// //* The method removes the element from the tree it belongs to.

// // taskList.remove(); // removes all the element
// // taskList.childNodes[1].remove(); // removes the node
// // taskList.children[0].remove(); // removes the children

// //---------------------------------------------

// //* Node.removeChild()
// //* The removeChild() method of the Node interface removes a child node from the DOM and returns the removed node.

// //* Note: As long as a reference is kept on the removed child, it still exists in memory, but is no longer part of the DOM. It can still be reused later in the code.

// //* If the return value of removeChild() is not stored, and no other reference is kept, it will be automatically deleted from memory after a short time.

// console.log(taskList.removeChild(taskList.children[3]))
// //  <li class="list-group-item list-group-item-danger">To do item
// // <a href="#" class="delete-item float-right">
// // <i class="fas fa-times"></i>
// // </a>
// // </li>

// //---------------------------------------------

// //* removeAttribute()
// //* The Element method removeAttribute() removes the attribute with the specified name from the element.

// taskList.children[0].removeAttribute('class')
// console.log(taskList.children[0])
// //  <li>To do item
// // <a href="#" class="delete-item float-right">
// // <i class="fas fa-times"></i>
// // </a>
// // </li>


// for (let i=0; i<taskList.children.length; i++){
//     taskList.children[i].removeAttribute('class')
// }

// console.log(taskList)
// /* <ul id="task-list" class="list-group">
// 				<li>To do item
// 					<a href="#" class="delete-item float-right">
// 						<i class="fas fa-times"></i>
// 					</a>
// 				</li>
// 				<li>To do item
// 					<a href="#" class="delete-item float-right">
// 						<i class="fas fa-times"></i>
// 					</a>
// 				</li>
// 				<li>To do item
// 					<a href="#" class="delete-item float-right">
// 						<i class="fas fa-times"></i>
// 					</a>
// 				</li>


// 			</ul>  */

// //---------------------------------------------

// //* Replacing The Elements

// cardHeader = document.querySelector('.card-header');
// console.log(cardHeader)
// // <div class="card-header">
// // New Task
// // </div>

// h2 = document.createElement('h2');
// h2.setAttribute('class','card-header');
// h2.appendChild(document.createTextNode('My List'))

// parent = document.querySelector('.card')

// //----------

// //* Node.replaceChild()
// //* .mozilla.org/en-US/docs/Web/API/Node/replaceChild

// //* The replaceChild() method of the Node element replaces a child node within the given (parent) node.

// parent.replaceChild(h2,cardHeader)
// console.log(parent)

// //---------------------------------------------

// //* Classes

// //* Element.classList
// //* https://developer.mozilla.org/en-US/docs/Web/API/Element/classList

// //* The Element.classList is a read-only property that returns a live DOMTokenList collection of the class attributes of the element. This can then be used to manipulate the class list.

// //*Using classList is a convenient alternative to accessing an element's list of classes as a space-delimited string via element.className.

// link = taskList.children[0].children[0]

// val = link.className;
// val = link.classList;
// // DOMTokenList(2) ['delete-item', 'float-right', value: 'delete-item float-right']
// // 0: "delete-item"
// // 1: "float-right"

// val = link.classList[0];
// // delete-item

// val = link.classList[1];
// // float-right

// link.classList.add('new')
// // DOMTokenList(3) ['delete-item', 'float-right', 'new', value: 'delete-item float-right new']
// //	0: "delete-item"
// //	1: "float-right"
// //	2: "new

// link.classList.remove('new')
// //	DOMTokenList(2) ['delete-item', 'float-right', value: 'delete-item float-right']
// //	0: "delete-item"
// //	1: "float-right"

// //---------------------------------------------

// //* Attribute

// //* Element.getAttribute()
// //* https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute

// //* The getAttribute() method of the Element interface returns the value of a specified attribute on the element.

// //* If the given attribute does not exist, the value returned will either be null or "" (the empty string); see Non-existing attributes for details.

// val = link.getAttribute('class')
// // delete-item float-right

// //---------------------------------------------

// //* Element.setAttribute()
// //* https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute

// //* Sets the value of an attribute on the specified element. If the attribute already exists, the value is updated; otherwise a new attribute is added with the specified name and value.

// //* To get the current value of an attribute, use getAttribute(); to remove an attribute, call removeAttribute().

// val = link.getAttribute('href')	
// // #

// val = link.setAttribute('href','https://developer.mozilla.org')	
// // https://developer.mozilla.org


// console.log(link)
// // 	<a href="https://developer.mozilla.org" class="delete-item float-right">
// //	<i class="fas fa-times"></i>
// //	</a>

// //---------------------------------------------

// //* Element.hasAttribute()
// //* The Element.hasAttribute() method returns a Boolean value indicating whether the specified element has the specified attribute or not.

// console.log(link.hasAttribute('href')); 	// true
// console.log(link.hasAttribute('data-id')); 	// false


//**------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//


// //***** COURSE 191 - EVENT LISTENERS
// //* https://www.udemy.com/course/komple-web-developer-kursu/learn/lecture/17801960#overview


// //* addEventListener()
// //* The addEventListener() method of the EventTarget interface sets up a function that will be called whenever the specified event is delivered to the target.

// //* Common targets are Element, or its children, Document, and Window, but the target may be any object that supports events (such as XMLHttpRequest).

// btn = document.querySelector('#btnDeleteAll');
// // <a id="btnDeleteAll" href="#" class="btn btn-outline-danger btn-sm delete-all float-right"> Delete All </a>

// //---------------------------------------------

// //* click event
// btn.addEventListener('click',function(){
// 	console.log('btn is clicked')
// })

// //----------

// //* or we can express the same thing using this method

// function btnClick(){
// 	console.log('button is clicked')
// }

// btn.addEventListener('click',btnClick);

// //---------------------------------------------

// //* Event.preventDefault()
// //* The preventDefault() method of the Event interface tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would be.

// btn.addEventListener('click',function(e){
// 	console.log('btn is clicked');
// 	e.preventDefault();
// })

// //---------------------------------------------

// //* console.log(e)

// btn.addEventListener('click',function(e){
// 	var val = e;
// 	console.log(val)
// 	// PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}

// 	val = e.type;
// 	console.log(val)
// 	//click
// })

// //---------------------------------------------

// //* event.target

// btn.addEventListener('click',function(e){
// 	val = e.target;
// 	console.log(val);
// 	// <a id="btnDeleteAll" href="#" class="btn btn-outline-danger btn-sm delete-all float-right">	
// 	// Delete All
// 	// </a>

// 	val = e.target.classList;
// 	console.log(val);
// //	DOMTokenList(5) ['btn', 'btn-outline-danger', 'btn-sm', 'delete-all', 'float-right', //	value: 'btn btn-outline-danger btn-sm delete-all float-right']
// //	0: "btn"
// //	1: "btn-outline-danger"
// //	2: "btn-sm"
// //	3: "delete-all"
// //	4: "float-right"
// })


//**------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//


// //***** COURSE 192 - MOUSE EVENTS
// //* https://www.udemy.com/course/komple-web-developer-kursu/learn/lecture/17801962#overview

// btn = document.querySelector('#btnDeleteAll');
// ul = document.querySelector('#task-list')

// function eventHandler(event){

// 	//* event.type
// 	console.log(event.type)

// }
// //---------------------------------------------

// //* Click
// btn.addEventListener('click',eventHandler);		// click
// ul.addEventListener('click',eventHandler);		// click

// //---------------------------------------------

// //* Doubleclick
// btn.addEventListener('dblclick',eventHandler);	// dblclick
// ul.addEventListener('dblclick',eventHandler);	// dblclick

// //---------------------------------------------

// //* Mousedown
// btn.addEventListener('mousedown',eventHandler);	// mousedown
// ul.addEventListener('mousedown',eventHandler);	// mousedown

// //* Mouseup
// btn.addEventListener('mouseup',eventHandler);	// mouseup
// ul.addEventListener('mouseup',eventHandler);	// mouseup

// //* Note: This differs from the click event in that click is fired after a full click action occurs; that is, the mouse button is pressed and released while the pointer remains inside the same element. mousedown is fired the moment the button is initially pressed.

// //---------------------------------------------

// //* Mouseenter
// btn.addEventListener('mouseenter',eventHandler);	// mouseenter
// ul.addEventListener('mouseenter',eventHandler);		// mouseenter

// //* Mouseleave
// btn.addEventListener('mouseleave',eventHandler);	// mouseleave
// ul.addEventListener('mouseleave',eventHandler);		// mouseleave

// //* The mouseenter event is fired at an Element when a pointing device (usually a mouse) is initially moved so that its hotspot is within the element at which the event was fired.

// //* The mouseleave event is fired at an Element when the cursor of a pointing device (usually a mouse) is moved out of it.

// //---------------------------------------------

// //* Mouseover
// btn.addEventListener('mouseover',eventHandler);	// mouseover
// ul.addEventListener('mouseover',eventHandler);	// mouseover

// //* Mouseout
// btn.addEventListener('mouseout',eventHandler);	// mouseout
// ul.addEventListener('mouseout',eventHandler);	// mouseout

// //* The mouseover event is fired at an Element when a pointing device (such as a mouse or trackpad) is used to move the cursor onto the element or one of its child elements.

// //* The mouseout event is fired at an Element when a pointing device (usually a mouse) is used to move the cursor so that it is no longer contained within the element or one of its children.

// //* mouseout is also delivered to an element if the cursor enters a child element, because the child element obscures the visible area of the element.

// //* https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseout_event

// //* Turkish note: Mouseleave ile Mouseout farkı;
// //* Mouseleave children elementlerin üstündeyken çalışmaz.
// //* ama mouseout herhangi bir alt elementin üstüne gelinse dahil aktif olur.

// //* örneğin bir div>ul>li>a hiyerarşisinde div elementine mouseleave ve mouseout eventlerini eklediğimizi düşünelim. mouse ile sırasıyla ul, li ve a üzerine geldiğimizde her birinde mouseout eventi çalışmış olacaktır, ama hala div elementinin içinde olduğumuzdan mouseleave henüz çalışmaz.

// //---------------------------------------------

// //* Mousemove

// btn.addEventListener('mousemove',eventHandler);	// mousemove
// ul.addEventListener('mousemove',eventHandler);	// mousemove

// h5 = document.querySelector('h5');
// h5.addEventListener('mousemove',eventOffSet)

// function eventOffSet(e){

// 	//* offsetX & offsetY
// 	h5.textContent=`X: ${e.offsetX} -  Y: ${e.offsetY}`
// }


//**------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//


// //***** COURSE 193 - KEYBOARD EVENTS
// //* https://www.udemy.com/course/komple-web-developer-kursu/learn/lecture/17801964#overview

// input = document.querySelector('#txtTaskName');

// function eventKB(e){
//     //* event type
//     console.log(`${e.type}`);       
//     // print the event type

//     //* event target
//     console.log(`${e.target.value}`)    
//     // which item is targeted by the event
//     // print the targeted item's value

//     //* keyCode 
//     console.log(`${e.keyCode}`);    
//     // which key is pressed on keyboard

//     // //* preventDefault();
//     // e.preventDefault();
// }

// //---------------------------------------------

// //* Keydown
// input.addEventListener('keydown',eventKB)     // keydown

// //* Keyup
// input.addEventListener('keyup',eventKB)       // keyup

// //* The keydown event is fired when a key is pressed.
// //* The keyup event is fired when a key is released.

// //---------------------------------------------

// //* Keypress
// //* Deprecated: This feature is no longer recommended. 

// input.addEventListener('keypress',eventKB)     // keypress

// //* The keypress event is fired when a key that produces a character value is pressed down.

// //* The keydown and keyup events provide a code indicating which key is pressed, while keypress indicates which character was entered. For example, a lowercase "a" will be reported as 65 by keydown and keyup, but as 97 by keypress. An uppercase "A" is reported as 65 by all events.

// //---------------------------------------------

// //* Focus
// input.addEventListener('focus',eventKB)     // focus

// //* Blur
// input.addEventListener('blur',eventKB)     // blur

// //---------------------------------------------

// //* Cut
// input.addEventListener('cut',eventKB)     // cut

// //* Paste
// input.addEventListener('paste',eventKB)     // paste

// //---------------------------------------------

// //* Submit

// form = document.querySelector('form');
// form.addEventListener('submit',eventKB)

// //---------------------------------------------

// //* Select
// input.addEventListener('select',eventKB)     // select

// //---------------------------------------------

// //* Change
// input.addEventListener('change',eventKB)     // change

// //---------------------------------------------


//**------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//


// //***** COURSE 194 - EVENT BUBBLING & CAPTURING
// //* https://www.udemy.com/course/komple-web-developer-kursu/learn/lecture/17801966#overview

// form = document.querySelector('form');
// cardBody = form.parentElement;
// card = cardBody.parentElement;
// container = card.parentElement;

// form.addEventListener('click',function(e){
//     console.log(`form`)
// })

// cardBody.addEventListener('click',function(e){
//     console.log(`card body`)
// })

// card.addEventListener('click',function(e){
//     console.log(`card`)
// })

// container.addEventListener('click',function(e){
//     console.log(`container`)
// })

// //* affected elements (respectively); Form (is clicked) > CardBody > Card > Container

// //* In this case, when we click to input, all elements above will be triggered because of event bubbling

// //* To prevent this,  only the clicked element is affected, we use the stopPropagation()

// //---------------------------------------------

// //* stopPropagation();
// //* The stopPropagation() method of the Event interface prevents further propagation of the current event in the capturing and bubbling phases. It does not, however, prevent any default behaviors from occurring; for instance, clicks on links are still processed. If you want to stop those behaviors, see the preventDefault() method. It also does not prevent immediate propagation to other event-handlers. If you want to stop those, see stopImmediatePropagation().


// form.addEventListener('click',function(e){
//     console.log(`form`)
//     e.stopPropagation();
// })

// cardBody.addEventListener('click',function(e){
//     console.log(`card body`)
//     e.stopPropagation();
// })

// card.addEventListener('click',function(e){
//     console.log(`card`)
//     e.stopPropagation();
// })

// container.addEventListener('click',function(e){
//     console.log(`container`)
//     e.stopPropagation();
// })

// //* affected elements (only clicked item); Only Container or only Card or Only CardBody or only Form

// //---------------------------------------------

// //* Event Capturring

// //* Turkish Note: event bubblingde kapsayıcı bir elemana tıkladığımızda içten dışa doğru sırayla kapsanan tüm elemanlar etkileniyordu, Event Capturing'de ise dıştan içe doğru sırayla tüm elemanlar etkileniyor. Event Capturing için yapmamız gereken tek şey addEventListener'a 3. parametreyi (true) girmek. (Event type, function, true)

// form.addEventListener('click',function(e){
//     console.log(`form`)
// },true)

// cardBody.addEventListener('click',function(e){
//     console.log(`card body`)
// },true)

// card.addEventListener('click',function(e){
//     console.log(`card`)
// },true)

// container.addEventListener('click',function(e){
//     console.log(`container`)
// },true)

// //* affected elements (respectively); Container > Card > CardBody > Form (is clicked)

// //* in this case, when we use the stopPropagation() and clicked to form, only container will be affected. Or when clicked to container, only form will be affected

// //---------------------------------------------

// deleteItems = document.querySelectorAll('.fa-times');

// deleteItems.forEach(function(item){
//     item.addEventListener('click',function(e){
//         console.log(e.target)
//         e.preventDefault();
//     })
// })

// //---------------------------------------------

// ul = document.querySelector('ul');

// ul.addEventListener('click',function(e){
//     console.log(e.target);

//     if(e.target.className == 'fas fa-times'){
//         e.target.parentElement.parentElement.remove();
//     }

//     e.preventDefault();

// })



//**------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//


// //***** COURSE 195 - LOCAL STORAGE & SESSION STORAGE
// //* https://www.udemy.com/course/komple-web-developer-kursu/learn/lecture/17801968#overview
// //* https://developer.mozilla.org/en-US/docs/Tools/Storage_Inspector/Local_Storage_Session_Storage
// //* https://developer.mozilla.org/en-US/docs/Web/API/Storage

// //---------------------------------------------

// //* LOCAL STORAGE
// //* https://developer.mozilla.org/en-US/docs/Tools/Storage_Inspector
// //* https://developer.mozilla.org/en-US/docs/Web/API/Storage


// //* METHODS

// //* Storage.setItem()
// //* The setItem() method of the Storage interface, when passed a key name and value, will add that key to the given Storage object, or update that key's value if it already exists.

// var firstName = localStorage.setItem('firstName','Zekiman')
// // Storage {firstName: 'Zekiman', length: 1}

// var lastName = localStorage.setItem('lastName','Blackwolf');
// // Storage {lastName: 'Blackwolf', firstName: 'Zekiman', length: 2}

// //------------

// //* Storage.getItem()
// //* The getItem() method of the Storage interface, when passed a key name, will return that key's value, or null if the key does not exist, in the given Storage object.

// val = localStorage.getItem('firstName');    // Zekiman
// val = localStorage.getItem('lastName');     // Blackwolf

// //------------

// //* Storage.key()
// //* The key() method of the Storage interface, when passed a number n, returns the name of the nth key in a given Storage object. The order of keys is user-agent defined, so you should not rely on it.

// //------------

// //* Storage.removeItem()
// //* The removeItem() method of the Storage interface, when passed a key name, will remove that key from the given Storage object if it exists. The Storage interface of the Web Storage API provides access to a particular domain's session or local storage.

// //* If there is no item associated with the given key, this method will do nothing.

// localStorage.removeItem('firstName');
// // Storage {lastName: 'Blackwolf', length: 1}

// //------------

// //* Storage.clear()
// //* The clear() method of the Storage interface clears all keys stored in a given Storage object.

// localStorage.clear();
// // Storage {length: 0}

// //---------------------------------------------

// //* HOW TO ADD AN ARRAY TO LOCAL STORAGE;

// var hobbies = ['coding','football','running'];
// localStorage.setItem('hobbies',hobbies);
// // Storage {hobbies: 'coding,football,running', length: 1}

// //* We added but it seems like string, we need to make it an object. to changing we are using JSON.stringify() method. And to getting a value, we need to use JSON.parse() method

// //------------

// //* JSON.stringify()
// //* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify

// //* The JSON.stringify() method converts a JavaScript object or value to a JSON string, optionally replacing values if a replacer function is specified or optionally including only the specified properties if a replacer array is specified.

// localStorage.setItem('hobbies',JSON.stringify(hobbies));
// // Storage {hobbies: '["coding","football","running"]', length: 1}

// //------------

// //* JSON.parse()
// //* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse

// //* The JSON.parse() method parses a JSON string, constructing the JavaScript value or object described by the string. An optional reviver function can be provided to perform a transformation on the resulting object before it is returned.

// val = JSON.parse(localStorage.getItem('hobbies'))
// // (3) ['coding', 'football', 'running']

// console.log(localStorage);
// console.log(val)

// //---------------------------------------------

// //* SESSION STORAGE

// //* sessionStorage.setItem()
// var city = sessionStorage.setItem('city','Pensilvanya')
// // Storage {IsThisFirstTime_Log_From_LiveServer: 'true', city: 'Pensilvanya', length: 2}

// var country = sessionStorage.setItem('country','Amerikanya')
// // Storage {IsThisFirstTime_Log_From_LiveServer: 'true', city: 'Pensilvanya', country: 'Amerikanya', length: 3}

// //------------

// //* All methods of session storage are similar to local storage's methods
// //* sessionStorage.getItem()
// //* sessionStorage.key()
// //* sessionStorage.removeItem()
// //* sessionStorage.clear()




//**------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//


// //***** COURSE 196 - 200 | EXERCISE - TO DO PROJECT (course project)
// //* https://www.udemy.com/course/komple-web-developer-kursu/learn/lecture/17801970#overview

// //* after the lecture, i will make my own to do project by myself

// form = document.querySelector('form');
// input = document.querySelector('#txtTaskName');
// btnDeleteAll = document.querySelector('#btnDeleteAll');
// taskList = document.querySelector('#task-list')
// let items;



// //* Load items
// loadItems();

// //* Call EventListeners
// eventListeners();

// function eventListeners() {

//     //* SUBMIT EVENT (ADDING TASK)
//     form.addEventListener('submit', addNewItem)

//     //* DELETING EVENT
//     taskList.addEventListener('click', deleteItem)

//     //* DELETING ALL ITEMS
//     btnDeleteAll.addEventListener('click', deleteAllItems)

// }


// //* ADDING NEW ITEM
// function addNewItem(e) {
//     e.preventDefault();
//     console.log(input.value)
//     if (input.value == '') {
//         alert('Please type a task firstly.')
//     } else {

//         //* create item
//         createItem(input.value)

//         //* save to LS
//         setItemToLS(input.value)

//         //* clear input after adding
//         input.value = ''
//         console.log(li)
//     }
// }


// //* LOADING ITEM

// function loadItems(){
//     items = getItemsFromLS();

//     items.forEach(function(item){
//         createItem(item)
//     })
// }


// //* GET ITEMS FROM LOCAL STORAGE
// function getItemsFromLS(){
//     if(localStorage.getItem('items')===null){
//         items = [];
//     }else {
//         items = JSON.parse(localStorage.getItem('items'))
//     }
//     return items;
// }


// //* SET ITEM TO LOCAK STORAGE
// function setItemToLS(text){
//     items = getItemsFromLS();
//     items.push(text);
//     localStorage.setItem('items',JSON.stringify(items))
// }



// function createItem(text){
//      //* creating li
//      li = document.createElement('li');
//      li.className = 'list-group-item list-group-item-secondary'

//      //* first way to adding text content to li
//      // li.textContent = input.value

//      //* second way to adding text to li
//      li.appendChild(document.createTextNode(text))

//      //* creating a
//      a = document.createElement('a');
//      a.classList = 'delete-item float-right';
//      a.setAttribute('href', '#');

//      //* first way to adding the i element to a element
//      // i = document.createElement('i');
//      // i.classList='fas fa-times';
//      // a.appendChild(i)

//      //* second way to adding the i element to a element
//      a.innerHTML = '<i class="fas fa-times"></i>'

//      //* appending
//      li.appendChild(a)
//      taskList.appendChild(li)
// }


// //* DELETING ITEM

// function deleteItem(e) {
//     if (e.target.className == "fas fa-times") {
//         if (confirm('Are you sure?')) {
//             console.log('delete button is clicked');
//             if (e.target.parentElement.parentElement.className = 'list-group-item') {
//                 e.target.parentElement.parentElement.remove()

//                 //* delete also from LS
//                 deleteItemFromLS(e.target.parentElement.parentElement.textContent)
//             }
//         }
//         e.preventDefault();
//     };
// }


// //* DELETING ALL ITEMS
// function deleteAllItems(e) {

//     if (confirm('Are you sure?')) {

//         // //* First way to deleting all items
//         // taskList.innerHTML = '';

//         // //* second way
//         // taskList.childNodes.forEach(function(item){

//         //     if(item.nodeType===1){
//         //         console.log(item);
//         //         item.remove();

//         //     }
//         // })

//         //* third way
//         while(taskList.firstChild){
//             taskList.removeChild(taskList.firstChild)
//         }

//         //* Delete all also from LS
//         localStorage.clear();

//     }
//     e.preventDefault();
// }


// //* DELETING ALSO FROM LS

// function deleteItemFromLS(text){
//     items = getItemsFromLS();
//     items.forEach(function(item,index){
//         if(item === text){
//             items.splice(index,1)
//         }
//     })
//     localStorage.setItem('items',JSON.stringify(items))
// }




//**------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//


//***** COURSE 201 - 204 | EXERCISE - SLIDER (course project)
//* https://www.udemy.com/course/komple-web-developer-kursu/learn/lecture/17801980#overview

//* after the lecture, i will make my own to do project by myself




//**------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//


// //***** COURSE 218 - 219 - OBJECTS & FUNCTIONS & CONSTRUCTOR (OBJECT ORIENTED PROGRAMMING)
// //* https://www.udemy.com/course/komple-web-developer-kursu/learn/lecture/17802002#overview


// //---------------------------------------------

// //* ------- PRIMITIVES
// //* - Number
// //* - String
// //* - Boolean
// //* - Undefined
// //* - Null

// //* ------- Everything else
// //* - Arrays
// //* - Functions
// //* - Objects
// //* - Dates
// //* - String & Number Object


// //* Turkish notes:
// //* Primitive Tipler sadece tek bir değer tutar, değer tutma haricinde ekstra özellik getirmez.

// //---------------------------------------------

// num = 10;

// object = {
//     name: 'zekiman',
//     birthYear: 1944,
//     job: 'maraba'
// }

// array = ['hi','everyone']

// console.log(num);       // 10 (it prints just value of 10)
// console.log(object);    // it brings proto besides value
// console.log(array);     // it has some methods besides proto because of being an array

// // note: length property can be using only on an array

// //---------------------------------------------

// //* Object Literals
// //* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#object_literals

// //* Constructors > Instances
// //* We will generate instances from constructors

// //---------------------------------------------

// //* Function Constuctors

// function Person(name,birthYear,job){
//     this.name = name;
//     this.birthYear = birthYear;
//     this.job = job;
//     this.calculateAge = function() {
//         return new Date().getFullYear()-this.birthYear
//     }

//     console.log(this)
// }

// //* same statement above, typed differently 
// // Person = function(name,birthYear,job){
// //     this.name = name;
// //     this.birthYear = birthYear;
// //     this.job = job;
// //     this.calculateAge = function() {
// //         return new Date().getFullYear()-this.birthYear
// //     }

// //     console.log(this)
// // }


// zekiman = new Person('zekiman',1994,'maraba')
// // Person {name: 'zekiman', birthYear: 1994, job: 'maraba'}

// kubrawoman = new Person('kubrawoman',1994,'maraba müdüresi')
// // Person {name: 'kubrawoman', birthYear: 1994, job: 'maraba müdüresi'}


// console.log(zekiman.name)                   //  zekiman
// console.log(zekiman.job)                    //  maraba
// console.log(kubrawoman.birthYear)           //  1994
// console.log(kubrawoman.calculateAge())      //  27

// //---------------------------------------------




//**------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//


// //***** COURSE 220 - PROTOTYPE
// //* https://www.udemy.com/course/komple-web-developer-kursu/learn/lecture/17802006#content
// //* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain

// let Person = function(name,birthYear,job){
//     this.name = name;
//     this.birthYear = birthYear;
//     this.job = job;
//     // this.calculateAge = function(){
//     //     return new Date().getFullYear()-this.birthYear;
//     // }
// }

// zekiman = new Person('Zekiman',1994,'maraba manager');

// console.log(zekiman)
// //  Person {name: 'Zekiman', birthYear: 1994, job: 'maraba manager', //   calculateAge: ƒ}
// //  birthYear: 1994
// //  calculateAge: ƒ ()
// //  job: "maraba manager"
// //  name: "Zekiman"
// //  [[Prototype]]: Object

// //---------------------------------------------

// //* calculateAge function is deleted from constructor,
// //* and the function property is sent by prototype

// Person.prototype.calculateAge = function(){
//     return new Date().getFullYear() - this.birthYear
// }

// console.log(zekiman);
// //  Person {name: 'Zekiman', birthYear: 1994, job: 'maraba manager'}
// //  birthYear: 1994
// //  job: "maraba manager"
// //  name: "Zekiman"
// //  [[Prototype]]: Object
// //  calculateAge: ƒ ()
// //  constructor: ƒ (name,birthYear,job)
// //  [[Prototype]]: Object

// //---------------------------------------------

// Person.prototype.getName = function(){
//     return this.name
// }

// console.log(zekiman.getName()); // Zekiman

// //---------------------------------------------

// //* hasOwnProperty()
// //* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty

// //* The hasOwnProperty() method returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it).

// console.log(zekiman.hasOwnProperty('name'))     // true
// console.log(zekiman.hasOwnProperty())           // false

// Person.prototype.lastname = 'Blackwolf'
// console.log(zekiman.hasOwnProperty('lastname')) // false

// //---------------------------------------------

// zekiman = new Person('Zekiman',1994,'maraba manager');
// kubrawoman = new Person ('Kubrawoman', 1993,'maraba müdüresi');

// //* we didnot send the lastname value as variable for new person to prototype of constructor. so lastname value of each instance seems to fixed value ('Blackwolf)

// console.log(zekiman.lastname);      // Blackwolf
// console.log(kubrawoman.lastname);   // Blackwolf

// //* When we set the lastname as a function which return variable for each instance by this way... (at the next lectures)




//**------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//


// //***** COURSE 221 - EXERCISE : CONSTRUCTOR & PROTOTYPE
// //* https://www.udemy.com/course/komple-web-developer-kursu/learn/lecture/17802008#overview


// //* Create an Employee constructor which get value of salary and name from outside

// //* Create a function which calculating the earned total salary and tax until the current month in this year

// //* ---> Tax:
// //* -------->Until 20.000₺ earnings: %20 
// //* -------->Until 30.000₺ earnings: %25 
// //* -------->More than 30.000₺ earnings: %27 

// //---------------------------------------------

// function Employee(name,salary){
//     this.name = name;
//     this.salary = salary;
// }

// emp1 = new Employee('John', 3000);
// console.log(emp1)   // Employee {name: 'John', salary: 3000}

// //* If we would forget to put 'new' keyword before constructor name, it will return undefined;

// emp2 = Employee('Rihanna',2000)
// console.log(emp2) //******* undefined


// //* To prevent this issue, we can use this statement in the function;

// function Employee(name,salary){

//     if(!(this instanceof Employee)){
//         return new Employee(name,salary)
//     }
//     this.name = name;
//     this.salary = salary;
// }

// emp2 = Employee('Rihanna',2000)
// console.log(emp2)   
// //******* Employee {name: 'Rihanna', salary: 2000}

// //---------------------------------------------

// zekiman = new Employee('Zekiman',3500);

// Employee.prototype.calcEarnings = function(){
//     currentMonth = new Date().getMonth()+1;
//     totalSalary = currentMonth*this.salary;
//     tax = 0;

//     if(totalSalary<=20000){
//         tax = totalSalary*0.2;
//     }else if(totalSalary>20000 && totalSalary<=30000){
//         tax = totalSalary*0.25;
//     }else{
//         tax = totalSalary*0.27
//     }

//     return console.log(`The employee earned ${totalSalary}₺ until this month and ${tax}₺ is paid for tax.`)
// }

// console.log(zekiman);
// //      Employee {name: 'Zekiman', salary: 3500}
// //      name: "Zekiman"
// //      salary: 3500
// //      [[Prototype]]: Object
// //      calcEarnings: ƒ ()
// //      constructor: ƒ Employee(name,salary)
// //      [[Prototype]]: Object


// zekiman.calcEarnings();
// //  The employee earned 38500₺ until this month and 10395₺ is paid for tax.


// //---------------------------------------------




//**------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//


// //***** COURSE 222 - OBJECT.CREATE
// //* https://www.udemy.com/course/komple-web-developer-kursu/learn/lecture/17802010#overview
// //* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create


// //* Object.create()
// //* The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.

// personProto = {
//     calculateAge : function(){
//         return new Date().getFullYear()-this.birthYear;
//     }
// }

// console.log(personProto)
// //  Object
// //  calculateAge: ƒ ()

// //-------

// zekiman = Object.create(personProto);

// console.log(zekiman)
// //  {}
// //  [[Prototype]]: Object
// //  calculateAge: ƒ ()


// //* Turkish note: Bu şekilde var olan bir objenin özelliklerini yeni objenin proto kısmına aktararak yeni özellikler kazandırmış oluruz.

// //---------------------------------------------

// zekiman.name= 'zekiman'
// zekiman.birthYear= 1994
// zekiman.job= 'maraba'

// console.log(zekiman)
// //  {name: 'zekiman', birthYear: 1994, job: 'maraba'}
// //  birthYear: 1994
// //  job: "maraba"
// //  name: "zekiman"
// //  [[Prototype]]: Object
// //  calculateAge: ƒ ()
// //  [[Prototype]]: Object

// console.log(zekiman.calculateAge()) // 27

// //---------------------------------------------

// kubraWoman = Object.create(personProto,{
//     name: {value: 'kubrawoman'},
//     birthYear: {value: 1994},
//     job: {value: 'maraba müdiresi'}
// })

// console.log(kubraWoman)
// //  {name: 'kubrawoman', birthYear: 1993, job: 'maraba müdiresi'}
// //  birthYear: 1993
// //  job: "maraba müdiresi"
// //  name: "kubrawoman"
// //  [[Prototype]]: Object
// //  calculateAge: ƒ ()
// //  [[Prototype]]: Object

// console.log(kubraWoman.calculateAge())  // 27




//**------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//


// //***** COURSE 223 - PROTOTYPE BASED INHERITANCE
// //* https://www.udemy.com/course/komple-web-developer-kursu/learn/lecture/17802012#overview
// //* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain

// Person = function(name,birhYear,job) {
//     this.name = name;
//     this.birhYear = birhYear;
//     this.job = job
// }

// Person.prototype.calculateAge = function(){
//     return new Date().getFullYear() - this.birhYear;
// }

// zekiman = new Person('zekiman',1994,'maraba management')
// console.log(zekiman)
// //      Person {name: 'zekiman', birhYear: 1994, job: 'maraba management'}
// //      birhYear: 1994
// //      job: "maraba management"
// //      name: "zekiman"
// //      [[Prototype]]: Object

// //---------------------------------------------

// Teacher = function(name,birthYear,job,subject){
//     //* instead of typing again the following;
//     // this.name = name;
//     // this.birhYear = birhYear;
//     // this.job = job;

//     //* we are calling the parameters 
//     Person.call(this,name,birthYear,job);

//     this.subject = subject
// }

// kubrawoman = new Teacher('Kübrawoman',1994,'teacher','Math')

// console.log(kubrawoman)
// //  Teacher {name: 'Kübrawoman', birhYear: 1994, job: 'teacher', subject: 'subject'}
// //  birhYear: 1994
// //  job: "teacher"
// //  name: "Kübrawoman"
// //  subject: "Math"
// //  [[Prototype]]: Object

// //--------------------------------------------

// //* Inheriting methods of Person object to Teacher object's prototype

// //* console.log(kubrawoman.calculateAge())
// //  notesJS.js:5198 Uncaught TypeError: kubrawoman.calculateAge is not a function
// //  at notesJS.js:5198

// Teacher.prototype = Object.create(Person.prototype)

// console.log(Teacher.prototype.constructor)
// //      ƒ (name,birhYear,job) {
// //          this.name = name;
// //          this.birhYear = birhYear;
// //          this.job = job
// //      }

// //* it seems to exactly the same as Person prototype, but we have additional parameters for Teacher object. so we need to set Teacher constructor

// Teacher.prototype.constructor = Teacher;

// kubrawoman = new Teacher('Kübrawoman',1994,'teacher','Math')

// console.log(kubrawoman)
// //      Teacher {name: 'Kübrawoman', birhYear: 1994, job: 'teacher', subject: 'Math'}
// //      birhYear: 1994
// //      job: "teacher"
// //      name: "Kübrawoman"
// //      subject: "Math"
// //      [[Prototype]]: Person
// //      constructor: ƒ (name,birthYear,job,subject)
// //      [[Prototype]]: Object
// //      calculateAge: ƒ ()
// //      constructor: ƒ (name,birhYear,job)
// //      [[Prototype]]: Object

// console.log(kubrawoman.calculateAge())
// //      27

// //--------------------------------------------

// Teacher.prototype.greeting = function(){
//     return 'Hellö, my name is '+ this.name
// }

// console.log(kubrawoman)
// //      Teacher {name: 'Kübrawoman', birhYear: 1994, job: 'teacher', subject: 'Math'}
// //      birhYear: 1994
// //      job: "teacher"
// //      name: "Kübrawoman"
// //      subject: "Math"
// //      [[Prototype]]: Person
// //      constructor: ƒ (name,birthYear,job,subject)
// //      greeting: ƒ ()
// //      [[Prototype]]: Object

// console.log(kubrawoman.greeting())
// //      Hellö, my name is Kübrawoman




//**------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//


//***** COURSE 224 - BUILT-IN CONSTRUCTORS
//* https://www.udemy.com/course/komple-web-developer-kursu/learn/lecture/17802014#overview

