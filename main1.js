let num = [1, 4, 7, 8, 5, 6, 4, 3, 6];

let arr1 = ["g", "o", "t", "y", "r"];

let arr2 = ["banana", "orange", "mango", "coconut", "rumton"];

let num1 = ["banana", "orange", "mango", 7, 9, 5, 7, 8, 5, 2, 4, 3, 6];

/*************************************************************************************** */
//11) pop()  .....WILL CHANGE THE ORIGINAL ARRAY

// function popMethod(x){
//     let result = x.pop();
//     console.log(x);
//     return result;
// }

// console.log(popMethod(num1))

/*************************************************************************************** */
//12) push()  .....WILL CHANGE THE ORIGINAL ARRAY

// function pushMethod(x){
//     let result = x.push("grapes");
//     console.log(x);
//     return result;
// }

// console.log(pushMethod(num1));

/*************************************************************************************** */
//13) reduce()  .....WILL NEVER CHANGE THE ORIGINAL ARRAY

//NORMAL METHOD

// let sum = 0;
// for(let i = 0; i < num.length; i++){
//     sum = sum + num[i];
// }

// console.log(sum);

// //REDUCE METHOD

// let result = num.reduce((acc,curr)=>{
//     acc = acc + curr;
//     return acc;
// },0)

// console.log(result);

/*************************************************************************************** */
//14) reduceRight()  .....WILL NEVER CHANGE THE ORIGINAL ARRAY

// let output1 = num1.reduceRight((acc,curr)=>{
//     acc = acc + curr;
//     return acc;
// },0)

// console.log(output1);

/*************************************************************************************** */
//15) reverse()  .....WILL CHANGE THE ORIGINAL ARRAY

// function reverseMethod(x){
//     let result = x.reverse();
//     console.log(x);
//     return result;
// }

// console.log(reverseMethod(num1));

/*************************************************************************************** */
//16) shift()  .....WILL CHANGE THE ORIGINAL ARRAY

// function shiftMethod(x){
//     let result = x.shift();
//     console.log(x);
//     return result;
// }

// console.log(shiftMethod(num1));

/*************************************************************************************** */
//17) slice()  .....WILL NEVER CHANGE THE ORIGINAL ARRAY
//slice(start, end)

// function sliceMethod(x){
//     let result = x.slice(2,6)
//     console.log(x);
//     return result;
// }

// console.log(sliceMethod(num1));

/*************************************************************************************** */
//18) sort()  .....WILL CHANGE THE ORIGINAL ARRAY

// function sortMethod(x){
//     let result = x.sort();
//     console.log(x);
//     return result;
// }
// console.log(sortMethod(num));

/*************************************************************************************** */
//19) splice()  .....WILL CHANGE THE ORIGINAL ARRAY
//splice(start, deleteCount, item1)

// function spliceMethod(x){
//     let result = x.splice(4,0,"rama")
//     console.log(x);
//     return result;
// }

// console.log(spliceMethod(num1));

/*************************************************************************************** */
//20) toString()  .....WILL NEVER CHANGE THE ORIGINAL ARRAY

// function toStringMethod(x){
//     let result = x.toString()
//     console.log(x);
//     return result;
// }

// console.log(toStringMethod(num1));

/*************************************************************************************** */
//21) unshift()  .....WILL CHANGE THE ORIGINAL ARRAY

// function unshiftMethod(x){
//     let result = x.unshift(24)
//     console.log(x);
//     return result;
// }

// console.log(unshiftMethod(num1));

/*************************************************************************************** */
//22) map()  .....WILL NEVER CHANGE THE ORIGINAL ARRAY

// function mapMethod(x){
//     let result = x.map((n)=> n * 7 );
//      return result;
// }
    

// console.log(mapMethod(num));
