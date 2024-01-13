// const myArr = new Array(1, 2, 3, 4, 5);
// console.log(`MyArr: ${myArr}`);

// const chunkSliceArr = myArr.slice(1, 3);
// console.log(`ChunkSliceArr: ${chunkSliceArr}`);
// console.log(`MyArr: ${myArr}`);

// const chunkSpliceArr = myArr.splice(1, 3);
// console.log(`ChunkSpliceArr: ${chunkSpliceArr}`);
// console.log(`MyArr: ${myArr}`);


// **************** WAYS TO MERGE ARRAYS ******************
// const nakedBikes = ["z900", "benelli600", "rr310"];
// const fairingBikes = ["BMWS1000rr", "ZX10r", "Aprilia457"];

// const allBikes = nakedBikes.concat(fairingBikes);
// const myAllBikes = [...nakedBikes, ...fairingBikes];

// console.log("Using Concat to merge two arrays"allBikes);
// console.log("Using Spread Operator to merege unlimited arrays: ", myAllBikes);

const myBikes = [
    "z900", "benelli600", "rr310", 
    ["BMWS1000rr", 
    ["ZX10r","Aprilia457"],
    "Speed400"],
    "Harley400"
];

// console.log(myBikes);
// console.log(myBikes.flat(Infinity));

console.log(Array.isArray("Aman"));
console.log(Array.from("Aman"));

// creating array by combining mutliple variables.
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));