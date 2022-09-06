//!  %%%%%%%%%%% DEĞİŞKEN TANIMLAMA  %%%%%%%%%%%%%%%%

//  CONST ve LET, ECMASCRIPT6 ile gelmiştir. VAR eski versiyonlardan beri bulunmaktadır.

// ===================  CONST  ======================
// ? const ve let Modern JS ile gelmiş yeni değişken tanımlama keyword'leridir.
// ! CONST: Sadece başlangıçta değer atanabilir.
// ! Sonradan değeri değiştirilemez (non-primitive'ler (array..) hariç).


const yas=25;
console.log(yas);

// yas=27; hata const degeri degistirilemez

console.log(typeof yas);

// const pi; const degiskenine baslangic atamasi yapmak zorunludur

const kelime="Osman"
console.log(kelime, typeof kelime);


const isTrue=true;
console.log(typeof isTrue);

const dolar=1.1;
console.log(typeof dolar);










// ======================  LET  ========================
//? LET de CONST gibi yaygın kullanılan değişken tanımlama yöntemidir.
//! CONST'dan farkı, sadece tanımlama kısmında değil istenildiği zaman değeri değiştirilebilir.
//* CONST gibi tanımlandığı blok içerisinde geçerlidir. Başka yerlerden erişilemez. (Block-Scoped)
//? CONST kullanamadığımız durumlarda (değişkenin değeri sürekli değişecekse) LET kullanmalıyız.

let dil;
dil="javascript"
console.log(dil);

dil=true;
console.log(dil, typeof dil);

dil=null
console.log(dil, typeof dil);

let sayi=5
console.log(7+sayi);

let sayi1="5"
console.log(7+sayi1);
// bir string iler number toplanirsa aslinda toplama yapmaz onlari yan yana yazar

isim="hilal";
console.log(typeof isim);
// degisken tanimlama keywordu kullanmasak bile js derleyicisi otomatik onu "var" olarak tanimlar








// ===================  VAR VERİ TİPİ ===============================
//? VAR ile bir değişken tanımlandığında LET de olduğu gibi değeri sonradan değiştirilebilir.
//! VAR değişkenleri tanımlandığı yere göre global olarak veya fonksiyon içerisinde erişilebilir.
//* - Değişken fonksiyon içerisinde tanımlandı ise ancak o fonksiyonda erişilebilir (Function-scoped).
//? - Eğer, değişken fonksiyonların dışında tanımlandı ise tüm her yerden erişilebilir. (Global-scoped).
//! Günümüzde programcılar global değişken gerekmedikçe VAR ile değişken tanımlamayı seçmemektedir.

var sayi2=5;
console.log(sayi2);

sayi2=10;
console.log(sayi2);


console.log("***********************************");


var ilk="GLOBAL";
console.log(ilk);


{
    console.log(ilk);
    ilk="degistim"
    console.log(ilk);
}

console.log(ilk);


// var keywordu olunca blok icinde ve disarisinda erisebiliriz. Global-scope

console.log("***********************************");


let first="osman"
console.log(first);

{
    let first="osman2";
    console.log(first);
    let second="merhaba";
}

console.log(first);

// console.log(second); bloktaki elemana erisemeyiz


console.log("***********************************");


const first1="mehmet"
console.log(first1);

{
    const first1="sinan"
    console.log(first1);
}

console.log(first1);

// const ve let icin scopta (süslü icinde) olan scpota kalir 