let num = [1, 4, 7, 8, 5, 6, 4, 3, 6];

let arr1 = ["g", "o", "t", "y", "r"];

let arr2 = ["banana", "orange", "mango", "coconut", "rumton"];

let num1 = ["banana", "orange", "mango", 7, 9, 5, 7, 8, 5, 2, 4, 3, 6];
/*************************************************************************************** */
//1) at()  .....WILL NEVER CHANGE THE ORIGINAL ARRAY

// function atMethod(x){
//     let a = x.at(4);
//     return a;
// }

// console.log(atMethod(num))

/*************************************************************************************** */
//2) concat()  .....WILL NEVER CHANGE THE ORIGINAL ARRAY

// function concatMethod(x,y,z){
//     let result = x.concat(y,z);
//     return result;
// }
// console.log(concatMethod(num,arr1,arr2));

/*************************************************************************************** */
//3) copyWithin()  .....WILL CHANGE THE ORIGINAL ARRAY
/*copyWithin(target, start, end)*/

// function copyWithinMethod(x){
//     return x.copyWithin(4,0,3)
// }

// console.log(copyWithinMethod(num1));
// console.log(num1)

/*************************************************************************************** */
//4) fill()  .....WILL CHANGE THE ORIGINAL ARRAY
/*fill(value, start, end)*/

// function fillMethod(x){
//     return x.fill("number",0,4)
// }
// console.log(fillMethod(num1));
// console.log(num1)

/*************************************************************************************** */
//5) forEach()  .....WILL NEVER CHANGE THE ORIGINAL ARRAY

// function forEachMethod(x){
//      x.forEach( y => console.log(y*5));

// }

// forEachMethod(num);

/*************************************************************************************** */
//6) includes()  .....WILL NEVER CHANGE THE ORIGINAL ARRAY

// function includesMethod(x){
//    return x.includes(7)
// }

// console.log(includesMethod(num))

/*************************************************************************************** */
//7) indexof()  .....WILL NEVER CHANGE THE ORIGINAL ARRAY
//indexOf(searchElement, fromIndex)

// function indexOfMethod(x){
//     return x.indexOf(6,6)
// }

// console.log(indexOfMethod(num));

/*************************************************************************************** */
//8) join()  .....WILL NEVER CHANGE THE ORIGINAL ARRAY
//join("" or "-" or " ")

// function joinMethod(x){
//     return x.join("-")
// }

// console.log(joinMethod(num));

/*************************************************************************************** */
//9) keys()  .....WILL NEVER CHANGE THE ORIGINAL ARRAY
//WILL RETURN THE ARRAY ITERATOR

// let iterator = 0

// function keysMethod(x){
//      iterator = x.keys();
// }

// keysMethod(num);

// for(let key of iterator){
//     console.log(key);
// }

/*************************************************************************************** */
//10) lastIndexOf()  .....WILL NEVER CHANGE THE ORIGINAL ARRAY

function lastIndexOfMethod(x) {
  return x.lastIndexOf(6);
}

console.log(lastIndexOfMethod(num));
