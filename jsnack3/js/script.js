/*
Descrizione: 
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
*/


//prima chiedi 10 numeri all’utente e li salvi nell’array
const numberList = [Number(prompt('inserisci dieci numeri 1')) + Number(prompt('inserisci dieci numeri 2')) + Number(prompt('inserisci dieci numeri 3')) + Number(prompt('inserisci dieci numeri 4')) + Number(prompt('inserisci dieci numeri 5')) + Number(prompt('inserisci dieci numeri 6') + Number(prompt('inserisci dieci numeri 7')) + Number(prompt('inserisci dieci numeri 8')) + Number(prompt('inserisci dieci numeri 9')) + Number(prompt('inserisci dieci numeri 10')))];
console.log(numberList);
// poi fai un ciclo per sommare i valori dell’array
for (i = 0; i <= 10; i++){
    const numberUser = numberList[i];
    console.log('totale = ' + numberUser)
    const summaryElement = document.querySelector('.summary_ten_number');
    summaryElement.innerHTML = numberUser;
}
//poi fai la stampa della somma
//Associo elemento della DOM ad una constante
console.log(summary);
