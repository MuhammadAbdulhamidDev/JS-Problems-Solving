//###################################################################//
//########################## Number & String ########################//
//###################################################################//

//###################################################################//
//############################## Task 01 ############################//
//###################################################################//

// console.log(1000_000); // 1000000
// console.log(1000000); // 1000000
// console.log(10e5); // 1000000
// console.log(10e3 * 10e2); // 100000
// console.log(); // 100000
// console.log(); // 100000
// console.log(); // 100000
// console.log(); // 100000
// console.log(); // 100000
// console.log(); // 100000
// console.log(); // 100000
// console.log(); // 100000
// console.log(); // 100000

//###################################################################//
//############################## Task 02 ############################//
//###################################################################//

// console.log(Number.MIN_SAFE_INTEGER); // 9007199254740991

//###################################################################//
//############################## Task 03 ############################//
//###################################################################//
// console.log((Number.MAX_SAFE_INTEGER).toString().length); // 16

//###################################################################//
//############################## Task 04 ############################//
//###################################################################//

// let myVar = "100.56789 Views";

// console.log(parseInt(myVar)); // 100
// console.log(parseFloat(myVar).toPrecision(5)); // 100.57

//###################################################################//
//############################## Task 05 ############################//
//###################################################################//

// let num = 10;

// console.log(Number.isInteger(num) + Number.isInteger(num)); // 2

//###################################################################//
//############################## Task 06 ############################//
//###################################################################//

// let flt = 10.4;

// console.log(parseInt(flt)); // 10
// console.log(Number(flt.toPrecision(2))); // 10
// console.log(Number(flt.toFixed(0))); // 10
// console.log(Math.round(flt)); // 10
// console.log(Math.floor(flt)); // 10
// console.log(Math.ceil(flt)); // 10
// console.log(Math.trunc(flt)); // 10

//###################################################################//
//############################## Task 07 ############################//
//###################################################################//

// console.log(Math.floor(Math.random() * 5)); // 0 || 1 || 2 || 3 || 4
// console.log(Math.random());

//###################################################################//
//############################## Task 08 ############################//
//###################################################################//

// let a = 100;
// let b = 2_00.5;
// let c = 1e2;
// let d = 2.4;

// Find Smallest Number In All Variables And Return Integer
// console.log(Math.floor(Math.min(a, b, c, d)));

// Use Variables a + d One Time To Get The Needed Output
// console.log(Math.pow(a, Math.floor(d)));

// // Get Integer "2" From d Variable With 4 Methods
// console.log(Math.round(d)); // 2
// console.log(Math.floor(d)); // 2
// console.log(Math.trunc(d)); // 2
// console.log(parseInt(d)); // 2

// // Use Variables b + d To Get This Valus
// console.log((Math.floor(b) / Math.ceil(d)).toString()); // 66.67 => String
// console.log(Math.ceil(Math.floor(b) / Math.ceil(d))); // 67 => Number

//###################################################################//
//############################## Task 09 ############################//
//###################################################################//
// let userName = "Elzero";
// console.log(userName[0].toLowerCase()); // e
// console.log(userName.charAt(0).toLowerCase()); // e
// console.log(userName.slice(0, 1).toLocaleLowerCase()); // e
// console.log(userName.substring(1,0).toLocaleLowerCase()); // e
// console.log(userName.substr(0, 1).toLocaleLowerCase()); // e
// console.log(userName[0].toLowerCase().repeat(3)); // e

//###################################################################//
//############################## Task 10 ############################//
//###################################################################//

// let word = "Elzero";
// let letterZ = "z";
// let letterE = "e";
// let letterO = "O";

// console.log(word.includes(letterZ)); // True
// console.log(word.startsWith(letterE.toUpperCase())); // True
// console.log(word.endsWith(letterO.toLowerCase())); // True

//###################################################################//
//############################## Task 10 ############################//
//###################################################################//

// let a = "Elzero Web School";

// // Include This Method In Your Solution [slice, charAt]
// console.log(a.charAt(2).toUpperCase() + a.slice(3, 6)); // Zero

// // 8 H
// console.log(a.slice(-4,-3).toUpperCase().repeat(8)); // HHHHHHHH

// // Return Array
// console.log(a.slice(0, 6).split(" ")); // ["Elzero"]
// console.log(a.split(" ", 1)); // ["Elzero"]

// // Use Only "substr" Method + Template Literals In Your Solution
// console.log(`${a.substr(0, 6)} ${a.substr(11)}`); // Elzero School
// console.log(`${a.substr(0, 6)} ${a.substr(-6)}`); // Elzero School

// // Solution Must Be Dynamic Because String May Change
// console.log(a.length - 1);
// console.log(
//   a[0].toLowerCase() +
//     a.slice(1, a.length).toUpperCase() +
//     a[a.length - 1].toLowerCase()
// ); // eLZERO WEB SCHOOl

