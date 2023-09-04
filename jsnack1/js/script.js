/* 
Descrizione: :
-Snack 1:
    L’utente inserisce due numeri in successione, con due prompt.
    Il software stampa il maggiore.
 */
//Associo elemento della DOM ad una constante
const numberBestElement =document.querySelector('.number_best')

//Creo due propmt e chiedo di inserire due numeri
const numberOnePrompt = prompt('inserisci qui un numero');
const numberTwoPrompt = prompt('inserisci qui un secondo numero');

//Confrontali se il primo numero inserito > secondo numero inserito allora stampa nel tag .number_best il risultato
if(numberOnePrompt > numberTwoPrompt) {
    //console.log(numberOnePrompt);
    numberBestElement.innerHTML = 'il numero maggiore è ' + numberOnePrompt;
} else if(numberOnePrompt < numberTwoPrompt) {
    //console.log(numberOnePrompt);
    numberBestElement.innerHTML = 'il numero Maggiore è ' + numberTwoPrompt;
}