let day;

switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
    default:
        day = "Unknown Day";
}

console.log("Today is " + day);
//exemple
let abreviation;
let labelle;
abreviation="Id"
 
switch ( abreviation){
    case"dd":
        labelle="developpement dighital";
         break;
    case"Id":
        labelle=" infrastructure digital";
        break;
    case"MEC":
        labelle="mecanique";
        break;

    default:
        labelle="unknown obreviation";
}
console.log(labelle);


