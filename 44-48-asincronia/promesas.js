function cuadradoPromise(value) {
    if(typeof value !== 'number') return Promise.reject(`Error. El valor ${value} ingresado no es un número`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                value,
                result: value ** 2
            });
            // Al poner el 0 delante lo convierte en un número entero (????)
        }, 0 | Math.random() * 1000);
    });
}

let result = cuadradoPromise('ooo')
    .then(obj => {
        const {value, result} = obj;
        console.info('Inicio Promise');
        console.info(`Promise: ${value}, ${result}`);
        return cuadradoPromise(1)
    })
    .then(obj => {
        const {value, result} = obj;
        console.info(`Promise: ${value}, ${result}`);
        return cuadradoPromise(2)        
    })
    .then(obj => {
        const {value, result} = obj;
        console.info(`Promise: ${value}, ${result}`);
        return cuadradoPromise(3)        
    })
    .then(obj => {
        const {value, result} = obj;
        console.info(`Promise: ${value}, ${result}`);
        return cuadradoPromise(4)        
    })
    .then(obj => {
        const {value, result} = obj;
        console.info(`Promise: ${value}, ${result}`);
        return cuadradoPromise(5)        
    })
    .then(obj => {
        const {value, result} = obj;
        console.info(`Promise: ${value}, ${result}`);       
        console.info('Fin de la Promesa');       
    })
    .catch(error => console.info(error));

console.info(result);