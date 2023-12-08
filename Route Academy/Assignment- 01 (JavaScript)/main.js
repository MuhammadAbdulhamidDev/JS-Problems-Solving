// // =========================== Task 01 ============================ //
// // 1- Write a program that allow to user enter number then print it //

// var validInput = false;
// while (!validInput) {
//   var input = window.prompt("Please enter a number:");

//   if (input.trim() !== "") {
//     var num = Number(input);

//     if (!isNaN(num)) {
//       console.log("Number = ", num);
//       validInput = true;
//     } else {
//       window.alert("Error -> Invalid Input. Please enter a numerical value");
//     }
//   } else {
//     window.alert("Error -> Invalid Input. Reenter a non-empty value");
//   }
// }

// // =========================== Task 02 ============================ //
// // 2- Write a program that take number from user then print yes if that
// // number can divide by 3 and 4 otherwise print no

// var validInput = false;
// var result;

// while (!validInput) {
//   var input = window.prompt("Please enter a number:");

//   if (input.trim() !== "") {
//     var num = Number(input);

//     if (!isNaN(num)) {
//       result = num % 3 === 0 && num % 4 === 0 ? "Yes" : "No";
//       validInput = true;
//     } else {
//       window.alert("Error -> Invalid Input. Please enter a numerical value");
//     }
//   } else {
//     window.alert("Error -> Invalid Input. Reenter a non-empty value");
//   }
// }
// console.log(result);

// // =========================== Task 03 ============================ //
// // 3- Write a program that allows the user to insert 2 integers then print the max

// var firstNumber;
// var secondNumber;

// for (var i = 1; i <= 2; i++) {
//   var validInput = false;

//   while (!validInput) {
//     var num = parseInt(window.prompt(`Please enter a number ${i}`));

//     if (!isNaN(num)) {
//       if (i === 1) {
//         firstNumber = num;
//       } else if (i === 2) {
//         secondNumber = num;
//       }
//       validInput = true;
//     } else {
//       window.alert(`Error -> Invalid Input. Please enter a numerical value`);
//     }
//   }
// }

// if (firstNumber > secondNumber) {
//   console.log(`The max number = ${firstNumber}`);
// } else if (firstNumber < secondNumber) {
//   console.log(`The max number = ${secondNumber}`);
// } else {
//   console.log("The two numbers are equal!");
// }

// // =========================== Task 04 ============================ //
// // 4- Write a program that allows the user to insert an integer then
// // print negative if it is negative number otherwise print positive.

// var result;

// var validInput = false;

// while (!validInput) {
//   var num = parseInt(window.prompt("Please enter a number:"));

//   if (!isNaN(num)) {
//     result = num !== 0 ? (num > 0 ? "Positive!" : "Negative!") : "Zero!";
//     validInput = true;
//   } else {
//     window.alert(`Error -> Invalid Input. Please enter a numerical value`);
//   }
// }
// console.log(result);

// // =========================== Task 05 ============================ //
// // 5- Write a program that take 3 integers from user then print the
// // max element and the min element.

// var firstNumber;
// var secondNumber;
// var thirdNumber;
// var maxElement;
// var minElement;

// for (var i = 1; i <= 3; i++) {
//   var validInput = false;

//   while (!validInput) {
//     var num = parseInt(window.prompt(`Please enter a number ${i}`));

//     if (!isNaN(num)) {
//       if (i === 1) {
//         firstNumber = num;
//       } else if (i === 2) {
//         secondNumber = num;
//       } else {
//         thirdNumber = num;
//       }
//       validInput = true;
//     } else {
//       window.alert(`Error -> Invalid Input. Please enter a numerical value`);
//     }
//   }
// }

// if (firstNumber > secondNumber) {
//   maxElement = firstNum;
//   minElement = secondNumber;
// } else {
//   maxElement = secondNumber;
//   minElement = firstNumber;
// }

// if (thirdNumber > maxElement) {
//   maxElement = thirdNumber;
// } else if (thirdNumber < minElement) {
//   minElement = thirdNumber;
// }

// console.log("max element =", maxElement);
// console.log("min element =", minElement);

// // =========================== Task 06 ============================ //
// // 6- Write a program that allows the user to insert integer number
// // then check If a number is oven or odd

// var result;

// var validInput = false;

// while (!validInput) {
//   var num = parseInt(window.prompt("Please enter a number:"));

//   if (!isNaN(num)) {
//     result = num % 2 === 0 ? "Even" : "Odd";
//     validInput = true;
//   } else {
//     window.alert(`Error -> Invalid Input. Please enter a numerical value`);
//   }
// }
// console.log(result);

// // =========================== Task 07 ============================ //
// // 7- Write a program that take character from user then if it is
// // vowel chars(a, e, I, o, u) then print vowel otherwise print consonant

// var validInput = false;

// while (!validInput) {
//   var char = window.prompt("Please enter a character:").toLowerCase();
//   if (char.trim() !== "") {
//     if (char.length === 1 && char >= "a" && char <= "z") {
//       if (
//         char === "a" ||
//         char === "e" ||
//         char === "i" ||
//         char === "o" ||
//         char === "u"
//       ) {
//         console.log("Vowel Character");
//       } else {
//         console.log("Consonant Character");
//       }
//       validInput = true;
//     } else {
//       window.alert("Error -> Invalid Input. Reenter a single alphabetical value");
//     }
//   } else {
//     window.alert("Error -> Invalid Input. Reenter a non-empty value");
//   }
// }

// // =========================== Task 08 ============================ //
// // 8- Write a program that allows user to insert integer then print all numbers
// // between1 to that’s number

// var validInput = false;

// while (!validInput) {
//   var num = Math.abs(parseInt(window.prompt("Please enter a number:")));
//   if (!isNaN(num)) {
//     if (num === 0) {
//       console.log("0");
//       break;
//     }
//     for (var i = 1; i <= num; i++) {
//       console.log(i);
//     }
//     validInput = true;
//   } else {
//     window.alert("Error -> Invalid Input. Please enter a numerical value");
//   }
// }

// // =========================== Task 09 ============================ //
// // 9- Write a program that allows user to insert integer then print
// // a multiplication table up to 12.

// var validInput = false;

// while (!validInput) {
//   var num = Math.abs(parseInt(window.prompt("Please enter a number:")));
//   if (!isNaN(num)) {
//     for (var i = 1; i <= 12; i++) {
//       console.log(`${i} * ${num} = ${i * num}`);
//     }
//     validInput = true;
//   } else {
//     window.alert("Error -> Invalid Input. Please enter a numerical value");
//   }
// }

// // =========================== Task 10 ============================ //
// // 10- Write a program that allows to user to insert number then print
// // all even numbers between 1 to this number

// var validInput = false;

// while (!validInput) {
//   var input = window.prompt("Please enter a number:");

//   if (input.trim() !== "") {
//     var num = Math.abs(parseInt(input));
//     if (!isNaN(num)) {
//       for (var i = 1; i <= num; i++) {
//         if (i % 2 == 0) {
//           console.log(i);
//         }
//       }
//       validInput = true;
//     } else {
//       window.alert("Error -> Invalid Input. Please enter a numerical value");
//     }
//   } else {
//     window.alert("Error -> Invalid Input. Reenter a non-empty value");
//   }
// }

// // =========================== Task 11 ============================ //
// // 11- Write a program that take two integers then print the power

// var base;
// var exponent;

// for (var i = 1; i <= 2; i++) {
//   var validInput = false;

//   while (!validInput) {
//     var num = parseInt(window.prompt(`Please enter a number ${i}`));

//     if (!isNaN(num)) {
//       if (i === 1) {
//         base = num;
//       } else if (i === 2) {
//         exponent = num;
//       }
//       validInput = true;
//     } else {
//       window.alert(`Error -> Invalid Input. Please enter a numerical value`);
//     }
//   }
// }

// var result = 1;

// for (var i = 1; i <= exponent; i++) {
//   result *= base;
// }

// console.log(base + " ^ " + exponent + " = " + result);

// // var result = base ** exponent;
// // console.log(base + " ^ " + exponent " = " + result);

// // =========================== Task 11 ============================ //
// // 11- Write a program to enter marks of five subjects and calculate
// // total, average and percentage

// var totalMarks = 0;

// for (var i = 1; i <= 5; i++) {
//   var validInput = false;

//   while (!validInput) {
//     var marks = parseFloat(window.prompt(`Enter Marks of subject number ${i}:`));

//     if (!isNaN(marks) && marks >= 0 && marks <= 100) {
//       totalMarks += marks;
//       validInput = true;
//     } else {
//       window.alert(
//         `Error -> Invalid Input. Reenter a number between 0 and 100`
//       );
//     }
//   }
// }

// var averageMarks = totalMarks / 5;
// var percentage = (totalMarks / 500) * 100;

// console.log(`Total marks: ${totalMarks} marks`);
// console.log(`Average Marks: ${averageMarks} marks`);
// console.log(`Percentage: ${percentage}%`);

// // =========================== Task 12 ============================ //
// // 12- Write a program to input month number and print number of days
// // in that month.

// var isValidInput = false;

// while (!isValidInput) {
//   var monthNumber = parseInt(window.prompt("Please enter a month number:"));

//   if (!isNaN(monthNumber) && monthNumber >= 1 && monthNumber <= 12) {
//     if (monthNumber === 2) {
//       console.log(`Days in month number ${monthNumber} = 28 days`);
//     } else if (
//       monthNumber === 4 ||
//       monthNumber === 6 ||
//       monthNumber === 9 ||
//       monthNumber === 11
//     ) {
//       console.log(`Days in month number ${monthNumber} = 30 days`);
//     } else {
//       console.log(`Days in month number ${monthNumber} = 31 days`);
//     }
//     isValidInput = true;
//   } else {
//     window.alert("Invalid input. Please enter a number between 1 and 12");
//   }
// }

// // =========================== Task 13 ============================ //
// // 13- Write a program to input marks of five subjects Physics, Chemistry
// // Biology, Mathematics and Computer, Find percentage and grade

// var totalMarks = 0;
// var subjects = ["Physics", "Chemistry", "Biology", "Mathematics", "Computer"];

// for (var i = 0; i < 5; i++) {
//   var validInput = false;
//   while (!validInput) {
//     var subjectMarks = parseFloat(
//       window.prompt(`Enter Marks of ${subjects[i]} subject:`)
//     );

//     if (!isNaN(subjectMarks) && subjectMarks >= 0 && subjectMarks <= 100) {
//       totalMarks += subjectMarks;
//       validInput = true;
//     } else {
//       window.alert(
//         "Error -> Invalid Input. Please enter marks between 0 and 100"
//       );
//     }
//   }
// }

// var percentage = (totalMarks / 500) * 100;

// var grade;

// if (percentage >= 90) {
//   grade = "Grade A";
// } else if (percentage >= 80) {
//   grade = "Grade B";
// } else if (percentage >= 70) {
//   grade = "Grade C";
// } else if (percentage >= 60) {
//   grade = "Grade D";
// } else if (percentage >= 40) {
//   grade = "Grade E";
// } else {
//   grade = "Grade F";
// }

// console.log(`Percentage: ${percentage.toFixed(2)}%`);
// console.log(`Grade: ${grade}`);

// *****************************************************************
// ************************ Using switch case **********************
// *****************************************************************

// // =========================== Task 14 ============================ //
// // 14- Write a program to print total number of days in month

// var validInput = false;

// while (!validInput) {
//   var monthNumber = parseInt(window.prompt("Please enter a month number:"));

//   if (!isNaN(monthNumber) && monthNumber >= 1 && monthNumber <= 12) {
//     switch (monthNumber) {
//       case 2:
//         console.log(`Days in month number ${monthNumber} = 28 days`);
//         break;
//       case 4:
//       case 6:
//       case 9:
//       case 11:
//         console.log(`Days in month number ${monthNumber} = 30 days`);
//         break;
//       default:
//         console.log(`Days in month number ${monthNumber} = 31 days`);
//     }
//     validInput = true;
//   } else {
//     window.alert(
//       "Error -> Invalid Input. Please enter a number between 1 and 12"
//     );
//   }
// }

// // =========================== Task 15 ============================ //
// // 15- Write a program to check whether an alphabet is vowel or consonant

// var validInput = false;

// while (!validInput) {
//   var char = window.prompt("Please enter a character:").toLowerCase();

//   if (char.trim() !== "") {
//     if (char.length === 1 && char >= "a" && char <= "z") {
//       switch (char) {
//         case "a":
//         case "e":
//         case "i":
//         case "o":
//         case "u":
//           console.log("Vowel Character");
//           break;
//         default:
//           console.log("Consonant Character");
//           break;
//       }
//       validInput = true;
//     } else {
//       window.alert("Error -> Invalid Input. Please enter a single character:");
//     }
//   } else {
//     window.alert("Invalid input. Please enter a non-empty value");
//   }
// }

// // =========================== Task 16 ============================ //
// // 16- Write a program that allows the user to insert 2 integers then print the max

// var firstNumber;
// var secondNumber;

// for (var i = 1; i <= 2; i++) {
//   var validInput = false;
//   while (!validInput) {
//     var num = parseInt(window.prompt(`Please enter number ${i}`));

//     if (!isNaN(num)) {
//       switch (i) {
//         case 1:
//           firstNumber = num;
//           break;
//         case 2:
//           secondNumber = num;
//           break;
//       }
//       validInput = true;
//     } else {
//       window.alert(`Error -> Invalid Input. Please enter a numerical value`);
//     }
//   }
// }

// switch (true) {
//   case firstNumber > secondNumber:
//     console.log(`The max number = ${firstNumber}`);
//     break;
//   case firstNumber < secondNumber:
//     console.log(`The max number = ${secondNumber}`);
//     break;
//   default:
//     console.log("The two numbers are equal!");
// }

// // =========================== Task 17 ============================ //
// // 17- Write a program to check whether a number is even or odd

// var validInput = false;

// while (!validInput) {
//   var input = window.prompt("Please enter a number:");

//   if (input.trim() !== "") {
//     var num = Number(input);

//     if (!isNaN(num)) {
//       switch (num % 2 === 0) {
//         case true:
//           console.log("Yes");
//           break;
//         case false:
//           console.log("No");
//           break;
//       }
//       validInput = true;
//     } else {
//       window.alert("Error -> Invalid Input. Please enter a numerical value");
//     }
//   } else {
//     window.alert("Error -> Invalid Input. Please enter a non-empty value");
//   }
// }

// // =========================== Task 18 ============================ //
// // 18- Write a program to check whether a number is positive or negative or zero

// var validInput = false;

// while (!validInput) {
//   var input = window.prompt("Please enter a number:");

//   if (input.trim() !== "") {
//     var num = Number(input);

//     if (!isNaN(num)) {
//       switch (true) {
//         case num > 0:
//           console.log("Positive");
//           break;
//         case num < 0:
//           console.log("Negative");
//           break;
//         default:
//           console.log("Zero!");
//       }
//       validInput = true;
//     } else {
//       window.alert(`Error -> Invalid Input. Please enter a numerical value`);
//     }
//   } else {
//     window.alert("Error -> Invalid Input. Please enter a non-empty value");
//   }
// }

// // =========================== Task 19 ============================ //
// // 19- Write a program to create Simple Calculator

// console.log("Simple Calculator");
// console.log("-----------------");
// console.log("Enter 'x' to exit");

// mainLoop: while (true) {
//   while (true) {
//     var firstOperand = prompt("Enter first number: ");

//     if (firstOperand.toLowerCase() === "x") {
//       break mainLoop;
//     }

//     firstOperand = parseFloat(firstOperand);
//     if (!isNaN(firstOperand)) {
//       break;
//     } else {
//       window.alert("Error -> Invalid input. Please enter a valid number.");
//     }
//   }

//   while (true) {
//     var operator = prompt("Enter operator (+, -, *, /): ");

//     if (operator.toLowerCase() === "x") {
//       break mainLoop;
//     }

//     if (["+", "-", "*", "/"].includes(operator)) {
//       break;
//     } else {
//       window.alert(
//         "Error -> Invalid input. Please enter a valid operator (+, -, *, /)."
//       );
//     }
//   }

//   while (true) {
//     var secondOperand = prompt("Enter second number: ");

//     if (secondOperand.toLowerCase() === "x") {
//       break mainLoop;
//     }

//     secondOperand = parseFloat(secondOperand);
//     if (!isNaN(secondOperand)) {
//       break;
//     } else {
//       window.alert("Error -> Invalid input. Please enter a valid number.");
//     }
//   }

//   var result;

//   switch (operator) {
//     case "+":
//       result = firstOperand + secondOperand;
//       break;
//     case "-":
//       result = firstOperand - secondOperand;
//       break;
//     case "*":
//       result = firstOperand * secondOperand;
//       break;
//     case "/":
//       if (secondOperand === 0) {
//         console.log("We cann't divide by zero!");
//         result = null;
//         break;
//       }
//       result = firstOperand / secondOperand;
//       break;
//   }

//   console.log("Result: ", result);
// }
