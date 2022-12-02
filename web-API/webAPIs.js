const texto = 'Hola, soy Gonzalo Monteodorisio y me gusta el rock!';

function hablar(texto) {
  return speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
}

hablar(texto);

