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
    list.push( Number(prompt('inserisci un numero')));
    console.log(list);

    //Se è dispari lo aggiungo alla lista vuota
    if (list[i] % 2 !== 0) {
       numberUser.push(list[i]);
    }
}
//Stampo il la lista nella console
console.log(numberUser);

