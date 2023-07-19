// function manejoError(condicion) {
//     try {
//         if (condicion) {
//             console.log("Todo OK");
//         } else {
//             throw new Error("Hubo un error");
//         }

//     } catch (error) {
//         console.log(error);
//     }
// }
async function manejoError(condicion) {
    try {
        const resultado = await esperar(condicion);
        console.log(resultado);

    } catch (error) {
        console.log(error);
    }
}


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



console.log("1");
manejoError(true);
console.log("2");