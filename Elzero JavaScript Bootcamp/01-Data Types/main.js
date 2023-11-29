//###################################################################//
//########################## Data Types #############################//
//###################################################################//

//###################################################################//
//############################## Task 01 ############################//
//###################################################################//

// let numberOne = 10,
// 	numberTwo = 20;

// console.log(numberOne.toString() + 20);
// console.log(numberOne.toString() + numberTwo.toString());
// console.log(`${numberOne.toString()}${numberTwo}`);
// console.log(`${numberOne.toString()}${numberTwo.toString()}`);
// console.log(`${numberOne}${numberTwo}`);

// console.log(numberOne + "\n" + numberTwo);
// console.log(`${numberOne}
// ${numberTwo}`);

//###################################################################//
//############################## Task 02 ############################//
//###################################################################//

// console.log("\`I'm In\n \\\\ Love \\\\ \"\"\" \'\'\' ++ With ++ \\\"\"\"\"\"\"\"\"JS\"\"\`\`");
// `I'm In
// \\
// Love \\ """ '''
// ++ With ++
// \"""\"""
// ""JavaScript""``

//###################################################################//
//############################## Task 03 ############################//
//###################################################################//

// let a = 21;
// let b = 20;

// console.log(`_${a}_${b}${a}_${b}${a}_${b}${a}_${b}_`); // _21_2021_2021_2021_20_

//###################################################################//
//############################## Task 04 ############################//
//###################################################################//

let title = "Elzero",
  description = "Elzero Web School",
  date = "25/10";

let cardTemplate = `<div class = "card">
                <h3>Hello ${title}</h3>
                <p>${description}</p>
                <span>${date}</span>
           </div`;
let numberOfCards = 5;
let cards = cardTemplate.repeat(numberOfCards);
document.write(cards);

//###################################################################//
//############################## Task 05 ############################//
//###################################################################//

// let num = 3;

// // Solution One
// console.log(num + num); // 6

// // Solution Two
// console.log(num * (true + true)); // 6

// // Soultion Three
// console.log(num + true + true + true); // 6

//###################################################################//
//############################## Task 06 ############################//
//###################################################################//

// let num = "10";

// // Solution One
// console.log(+num + +num); // 20

// // Solution Two
// console.log(+num * (true + true)); // 20

// // Solution Three
// console.log(parseInt(num) + parseInt(num)); // 20

// // Solution Four
// console.log("Number(num) + Number(num)"); // 20

//###################################################################//
//############################## Task 07 ############################//
//###################################################################//

// let d = "-100";
// let e = "20";
// let f = 30;
// let g = true;

// console.log(d * +e); // 2000
// console.log(-d * +e); // 2000

// console.log(-d + f + +e + +e + g + g + g); // 173

//###################################################################//
//############################## Task 08 ############################//
//###################################################################//

// let points = 10;

// // ++points;
// // points += true;
// // ++points;

// // console.log(points); // 13

// --points;
// points--;
// console.log(points); // 8;

//###################################################################//
//############################## Task 09 ############################//
//###################################################################//
// let a = 10;
// let b = "20";
// let c = 80;

// console.log(++a + +b++ + +c++ - +a++);
// console.log(++a + -b + +c++ - -a++ + +a);
// console.log(--c + +b + --a * +b++ - +b * a + --a - +true);