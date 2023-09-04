/*
Descrizione: 
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
*/

const numberOne = Number(prompt('inserisci dieci numeri 1'));
const numberTwo = Number(prompt('inserisci dieci numeri 2'));
const numberThree = Number(prompt('inserisci dieci numeri 3'));
const numberFour = Number(prompt('inserisci dieci numeri 4'));
const numberFive = Number(prompt('inserisci dieci numeri 5'));
const numberSix = Number(prompt('inserisci dieci numeri 6'));
const numberSeven = Number(prompt('inserisci dieci numeri 7'));
const numberEight = Number(prompt('inserisci dieci numeri 8'));
const numberNine = Number(prompt('inserisci dieci numeri 9'));
const numberTen = Number(prompt('inserisci dieci numeri 10, ultimo'));

const summary = (numberOne + numberTwo + numberThree + numberFour + numberFive + numberSix + numberSeven + numberEight + numberNine + numberTen);
console.log(summary);
//Associo elemento della DOM ad una constante
const summaryElement = document.querySelector('.summary_ten_number');
summaryElement.innerHTML = summary;
console.log(summary);
