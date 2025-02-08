


interface IUserDesc {
    username:string,
    readonly age: number,
    isMarrid:boolean
}

const userDesc:IUserDesc ={
    username:"hasan",
    age:25,
    isMarrid:false
}

// userDesc.age = 40 ;
console.log(userDesc);


// Record
// const car:Record<string,string | number> = {
//     type:"bmw",
//     number:12345678,
// }

// car['color'] = "red"
console.log(car);


