console.info('window: ', window);

// Resize Event
window.addEventListener('resize', e => {
  console.clear();
  console.info('***** Evento Rezise *****');
  console.info('window.innerWidth: ', window.innerWidth);
  console.info('window.innerHeight: ', window.innerHeight);
  console.info('window.outerWidth: ', window.outerWidth);
  console.info('window.outerHeight: ', window.outerHeight);
  console.info('event - resize: ', e);
});


// Scroll Event (no funciona bien en Chrome, sí en Firefox !!!)
// window.addEventListener('scroll', e => {
//   console.clear();
//   console.info('***** Evento Scroll *****');
//   console.info('window.scrollX: ', window.scrollX);
//   console.info('window.scrollY: ', window.scrollY);
//   console.info('event - scroll: ', e);
// });

// Scroll Event (no funciona bien en Chrome, sí en Firefox !!!)
window.onscroll= (e) => {
  console.info('scroll');
}

// Mousewheel Event (funciona en Chrome !!!)
window.addEventListener('mousewheel', e => {
  console.clear();
  console.info('***** Evento Mousewheel *****');
  console.info('window.scrollX: ', window.scrollX);
  console.info('window.scrollY: ', window.scrollY);
  console.info('event - mousewheel: ', e);
});


// Load Event  -> espera que carguen las imágenes, las hojas de estilo, las sub-ramas y las hojas de scripts, además de que el documento haya sido totalmente cargado y parseado. (tarda más que "DOMContentLoaded").
window.addEventListener('load', e => {
  console.info('***** Evento Load *****');
  console.info('window.screenX: ', window.screenX);
  console.info('window.screenY: ', window.screenY);
  console.info('event - load: ', e);
});

// DOMContentLoaded Event  -> se ejecuta cuando el documento ha sido totalmente cargado y parseado (es recomendable, sobre todo, para peticiones asíncronas) -> OJO !!! ->> no espera que carguen las imágenes, las hojas de estilo, las sub-ramas ni las hojas de scripts. (tarda menos que "load").
window.addEventListener('DOMContentLoaded', e => {
  console.info('***** Evento DOMContentLoaded *****');
  console.info('window.screenX: ', window.screenX);
  console.info('window.screenY: ', window.screenY);
  console.info('event - DOMContentLoaded: ', e);
});

// Métodos de BOM

const $btnAbrir = document.getElementById('abrir-ventana');
const $btnCerrar = document.getElementById('cerrar-ventana');
const $btnImprimir = document.getElementById('imprimir-ventana');

const $btnAbrirMultiple = document.getElementById('abrir-multiple-ventana');
const $btnCerrarMultiple = document.getElementById('cerrar-multiple-ventana');

let ventana;

$btnAbrir.addEventListener('click', e => {
  ventana = open('https://jonmircha.com');
  console.info('método - window.open(): ', e);
});

// Cierra solamente la última ventana abierta con el método open().
$btnCerrar.addEventListener('click', e => {
  ventana.close();
  console.info('método - ventana.close(): ', e);
});

// Método que abre la ventana actual para mandar a la impresora (se puede generar una hoja de estilos CSS que se cargue cuando el usuario va a imprimir la página)
$btnImprimir.addEventListener('click', e => {
  print();
});

// Alternativa para cerrar todas las ventanas que se abrieron con el método open()

let ventanas = [];

$btnAbrirMultiple.addEventListener('click', e => {
  ventanas.push(open('https://jonmircha.com'));
  console.info('método - window.open(): ', e);
});

$btnCerrarMultiple.addEventListener('click', e => {
  ventanas.forEach(ventana => ventana.close());
  console.info('método - ventana.close(): ', e);
});


