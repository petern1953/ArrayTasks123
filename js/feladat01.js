'use strict';

// Írj egy olyan függvénykifejezést, ami paraméterként vár egy egész számokat tartalmazó tömböt!
//     (Inputellenőrzést nem kell végezni.)
// A függvény szorozza meg tömbelemek értékét 1.27-tel, majd pedig térjen vissza az elemek összegével!

const intArray = [1, 2, 3, 4, 5, 6, 7];

const prodSumItems = intArray.map(item => item * 1.27);
console.log(prodSumItems);

const prodSumItems2 = intArray.map(item => item * 1.27).reduce((prev, current) => prev + current);
console.log(prodSumItems2, 'control: 4 * 7 * 1.27 = ', 28 * 1.27);
