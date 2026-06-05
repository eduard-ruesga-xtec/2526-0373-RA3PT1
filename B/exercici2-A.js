/*Programa un algoritme que determina si una paraula és “palindrom”. Recordeu que una paraula és un palíndrom si es llegeix igual d’esquerra a dreta que de dreta a esquerra. 
Exemple1: s = “seves”
	->”És palindorm”
Exemple2: s = “array”
	->”No és palindorm”

*/

/*En aquesta versió de l'exercici el resoldrem amb funcions de la llibreria array. Dins de les funcions de String (si ho reviseu) no existeix una funció que ens faci la reversió lletra a lletra.
  La idea és pasar l'string a array, girar-lo amb la funció "reverse", tornar a pasar a string i per últim comprovar si són iguals.
	Task0: pasar l'string a minúscules. Per a fer una comparació neta de Majúscules i minúscules.
  	Task1: pasar l'string a una nova array.
	Task2: fer el reverse de l'array
	Task3: pasar l'array a String amb la funció "join"
	Task4: Comprovació si són iguals
*/

//Constants amb els dos possibles missatges. Estan preparats per ecandenar amb la paraula d'exemple per davant
const PalindromeMsg   = " és una paraula palídrom.";
const NoPalindromeMsg = " no és una paraula palíndrom.";

let userWord = "seves"; //Paraula a analitzar
let lowerCaseWord= "";  //Paraula amb totes les lletres minúscules
let wordReversed = "";  //Paraula girada
let wordArray = [];     //Array on treballarem el reverse.

//Joc de proves
//userWord = "array"; //-> no polindrome
//userWord = "Anna"; //-> Sí polindrome, amb una majúscula
//userWord = "Casa"; //-> no polindrome, amb una majúscula
//userWord = "radar" //-> Sí polindrome

//Task0
lowerCaseWord = userWord.toLowerCase();
//Per comprovar que ho fa ve, fem un console.log:
console.log("Comprovant la praula en minúscules: " + lowerCaseWord);

//Task1
wordArray = lowerCaseWord.split(""); //-> La funció split sense caràcter ens separarà tot l'string lletra a lletra en un array.
//Per comprovar que ho fa ve, fem un console.log:
console.log("Comprovant array: " + wordArray);

//Task2
wordArray = wordArray.reverse();
//Per comprovar que ho fa ve, fem un console.log. Compte! Per provar-ho fer-ho amb una paraula no polindromica.
console.log("Comprovant array: " + wordArray);

//Task3: 
wordReversed = wordArray.join("");
//Per comprovar que ho fa ve, fem un console.log:
console.log("Comprovant el nou string: " + wordReversed);

//Task4:
if (lowerCaseWord == wordReversed){
	console.log( userWord + PalindromeMsg);
}else{
	console.log(userWord + NoPalindromeMsg);
}

