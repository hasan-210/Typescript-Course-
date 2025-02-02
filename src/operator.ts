

const userInfo:{username:string,
    age:number,
    isMarrid:boolean
    } = {
    username:"hasan",
    age:25,
    isMarrid:false
}

// Spread Object
const copyUserInfo:{
    username:string,
    age:number,
    isMarrid:boolean,
    address:string
    } = {...userInfo,address:"Syria"}

console.log(copyUserInfo);


// Destructuring
const {username,age,isMarrid}:{username:string,age:number,isMarrid:boolean} = {
    username:"hasan",
    age:25,
    isMarrid:false
}