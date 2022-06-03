//alert("hey");
//L'opérateur de comparison == signifie "égal à"
//Il permet de vérifier l'égalité de deux valeurs.

var nb1 = 123;
var nb2 ="123";
console.log(nb1 == nb2);// retournr true

// === signifie "strictement égal à"
//Permet de vérifier la valeur et le type

console.log(nb1 === nb2);//Retourne false

//--L'opérateur != signifie différent de .....en valeur

console.log(nb1 != nb2); //Retourne false

//--L'opérateur!==signifie strictement différent de.....en valeur et en type
console.log(nb1 !== nb2); //retourne true

//Exercice
/*J'arrive sur un espace sécurisé au moyen du prénom et de l'âge.
Je dois saisir mes prénom et âge pour être authentifié sur le site ( les infos sont en BDD, ici dans mes variables
    prénom et âge).
    En cas d'échec une alerte m'informe du problème.
    Si tout se passe bien, un message de bienvenue m'accueille.*/

    var prenom, monAge;
    prenom = "Nouha";
    monAge = 20;

    //1-----Demander son prénom à l'utilisateur avec un prompt.

    var prenomLogin = prompt("Quel est votre prénom ?");
    //2--Je vérifie si le prénom saisi (prenomLogin) correspond à celui de donnée (prénom).

    if(prenomLogin === prenom){
        // alert('test');
        //2a.Si tout est ok, je continue la vérification avec l'âge
        //2a1. Demande à mon utilisateur son âge via un prompt

        var ageLogin = parseInt(prompt("Votre âge ?"));
        if(ageLogin === monAge){
            alert("Bienvenue " + prenomLogin);
                    }else{
                        //2a2. Si les âges ne correspondent pas, je lance une alerte.
                        alert("Erreur d'âge");
                    }

    }else{
        //2b.Si les prénoms ne correspondent pas je lance une alerte.
        // alert("Attention, prénom non reconnu");
    }

    var prenom, monAge, mdp;
    prenom = "Tom";
    monAge = 28;
    mdp = "bibi";

    var (prenomLogin === prenom){
        var ageLogin = parseInt(prompt("Votre âge ?"));
        if(ageLogin === monAge){
            var ageLogin = prompt("le mot de passe ?");
            if (mdpLogin === mdp){
                alert("Bienvenue" + prenomLogin);
            }else{
                alert("Pb de mot de passe !");
            }
        }else{
            alert("Erreur d'âge");_
        }
    }else{
        alert("Attention, prénom non reconnu");
    }

    
