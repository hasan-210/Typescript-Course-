

interface IAnimal {
    animaleName:string,
    color:string,
    age:number
}

const animal:IAnimal = {
    animaleName:"bird",
    color:"green",
    age:30
}

type AnimalKeys = keyof IAnimal ; /** key : animalName | age | color */

function showAnimal(obj:IAnimal,key:AnimalKeys){
    return obj[key] ;
}
// console.log('Animal Name : ' + showAnimal(animal,"animaleName"));
// console.log('Animal Color : '+showAnimal(animal,"color"));
// console.log('Animal Age : '+showAnimal(animal,"age"));


/** Funtion With Array Destructuring */


function printLanguage([a,b]:string[]){
    return `FirstLang : ${a} , SecondLang : ${b}`;
}

// console.log(printLanguage(['javascript','php','python']));


/** Funtion Rest Parameters  || A rest parameter must be last in a parameter list */  

function sumNumbers(text:string,...numbers:number[]){
    return text +  numbers.reduce((sum,num)=>sum + num , 0);
}

console.log(sumNumbers('the sum is : ',1,2,9));
