// Palidroma
// Chiedere all’utente di inserire una parola 
// Creare una funzione per capire se la parola inserita è palindroma


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

