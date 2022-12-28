//Exercice 1 : Énoncé Simple Si/Sinon
let x = 4;
let y = 8;
if (x > y ){
    console.log(x + "  est le nombre le plus grand");
}
else {
    console.log( y + " est le plus grand");
}

//Exercice 2 : Chihuahua
let newDog = "Chihuahua" ;
console.log(newDog.length);
console.log(newDog.toUpperCase());
console.log(newDog.toLowerCase());
if (newDog == "Chihuahua"){
    console.log("J’adore les chihuahuas, c’est ma race de chien préférée");
}
else {
    console.log("Je m’en fiche, je préfère les chats");
}
//Exercice 3 : Pair Ou Impair
let nombre = prompt("Entrer un nombre");
if(nombre % 2 == 0 ){
    console.log( nombre + "  est un nombre pair");
}
else{
    console.log( nombre + "  est un nombre impair");
}

//Exercice 4 : Discussion De Groupe
const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
switch(users.length){
    case 0:
        console.log(" personne n est en ligne");
        break;
    case 1:
        console.log( users[0] + " est en ligne ");
        break;

    case 2: 
    console.log( users[0] + " et " + users[1] + " sont en ligne ");
    break;

    default:
        let nombre = users.slice(2);
    console.log( users[0] + "    ,  " + users[1] + " et le nombre d'utilisateur suplémentaire est : " +  nombre.length );
    break;

}



