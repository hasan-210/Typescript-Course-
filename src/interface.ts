

// interface User {
//     username:string,
//     age:number,
//     isMarrid:boolean,
//     address?:string // ?: => this field is optional
// }
interface IUser {
    username:string,
    age:number,
    isMarrid:boolean,
}

const userInfomation:IUser = {
    username:"hasan",
    age:25,
    isMarrid:false
}



// _____________________Export__________Extends_______________________//

interface INewUser extends IUser {
    address:string   // add new field
}

const newUser:INewUser= {
    ...userInfo,
    address:"Syria"
}