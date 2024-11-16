
/**
 * Esempio di applicazione
 * 1. selezionare il bottone -> si usano i selettori 
 * #stringa -> id
 * .stringa -> classe
 * tagName -> nome del tag
 * 
 * 
 * 
 * 2. aggiungere un evento click al bottone
 * 
 * 3. stampare un messaggio nella console
 */

// console.log(document.querySelector('button'));
// console.log(document.querySelectorAll('button'));


// ### Variabili ###

const x = 3;
let y = 4;
//console.log(x, y);

// riassegnare il valore di y
y = 5;
// console.log(x, y);

// x = 33; -> errore perché x è una costante

// tipi primitivi -> number, string, boolean, undefined, null
const z = 4.33; // number
const w = 'ciao'; // string
const a = true; // boolean
const b = undefined; // undefined
const c = null; // null
let e; 
//console.log('quando non assegniamo un valore a una variabile, essa è undefined', e);

let array = [1,2,3];
// console.log('array[0]', array[0]);

let mario = {
    nome: 'Mario',
    cognome: 'Rossi',
    eta: 25
}
let mariello = {
    nome: 'Mariello',
    cognome: 'Verdi',
    eta: 16,
    maggiorenne: () => {
        return this.eta >= 18;
    }
}
let luigi = {
    nome: 'Luigi',
    cognome: 'Bianchi',
    eta: 30
}

let giovanni = {
    nome: 'Giovanni',
    cognome: 'Neri',
    eta: 22
}

let francesca = {
    nome: 'Francesca',
    cognome: 'Gialli',
    eta: 28
}


// funzione senza argomenti
const stampatre = () => {
    //console.log('3')
}
stampatre()
// console.log('persona.nome', persona.nome);

// console.log('oggetto.nome', oggetto.nome);

// ### Funzioni ###

const somma = (a, b) => {
    return a + b;
}

// console.log('somma(2, 3)', somma(2, 3));

const getNome = (x) => {
    return x.nome;
}

const getSommaEta = (x, y) => {
    return somma(x.eta, y.eta);
}

// ### Condizioni ###

// const maggiorenne = (p) => {
//     if(p.eta >= 18) {
//         console.log(p.nome, 'maggiorenne');
//     } else {
//         console.log(p.nome, 'minorenne');
//     }
// }

// maggiorenne(mario);
// maggiorenne(mariello);

// ### Cicli ###    
let i = 10;
while(i>0) {
    //console.log(i);
    i = i - 1;
}

for(let i = 10; i > 0; i = i - 1) {
    //console.log(i);
}

// ### Array ###
const array1 = [1,2,3,4,5];

// metodi degli array
// array1.push(6);


array1.pop();
//console.log('array1', array1);

// metodo map
const array2 = array1.map((x, i) => {return x * 2 + i;})
//console.log('array2', array2);

// metodo filter
const array3 = array1.filter((x) => {return x % 2 === 0;})
//console.log('array3', array3);

const persone = [mario, mariello, luigi, giovanni, francesca];

const maggiorenni = persone.filter(p => p.eta >= 18);
console.log('persone', persone);
console.log('maggiorenni', maggiorenni);




// esercizio 1
// stampare in console il nome di tutte le persone maggiorenni

// esercizio 2
// stampare in console il nome di tutte le persone minorenni

// esercizio 3
// stampare in console tutte le persone il cui nome inizia per 'm'

// esercizio 4
// creare un semi-albero di altezza h = 500
// un semi albero di altezza h = 4 per intendersi è una cosa del tipo 
/*

*
**
***
****

*/

// creare un albero di altezza h = 500 (*)
// per h = 3 
/*

    *
   ***
  *****
 *******
*********

*/

// altro metodo importante degli array -> forEach

let array4 = [1,2,3,4,5];
array4.forEach((x) => {
    console.log(x);
})

const graziella = {
    nome: 'Graziella',
    cognome: 'Rossi',
    eta: 25
}

const _y = 3;

graziella.eta = 35;

console.log('graziella', graziella);

const grazia = {
    nome: 'Graziella',
    cognome: 'Rossi',
    eta: 25
}

console.log(grazia == graziella)

// ### Eventi ###


const bottone = document.querySelectorAll('#btn')