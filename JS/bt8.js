function UseIf() {
    let a = parseFloat(prompt("Nhập số thứ nhất: "));
    const operator = prompt("Nhập phép tính ( +, -, * hoặc / ): ");
    let b = parseFloat(prompt("Nhập số thứ hai: "));
    let result = 0;
    let value = true;
    if (isNaN(a)){
        alert("Bạn chưa nhập số thứ nhất");
        value = false;
    }
    if (isNaN(b)){
        alert("Bạn chưa nhập số thứ hai");
        value = false;
    }
    if (operator == "+") {
        result = a + b;
    } else if (operator == "-") {
        result = a - b;
    } else if (operator == "*") {
        result = a - b;
    } else if(operator == "/") {
        result = a / b;
    } else {
        result = "Chưa nhập phép tính"
        value = false;
    }
    if (value) {
        alert(`${a} ${operator} ${b} = ${result}`)
    } else {
        alert(result)
    }
   
}
function UseSwitch() {
    let a = parseFloat(prompt("Nhập số thứ nhất: "));
    const operator = prompt("Nhập phép tính ( +, -, * hoặc / ): ");
    let b = parseFloat(prompt("Nhập số thứ hai: "));
    let result = 0;
    let value = true;
    if (isNaN(a)){
        alert("Bạn chưa nhập số thứ nhất");
        value = false;
    }
    if (isNaN(b)){
        alert("Bạn chưa nhập số thứ hai");
        value = false;
    }
    switch (operator) {
        case "+":
            result = a + b;
            break;
        case "-":
            result = a - b;
            break;
        case "*":
            result = a * b;
            break;
        case "/":
            result = a / b;
            break;
        default:
            result = "Chưa nhập phép tính"
            value = false;
    }
    
    if (value) {
        alert(`${a} ${operator} ${b} = ${result}`)
    } else {
        alert(result)
    }
}
function FindPrime() {
    const number = parseInt(prompt("Nhập vào một số : "));
    
    if (isNaN(number)){
        alert("Chưa nhập số");
        isPrime = false;
    }
    let isPrime = true;
    if (number < 2) {
        isPrime = false;
    }
    else {
        for (let i = 2 ; i < number ; i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }
    }
    
    if (isPrime) {
        alert(`${number} là số nguyên tố`);
    } else {
        alert(`${number} không phải là số nguyên tố `);
    }
}