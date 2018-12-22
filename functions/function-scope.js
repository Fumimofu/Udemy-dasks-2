
let convertFahrenheitToCersius = function (fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9;

    if (celsius <= 0) {
        let isFreezing = true;
    }

    return celsius;
}

let convert1 = convertFahrenheitToCersius(32);
let convert2 = convertFahrenheitToCersius(68);

console.log(convert1);
console.log(convert2);