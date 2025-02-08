

interface ICar {
    carname:string,
    color:string,
    model:number
}

function updateCar(car:ICar , updates : Partial<ICar>){
    return {...car,...updates}
}

const car:ICar = {
    carname:"bmw",
    color:"black",
    model:2035
}

console.log(updateCar(car,{}));
console.log(updateCar(car,{carname:"Rio"}));