// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

const myString = 'Hola a todos!';

function countChars(string) {
    return string.length;
}
const myStringLength = countChars(myString);
// console.info(myStringLength);

// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

function truncateText(string) {
    return string.substring(0, 4);
}

const myTruncateText = truncateText(myString);
// console.info(myTruncateText);

// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

function separateInWords(string) {
    return string.split(' ');
}

const myWordsArray = separateInWords(myString);
// console.info(myWordsArray);

// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.


function repeatText(string, count) {
    return string.repeat(count);
}

const myRepeatdText = repeatText(myString, 3);
// console.info(myRepeatdText);


// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

function reverseText(string) {
    return string.split('').reverse().join('');
}
const myReversedText = reverseText(myString);
// console.info(myReversedText);

// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

function countWord(string, word) {
    return string.split(' ').filter(item => item === word).length;
}
const wordCount = countWord("hola mundo adios mundo", "mundo");
// console.info(wordCount);

// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

function isPalindrome(string) {
    return string.toLowerCase() === string.toLowerCase().split('').reverse().join('');
}
const palindrome = isPalindrome("Salas");
// console.info(palindrome);

// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

function removePattern(string, pattern) {
    return string.replace(eval('/' + pattern + '/g'), '');
}
const textWithoutPattern = removePattern("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");
// console.info(textWithoutPattern);

// console.info(myString);

// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

function randomNumber() {
    return Math.random() * 100 + 500;
}
const myRandomNumber = randomNumber();
// console.info(myRandomNumber);

// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

function isCapicua(number) {
    return parseInt(number.toString().split('').reverse().join('')) === number;
}
const myCapicua = isCapicua(2002);
// console.info(myCapicua);

// 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

function factorial(number) {
    if (number <= 0) return 'Debe ingresar un número entero positivo';
    let myFact = 1;
    for (let i = 1; i <= number; i++) {
        myFact *= i;
    }
    return myFact;
}
const myFactorial = factorial(5);
console.info(myFactorial);


// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.