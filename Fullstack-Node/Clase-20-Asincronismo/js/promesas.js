function esperar(condicion) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (condicion) {
                resolve('Pasaron 2 segundos');
            } else {
                reject('hubo un error');
            }

        }, 2000);

    });
}


console.log('1');
esperar(false)
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
    .finally(() => console.log("siempre"));

console.log('2');