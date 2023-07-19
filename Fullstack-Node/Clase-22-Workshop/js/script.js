// const multiplicar = (num1, num2) => {
//     const result = num1 * num2;

//     console.log(`${num1} * ${num2} = ${result}`);
// }

// multiplicar(2, 1);

// multiplicar(2, 2);

// multiplicar(2, 3);
const multiplicar = (num1, num2, callback) => {
    setTimeout(() => {
        const result = num1 * num2;
        callback(num1, num2, result);
    }, Math.random());
};

//     console.log(`${num1} * ${num2} = ${result}`);

const mostrarResult = (a, b, c) => {
    console.log(`${a} * ${b} = ${c}`);
};

multiplicar(2, 1, mostrarResult);