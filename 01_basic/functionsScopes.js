function calculateCartAmount(...num1) {
    return num1
}

// console.log(calculateCartAmount(100, 300, 400, 200));

// passing object in the function.
const user = {
    userName : "aman",
    city : "orai"
};

function handleObject(anyObject) {
    console.log(`Name of user : ${anyObject.userName} and the city is : ${anyObject.city}`);
}

// handleObject(user);

// passing the array to the function
const myArr = [100, 200, 300];
function returnSecondValue(gettingArray) {
    return gettingArray[2];
}

// console.log(returnSecondValue(myArr));

// ********************* SCOPES *********************
// one();
// function one() {
//     const name = "aman";

//     function two() {
//         const app = "currency convertor";
//         console.log(name);
//     }
//     two();
// }

// const addTwo = function(value) {
//     return value + 1
// }

// console.log(addTwo(4));



// ********************************* ARROW FUNCTION *******************************

// const webUser = {
//     userName : "aman",
//     price : 999,

//     welcomeMessage : function() {
//         console.log(`${this.userName}, welcome back :)`);
//     }
// };

// webUser.welcomeMessage();
// webUser.userName = "Jack Ryan";
// webUser.welcomeMessage();


// const addTwo = (n1, n2) => {
//     return n1 + n2;
// }

// const addTwo = (n1, n2) => n1 + n2;     // arrow function implicit return
// const addTwo = (n1, n2) => ( n1 + n2 );    // don't need of return

const addTwo = (n1, n2) => ( { userName : "don" } );    // arrow function returning the object
console.log(addTwo(3, 9));