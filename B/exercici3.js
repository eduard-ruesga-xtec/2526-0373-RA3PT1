/*Programa un algoritme que donat un array de números retorni si el total de números és parell o senar. També ha d’imprimir el número que hi ha al mig.
Exemple1: [1, 3, 2, 4, 9 ,6]
	->”Té una allargada parell”
	->”Número del mig: 2”
Exemple2: [7, 5, 4, 3, 9 , 6, 8]
	->”Té una allargada senar”
	->”Número del mig: 3”
*/

//Task1: comprovar si la llargada és parell o senar. Vigilar! i si està buida?
//Task2: definir quin és el valor del mig en cas de llargada parell. Mig-1 (segons exemple)
//Task2: Trobar el valor que està al mig de l'array. 
//Task3: Imprimir el valor trobat

const MsgLengthArrayOdd  = "Té una allargada és senar";
const MsgLengthArrayEven = "Té una allargada és parell";
const MsgEmptyArray      = "L'array és buida";

let userArray = [1, 3, 2, 4, 9 ,6];
let evenLenght = false;
let halfPosition = 0;
let halfValue = 0;

//Joc de proves
userArray = [7, 5, 4, 7, 9 , 6, 8]; //Exemple d'allargada senar
//userArray = [4]; //exemple amb un sol valor
//userArray = [];  //exemple d'un array buit

//Task1: guardaré en un booleà si és parell o senar "evenLength"
    //Primer mirem si l'array és buida que és lenght==0. Miro també que l'array estigui inicialitzat, que és el mateix que mirar si és NULL. Aquestes dues condicions van enllaçades
    // amb un OR (si és una o l'altre)
if(userArray == null || userArray.length == 0){
    console.log(MsgEmptyArray);
    halfPosition = -1; //Per saber que no hi ha punt mig!
} else if (userArray.length % 2 == 0){  //Pregunem si la allargada és parell.
    console.log(MsgLengthArrayEven);
    evenLenght = true;
}else{
    console.log(MsgLengthArrayOdd);
    evenLenght = false;  //-> No caldria, ja que he inicialitzat el valor de la variable a false.
}

//Task2: aquí per determinar el punt mig, el if es podria tornar a preguntar userArray.length % 2 == 0
if (evenLenght){
    halfPosition = (userArray.length/2)-1;
}else{
    //Si és senar, la divisió no queda entera, i no es pot accedir a una posició d'un array amb decimals (NO userArray[2'5])..
    //Per tant podem obtenir un número enter per matematiques
    //O forçant la variable a integer (enter)
    halfPosition = parseInt(userArray.length/2);
}

//Per comprovar que ho fa ve, fem un console.log. Comprovar amb
console.log("La posició del mig és: " + halfPosition);

//Task3
console.log("El número del mig és: " + userArray[halfPosition])