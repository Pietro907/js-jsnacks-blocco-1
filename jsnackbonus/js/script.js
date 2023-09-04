/*
Descrizione: 
Snack Bonus:
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.
*/
//Creo array list vuoto
const numberUser = [];
const list = [];

//Chiedo sei volte all'utente di inserire un numero
for(let i = 0; i < 6; i++) {
    numberUser.push( Number(prompt('inserisci un numero')));
    console.log(list);
    //Se è dispari lo aggiungo alla lista vuota
    if (numberUser % 3 !== 0) {
       list.push(numberUser);
    }
}
console.log(numberUser);


/* // array vuoto
const numbers = [];
const userNumbers = [];

// chiedo all'utente di inserire 6 numeri casuali
for (let i = 0; i < 6; i++) {
    
    userNumbers.push(Number(prompt(`Tasks ${i}, type here a random number.`)));
    // loggo in console i numeri inseriti dall'utente
    console.log(userNumbers);

    // se il numero inserito è dispari lo inserisco nell'array e vado al prossimo numero fino a controllarli tutti
    // se il numero inserito è pari lo ignoro e passo al prossimo numero fino a controllarli tutti
    if (userNumbers[i] % 2 !== 0) {

        numbers.push(userNumbers[i]);

    }
    
}
console.log(numbers); */
