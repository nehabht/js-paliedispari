// Palidroma
// Chiedere all’utente di inserire una parola 
// Creare una funzione per capire se la parola inserita è palindroma

/*
// chiedere una parola all'utente
let userWord = prompt("inserisci una parola")

// definisco la funzione per invertire una parola
let reverseUserWord = reverseWord(userWord);


// ciclo for per verificare se la parola inserita è uguale o meno a quella invertita e stampa

if (userWord == reverseUserWord){
    console.log(`la parola ${userWord} è palindroma`);
} else {
    console.log(`la parola ${userWord} non è palindroma`);
}


// creo la funzione per invertire una parola

function reverseWord(parolaDaInvertire){

    // per dividere - girare - riattacare la parola
    let parolaInvertita = parolaDaInvertire.split("").reverse().join("");
    return parolaInvertita
}

*/


// Pari e Dispari

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


const pariOdispari = prompt("pari o dispari");

// const pariOdispari = "pari"

const user_1_to_5 = parseInt(prompt("scegli un numero da 1 a 5"));

// const user_1_to_5 = 1;

console.log(user_1_to_5);

// generiamo una funzione per numeri random

function randomNumberGenerator(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

const actualPCRandomNumber = randomNumberGenerator(1,5)

console.log(actualPCRandomNumber);

// sommiamo i due numeri 

const sum = user_1_to_5 + actualPCRandomNumber

console.log(sum);


// generiamo una funzione per controllare se la somma dei due numeri è pari o dispari

function sum_odd_or_even(){
    
    if (sum % 2 == 0) {

        console.log("la somma è pari");

        if ("pari" == pariOdispari){
            console.log("è pari hai vinto perchè hai detti pari")
        } else if ("dispari" == pariOdispari){
            console.log("è pari hai perso perchè hai detto dispari")
        } else{
            console.log("è dispari hai perso perchè hai detto pari else")
        }


    } else {

        if ("pari" == pariOdispari){
            console.log("è dispari hai perso perchè hai detto pari e non da somma pari")
        } else if ("dispari" == pariOdispari){
            console.log("è dispari hai vinto perchè hai detto dispari e la somma è dispari")
        }
       
    }
}

sum_odd_or_even()

