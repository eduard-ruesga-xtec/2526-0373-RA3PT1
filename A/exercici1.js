/*Programa un algoritme que compte de 0 a X de 10 en 10. X ha de ser més gran que 10 o mostrarà un missatge d’error.
Exemple: x = 55;
	-> 0
	-> 10
	-> 20
	-> 30
	-> 40
	-> 50

    */

const ErrorMsg = "Error, el número d'entrada ha de ser superior a 10. El número inserit és: ";
let minNum  = 10;
let counter = 10;
let iterator = 0;

//Joc de proves:
let userInt = 55;
//let userInt = 9;
//let userInt = 10; //Prova el número límit!
//let userInt = 80;

if(userInt<=minNum){ //Enunciat diu que ha de ser més gran que 10. Com no diu =10, s'enten que el 10 no està inclòs.
    console.log(ErrorMsg + userInt);
}else{
    //Bucle per a comptar
    while(iterator <= userInt){
        //Fer el que mana l'enunciat, que es log del compte
        console.log(iterator);

        //Actualitzar l'iterador
        iterator = iterator + counter;
    }
}