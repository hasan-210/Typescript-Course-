
/** Generic  */

function logArg <T> (arg:T){
    return arg ;
}

// console.log(logArg(["aszd",2]));

function swap<T>(arg1:T , arg2:T){
    return [arg2,arg1];
}

let num1 =10;
let num2 =20;

console.log(swap(num1,num2));



