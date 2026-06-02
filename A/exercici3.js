/*Programa un algoritme que donat un array de números mostri els elements segon i penùltim. Realitza la seva suma i digues si el resultat és parell o senar.
Exemple1: [1, 3, 2, 4, 9 ,6]
	->”El segon número és: 3”
	->”El penùltim número és: 9”
	->”El resultat és: 13. És senar”
    */

//Constants
const MsgError = "Error. L'array no te prou valors!"  //Per lógica el mínim de valors que ha de tenir l'array és 3.
const MsgSecondNumber = "El segon número és: ";
const MsgPenultimateNumber = "El penúltim número és: ";
const MsgResultNumber = "La suma dona: ";
const MsgOddNumber = " És senar";
const MsgEvenNumber = " És parell";

//Variables
let userArr = [1, 3, 2, 4, 9 ,6];
let secondNumber = 0;
let penultimateNumber = 0;
let finalMsg = "";
let result = 0;

//Joc de proves
//userArr = [4, 2, -1, 6, -3 ,5, -6, 7];
//userArr = [4, 2, -1];
//userArr = [4, 2];  //Què pasa si l'array te res més dos valors?
//userArr = [-1];    //Que pasa si l'array té 1 sol valor

//Task0: filtrar si l'allargada de l'array és igual o superior a 3
if (userArr.length < 3){
    console.log(MsgError);
}else{  //Si l'array compleix seguim, però dins del else:

    //Task1: captura el segon i el penùltim de QUALSEVOL ARRAY

    secondNumber = userArr[1];      // El 1 és l'index del segon valor d'un array
    penultimateNumber = userArr[userArr.length-2];    //No sabem quin index serà el penultim. Per tant el calculem: mirant la llargada total. Si restem -1 aquest serà l'últim valor. -2 és el penultim.

    //Prova tu mateix/a, quin d'aquestes lineies retorna el PENULTIM valor de l'array:
        //console.log(userArr.length)
        //console.log(userArr.length-1)
        //console.log(userArr.length-2)

    console.log(MsgSecondNumber + secondNumber);
    console.log(MsgPenultimateNumber + penultimateNumber);

    //Task2: Càlculs
    resultat = secondNumber + penultimateNumber;

    //Task3: el resultat, dir si és parell o senar.
    finalMsg = MsgResultNumber + resultat;

    if (resultat % 2 == 0){
        finalMsg = finalMsg + MsgEvenNumber;
    }else {
        finalMsg = finalMsg + MsgEvenNumber;
    }
    console.log(finalMsg);

}