for (let i=0;i<=5 ;i++){
    console.log(i)
}
//exemple
let jours=["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"];
for (let j=0;j<=6;j++){
    console.log(jours[j])
}
//length


for (let j=0 ;j<=jours.length -1;j++){
    console.log(jours[j])
}

//in kital3o les indices
for (let j in jours ){
    console.log(j)
}

//of  kadiroha 
for (let j of jours ){
    console.log(j)
}
//while loop
let n;
n=10
while (n>=0){
    console.log(n)
    n-=1
}
//while do
let m =-1;
do{
    console.log(m)
    m -= 1
}
while(m>=0)
//for ech
let txtjours=" ";
jours.forEach(myfunction)
function myfunction(value,index,arry){
    txtjours +=" "+value;
    console.log(txtjours)
}
//console
//break
for (let j=0 ;j<=( jours.length -1);j++){
    if (j === 3){
        console.log("stop");
        break;
    }
    console.log(jours [j])
}
//continue
for (let j=0 ;j<=( jours.length -1);j++){
    if (j === 3){
        console.log("stop");
        continue;
     
    }
    console.log(jours [j])
}








