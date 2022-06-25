const operator = prompt("Please enter the operator you want to perform")
const number1 = prompt("Please enter the first number")
const number2 = prompt("Please enter the second number")

if (operator== '+') {
    let result = number1 + number2;
}
else if (operator== '-') {
    let result = number1 - number2;
}
else if (operator== '*') {
    let result = number1 * number2;
}
else if (operator== '/') {
    let result = number1 / number2;
}
else {
    console.log("Enter the correct operator");
}
alert('Your result is ${result}');