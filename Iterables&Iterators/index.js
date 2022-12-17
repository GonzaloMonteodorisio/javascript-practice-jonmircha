// Iterable es el elemento que se puede recorrer
// Iterador es el apuntador que recorre esos elementos

let iterable = [];

iterable = [1, 2 ,3 , 4, 5];

// iterable = 'Gonzalo';

// iterable = new Set([1, 1, 3, 4, 5, 5, 6, 7]);

// iterable = new Map([
//   ['nombre', 'Gonzalo'],
//   ['edad', 40]
// ]);

// Accedemos al iterador del iterable
const iterador = iterable[Symbol.iterator]();

console.info('iterador: ', iterador);
// console.info('iterador.next(): ', iterador.next());
// console.info('iterador.next(): ', iterador.next());
// console.info('iterador.next(): ', iterador.next());
// console.info('iterador.next(): ', iterador.next());
// console.info('iterador.next(): ', iterador.next());
// console.info('iterador.next(): ', iterador.next());

let next = iterador.next();

console.info('next: ', next);

while (!next.done) {
  console.info('next.value: ', next.value);
  next = iterador.next();
}