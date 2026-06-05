/*Programa un algoritme que compte de Y a 0 (cap enrere). Res més pot imprimir els valors parells. Ha de ser més gran que 10 o mostrarà un missatge d’error.
Exemple: x = 15;
	-> 14
	-> 12
	-> 10
	-> 8
	-> 6
	-> 4
	-> 2
	-> 0
*/

//Task1: Filtrar aquells valors més grans que 10.
//Task2: Fer el bucle que faci el compte enrere.
//Task3: Filtrar i imprimir per consola els valors parells

const errorMSG = "Error, el número ha de ser més gran de 10";
const minLimit = 10; //->Guardem en una constant el límit que marca l'enunciat, no és una variable que no canviarem.
let userNumber = 15

//Joc de proves: diferents valors per comprovar que el programa funciona bé en tots els tipus de casos. Podeu descomentar cada cas per veure si el programa fa el que s'espera segons l'enunciat.
//userNumber = 8; //->Per sota del límit
//userNumber = 10; //Just per sobre el límit
//userNumber = 20; //Un número parell, l'exemple és imparell. 

//Task1
if(userNumber<=10) { //-> L'enunciat diu que el compte en rere es fa si és MÉS gran de 10, per tant si és igual o més petit a 10 dona error.
    console.log(errorMSG);
}else{
    //Task2: Atenció!!! compte enrere des de el userNumber a 0. Per tant, el número a iterar comença igual al valor guardat en userNumber.
        // i>=0 -> la condició de permanència al for és que la "i" sigui més gran i IGUAL a 0. No res més">" per que a l'exemple surt imprés el 0!
        // i-- -> Al fer el compte enrere anem restant 1 a la "i" actual.
    for(let i = userNumber;  i>=0; i--){
        //Task3
        if(i%2==0 || i==0){
            console.log(i);
        }
    }
}
