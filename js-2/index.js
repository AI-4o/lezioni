import { _btn, _h1 } from './utils.js';

/*
[x]  correzione esercizi
[x] classi
[x] import/export
[x] manipolazione del dom, eventi
[] dare esercizi
[] bootstrap
[] funzioni asincrone, promise, fetch
*/



// ### CLASSI ###

class Persona {
    nome;
    cognome;
    eta;
    // costruttore
    constructor(nome, cognome, eta) {
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
    }
    // metodi
    saluta() {
        console.log(`ciao, io sono ${this.nome} ${this.cognome}`);
    }
    static salutaStatic() {
        console.log('ciao, io non ho ancora un nome :(');
    }
}

const cc1 = new Persona('Carlo', 'Carli', 25);
console.log(cc1.nome);
cc1.saluta();
Persona.salutaStatic();


// ### MANIPOLAZIONE DEL DOM ###

// selezionare un elemento
const e = document.querySelector('h1')
e.style.color = 'red'
console.log(e)

// selezionare più elementi
const h1Array = document.querySelectorAll('h1')
console.log(h1Array);
h1Array[3].style.fontSize = '10px'

document.querySelector('#annidato').style.color = 'green'
document.querySelector('.titolo:nth-of-type(2)').style.color = 'blue'

// esercizio vedere qualche esempio di selettori composti 

// div > h1
// h1.titolo
// h1[titolo]
// h1:first-child
// h1:last-child
// h1:nth-child(2)

// ### EVENTI ###

const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    console.log('click');
    btn.style.backgroundColor = 'red';
})


// import { btn, h1 } from './utils.js';
console.log(_btn, _h1);
//const interval = setInterval(()=>{console.log('ma quanto sono figo')}, 100);
//clearInterval(interval);

//Math.random()*100
_btn.addEventListener('click', () => {
    const audio = new Audio('sound.mp3');
    audio.play();
    setTimeout(() => {
        audio.pause();
    }, 500);
})