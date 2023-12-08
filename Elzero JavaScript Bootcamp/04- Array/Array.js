//###################################################################//
//############################### Array #############################//
//###################################################################//

//###################################################################//
//############################## Task 01 ############################//
//###################################################################//

// let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
// let num = 3;
// let length = myFriends.length;
// // // Method 1
// myFriends.pop();
// console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// // Method 2
// myFriends.splice(num);
// console.log(myFriends);

// console.log(myFriends.slice(length - length, num)); // ["Ahmed", "Elham", "Osama"];

//###################################################################//
//############################## Task 02 ############################//
//###################################################################//

// let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// // Write Your Code Here
// friends.shift();
// friends.pop();
// console.log(friends); // ["Eman", "Osama"]

//###################################################################//
//############################## Task 03 ############################//
//###################################################################//

// let arrOne = ["C", "D", "X"];
// let arrTwo = ["A", "B", "Z"];
// let finalArr = [];

// // Write One Single Line Of Code

// console.log(finalArr.concat(arrOne,arrTwo).sort().reverse()); // ["Z", "X", "D", "C", "B", "A"]

//###################################################################//
//############################## Task 04 ############################//
//###################################################################//

// let website = "Go";
// let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

// console.log(words.pop().shift().slice(website.length).toUpperCase()); // ZERO

//###################################################################//
//############################## Task 05 ############################//
//###################################################################//

// let needle = "JS";
// let haystack = ["PHP", "JS", "Python"];

// // Write 3 Solutions
// if (haystack.includes(needle) === true) {
//   console.log("Found");
// }
// if (haystack.indexOf(needle) !== -1) {
// 	console.log("Found");
// }
// if (haystack.lastIndexOf(needle) !== -1) {
//   console.log("Found");
// }

//###################################################################//
//############################## Task 06 ############################//
//###################################################################//

// let arr1 = ["A", "C", "X"];
// let arr2 = ["D", "E", "F", "Y"];
// let allArrs = [];

// console.log(allArrs.concat(arr1, arr2).sort().join("").toLowerCase().slice(4)); // fxy

//###################################################################//
//############################## Task 07 ############################//
//###################################################################//

// let zero = 0;
// let counter = 3;
// let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// my.splice(++counter);
// console.log(my);

// my.reverse();
// console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];

// console.log(my.slice(++zero, --counter)); // ["Elham", "Mazero"]

// let target = my.slice(zero, counter).join("");
// let elzero = target
//   .slice(--zero, --counter)
//   .concat(target.slice(-(++counter + ++zero)));

// console.log(elzero); // Elzero

// console.log(
//   elzero.charAt(++counter).concat(elzero.charAt(++counter).toUpperCase())
// ); // "rO"
