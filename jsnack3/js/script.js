/*
Descrizione: 
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
*/
const numberList = [];


//prima chiedi 10 numeri all’utente e li salvi nell’array
//const numberList = [Number(prompt('inserisci dieci numeri 1')) + Number(prompt('inserisci dieci numeri 2')) + Number(prompt('inserisci dieci numeri 3')) + Number(prompt('inserisci dieci numeri 4')) + Number(prompt('inserisci dieci numeri 5')) + Number(prompt('inserisci dieci numeri 6') + Number(prompt('inserisci dieci numeri 7')) + Number(prompt('inserisci dieci numeri 8')) + Number(prompt('inserisci dieci numeri 9')) + Number(prompt('inserisci dieci numeri 10')))];
console.log(numberList);

//Il software deve chiedere per 10 volte all’utente di inserire un numero.
for(let i = 0;i< 10 ;i++){
    numberList.push( prompt("Inserisci un numero!") );
}

let somma = 0;
//calcola somma
for(let i = 0 ; i < numberList.length; i++)
{
   

somma += Number(numberList[i]);
   
}
document.querySelector('.summary_ten_number').innerHTML = somma;
console.log(somma);


/* somma = 0;
//alternativa senza array
for(let i = 0; i<10;i++){
    let useNumber = prompt("Inserisci un numero!");
    somma += userNumber;
} */


