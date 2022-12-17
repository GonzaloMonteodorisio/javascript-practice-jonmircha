const mapa = new Map();
mapa.set('nombre', 'Gonzalo');
mapa.set('edad', '40');

// Las llaves y los valores pueden ser cualquier tipo de valor
mapa.set(false, 'false');
mapa.set({}, {});
mapa.set(20, 'veinte');
mapa.set(null, 'null');
mapa.set(undefined, 'undefined');

console.info('mapa: ', mapa);


for (let item of mapa) {
  console.info(item);
}

const mapa2 = new Map([
  ['nombre', 'Juan'],
  ['edad', 30]
]);

console.info('mapa2: ', mapa2);

const mapa2Keys = [...mapa2.keys()];
const mapa2Values = [...mapa2.values()];

console.info('mapa2Keys: ', mapa2Keys);
console.info('mapa2Values: ', mapa2Values);