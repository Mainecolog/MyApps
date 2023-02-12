let firstName = 'Matvey';
console.log(Number(firstName), Boolean(firstName), String(firstName));

let age = 24;
console.log(Number(age), Boolean(age), String(age));

let bigint = 123n;
console.log(Number(bigint), Boolean(bigint), String(bigint));

let secName = undefined;
console.log(Number(secName), Boolean(secName), String(secName));

let favoritePet = null;
console.log(Number(favoritePet), Boolean(favoritePet), String(favoritePet));

let favoriteSport = {
    first: 'Volleyboll',
    second: 'SnowBoarding'
};
console.log(Number(favoriteSport), Boolean(favoriteSport), String(favoriteSport));

let blackIsAfavoriteColour = false;
console.log(Number(blackIsAfavoriteColour), Boolean(blackIsAfavoriteColour), String(blackIsAfavoriteColour));

let third = Symbol('Basketball');
console.log(Symbol, typeof Symbol);
// Symbol - неизменяемый тип данных.

