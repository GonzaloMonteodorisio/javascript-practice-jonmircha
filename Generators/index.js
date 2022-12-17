// Generators -> nos sirve para volver iterable a una función

function* iterable() {
  yield 'hola';
  console.info('Hola consola');
  yield 'hola 2';
  console.info('Seguimos con màs instrucciones de nuestro còdigo');
  yield 'hola 3';
  yield 'hola 4';
}

let iterador = iterable();
console.info('iterador: ', iterador);
// console.info('iterador.next(): ', iterador.next());
// console.info('iterador.next(): ', iterador.next());
// console.info('iterador.next(): ', iterador.next());
// console.info('iterador.next(): ', iterador.next());
// console.info('iterador.next(): ', iterador.next());

for (let y of iterador) {
  console.info(y);
}

const arr = [...iterable()];

console.info('arr: ', arr);

function cuadrado(valor) {
  setTimeout(() => {
    return console.info({valor, resultado: valor * valor});
  }, Math.random * 1000);
  return {
    valor, 
    resultado: valor * valor
  };
}

function* generador() {
  console.info('Inicia Generator');
  yield cuadrado(0);
  yield cuadrado(1);
  yield cuadrado(2);
  yield cuadrado(3);
  yield cuadrado(4);
  yield cuadrado(5);
  console.info('Finaliza Generator');
}

let gen = generador();

for (let y of gen) {
  console.info('cuadrado: ', y);
}