//* ======================================================
//*                   FOREACH METHOD
//! NOT: forEach metodu void bir metottur. (Yani herhangi bir değer döndürmez.log(forEach..)=undefined) terminal işlemdir, diziyi fonksiyon içinde yazdırır ve tüketir bitirir.

//*======================================================


//**--------------ORNEK ------------------ */

const prices=[100, 250, 50, 90];

prices.forEach((i) => console.log(i))

// console.log(prices);

let toplam=0;
let gitti =prices.forEach((i)=>console.log(toplam+=i));
console.log(gitti); //undefined




//***************************************ÖRNEK */

//* p => prices dizisinin her bir elemanı
//* i => indis
//* prices=> prices dizisidir.

// const prices=[100, 250, 50, 90];

let toplam1=0;

prices.forEach((p, i, prices)=>{

    toplam1+=p
    console.log(`${i}. toplam: ${toplam1}`);


    prices[i]=p+10;
    // bu sekilde diziyi kalici degistiriyoruz.
})

console.log(prices);











//* ======================================================
//*                       MAP METHOD
//!map yapılan değişikliği bir diziye atıp ve bunu döndürebilir, tüketmez forEach gibi.
//* ======================================================

//*-------------- ÖRNEK -------------------
//* names dizisin içindeki her ismi büyük harf olarak
//* yeni bir diziye saklayalım.


const names=["hilal", "muhammed", "güler", "faruk", "dogukan", "mevlüt", "sinan"]

const yeniIsim=names.map((isim)=>isim.toUpperCase())
console.log(yeniIsim);
console.log(names);




//*örnek
//* fiyatlar dizisindeki ürün fiyatlarinin 250 TL altında olanlarına
//* %50 zam, diğerlerine de %20 zam yapılmak isteniyor. Ayrıca
//* zamli fiyatlar kalıcı olarak diziye işlenmek isteniyor fiyatlar[1]=eski fiyat*1.5 gibi
//* 1. ürünün zamlı fiyati 110 TL gibi
//* p => fiyatlar dizisinin her bir elemanı
//* i => indis
//* array=> fiyatlar dizisidir.

const fiyatlar = [100, 250, 50, 90];

fiyatlar.map((p, i, array)=>{


    if(p<250){
        array[i] = p*1.5;

    }else 
        array[i] = p*1.2;

})

console.log(fiyatlar);


//* ======================================================
//*                       FILTER METHOD
//* ======================================================
//* prices array'inde fiyatı 100 TL den az olanlari ayri
//* bir diziye saklayalim. (böyle dedigi icin yeni bir degiskene atadik. zoksa direk de console log ile de 
//* yazdirabilirdik.)

const yeniDizi =  prices.filter((p)=> p<100)
// const yeniDizi =  prices.filter((p)=> p<100).forEach((a)=>console.log(a))
console.log(yeniDizi);



//* ======================================================
//*                       PIPELINE
//* ======================================================

//!slide daki soru, pipeline olmazsa böyle uzun uzun if le çözeriz
//* Fiyatı 100 TL den fazla olanlara %10 zam, 100 TL den az olanlara ise %15 zam yapılmak isteniyor. 
//* Ayrıca, zamlı olan yeni değerleri örnekteki gibi diziye saklamak istiyoruz.
const tlFiyatlar = [100, 150, 100, 50, 80];

const degerler = tlFiyatlar.map((d) => {
  if (d > 100) {
    d = d * 110/100;
  } else {
    d = d * 115/100;
  }
  return d;
});
console.log(degerler);


const ilk  = tlFiyatlar.filter((a)=>a>100).map((c)=>c*1.1);
const son  = tlFiyatlar.filter((a)=>a<=100).map((c)=>c*115/100);

console.log(ilk.concat(son));




//*-------------- ÖRNEK -------------------
//*people dizisinde ismin ilk harfine göre arama yaparak ilgili isimlerin ilk 3 harfini yazdıran bir fonksiyon yazınız.
const people = [
  "Baser",
  "Berivan",
  "Mehmet",
  "Mustafa",
  "Mali",
  "Halil",
  "Fatih",
  "Hasret",
  "Fatma",
];

const bulHarf = (harf) =>{

    people.filter((a)=>a.startsWith(harf.toUpperCase())).map((b)=>b.slice(0,3)).forEach((x)=> console.log(x));

}

bulHarf("b");
bulHarf("M");





//* ======================================================
//*                       REDUCE
//* ======================================================


//* salaries dizisindeki maaslari toplayiniz (reduce methodu kullanin)
//! forEach methodu dizilerde gecerlidir., tek eleman kullanan reduce de kullanamayiz.

const salaries =[3000, 5000, 4000, 6000, 7500];

console.log(salaries.reduce((toplam, diziEleman)=>toplam+diziEleman,30000)); //toplami 0 den baslatmamak icin böyle sayilar yazabilirz. 


//* salaries dizisindeki maaslari carpiniz. (reduce methodu kullanin)
console.log(salaries.reduce((carpim,diziEleman)=>carpim*diziEleman,1)); //carpimda 1 toplamda 0 default olarak gelir yazmaya bile gerek yoktur. 





























































