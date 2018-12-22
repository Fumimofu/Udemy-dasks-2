// let greetUser = function() {
//     console.log('Welcome user!');
// }

// greetUser();
// greetUser();
// greetUser();

// let square = function(num) {
//     let result = num * num;
//     return result;
// }

// let value = square(3);
// let otherValue = square(10);

// console.log(value);
// console.log(otherValue);

let convertFahrenheitToCersius = function (fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
}

let convert1 = convertFahrenheitToCersius(32);
let convert2 = convertFahrenheitToCersius(68);

console.log(convert1);
console.log(convert2);


