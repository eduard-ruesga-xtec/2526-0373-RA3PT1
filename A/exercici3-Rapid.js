/*Programa un algoritme que donat un array de números mostri els elements segon i penùltim. Realitza la seva suma i digues si el resultat és parell o senar.
Exemple1: [1, 3, 2, 4, 9 ,6]
	->”El segon número és: 3”
	->”El penùltim número és: 9”
	->”El resultat és: 13. És senar”
    */

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
    console.log("Error. Ha de tenir 3 o més valors");
}else{  //Si l'array compleix seguim, però dins del else:

    //Task1: captura el segon i el penùltim de QUALSEVOL ARRAY
    
    console.log("Segon valor de l'array: " + userArr[1]);
    console.log("Penúltim valor de l'array: " + userArr[userArr.length-2]);

    //Task2: Càlculs
    resultat = userArr[1] + userArr[userArr.length-2];
    console.log("La suma dona " + resultat)
    //Task3: el resultat, dir si és parell o senar.

    if (resultat % 2 == 0)console.log("És parell");
    else console.log("És senar");

}