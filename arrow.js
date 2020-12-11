// function doubleIT(num){
//     return num * 2;
// }

//second way
// const doubleIT = function MyFun(num){
//     return num * 2;
// }

 //useful and easy way
 const doubleIT = num => num * 2;

 //jodi akadik paramjitar thake tahole;
 const add = (x, y) => x + y;
 
 //jodij kuno paramitar  na thake tahole
 const give5 = () => 5;

 //jodi one gulo math aksathe korte hoy
 const doMath = (x, y) => {
           const sum = x + y;
           const diff = x - y;
           const result = sum * diff;
           return result;
 }
const result3 = doMath(7, 5);
console.log(result3);
const result = add(5, 70);
console.log(result);
const result2 = give5();
console.log(result2);