// Single Line Comment

/*
Multi Line Comment
*/

// คำสั่ง console.log() สำหรับ Dev โยเฉพาะ ***
// ใช้แสดงข้อความใน Console ของ Browser หรือ Terminal ของ VS Code
// พ่น String
console.log("AAAAA"); // แสดงข้อความ AAAAA ใน Console
console.log("BBBBB"); // แสดงข้อความ BBBBB ใน Console
console.log(`CCCCC`); // (Alt+9+6  `ตัวหนอน`)
//Number
console.log(11111); // Integer
console.log(22222.2222); // float
// Boolean
console.log(true); // แสดงข้อความ true ใน Console
console.log(false) // แสดงข้อความ false ใน Console
// Array *** แต่ละข้อมูลใน Array มี Index เริ่มจาก 0 แต่มองไม่เห็น Index
console.log([1, 2, 3, 4, 5]); // แสดงข้อความ [1, 2, 3, 4, 5] ใน Console
console.log(["1", "2", "true", "ABCD", "1.123"]); // แสดงข้อความ ['1', '2', 'true', 'ABCD', '1.123'] ใน Console
// Object *** แต่ละข้อมูลใน Object มี Key กำกับและมองเห็น
console.log({
  //key : value (number, string, boolean, array, object,...)
  name: "Iot",
  age: 31,
  gender: "Male",
  isStudent: false,
  food: ["KFC", "Pizza", "Hamburger"],
  address: {
    province: "Bangkok",
    country: "Thailand",
  },
});
//undefined ไม้ได้กำหนดค่าใด ๆ ให้ตัวแปร
console.log(undefined);

//null ไม่รู้ว่ามีค่าอะไร
console.log(null);
// NaN ไม่ใช่ตัวเลข (Not a Number) เกิดจากการคำนวณที่ผิดพลาด
console.log(NaN);
console.log("man" / 55); // แสดงข้อความ NaN ใน Terminal
