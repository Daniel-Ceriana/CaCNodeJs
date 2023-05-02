// const sumarConsole = function(num1, num2) {
//     console.log(num1, num2);
// }

// const sumarAlert = function(num1, num2) {
//     console.log(num1, num2);
// }


// sumarConsole(7, 5);
// sumarAlert(7, 5);


const sumar = function(num1, num2, callback) {
    callback(num1, num2);
}

sumar(3, 6, console.log);