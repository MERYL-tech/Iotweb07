// Operator
// 1. Arithmetic Operators + - * / % **
console.log(10 + 3);
console.log(10 + 3);
console.log(10 - 3);
console.log(10 * 3);
console.log(10 / 3);
console.log(10 % 3);
console.log(10 ** 3);
console.log('*********************************');
// 2. Comparison Operators > < >= <= == === != !==
// เปรียบเทียบค่าของตัวเลขหรือข้อความ
//เลข0 > ตัวอักษรใหญ่A > ตัวอักษรเล็กa
console.log('Sombat' < 'Somchai'); // true
console.log('sau' >= 'SAU'); // true 
console.log('Io5T' <= 'I37'); // false
console.log("5" == 5); // true
console.log("5" === 5); // false
console.log('*********************************');
// 3. Logical Operators && || !   
console.log(true && true); // true
console.log(true && false); // false
console.log(true || false); // true
console.log(!true); // false
console.log('*********************************');
//4. Increment and Decrement Operators ++ --
let a = 10 , b = 100;
console.log(a++); // 10
console.log(--b); // 99
//5. Ternary Operator___?___:___ ⭐⭐⭐ใช้บ่อยเห็นบ่อย⭐⭐⭐
// ตรวจสอบเงืหน้าเครื่องหมาย  ? หากจริงได้หลัง ? หากเท็จได้หลัง :
let score = 35;
console.log(score >= 50? "Pass" : "Not Pass");
console.log('*********************************');
// 6. Assignment Operators = += -= *= /= %= **=
// 7. Nullish Coalescing Operator && ⭐กันสับสนกับ Logical
// ใช้ตรวจสอบ null
let x = 30;
let y = null;
console.log(x && "Welcome");
console.log(y && "hello");