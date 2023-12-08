//###################################################################//
//############################# LOOPS ###############################//
//###################################################################//

//###################################################################//
//############################## Task 01 ############################//
//###################################################################//
// let start = 10;
// let end = 100;
// let exclude = 40;
// for (start = 10; start <= end; start += 10){
//     if (start === exclude) {
//         continue;
//     }
//     console.log(start);
// }
//###################################################################//
//############################## Task 02 ############################//
//###################################################################//
// let start = 10;
// let end = 0;
// let stop = 3;

// for (start = 10; start > 0; start--){
//     console.log(start.toString().padStart(2,'0'));
//     if (start === 3) {
//         break;
//     }
// }
//###################################################################//
//############################## Task 03 ############################//
//###################################################################//
// let start = 1;
// let end = 6;
// let breaker = 2;

// for (start; start <= end; start++){
//     console.log(start)
//     console.log(`-- ${breaker}`);
//     console.log(`-- ${breaker+breaker}`);
// }

//###################################################################//
//############################## Task 04 ############################//
//###################################################################//
// let index = 10;
// let jump = 2;

// for (;;) {
//   console.log(index);
//   index -= jump;
//   if (index === 2) {
//     break;
//   }
// }
//###################################################################//
//############################## Task 05 ############################//
//###################################################################//
// let friends = ["Ahmed", "Sayed", "Eman", "Ali", "Mahmoud", "Ameer", "Osama", "Sameh"];
// let letter = "a";

// let index = letter.length;
// let length = friends.length;
// for (let i = friends.indexOf("Ahmed"); i < length; i++)
// {
//     if (friends[i].startsWith("A")) {
//         continue;
//     }
//     console.log(`"${index++} => ${friends[i]}"`);
// }
//###################################################################//
//############################## Task 06 ############################//
//###################################################################//
// let swappedName = "elZerO";
// let length = swappedName.length;
// let modifiedName = "";

// for (let i = 0; i < length; i++) {
//   if (swappedName[i] === swappedName[i].toLocaleLowerCase()) {
//     modifiedName += swappedName[i].toLocaleUpperCase();
//   } else {
//     modifiedName += swappedName[i].toLocaleLowerCase();
//   }
// }

// console.log(swappedName); // Original string
// console.log(modifiedName); // String with swapped case
// ###################################################################//
//############################## Task 07 ############################//
//###################################################################//
// let start = 0;
// let mix = [1, 2, 3, "A", "B", "C", 4];

// for (let i = ++start; i < mix.length; i++){
//     if (typeof mix[i] === 'number') {
//         console.log(mix[i]);
//     }
// }
//###################################################################//
//############################## Task 08 ############################//
//###################################################################//

// let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany", "Amany"];
// let index = 0;
// let counter = 0;
// // for (let counter = 0; counter < friends.length; counter++){
// //     if (friends[counter][index] === "A" || typeof friends[counter] === 'number') {
// //         continue;
// //     } else {
// //         console.log(friends[counter]);
// //     }
// // }
// let length = friends.length;
// let i = index;
// while (counter < length) {
//   if (friends[counter][index] !== "A" && typeof friends[counter] !== "number") {
//     i++;
//     console.log(`${i} => ${friends[counter]}`);
//   }
//   counter++;
// }

//###################################################################//
//############################## Task 09 ############################//
//###################################################################//

// let myAdmins = ["Ahmed", "Osama", "Sayed", "Amr", "Samera", "Stop"];
// let myEmployees = [
//   "Amged",
//   "Samah",
//   "Ameer",
//   "Omar",
//   "Othman",
//   "Amany",
//   "Amro",
//   "Samia",
// ];

// document.write(
//   `<div><h2>We Have ${myAdmins.indexOf("Stop")} Admins</h2></div>`
// );
// document.write(`<div><hr></div>`);

// let x = 0,
//   i = 0,
//   j = 0,
//   a = 0;

// while (i < myAdmins.length) {
//   if (myAdmins[i] === "Stop") {
//     break;
//   } else if (myAdmins[i].startsWith("A")) {
//     document.write(
//       `<div><h2><p>The Admin For Team ${++x} Is ${myAdmins[i]}</p><h2></div>`
//     );
//     document.write(`<div><h3>Team Members:</h3></div>`);
//     while (j < myEmployees.length) {
//       if (myEmployees[j].startsWith("A")) {
//         document.write(`<div><p>${++a} - ${myEmployees[j]}</p></div>`);
//       }
//       j++;
//     }
//     (j = 0), (a = 0);
//     document.write(`<div><hr></div>`);
//   } else if (myAdmins[i].startsWith("O")) {
//     document.write(
//       `<div><h2>The Admin For Team ${++x} Is ${myAdmins[i]}</h2></div>`
//     );
//     document.write(`<div><h1>Team Members:</h1></div>`);
//     while (j < myEmployees.length) {
//       if (myEmployees[j].startsWith("O")) {
//         document.write(`<div><h3>${++a} - ${myEmployees[j]}</h3></div>`);
//       }
//       j++;
//     }
//     (j = 0), (a = 0);
//     document.write(`<div><hr></div>`);
//   } else if (myAdmins[i].startsWith("S")) {
//     document.write(
//       `<div><h2>The Admin For Team ${++x} Is ${myAdmins[i]}</h2></div>`
//     );
//     document.write(`<div><h1>Team Members:</h1></div>`);
//     while (j < myEmployees.length) {
//       if (myEmployees[j].startsWith("S")) {
//         document.write(`<div><h3>${++a} - ${myEmployees[j]}</h3></div>`);
//       }
//       j++;
//     }
//     (j = 0), (a = 0);
//     document.write(`<hr>`);
//   }
//   i++;
// }

//###################################################################//
//############################## Task 10 ############################//
//###################################################################//

// let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
// let colors = ["Red", "Green", "Blue"];
// let showCount = 3;
// let length = colors.length;

// document.write(`<h1>Show ${showCount} Products</h1>`);

// for (let i = 0; i < showCount; i++) {
//   document.write(`<div>`);
//   document.write(`<h3>[${i + 1}] ${products[i]}</h3>`);
//   for (let j = 0; j < length; j++) {
//     document.write(`<p>${colors[j]}</p>`);
//   }
//   document.write(`<p>${colors.join(" | ")}</p>`);
//   document.write(`</div>`);
// }
