let v: any = 1;
v = v + "1";
console.log(v);

let a = [7, true, "Hallo"];
console.log(a[2]);

let s = {"zahl": 7, "wahr": true, text: "Hallo"}
console.log(s[4]);

interface MapStringToBoolean {
    [key: string]: boolean;
}
let d: MapStringToBoolean = {"wert1": true, "wert2": false};
console.log(d.wert1);

interface VectorWithMeaning {
    x: number;
    y: number;
    meaning: string;
}
let vector: VectorWithMeaning = {x: 12.4, y: -7.2, meaning: "Ortsvektor"};
console.log(vector)

interface Student {
    name: string;
    matrikel: number;
    grades: [module: string] : number;
}
let students: Student[] = [];
students.push({name: "Big Brain", matrikel: 123456, grades: {"EIA1": 1.3 , "EIA2": 1.0}});
console.log(students)

// Ich kann nicht wirklich erklären wie's funktioniert verstehe es aber irgendwie//
function isDivisible(dividend, divisor) {return (dividend % divisor == 0)};
console.log(isDivisible(5, 2.5));

function isDivisible2(_dividend:number, _divisor: number): boolean {
    let result:boolean = (_dividend % _divisor ==0);
    return result;
}
console.log(isDivisible2(10,4));

let v1 = [3, 6, 2];
let v2: Number;

v2 = v1;
console.log(v1);
console.log(v2);