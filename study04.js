// Control Statement คำสั่งควบคุม
// Conditional/Selection Statement
//if, if-else, if-else-if, switch
let num = 50;
if (num > 30) {
  console.log("Wow...");
}

//---------------------
let university = "CU";

if (university === "SAU") {
  console.log("South East Asia University");
} else {
  console.log("Noooooo");
}
//---------------------
let score = 63;
if (score >= 80) {
  console.log("A");
} else if (score >= 70) {
  console.log("B");
} else if (score >= 60) {
  console.log("C");
} else if (score >= 50) {
  console.log("D");
} else {
  console.log("F");
}

//---------------------
let day = 5;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  default:
    console.log("Invalid day");
}

