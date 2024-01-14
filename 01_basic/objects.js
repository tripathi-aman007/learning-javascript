// WE CAN CREATE OBJECT IN 2 WAYS:

// 1. SINGLETON OBJECTS 
// CREATED USING CONSTRUCTOR -> OBJECT.CREATE

// defining the Symbol
const mySymbol = Symbol("key1");

// 2. OBJECT LITERALS
const userOne = {
    userName : "Jack Ryan",
    userEmail : "jackryan@mail.com",
    [mySymbol] : "Symbol Value",
    "user city" : "London",      
    isLogged : true,
    age : 19
};

// console.log(userOne.userEmail);
// console.log(userOne["user city"]);     // you can't fetch this object key with (.) operator
// console.log(userOne[mySymbol]);
// console.log(typeof userOne[mySymbol]);

// using FREEZE we are making the object immutable (can't change the value).
// userOne.userEmail = "jack@mail.com";
// Object.freeze(userOne);
// userOne.userEmail = "jack@789mail.com";
// console.log(userOne);

// userOne.greeting = function() {
//     console.log("Hello user one");
// }

// console.log(userOne.greeting);
// userOne.greeting();


const tinderUser = {
    contactNumber : 8176060086,
    email : "aman@google.com",
    fullName : {
        userFullName : {
            firstName : "aman",
            lastName : "tripathi"
        }
    }
}

// console.log(tinderUser.fullName.userFullName.lastName);
const objectOne = { 1 : "one", 2 : "two" };
const objectTwo = { 3 : "three", 4 : "four" };
const objectThree = { 5 : "five", 6 : "six" };

// COMBING TWO OBJECTS
// const newObj = { objectOne, objectTwo };
// const mergedObject = Object.assign( {}, objectOne, objectTwo, objectThree);
// const mergedObject = { ...objectOne, ...objectTwo, ...objectThree };


const newUser = {
    contactNumber : 8176060086,
    email : "aman@google.com",
    name : "aman"
};

// console.log(newUser);
// returns the array of keys & values in result
// console.log(Object.keys(newUser)); 
// console.log(Object.values(newUser)); 
// returns the new object inside which it combines all the entry as a key value pair in new object.
// console.log(Object.entries(newUser));
// console.log(Object.hasOwnProperty("name"));

// DESTRUCTURE THE OBJECT.
const courseDetails = {
    courseName : "Data Analytics",
    coursePrice : 999,
    courseInstructor : "Aman Tripathi",
};

// desturcturing
const {courseName : name, coursePrice : Price} = courseDetails;
console.log(`Course Name: ${name} and its Price is: ${Price}`);