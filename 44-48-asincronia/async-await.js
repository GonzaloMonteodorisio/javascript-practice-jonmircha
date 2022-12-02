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

async function funcionAsincronaDeclarada() {
    try {
        console.info('Inicio Async Function');
        let obj = await cuadradoPromise(0);
        console.info(`Async Function: ${obj.value}, ${obj.result}`);
        obj = await cuadradoPromise(1);
        console.info(`Async Function: ${obj.value}, ${obj.result}`);
        obj = await cuadradoPromise(2);
        console.info(`Async Function: ${obj.value}, ${obj.result}`);
        obj = await cuadradoPromise(3);
        console.info(`Async Function: ${obj.value}, ${obj.result}`);
        obj = await cuadradoPromise(4);
        console.info(`Async Function: ${obj.value}, ${obj.result}`);
        obj = await cuadradoPromise(5);
        console.info(`Async Function: ${obj.value}, ${obj.result}`);
    } catch(err) {
        console.error(err);
    }
}

const funcionAsincronaExpresada = async () => {
    try {
        console.info('Inicio Async Function');
        let obj = await cuadradoPromise(6);
        console.info(`Async Function: ${obj.value}, ${obj.result}`);
        obj = await cuadradoPromise(7);
        console.info(`Async Function: ${obj.value}, ${obj.result}`);
        obj = await cuadradoPromise(8);
        console.info(`Async Function: ${obj.value}, ${obj.result}`);
        obj = await cuadradoPromise(9);
        console.info(`Async Function: ${obj.value}, ${obj.result}`);
        obj = await cuadradoPromise(4);
        console.info(`Async Function: ${obj.value}, ${obj.result}`);
        obj = await cuadradoPromise(10);
        console.info(`Async Function: ${obj.value}, ${obj.result}`);
    } catch(err) {
        console.error(err);
    }
}

funcionAsincronaDeclarada();
funcionAsincronaExpresada();