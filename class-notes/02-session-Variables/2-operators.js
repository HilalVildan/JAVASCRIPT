// * =======================================================
// *                 ARİTMETİK OPERATÖRLER
// * =======================================================


const sucuk = 100;
const sakiz = 5;
const kola = 10;

let toplamFiyat = sucuk + sakiz + kola;
console.log(toplamFiyat);
console.log(sucuk + sakiz + kola);



// bir arttir
toplamFiyat++;
// toplamfiyat=toplamfiyat+1;
console.log(toplamFiyat);



// 10 arttir
toplamFiyat+=10;
// toplamfiyat=toplamfiyat+10;
console.log(toplamFiyat);


//? + operatörü String Concatination işlemi de yapar.
const ad = "ahmet";
const soyAd = "Can";
console.log(ad  + soyAd);

// bir sayi ve string toplanirsa alttaki gibi concatination yapar
const s1=5;
const s2="7";
console.log(s1+s2); //57


//  cikarma isleminde verilerden biri number ise digeri tirmakli number olsa bile 
// cikarma islemi yapar
console.log(s1-s2); //-2

const s3="iki";
console.log(s1-s3); //NaN = not a number


const dogumTarihi=1996;
const isim="Hilal"

console.log(isim + " " + (2022 - dogumTarihi) + " " + "yasindadir");


// template literals (backticks)
console.log(`${isim} ${2022-dogumTarihi} yasindadir`);


// --------------ARTTIRMA AZALTMA

let a=5;

console.log(a++ ,a);
console.log(a);

b=a++; 

console.log(b);
console.log(a);

console.log("**************************+");

let c=10;
console.log(++c,c);


let d=++c;
console.log(d);
console.log(c);

let e=33;
console.log(--e);
console.log(e-- , e);


// e yi 5 arttiralim *********++

e+=5;
console.log(e);

// c nin 10 katini al(c normalde 12)

// c=c*10
c*=10
console.log(c);
console.log(c*=10);