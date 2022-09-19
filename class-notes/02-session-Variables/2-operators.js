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


// CARPMA VE US ALMA
// **********************

const pi=3.14;
const r=5;
const alan=pi*r**2; 
const cevre= Math.ceil(2*pi*r);

console.log(alan, cevre);


//?Bazı fonksiyonlar
// Math.floor();  //* her zaman en yakın alt tamsayıya yuvarlar
// Math.ceil();  //* her zaman en yakın üst tam sayıya yuvarlar
// Math.trunc(); //* sayının tam kısmını alır.
// Math.round(); //* en yakın tam sayıya yuvarlar.

// Math.random(); //* 0 ve 1 arasında rasgele sayı üretir.



// MOD ALMA ----**********

const number=456;
const birler=number%10;
const onlar=Math.floor(number/10)%10;
const yüzler=Math.trunc(number/100)
console.log(birler,onlar,yüzler);



// * =======================================================
// *                 KARŞILAŞTIRMA OPERATÖRLERİ
// * =======================================================




const sayi1=4;
console.log(sayi1==4); //true
console.log(sayi1=="4"); //true
console.log(sayi1==="4"); //false

console.log(sayi1!=4); //false
console.log(sayi1!="4"); //false

console.log(sayi1>4); //false
console.log(sayi1>=4); //true



// * =======================================================
// *                 MANTIKSAL OPERATÖRLER
// * =======================================================

// TRUE
console.log(Boolean(5));//true
console.log(Boolean(-5));//true
console.log(Boolean(-15.5));//true

// 5 falsy
console.log(Boolean(0)); //false
console.log(Boolean(null));//false
console.log(Boolean(""));//false
console.log(Boolean(undefined));//false


const v1=false|| 0 || 12.6 || true || false || null;
console.log(Boolean(v1));
console.log(v1); //ilk true ifadeyi bulur 


const v2= false || 0 || null|| undefined|| NaN;
console.log(v2); // sonuna kadar true bulmak icin gider bulamayinca sonuncuyu döndurur

const v3= 5 && true && true && 0 && "";
console.log(v3);

const v4= 6 && true && 12.5 && 7;
console.log(v4);

//******************DEGIL ! 

console.log(!v4); //v4ün degili nedir anlaminda v4 normalde 7 yani tersi falsedir

console.log(!v2); //v2 normalde NaN yani degili true dur



// * =======================================================
// *                TİP DÖNÜŞÜMLERİ
// * =======================================================

const para= Number("1000") +Number("900")

console.log(para);

console.log(Number("")); //0
console.log(Number(null)); //0
console.log(Number(true));//1












console.log(Number("0x11")); // 17 x=hexa=16
console.log(Number("0b101")); // 5 b=binary 2lik taban
console.log(Number("0o11")); // 9 o=opal=8
console.log(Number("sayi")); //NAN





































//* -------- NULLISH COALESCING OPERATOR----------- */
//?  Bir ifadenin null veya undefined olması durumuna göre seçim yapmamıza olanak sağlayan bir operatördür.eğer kullanıcı input a null girer yada hiçbişey (undefined) girmezse, belirteceğim ifadeyi (noname) kabul et
const isim1 = null; // ?null
const defaultIsim = "noname";
const islem1 = isim1 ?? defaultIsim;
// isim1 true ise onu döndür yoksa 2. ifadeyi
console.log(islem1 ?? defaultIsim); //noname 

