function cuadradoCallback(value, callback) {
    setTimeout(() => {
        callback(value, value * value);
        // Al poner el 0 delante lo convierte en un número entero (????)
    }, 0 | Math.random() * 1000);
}

cuadradoCallback(0, (value, result) => {
    console.info('Inicia Callback');
    console.info(`Callback: ${value}, ${result}`);
    cuadradoCallback(1, (value, result) => {
        console.info('Inicia Callback');
        console.info(`Callback: ${value}, ${result}`);
        cuadradoCallback(2, (value, result) => {
            console.info('Inicia Callback');
            console.info(`Callback: ${value}, ${result}`);
            cuadradoCallback(3, (value, result) => {
                console.info('Inicia Callback');
                console.info(`Callback: ${value}, ${result}`);
                cuadradoCallback(4, (value, result) => {
                    console.info('Inicia Callback');
                    console.info(`Callback: ${value}, ${result}`);
                    cuadradoCallback(5, (value, result) => {
                        console.info('Inicia Callback');
                        console.info(`Callback: ${value}, ${result}`);
                    });
                });
            });
        });
    });
});

