// number
// string 
// bigint
// boolean
// symbol
// null
// let itemName = null
// let itemBrand

// console.log(typeof itemName);  // returns object
// console.log(typeof itemBrand); // reutrns undefined

// ***************** COMPARISON OF DATA TYPES *********************

// console.log("2" > 1);
// console.log("2" > 2);

// console.log(null > undefined);
// console.log(null == undefined);
// console.log(null >= undefined);

// console.log("Printing");
// console.log(undefined > 0);
// console.log(undefined < 0);
// console.log(undefined == 0);
// console.log(undefined >= 0);

// Primitive Data type
// let myName = "Aman";
// console.log(myName);
// let newName = myName;
// newName = "Gahlot";
// console.log(newName);

// Non-Primitive Data Type

// let UserOne = {
//     userName : "Rocky John",
//     userCity : "Kanpur"
// };

// console.log(UserOne)

// let userTwo = UserOne;

// console.log(userTwo);

// userTwo.userName = "Rishi"

// console.log(UserOne);
// console.log(userTwo);

// STRING FUNCTIONS

// let gameName = new String("Tekken");

// console.log(gameName.length);
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('k'));

// const fewLetters = gameName.substring(1, 4); // does not support negative value
// console.log(fewLetters);

// const gettingStringWithNegativeValue = gameName.slice(1, -4);   // supports -value
// console.log(gettingStringWithNegativeValue);

// const userName = "   aman  ";
// console.log(userName);
// // trim.start() & trim.end()
// console.log(userName.trim());  

// const url = "https://www.myWebsite%20amanProfile.com";

// console.log(url.replace('%20', '-'));

// // check whether the particular word is in the string or not
// console.log(url.includes('amanprofile'));

const randomName = new String("hello-rishab-good-boy");

const name = randomName.split('-', 2);
console.log(name);