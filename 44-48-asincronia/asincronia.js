// Código Síncrono Bloqueante
(() => {
    console.info('Código Síncrono');
    console.info('Inicio');

    function dos() {
        console.info('Dos');
    }

    function uno() {
        console.info('Uno');
        dos();
        console.info('Tres');
    }

    uno();
    console.info('Fin');
})();

console.info('**********************');

// Código Asíncrono No Bloqueante
(() => {
    console.log('Código Síncrono');
    console.log('Inicio');

    function dos() {
        setTimeout(() => {
            console.log('Dos');
        });
    }

    function uno() {
        setTimeout(() => {
            console.log('Uno');
        }, 0);
        dos();
        console.log('Tres');
    }

    uno();
    console.log('Fin');
})();

