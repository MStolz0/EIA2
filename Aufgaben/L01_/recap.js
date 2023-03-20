let v = 1;
v = v + "1";
console.log(v);
let a = [7, true, "Hallo"];
console.log(a[2]);
let s = { "zahl": 7, "wahr": true, text: "Hallo" };
console.log(s[4]);
let d = { "wert1": true, "wert2": false };
console.log(d.wert1);
let vector = { x: 12.4, y: -7.2, meaning: "Ortsvektor" };
console.log(vector);
let students = [];
students.push({ name: "Big Brain", matrikel: 123456, grades: { "EIA1": 1.3, "EIA2": 1.0 } });
console.log(students);
// Ich kann nicht wirklich erklären wie's funktioniert verstehe es aber irgendwie//
function isDivisible(dividend, divisor) { return (dividend % divisor == 0); }
;
console.log(isDivisible(5, 2.5));
function isDivisible2(_dividend, _divisor) {
    let result = (_dividend % _divisor == 0);
    return result;
}
console.log(isDivisible2(10, 4));
let v1 = [3, 6, 2];
let v2;
v2 = v1;
console.log(v1);
console.log(v2);
//# sourceMappingURL=recap.js.map