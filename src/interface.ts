

// interface User {
//     username:string,
//     age:number,
//     isMarrid:boolean,
//     address?:string // ?: => this field is optional
// }
interface User {
    username:string,
    age:number,
    isMarrid:boolean,
}

const userInfomation:User = {
    username:"hasan",
    age:25,
    isMarrid:false
}



// _____________________Export__________Extends_______________________//

interface NewUser extends User {
    address:string   // add new field
}

const newUser:NewUser= {
    ...userInfo,
    address:"Syria"
}