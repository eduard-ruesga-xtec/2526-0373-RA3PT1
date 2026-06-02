/* Programa un algoritme que donat un string imprimeixi per pantalla l’string a la inversa. On totes les ‘a’ (minuscules) han canviat per un 4.
   Exemple: s = “Hola caracola”;
              -> “4loc4r4c 4loH”

*/

//variables:
let workinString = ""; //Deixo la variable string inicialitzada, però sense cap caràcter.
let outString = "";  //String final
let userString = "Hola caracola";

//Joc de proves
//userString = "Faraona";
//userString = "En un lugar de la mAnchA";


//Task1: canviar 'a' de l'string per un 4 -> res més he de canviar les a minúscules

workinString = userString.replaceAll("a", "4");

//Task1-test:
//console.log(outString);

//Task2: donar la volta al string

//Métode 1: (girar-lo manualment)
    //Faré un bucle que recorre l'string des del final fins al l'inici i cada lletra la guardaré en un nou string.

for (let i =workinString.length-1; i>=0; i--){
    outString = outString + workinString[i]; //Recordeu que outstring anirant concatenant amb el character de workstring[i]. El simbol "+" ajunta strings.
}

console.log(outString);
