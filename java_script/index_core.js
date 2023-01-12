let right_num = " ";
let first_num, second_num;
let result, move;

function one() {
    right_num += "1"

    document.getElementById('res').innerHTML = right_num;
}

function two() {
    right_num += "2"
    document.getElementById('res').innerHTML = right_num;
}

function three() {
    right_num += "3"
    document.getElementById('res').innerHTML = right_num;
}

function four() {
    right_num += "4"
    document.getElementById('res').innerHTML = right_num;
}

function five() {
    right_num += "5"
    document.getElementById('res').innerHTML = right_num;
}

function six() {
    right_num += "6"
    document.getElementById('res').innerHTML = right_num;
}

function seven() {
    right_num += "7"
    document.getElementById('res').innerHTML = right_num;
}

function eight() {
    right_num += "8"
    document.getElementById('res').innerHTML = right_num;
}

function nine() {
    right_num += "9"
    document.getElementById('res').innerHTML = right_num;
}

function dot() {
    right_num += "."
    document.getElementById('res').innerHTML = right_num;
}

function percent() {
    right_num /= 100
    document.getElementById('res').innerHTML = right_num;
}

function dicr() {
    right_num += "-"
    document.getElementById('res').innerHTML = right_num;
}

function ac() {
    right_num = " ";
    document.getElementById('res').innerHTML = " ";
}

function zero() {
    right_num += "0"
    document.getElementById('res').innerHTML = right_num;
}

function plus() {
    first_num = right_num;
    right_num = " ";

    move = 1;
}

function divide() {
    first_num = right_num;
    right_num = " ";

    move = 2;
}

function minus() {
    first_num = right_num;
    right_num = " ";

    move = 3;
}

function multiply() {
    first_num = right_num;
    right_num = " ";

    move = 4;
}

function equal() {
    second_num = right_num;
    right_num = " ";

    if (move === 1) {
        result = (first_num * 1) + (second_num * 1)
    } else if (move === 3) { 
        result = (first_num * 1) - (second_num * 1)
    } else if (move === 2) { 
        result = (first_num * 1) / (second_num * 1)
    } else if (move === 4) {
        result = (first_num * 1) * (second_num * 1)
    } else {
        result = "Error";
    }

    document.getElementById('res').innerHTML = result;
}
