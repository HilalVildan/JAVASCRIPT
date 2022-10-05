// 3.soru

const num1 = +prompt("1. sayiyi giriniz");
const num2 = +prompt("2. sayiyi giriniz");
const num3 = +prompt("3. sayiyi giriniz");

const toplamSonuc = num1 +num2 +num3;
const carpimSonuc = num1* num2* num3;

// toplami

console.log( toplamSonuc);


// carpim

console.log( carpimSonuc);

// en büyük-en kücük bulma

console.log(Math.min(num1, num2, num3));
console.log(Math.max(num1, num2, num3));