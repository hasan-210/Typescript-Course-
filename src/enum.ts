




// Enum

enum Direction {
    Up,      // 0
    Buttom,  // 1
    Right,   // 2
    Left     // 3
}

const playerDirction = Direction.Buttom
// console.log(playerDirction);


// Enum StatusCode

enum StatusCode {
    success = 200,
    notFound=404,
    serverError=500
}

function handleResponse(Status:StatusCode){
    switch (Status) {
        case StatusCode.success:
            console.log("Success : The Request was successful");
            break;
        case StatusCode.notFound:
            console.log("Not Found : The Request was not found");
            break;
        case StatusCode.serverError:
            console.log("Server Error :  Server Error ");
            break;
        default:
            console.log("UnKnow Status Code  : Unable To Handle The Response ");
            break;
    }
}

handleResponse(StatusCode.success);
handleResponse(StatusCode.notFound);
handleResponse(StatusCode.serverError);