//ESERCIZIO PALINDROMA

// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// const parola = prompt("Inserisci una parola:");


// function isPalindroma(parola) {
//   parola = parola.toLowerCase().replace(/\s/g, "");
//   const caratteri = parola.split("")
//   const caratteriInvertiti = caratteri.reverse();
//   const parolaInvertita = caratteriInvertiti.join("");

//   if (parola === parolaInvertita) {
//     return true;
//   } else {
//     return false;
//   }
// }

// if (isPalindroma(parola)) {
//   console.log("La parola inserita è palindroma.");
// } else {
//   console.log("La parola inserita non è palindroma.");
// }

// ESERCIZIO PARI E DISPARI
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

const scelta = prompt("Scegli pari o dispari:");
const numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5:"));

const numeroComputer = Math.floor(Math.random() * 4) + 1;

const somma = numeroUtente + numeroComputer;

if ((scelta === "pari" && somma % 2 === 0) ) {
    console.log("Hai vinto");
} else {
    console.log("Ha vinto il computer");
}
