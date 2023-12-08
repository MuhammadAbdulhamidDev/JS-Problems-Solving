//###################################################################//
//########################## Functions ###############################//
//###################################################################//

// Anonymous Function

// let calc = function (num01, num02) {
//   return num01 + num02;
// }

// console.log(calc);

// let print = function () {
//   return 10;
// }

// console.log(print());

// let print = () => 10;

// // let print = _ => 10;

// console.log(print());

// function calc(amount, coin) {
//   for (let i = 0; i < coin.length; i++) {
//     let count = [];
//     let money = amount;
//     while (money != 0) {
//       money = money - coin[i];
//       count.push(coin[i]);
//     }
//     console.log(count);
//   }
//   for (i = 0; i < coin.length; i++) {
//     money = money - coin[i];
//   }
//   if (money === 0) {
//     count = [];
//     for (i = 0; i < coin.length; i++) {
//       count.push(coin[i]);
//     }
//   console.log(count);
//   }
// }
// // let coin = [2, 5];
// // calc(10, coin);

// let coin = [5, 2, 3];
// calc(10, coin);


document.getElementById("send").onclick = function welcome() {
	let name = document.getElementById("name").value;
	document.write("Welcome " + name);
};

//###################################################################//
//############################## Task 01 ############################//
//###################################################################//

// let names = function (...name) {

//     return `// String [${name[0]}], [${name[1]}], [${name[2]}], [${name[3]}] => Done !`;
// };

// console.log(names("Osama", "Muhammad", "Ali", "Ahmed"));

// let names = (...name) => `// String [${name[0]}], [${name[1]}], [${name[2]}], [${name[3]}] => Done !`;

// console.log(names("Osama", "Muhammad", "Ali", "Ahmed"));

// let numbers = [20, 50, 10, 60];

// let calc = (one, two, ...nums) => one + two + nums[0];

// console.log(calc(10, numbers[2], numbers[3]));

//###################################################################//
//############################## Task 02 ############################//
//###################################################################//

// function getDetails(zName, zAge, zCountry)
// {
//   function namePattern() {
// 		space = zName.indexOf(" ");
// 		return `${zName.slice(0, space)}${zName.slice(space, (space += 2)).toUpperCase()}`;
// 	}
//   function ageWithMessage() {
// 		space = zAge.indexOf(" ");
// 		return `Your Age Is ${zAge.slice(0, space)}`;
// 	}
//   function countryTwoLetters() {
// 		return `You Live In ${zCountry.slice(0, 2).toUpperCase()}`;
// 	}
//   function fullDetails() {
// 		return `Hello ${namePattern()}., ${ageWithMessage()}, ${countryTwoLetters()}`;
// 	}
//   return fullDetails(); // Do Not Edit This
// }

// console.log(getDetails("Osama Muhammad", "38 Is My Age", "Egypt"));
// // Hello Osama M., Your Age Is 38, You Live In EG

// console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// // Hello Ahmed A., Your Age Is 32, You Live In SY

//###################################################################//
//############################## Task 03 ############################//
//###################################################################//

// let itsMe = () => `Iam A Normal Function`;

// console.log(itsMe()); // Iam A Normal Function

// let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;

// console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

//###################################################################//
//############################## Task 04 ############################//
//###################################################################//

// let checker = (zName) => (status) => (salary) => status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;

// console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
// console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

//###################################################################//
//############################## Task 05 ############################//
//###################################################################//

