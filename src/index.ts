

// Object

const userProfile:{
    username:string,
    age:number,
    isMarried:boolean,
    hobbies:string[]
} ={
    username:"hasan",
    age:25,
    isMarried:false,
    hobbies:["football","Cooking"]
}


const list:[number,string,{age:number},boolean] = [ 1 , "hasan", {age:25} , false]

// function logMessage(message: string): void
function logMessage(message:string){
    console.log(message);
}