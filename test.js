var speedLimit= 40;
var mySpeed= 45;

if (mySpeed > speedLimit) {
    console.log("Slow Down! Mom is mad!");
} else if(mySpeed == speedLimit) {
    console.log("Everyone is happy!");
} else {
    console.log("Speed up! Dad is mad!");
}

var alarmSet= true;
var openDoor= false;

if (alarmSet && openDoor) {
    console.log("Sound Alarm!");
}else {console.log("Everything is fine.");}

var userName = "Timmy456"
var password = "6789"

if (userName == "Tommy123" && password=="12345" || userName== "Timmy456" && password=="6789" ) {
        console.log("Admin login successful.");}
    else {console.log("Admin access denied.");}

var studentClass; 

var studentGrade = 1

switch (studentGrade) {
    case "K":
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        studentClass= "Elementary";
    break;
    case 7:
    case 8:
        studentClass= "Middle";
    break;
    case "9":
        studentClass= "Freshman";
    break;
    case "10":
        studentClass= "Sophomore";
    break;
    case "11":
        studentClass= "Junior";
    break;
    case "12":
        studentClass= "Senior";
    break;
    default:
        console.log("Error");
}

for(let i=10; i >= -10; i--){
    console.log(i);
}

var n=1
do {
    console.log(n);
    n++;
} while (n<=50);

var n=1
do {
    console.log(n%4);
    n++;
} while (n<=50);

for(let i=11; i<100; i++){
    console.log(i);
}