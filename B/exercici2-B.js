/*Programa un algoritme que determina si una paraula és “palindrom”. Recordeu que una paraula és un palíndrom si es llegeix igual d’esquerra a dreta que de dreta a esquerra. 
Exemple1: s = “seves”
	->”És palindorm”
Exemple2: s = “array”
	->”No és palindorm”

*/

/*En aquesta versió de l'exercici el resoldrem creant un string on guardarem la paraula original de reveés. Despés comparem els dos strings. 
  Aquesta versió és ideal per a quan no us enrecordeu de les funcions fetes de les llibreries Array.
 	Task0: pasar l'string a minúscules. Per a fer una comparació neta de Majúscules i minúscules.
  	Task1: farem un bucle on lletra a lletra girarem la paraula en un nou string.
	Task2: compararem els dos strings.
*/

//Constants amb els dos possibles missatges. Estan preparats per ecandenar amb la paraula d'exemple per davant
const PalindromeMsg   = " és una paraula palídrom.";
const NoPalindromeMsg = " no és una paraula palíndrom.";

let userWord = "seves"; //Paraula a analitzar
let lowerCaseWord= "";  //Guardarem la paraula amb totes les lletres minúscules
let wordReversed = "";  //Guardarem la paraula girada

//Joc de proves
//userWord = "array"; //-> no polindrome
userWord = "Anna"; //-> Sí polindrome
//userWord = "Casa"; //-> no polindrome
//userWord = "radar" //-> Sí polindrome

//Task0
lowerCaseWord = userWord.toLowerCase();
//Per comprovar que ho fa ve, fem un console.log:
console.log("Comprovant la praula en minúscules: " + lowerCaseWord);

//Task1: sabem gràcies a la propietat "lenght" quina és la allargada de la paraula. Per tant, farem un "for".
	//Farem un bucle a la inversa, recorrecm primer la última lletra fins al final.
	// let i=lowerCaseWord.length -> La primera lletra a mirar serà la última: "seves".lenght = 5 -> si fem userWord[5] donarà error! la última posició és 4 (userWord[4]->'s'), per tant "lenght-1"
    // El for es farà fins quan? Fins a arribar a 0, aquest inclòs!! (userWord[0] -> 's') per tant, per el for es farà mentres i>=0.
	// i-- -> Al fer el compte enrere anem restant 1 a la "i" actual.

for( let i=lowerCaseWord.length-1; i>=0; i--){
	wordReversed = wordReversed + lowerCaseWord[i]; //Concatenem wordReversed amb la lletra que estem mirant de la userWord. 

	//Per comprovar que ho fa ve, fem un console.log:
	console.log("For: " + wordReversed);
}

//Per comprovar que ho fa ve, fem un console.log. Comprovar amb
console.log("Paraula girada: " + wordReversed);

//Task2
if (lowerCaseWord == wordReversed){
	console.log( userWord + PalindromeMsg);
}else{
	console.log(userWord + NoPalindromeMsg);
}
