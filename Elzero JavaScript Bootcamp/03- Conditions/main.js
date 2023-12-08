//###################################################################//
//############################ Conditions ###########################//
//###################################################################//

//###################################################################//
//############################## Task 01 ############################//
//###################################################################//

// console.log(100 == "100"); // true
// console.log(100 < 1000); // true
// console.log(110 - 100 < 10 + 20); // true
// console.log(-10 == "-10"); // true
// console.log(- -50 >= +"-40"); // true
// console.log(- 10 <= -"-40"); // true
// console.log(+ "10" === 10); // true
// console.log(- 20 < false); // true

//###################################################################//
//############################## Task 02 ############################//
//###################################################################//

// let num1 = 10;
// let num2 = 20;

// console.log(num1 < num2); // true
// console.log(num1 <= num2); // true
// console.log(num2 > num1); // true
// console.log(num2 >= num1); // true
// console.log(num2 != num1); // true

//###################################################################//
//############################## Task 03 ############################//
//###################################################################//

// let a = 20;
// let b = 30;
// let c = 10;

// console.log(a < b && a > c || a < b); // true
// console.log(a ? b ? a ? c); // true
// console.log(?(a ? b) && !(a ? b) && ?(a ? c) && ?(a ? c)); // true
//###################################################################//
//############################## Task 04 ############################//
//###################################################################//

// function test_case(num) {
//     if (num < 10) {
//         console.log(num.toString().padStart(3, "0"));
//     } else if (num > 10 && num < 100) {
//         console.log(num.toString().padStart(3, "0"));
//     } else {
//         console.log(num);
//     }
// }
// test_case(9);
// test_case(20);
// test_case(120);

//###################################################################//
//############################## Task 05 ############################//
//###################################################################//

// let num1 = 9;
// let str = "9";
// let str2 = "20";

// if (num1 == str) {
//   console.log(`${num1} Is The Same Value As ${str}`);
// }
// if (num1 == str) {
//   console.log(`${num1} Is The Same Value As ${str} But Not The Same Type`);
// }
// if (num1 !== str2) {
//   console.log(`${num1} Is Not The Same Value Or The Same Type As ${str2}`);
// }
// if (typeof str == typeof str2) {
//   console.log(`${str} Is The Same Type As ${str2} But Not The Same Value`);
// }
//###################################################################//
//############################## Task 06 ############################//
//###################################################################//
// let num1 = 10;
// let num2 = 30;
// let num3 = "30";

// if (num3 > num1 && typeof num3 != typeof num2) {
//   console.log(
//     `${num3} Is Larger Than ${num1} And Type string Not The Same Type As number`
//   );
// }

// if (num3 > num1 && num3 !== num2) {
//   console.log(
//     `${num3} Is Larger Than ${num1} And Value Is The Same As ${num3} And Type string Not The Same Type As number`
//   );
// }

// if (num3 !== num1 && typeof num3 != typeof num2) {
//   console.log(
//     `${num3} Value And Type Is Not The Same As ${num1} And Type Is Not The Same As ${num2}`
//   );
// }
//###################################################################//
//############################## Task 07 ############################//
//###################################################################//
// let st = "Elzero Web School";

// if (st.charAt(st.indexOf('W')).toLowerCase() === "w") {
// 	console.log("Good");
// }

// if (typeof Number(st) !== "string") {
// 	console.log("Good");
// }
// if (typeof st.length === "number") {
// 	console.log("Good");
// }
// if (st.slice(0,6).repeat(2) === "ElzeroElzero") {
// 	console.log("Good");
// }
//###################################################################//
//############################## Task 08 ############################//
//###################################################################//

// let a = 10;

// let result =
//   a < 10 ? 10 : a >= 10 && a <= 40 ? "10 To 40" : a > 40 ? "> 40" : "Unknown";
// console.log(result);

//###################################################################//
//############################## Task 09 ############################//
//###################################################################//

// let day = "Friday";
// let day = "Saturday";
// let day = "Sunday";
// Output => "No Appointments Available"

// let day = "Monday";
// let day = "Thursday";
// // Output => "From 10:00 AM To 5:00 PM"

// let day = "Tuesday";
// // Output => "From 10:00 AM To 6:00 PM"

// let day = "Wednesday";
// // Output => "From 10:00 AM To 7:00 PM"

// let day = "World";
// // Output => "Its Not A Valid Day"

// switch (day)
// {
//     case "Friday" || "Saturday" || "Sunday":
//         console.log("No Appointments Available");
//         break;
// }
//###################################################################//
//############################## Task 10 ############################//
//###################################################################//

// function check(job) {
// 	if (job === "Manager") {
// 		salary = 8000;
// 		console.log(salary);
// 	} else if (job === "IT" || job === "Support") {
// 		salary = 6000;
// 		console.log(salary);
// 	} else if (job === "Developer" || job === "Designer") {
// 		salary = 7000;
// 		console.log(salary);
// 	} else {
// 		salary = 4000;
// 		console.log(salary);
// 	}
// }
// check("Manager");
// check("IT");
// check("Support");
// check("Developer");
// check("Designer");
// check("Engineer");

// let job = "Engineer";

// switch (job) {
// 	case "Manager":
// 		salary = 8000;
// 		console.log(`Your Salary Is ${salary}.`);
// 		break;
// 	case "Developer":
// 	case "Designer":
// 		salary = 7000;
// 		console.log(`Your Salary Is ${salary}.`);
// 		break;
// 	case "Support":
// 	case "IT":
// 		salary = 6000;
// 		console.log(`Your Salary Is ${salary}.`);
// 		break;
// 	default:
// 		salary = 4000;
// 		console.log(`Your Salary Is ${salary}.`);
// 		break;
// }
//###################################################################//
//############################## Task 08 ############################//
//###################################################################//

// let holidays = 2;
// let money = 0;

// if (holidays === 0) {
// 	money = 5000;
// 	console.log(`My Money is ${money}`);
// } else if (holidays === 1 || holidays === 2) {
// 	money = 3000;
// 	console.log(`My Money is ${money}`);
// } else if (holidays === 3) {
// 	money = 2000;
// 	console.log(`My Money is ${money}`);
// } else if (holidays === 4) {
// 	money = 1000;
// 	console.log(`My Money is ${money}`);
// } else if (holidays === 5) {
// 	money = 0;
// 	console.log(`My Money is ${money}`);
// } else {
// 	money = 0;
// 	console.log(`My Money is ${money}`);
// }
// switch (holidays) {
//   case 0:
//     money = 5000;
//     console.log(`My Money is ${money}`);
//     break;
//   case 1:
//   case 2:
//     money = 3000;
//     console.log(`My Money is ${money}`);
//     break;
//   case 3:
//     money = 2000;
//     console.log(`My Money is ${money}`);
//     break;
//   case 4:
//     money = 1000;
//     console.log(`My Money is ${money}`);
//     break;
//   case 5:
//     money = 0;
//     console.log(`My Money is ${money}`);
//     break;
//   default:
//     money = 0;
//     console.log(`My Money is ${money}`);
// }
