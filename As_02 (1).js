//1 Display Even Numbers from 1 to 100

for (let i = 2; i <= 100; i += 2) {
    console.log(i);
}

//2 Basic Calculator Function

function calculate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
        default:
            return "Invalid operator";
    }
}

 console.log(calculate(10, 5, '+'));

//3 Tax Calculation Function

function findTax(salary) {
    switch (true) {
        case (salary > 0 && salary <= 500000):
            return salary * 0;
        case (salary > 500000 && salary <= 1000000):
            return salary * 0.10;
        case (salary > 1000000 && salary <= 1500000):
            return salary * 0.20;
        case (salary > 1500000):
            return salary * 0.30;
        default:
            return "Invalid salary";
    }
}
console.log(findTax(1200000));

//4 Sum of Products of Corresponding Digits

function sumOfProducts(n1, n2) {
    let s1 = n1.toString().split('').reverse();
    let s2 = n2.toString().split('').reverse();
    let maxLength = Math.max(s1.length, s2.length);
    let sum = 0;

    for (let i = 0; i < maxLength; i++) {
        let digit1 = parseInt(s1[i]) || 0;
        let digit2 = parseInt(s2[i]) || 0;
        sum += (digit1 * digit2);
    }
    return sum;
}

console.log(sumOfProducts(123, 456));