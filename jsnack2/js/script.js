/* 
Descrizione: 
Snack 2:
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga. 
*/

//Associo elemento della DOM ad una constante
const lengthBestElement =document.querySelector('.length_best')

//Creo due propmt e chiedo di inserire due numeri
const lengthOnePrompt = prompt('inserisci qui una parola');
const lengthTwoPrompt = prompt('inserisci qui una seconda parola');

//Confrontali se il primo numero inserito > secondo numero inserito allora stampa nel tag .number_best il risultato
if(lengthOnePrompt.length > lengthTwoPrompt.length) {
    //console.log(lengthOnePrompt.length);
    lengthBestElement.innerHTML = 'La parola più Lunga è ' + lengthOnePrompt;
} else if(lengthOnePrompt.length < lengthTwoPrompt.length) {
    //console.log(lengthOnePrompt.length);
    lengthBestElement.innerHTML = 'La parola più Lunga è ' + lengthTwoPrompt;
}