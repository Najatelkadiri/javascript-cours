






//les donctions flechees
   /* let a = function (){
        return console.log("helloo!!javascript")
    };

    let greet=() => console.log("helloo!!python")

    let nomcomplet=(nom,prenom) => {
      let fullnam=nom+""+prenom;
        return fullnam
    
    console.log(nomcomplet("meriem","feyd"))*/

//les expressions lambdas 
    //let days=["lundi","mardi","mercredi","vendredi","samedi",]
    //days.map((item) => {
       //return console.log(item)
    //})

/*let stagaire=[
    {prenom:"meriem",nom:"feyd",age:18},
    {prenom:"meryem",nom:"elfakiri",age:20},
    {prenom:"najat",nom:"feyd",age:19},
    {prenom:"hanaa",nom:"barad",age:24}
];
let a = {nom:"feyd"}
a["prenom"] = "meriem"
a.age = 24
let b;
b={...a,id : 1}
console.log("hay",b);

/*stagaire.map((complet)=>{
    nomcomplet= nomcomplet+"nom"
    return console.log(nomcomplet);
})
stagaire.map((complet)=>{
    nomcomplet= complet["nom"]+""+complet["age"]
    return console.log(nomcomplet);
})*/


//les fonctions la premiere methode
let sm;
function somme(a,b){
    return a + b
}
sm = somme(5,10)
console.log(sm)

//les fonctions la deuxieme methode fonction anonime mafihache smya
//function expressions

const somme=function (a,b){
    return a + b
}
console.log(somme(10,6))

// arrow function

const somme= (a,b)=>{
    return a + b
}
console.log(somme(10,6))

// arrow function methode 2
const greet= (nom)=>{
    return "bonjour"
}
console.log(greet(feyd)) //nsayfto parametre cankatboha fa ligne lifihe fleche wasste greet 

// forEtch catbokli lina 3la liste
const days = ["lundi", "mardi","mercredi","jeudi","vendredi","samedi"]
days.forEach(function(value,index,array)){
    console.log("ok!!!")
}
