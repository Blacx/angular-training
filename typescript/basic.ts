// Primitives
let age: number;
age = 2;

let nama: string;
nama = "Whisnu";

let nullVariable: null;

// Complex Types
let hobbies: string[];
hobbies = ["Swimming", "Cycling"];

let person;
person = {
    name: 'Whisnu',
    age: 10
}

let anotherPerson : {
    name: string,
    age: number
}
anotherPerson = {
    name: 'whisnu',
    age: 10
};

let people : {
    name: string,
    age: number
}[];
people = [
    { name: 'Whisnu A', age: 10 },
    { name: 'Whisnu B', age: 11 },
    { name: 'Whisnu C', age: 12 },
];

let data = 'Teks';
//data = 12;

let unionVar: string | number | boolean;
unionVar = "abc";
unionVar = 12;

let anyVar: any;

// Alias
type Kendaraan = {
    warna: string;
    roda: number;
}

let kendaraan1: Kendaraan;
let kendaraan2: Kendaraan;
kendaraan1.warna = 'Merah';
kendaraan1.roda = 2;

function addition(a: number, b: number): number
{
    return a + b;
}
var result = addition(2, 5);
//var result = addition('2', 5);
console.log(result);

function hello(): void {
    console.log('Halo dunia!');
}

