'use strict';

// Írj egy olyan függvénykifejezést, ami paraméterként vár egy egész számokat tartalmazó tömböt!
//     (Inputellenőrzést nem kell végezni.)
// A függvény szorozza meg tömbelemek értékét 1.27-tel, majd pedig térjen vissza az elemek összegével!

const intArray = [1, 2, 3, 4, 5, 6, 7];

const prodSumItems = intArray.map(item => item * 1.27);
console.log(prodSumItems);

// take 0 as initial value
const prodSumItems2 = intArray.map(item => item * 1.27).reduce((prev, current) => prev + current, 0);
console.log(prodSumItems2, 'control: 0 + 4 * 7 * 1.27 = ', 28 * 1.27);
