// alert("hi");
//alert("Hi");
/*La concaténation*/

var annee = 2017; //Différents types de variables.

var futur =5;
var calcul = annee + futur;
console.log(calcul);
document.write(calcul +"<br>");

var mois = "6";
var calcul2 = annee + mois;
console.log(calcul2); //<br> parce que pas de calcul avec les strings.
document.write(calcul2 + "<br>");

var DebutPhrase ="Aujourd'hui";
var NbStagiaires = 11;
var SuitePhrase = "stagiaires";
var finPhrase = "Sont présents.";

document.write(DebutPhrase + NbStagiaires + SuitePhrase + " " + finPhrase);
//Le " " est utile quand on a des données récupérées directement de l'utilisateur