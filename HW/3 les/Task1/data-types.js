const firstName = 'Matvey';
console.log('1.Имя: ', firstName, typeof firstName);

const age = 24;
console.log('2.Возраст:', age, typeof age);

const bigint = 123n;
console.log('3.Большое Число: ', bigint, typeof bigint);

const secName = undefined;
console.log('4.Фамилия: ', secName, typeof secName);

const favoritePet = null;
console.log('5.Любимое животное: ', favoritePet, typeof favoritePet);

const favoriteSport = {
    first: 'Volleyboll',
    second: 'SnowBoarding'
};
console.log('6.Любимый спорт', favoriteSport, typeof favoriteSport);

const third = Symbol('Basketball');
console.log('7.Спорт', third, typeof third);

const blackIsfavoriteColour = false;
console.log('8.Любимый цвет черный: ', blackIsfavoriteColour, typeof blackIsfavoriteColour);
