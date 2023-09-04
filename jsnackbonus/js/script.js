/*
Descrizione: 
Snack Bonus:
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.
*/
//Creo array list con numeri pari al'interno
const list = [0,2,4,6,8,10];
console.log(list);

let listElement = document.querySelector('.number_insert_list');


//Chiedo sei volte all'utente di inserire un numero
const numberOne = Number(prompt('Inserisci qui un numero 1'));
const numberTwo = Number(prompt('Inserisci qui un numero 2'));
const numberThree = Number(prompt('Inserisci qui un numero 3'));
const numberFour = Number(prompt('Inserisci qui un numero 4'));
const numberFive = Number(prompt('Inserisci qui un numero 5'));
const numberSix = Number(prompt('Inserisci qui un numero 6'));
let numberAllList = [numberOne,numberTwo,numberThree,numberFour,numberFive,numberSix];
let access = false;
for (let i = 0; i != 5; i++){
    if (i === list){
        access = true;

        console.log(i +' già presente');
        
    } else{
        console.log(i +'peccato');
    } /* else if (numberThree > list){
        listElement.innerHTML = numberThree + (' Hai perso!, peccato XO');
    } else if (numberFour > list){
        listElement.innerHTML = numberFour + (' Hai perso!, peccato XO');
    } else if (numberFive > list){
        listElement.innerHTML = numberFive + (' Hai perso!, peccato XO');
    } else if (numberSix > list){
        listElement.innerHTML = numberSix + (' Hai perso!, peccato XO');
    } */
    console.log(i);
}
    
    /*  else if (numberThree !== list){
}
    listElement.innerHTML = machineNumber + (' Hai perso!, peccato XO')
} else if (numberFour !== list){
    listElement.innerHTML = machineNumber + (' Hai perso!, peccato XO')
} else if (numberFive !== list){
    listElement.innerHTML = machineNumber + (' Hai perso!, peccato XO')
} else if (numberSix !== list){
    listElement.innerHTML = machineNumber + (' Hai perso!, peccato XO')
} */