// Loop/Repetition/Iteration Statement
// for, while, do-while

//--------------------- while loop
let x = 1;
while (x <= 5) {
  console.log(x, 'Hello...');
  x++;
}

//--------------------- do-while loop
let y = 1;
do {
  console.log(`${y} Hey...`);
  ++y;
} while (y <= 5);

//--------------------- for loop
for (let i = 1; i <= 5; i++) {
  console.log(`${i} Hi...`);
}