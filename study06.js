//function แบบปกติทั่วไป
//parameter คือ ตัวแปรทประเภทหนึ่งเขียนอยู่ในวงเล็บหลังชื่อ function เพื่อใช้รับค่าจากคนเรียกใช้ function นั้นๆ
//return คือ ค่าที่ function นั้นๆ ส่งกลับมาให้กับคนเรียกใช้ function นั้นๆ

//1. no parameters
function sayHello() {
    console.log("Hi!");
    console.log("555");
}
//2. have parameters, no return
function sumNumbers(n1, n2, n3) {
    console.log(n1 + n2 + n3);
    console.log(`${n1} + ${n2} + ${n3} = ${n1 + n2 + n3}`);
    console.log(555);
}

//3. no parameters, has return
function shoWow() {
    console.log("no way!");
    return "way no!"
}

//4. have parameters, has return
function showSong(songName) {
    return ` ${songName}อยู่ ไม่ไหว ๆ`
}

//เรียกใช้ call function
sayHello();
sumNumbers(1, 2, 3); //ข้อมูลที่ให้กับ parameter เรียกว่า argument
console.log(shoWow());
console.log(showSong('ทำใม'));

let result = shoWow();
console.log(result);

console.log(showSong('ไม่รู้'));