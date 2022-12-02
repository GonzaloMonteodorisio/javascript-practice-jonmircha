const persona = {
	nombre: '',
	apellido: '',
	edad: 0
}

const manejador = {
	set(obj, prop, valor) {
		console.info(obj);
		if (Object.keys(obj).indexOf(prop) === -1) return console.error(`La propiedad ${prop} no existe en el objeto "persona"`);

		if ((prop === 'nombre' || prop === 'apellido') && 
		!/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g.test(valor)) return console.error(`La propiedad ${prop} solamente acepta letras y espacios en blanco`);

		obj[prop] = valor;
	}
}

const gonzalo = new Proxy(persona, manejador);

gonzalo.nombre = 'Javier';
gonzalo.apellido = 'Salcedo';
gonzalo.edad = 40;
gonzalo.twitter = '@gonzalomonteodorisio';
gonzalo.nombre = 20;

console.info(gonzalo);
console.info(persona);