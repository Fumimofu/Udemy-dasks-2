// let num = 103.941;

// console.log(num.toFixed(2));

// console.log(Math.round(num));　//四捨五入
// console.log(Math.floor(num));　//切り捨て
// console.log(Math.ceil(num));  //切り上げ

// let min = 10;
// let max = 20;
// let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
// console.log(randomNum);


let makeGuess = function (guess) {
    let min = 1;
    let max = 5;
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(randomNum);
    return guess === randomNum;
}

let result = makeGuess(1);
console.log(result);


