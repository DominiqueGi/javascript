// //alert('test');
// //--Structure de base IF
// if (true){// par défaut la condition vérifie si le if est vrai

// }

// var nb1 = 10;
// if(nb1 < 50){
//     console.log("nb1 est bien inférieur à 50");
// }

// if (true){
//     //code si vrai
// }else {
//     //code si faux
// }

// if(nb1 > 50){
//     console.log("nb1 est supérieur à 50");}
//     else{
//         console.log("nb1 n'est pas supérieur à 50");
//     }
//exercice
//On utilise le if pour vérifier lâge de l'internaute.
//s'il est majeur je lui souhaite la bienvenue
//s'il est mineur je [1] lui signale et [2] le renvoie vers un autre site

//1--je déclare la majorité légale
var MajoriteFR = 18;
//2--Demander l'âge en s'assurant que nous avons un nombre
var age = parseInt(prompt("indiquez votre âge ?"));

//3--Vérification
if(age >= MajoriteFR){// Bienvenue je lui signale
    alert("Bienvenue, vous êtes majeur");
}else{
    //s'il est mineur je lui signale
    alert("Allez voir un autre super site...");
    // et ensuite je redirige vers w3c
    document.location.href = "https://www.w3schools.com/js/js_if_else.asp";

}

