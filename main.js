// console.log("hello from js file");

// let, const, var

let studentName = "Nino";
let StudentName = "Nino";
let STUDENTNAME = "Nino";

const studentAge = 24;

// console.log(studentName);

studentName = "NIno2";
// studentAge = 26;

// console.log(studentName);

// Data Types
const productName = "Iphone 12";
const description1 = "Iphone 12 " + "alina's book";
const description2 = 'Iphone"""""\'  "12';
const description3 = `Iphone 12 ' 
new line
new line 
"`;
let productPrice = 1200.5;
const productAvailable = false;
const productColor = null;
let productBrand;

let text = productName + " costs " + productPrice + "$";
let text2 = `${productName} cost ${productPrice}$`;
console.log("text", text);
console.log("text2", text2);
console.log(productName);
console.log(productPrice);
console.log(productAvailable);
console.log(productColor);
console.log(productBrand);
// productPrice = 'text';

console.log("typeof productName ", typeof productName);
console.log("typeof productPrice ", typeof productPrice);
console.log("typeof productAvailable ", typeof productAvailable);
console.log("typeof productColor ", typeof productColor);
console.log("typeof productBrand ", typeof productBrand);

let num1 = 10;
let num2 = 2;

// addition
let sum = num1 + num2;
console.log("sum", sum);
// subtraction
let sub = num1 - num2;
console.log("sub", sub);
// multiplication
let mul = num1 * num2;
console.log("mul", mul);
// division
let div = num1 / num2;
console.log("div", div);
// remainder
let rem = num1 % num2;
console.log("rem", rem);
// power
let pow = num1 ** num2;
console.log("pow", pow);

let num3 = 10;
let num4 = "text";
console.log(num3 - num4); //NaN

let num5 = 10;
let num6 = "5";

let sum2 = num5 + num6;
console.log(typeof sum2);
console.log(sum2);
