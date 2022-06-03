alert("dom");
//--1. Addition
//--INFO--Je peux déclarer plusieurs variables à la suite
//Je déclare mes variables

var nb1, nb2, resultat;
//J'affiche des valeurs
nb1 = 10;
nb2 = 5;

//J'utilise mes variables avec un calcul

resultat = nb1 + nb2;
//J'affiche mon résultat dans la console
console.log(resultat);

//--2. Soustraction
//--Soustraction de nb1-nb2 avec "-"
resultat = nb1 - nb2;

//--3.Multiplication
//--Multipkication de nb1 * nb2 avec "*"
resultat = nb1 * nb2;
console.log(resultat)

//4.Division
//--Division avec l'opérateur */*

resultat = nb1 / nb2;
console.log(resultat);

//5.modulo
//--le modulo retourne le reste d'une division
//--modulo de nb1 % nb2 avec "%"
resultat = nb1 % nb2;
console.log(resultat);

//--et maintenant je ré-affecte une valeur à nb1
nb1 = 11;
resultat = nb1 % nb2;
console.log("le reste de la division de " + nb1 + "par" + nb2 + "est égal à :" + resultat);

//--6. Ecritures simplifiées
nb1 = 15;
nb1 = nb1 + 5; // égal à 20
nb1 += 10; //nb1 lui-même + quelque chose
console.log('Le résultat de "nb1 += 10;" est ' +nb1); 
//égal à 30, alternance de guillemets simples et doubles pour ne pas casse la chaîne de caractéres.


//le raccourci est le même avec autres opérateurs =, -, /, *, %
//Si j'utilise un ' dans une phrase concaténée, je peux échapper le caractère avec*\*
//Fin