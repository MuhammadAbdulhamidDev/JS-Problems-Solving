//###################################################################//
//########################## Function ###############################//
//###################################################################//
//###################################################################//
//############################## Week 08 ############################//
//###################################################################//

// function sayHello() {
//     console.log(`Hello Muhammad!`);
// }

// sayHello();

// function sayHello(userName, age) {
//     console.log(`Hello ${userName} Your Age Is ${age}`);
//     if (age < 20) {
//         console.log("App Is Not Suitable For You.");
//     } else {
//         console.log("Suitable For You.");
//     }
// }

// sayHello("Muhammad",25);
// sayHello("Khloud",17);
// sayHello("Ahmed",24);

// function generateYears(start, end, exclude) {
// 	for (let i = start; i <= end; i++) {
// 		if (i === exclude) {
// 			continue;
// 		}
// 		console.log(i);
// 	}
// }
// generateYears(1997, 2023, 2020);

// function sayHello() {
//     console.log(`Hello Muhammad!`);
// }

// sayHello();

// function sayHello(userName) {
// 	return `Hello ${userName}!`;
// }

// console.log(sayHello("Muhammad"));
// let result = sayHello("Muhammad");
// console.log(result);

// function calc(num1, num2) {
// 	return num1 + num2;
// }

// let result = calc(10, 20);

// console.log(result);
// console.log(calc(10,10));

// function generate(start, end) {
// 	for (let i = start; i <= end; i++){
// 		console.log(i)
// 		if (i === 15) {
// 			return `Interruptting`;
// 		}
// 	}
// }

// generate(1, 20);

// console.log(generate(1, 20));

// function sayHello(userName, age = "Unknown") {
// 	if (age === undefined) {
// 		age = "unknown";
// 	}
// 	age = age || "unknown";

// 	return `Hello ${userName} Your Age Is ${age}`;
// }

// console.log(sayHello("Muhammad"));

// function calc(...numbers) {
//     // console.log(Array.isArray(numbers));
//     let result = 0;
//     for (let i = 0; i < numbers.length; i++){
//         // console.log(numbers[i]);
//         result += numbers[i];
//     }
//     return `Final Result is ${result}`;

// }
// console.log(calc(10, 20, 30, 40, 50, 60, 70));


//###################################################################//
//############################## Practice ############################//
//###################################################################//

// function showInfo(us = "Un", ag = "Un", rt = 0, show = "Yes", ...sk) {
// 	document.write(`<div>`);
// 	document.write(`<h2>Welcome, ${us}</h2>`);
// 	document.write(`<p>Age: ${ag}</p>`);
// 	document.write(`<p>Hour Rate: $${rt}</p>`);
// 	if (show === "Yes") {
// 		if (sk.length > 0) {
// 			document.write(`<p>${sk.join(" | ")}</p>`);
// 		} else {
// 			document.write(`<p>Skills: No Skills.</p>`);
// 		}
// 	} else {
// 		document.write(`<p>Skills Is Hidden.</p>`);
// 	}
// 	document.write(`</div>`);
// }

// showInfo("Muhammad", 25, 30, "No", "HTML", "CSS", "JS");

//###################################################################//
//############################## Task 01 ############################//
//###################################################################//

// function sayHello(theName, theGender) {
//     if (theGender === "Male") {
//         console.log(`Hello Mr ${theName}`);
//     } else if (theGender === "Female") {
//         console.log(`Hello Miss ${theName}`);
//     } else {
//         console.log(`Hello ${theName}`);
//   }
// }

// // Needed Output
// sayHello("Osama", "Male"); // "Hello Mr Osama"
// sayHello("Eman", "Female"); // "Hello Miss Eman"
// sayHello("Sameh"); // "Hello Sameh"

//###################################################################//
//############################## Task 02 ############################//
//###################################################################//

// function calculate(firstNum, secondNum, operation) {
//   // console.log(firstNum);
//   // console.log(secondNum);
//   // console.log(operation);
//       if (operation === "add") {
//         result = firstNum + secondNum;
//         console.log(result);
//       } else if (operation === "sub") {
//         result = firstNum - secondNum;
//         console.log(result);
//       } else if (operation === "multi") {
// 				result = firstNum * secondNum;
// 				console.log(result);
// 			} else if (secondNum === undefined) {
// 				console.log("Second Number Not Found");
// 			} else {
// 				result = firstNum + secondNum;
// 				console.log(result);
// 			}
// }

// // Needed Output
// calculate(20); // Second Number Not Found
// calculate(20, 30); // 50
// calculate(20, 30, 'add'); // 50
// calculate(20, 30, 'sub'); // -10
// calculate(20, 30, 'multi'); // 600

//###################################################################//
//############################## Task 03 ############################//
//###################################################################//

// function ageInTime(theAge) {
//   years = theAge;
//   months = years * 12;
//   days = months * 30;
//   hours = days * 24;
//   minutes = hours * 60;
//   seconds = minutes * 60;

//   if (theAge < 10 || theAge > 100) {
//     console.log("The Ahe Out Of Range.");
//   } else {
//     console.log(
// 			`Your Age In Years Is [${years} Years], [${months} Months], [${days} Days], [${hours} Hours], [${minutes} Minutes], [${seconds} Seconds]`
// 		);
//   }
// }

// // Needed Output
// ageInTime(110); // Age Out Of Range
// ageInTime(38); // Months Example => 456 Months

//###################################################################//
//############################## Task 04 ############################//
//###################################################################//

/*
  Function - Random Argument Challenge
  ====================================
  Create Function showDetails
  Function Accept 3 Parameters [a, b, c]
  Data Types For Info Is
  - String => Name
  - Number => Age
  - Boolean => Status
  Argument Is Random
  Data Is Not Sorted Output Depend On Data Types
  - Use Ternary Conditional Operator
*/

// function showDetails(a, b, c) {
// 	typeof a === "string"
// 		? (Name = a)
// 		: typeof a === "number"
// 		? (Age = a)
// 		: typeof a === "boolean"
// 		? (Status = a)
// 		: console.log(`Thanks For Using Our Program ... See You Soon!`);
// 	typeof b === "string"
// 		? (Name = b)
// 		: typeof b === "number"
// 		? (Age = b)
// 		: typeof b === "boolean"
// 		? (Status = b)
// 		: console.log(`Thanks For Using Our Program ... See You Soon!`);
// 	typeof c === "string"
// 		? (Name = c)
// 		: typeof c === "number"
// 		? (Age = c)
// 		: typeof c === "boolean"
// 		? (Status = c)
// 		: console.log(`Thanks For Using Our Program ... See You Soon!`);
// 	Status === true
// 		? console.log(
// 				`Hello ${Name}, Your Age Is ${Age}, You Are Available For Hire`
// 		  )
// 		: console.log(
// 				`Hello ${Name}, Your Age Is ${Age}, You Are Not Available For Hire`
// 		  );
// }

// function showDetails(...parameters) {
// 	for (let i = 0; i < parameters.length; i++) {
// 		typeof parameters[i] === "string"
// 			? Name = parameters[i]
// 			: typeof parameters[i] === "number"
// 			? Age = parameters[i]
// 			: typeof parameters[i] === "boolean"
// 			? Status = parameters[i]
// 			: console.log(`Thanks For Using Our Program ... See You Soon!`);
// 	}
// 	Status === true
// 		? console.log(
// 				`Hello ${Name}, Your Age Is ${Age}, You Are Available For Hire`
// 		  )
// 		: console.log(
// 				`Hello ${Name}, Your Age Is ${Age}, You Are Not Available For Hire`
// 		  );
// }
// showDetails("Osama", 38, true);
// showDetails(38, "Osama", false);
// showDetails(true, 38, "Osama");
// showDetails(false, "Osama", 38);
// showDetails("Muhammad", true, 25);

//###################################################################//
//############################## Task 05 ############################//
//###################################################################//

// function createSelectBox(startYear, endYear) {
//    for (let i = startYear; i <= endYear; i++){
//     console.log(`<option value="${i}">${i}</option>`)
//   }
// }
    

// console.log(`<select>`);

// createSelectBox(2000, 2021);

// console.log(`</select>`);

//###################################################################//
//############################## Task 06 ############################//
//###################################################################//
let arr = [];
let result = 1;
function multiply(...numbers)
{
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] === "string") {
      continue;
    } else {
      arr.push(parseInt(numbers[i]));
    }
  }

  console.log(arr);  
  for (let i = 0; i < arr.length; i++) {
    result = result * arr[i];
  }

  console.log(result);

  arr = [];
  result = 1;
}

multiply(10, 20, "l","o");
multiply("A", 10, 30); // 300
multiply(100.5, "O",10, "B"); // 1000