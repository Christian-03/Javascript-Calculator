const start = alert("Welcome to my Calculator. Click 'OK' to continue")
const operator = prompt('Enter any of the operators +, -, /, *')
const num1 = parseFloat(prompt('Enter First Number'))
const num2 = parseFloat(prompt('Enter Second Number'))

let result = 0;


if(operator == '+'){
    result = num1 + num2;
} else if(operator == '-'){
    result = num1 - num2;
} else if(operator == '*'){
    result = num1 * num2;
} else if(operator == '/'){
    result = num1 / num2;
} else{
    alert('Wrong input! Refresh page and try again.');
}
alert(num1 + ' ' + operator + ' ' + num2 + ' = ' + result)