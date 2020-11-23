// Írj egy olyan függvénykifejezést, ami paraméterként egy stringeket tartalmazó tömböt kap
// (inputellenőrzést nem kell végezni.), és visszaad egy html template-et (string)!
// A html template egy felsorolt lista, aminek a listaelemei a kapott tömb értékeit tartalmazzák.

// Pl.:ha ez a tömb
// 
const content = ['első', 'második', 'harmadik'];
// 
// akkor ez legyen a visszatérési érték:
// <ul>
//     <li>első</li>
//     <li>második</li>
//     <li>harmadik</li>
// </ul>

'use strict';

const htmlCode = array => `<ul>\n${array.map(item => `    <li>${item}</li>\n`).reduce((prev, next) => prev + next)}</ul>`;

console.log(htmlCode(content));