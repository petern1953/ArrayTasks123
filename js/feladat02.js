// Írj egy olyan függvénykifejezést, ami paraméterként kap
// egy tetszőleges típusú elemeket tartalmazó tömböt, és egy tetszőleges primitív értéket!
// A függvény visszatérési értéke egy objektum, ami a következő propertyket tartalmazza:

// exists: Értéke true / false attól függően, hogy a második paraméterként megadott érték megtalálható-e a tömbben
// index:  Értéke egy szám, 
//      ha a második paraméterként megadott érték megtalálható a tömbben, akkor a tömbben lévő indexe,
//      ha nem, akkor -1 legyen az értéke
// allElementIsANumber: Értéke true / false attól függően, hogy a tömb minden eleme number típusú-e vagy sem
// someElementIsANumber: Értéke true / false attól függően, hogy a tömbben van-e number típusú elem vagy sem

'use strict';

const mixedArray = ['a', true, 2, 'b', 'kuka', false, 8, 2345];
const searchItem1 = 'b';
const searchItem2 = 8;
const searchItem3 = false;

const answer = (arrToSearch, lookFor) => {
    return {
        exists: (arrToSearch.find(item => item === lookFor) === lookFor),
        index: arrToSearch.findIndex(item => item === lookFor),
        allElementIsANumber: arrToSearch.every(item => typeof item === "number"),
        someElementIsANumber: arrToSearch.some(item => typeof item === "number")
    }
}

console.log(answer(mixedArray, 'a'));
console.log(answer(mixedArray, 2));
console.log(answer(mixedArray, '2'));
console.log(answer(mixedArray, 6));
console.log(answer([1, 2, 3, 26789], searchItem3));
console.log(answer(['1', '2', '3', '26789'], '2'));
console.log(answer(mixedArray, searchItem3));