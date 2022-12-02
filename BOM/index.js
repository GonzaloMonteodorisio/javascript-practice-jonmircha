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


// Scroll Event (not working !!!)
window.addEventListener('scroll', e => {
  console.clear();
  console.info('***** Evento Scroll *****');
  console.info('window.scrollX: ', window.scrollX);
  console.info('window.scrollY: ', window.scrollY);
  console.info('event - scroll: ', e);
});

// Scroll Event (not working !!!)
window.onscroll= (e) => {
  console.info('scroll');
}


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

