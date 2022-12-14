// ?=========================================================
// ?                 STRING METOTLARI
// ?=========================================================
console.log("****STRING METHODS******");


// ! 1-) klasik yontem ile tanimlanan String primitive dir(ilkel).

const str1="clarusway";
const str2="hello ";
const str3="all the world";

console.log(str2 + str3, typeof (str2 + str3));

// ! 2-) String constructor ile tanimlananString non-primitivedir (ilkel olmayan).

const str4=new String("yeni bir string");
console.log(str4, typeof (str4));

//! Normalde primitive veri tiplerinin property veya metodu olmaz.
//! Ancak Javascript  otomatik olarak primitive String'leri String
//! objecklerine dönüştürür. Bu sayede, String objecklerine ait olan
//! fonksiyonlar veya özellikleri primitive string ile kullanmak
//! mümkün olur.Ayrıca 2 tür arasında çevrim yapmakta mümkündür.
//? Ek Açıklama için : https://javascript.info/primitives-methods


// *=========================================================
// *               concat() immutable=değiştirmez
// *=========================================================


let s1="hello ";
const s2="world ";

const s3=s1.concat(s2);
console.log(s3);
console.log(s3.concat("Clarusway ", s1)); 
// ! orjinal degerler degismez, assign ile degiskenin degeri degistirilebilir.

s1=s1.concat(str3);
console.log(s1);


//* ----------------------------------------------------------
//* toUpperCase(), toLowerCase() --immutable
//* ----------------------------------------------------------


const myName="Hilal Poyraz";
console.log(myName.toLowerCase());
console.log(myName.toUpperCase());


let yourName="ismet";

console.log(yourName.toLocaleUpperCase());
console.log(yourName.toLocaleUpperCase("eng"));

// ! toLocaleUpperCase("tr")=tr yazsakta olur ama bos birakinca da tr karekterlere uygun büyütebiliriz.



//? ORNEK: iki string'i esit veya degil diye kiyaslayarak sonucu donduren fonksiyonu yaziniz.


const esitMi= (str1,str2) => 
    str1.toLocaleUpperCase()===str2.toLocaleUpperCase() ? `${str1} ile ${str2} esittir` : "esit degildir";


console.log(esitMi("ismet", "iSMET"));
console.log(esitMi("hello", "hell"));



//* ----------------------------------------------------------
//* charAt()
//* ----------------------------------------------------------


const s4 = "primitive \n  veri tiplerinin \n property ve \n ya methodu olmaz.";

console.log(s4);
console.log(s4.charAt(5)); //t
console.log(s4.charAt(9)); //" "
console.log(s4.charAt()); // eger bir index belirtmezseniz ilk harfi döndürür.
console.log(s4.charAt(s4.length-1)); // .


//* ----------------------------------------------------------
//* includes()-case sensitive()
//* ----------------------------------------------------------


const kelime="to be or not to be, that is The questions."

console.log(kelime.includes("TO BE")); //false
console.log(kelime.includes("to be")); //true
console.log(kelime.includes("quest")); //true
console.log(kelime.includes(" ")); //true
console.log(kelime.includes("to be,", 15)); //15 inci indexten sonra to be var mi (false)
console.log(kelime.includes("to be,", 13)); //13 inci indexten sonra to be var mi (true)


console.log(kelime.toUpperCase().includes("TO BE")); //true

//! NOT: case sentive kullanmak icin kelime baslangicta kucuk veya
//! buyuk harfe cevirilerek arama yapilabilir.



//* ----------------------------------------------------------
//* indexOf()-lastIndexOf()-case sensitive
//* ----------------------------------------------------------

const kelime1 = "to be or not to be, that is The questions.";

console.log(kelime1.indexOf("be")); //3
console.log(kelime1.lastIndexOf("be")); //16
console.log(kelime1.indexOf("this")); //olmayan bir kelime olursa -1 alir. 
console.log(kelime1.indexOf("TO BE")); //olmayan bir kelime olursa -1 alir. 
console.log(kelime1.indexOf(" ")); //ilk bosluk karakterini bulur. 2
console.log(kelime1.indexOf("be", 4)); // 4. indexten sonraki "be" yi bulur



//* ----------------------------------------------------------
//* search()
//* ----------------------------------------------------------


const kelime2 = "to be or not to be, that is The questions 9.";

console.log(kelime2.search(/[A-Z]/)); //ilk büyük harfi buldu
console.log(kelime2.search(/[0-9]/)); //ilk rakam buldu
console.log(kelime2.search(/[a-z]/)); //ilk kücük harfi buldu
console.log(kelime2.search(/[0-9A-Z]/)); //ilk kücük harfi buldu
console.log(kelime2.search(/[.]/)); //ilk . yi buldu
console.log(kelime2.indexOf(".")); //ilk . yi buldu ama indexOf ile ikisi de okey
 console.log(kelime2.search(/[^a-z]/));// küçük harflerin dışında ilk bulduğunu döndürdü




//* ----------------------------------------------------------
//* startsWith(), endsWith() -- case sensitive
//* ----------------------------------------------------------


const kelime3 = "Salina salina sinsice olurum sana!";

console.log(kelime3.startsWith("sa")); //false
console.log(kelime3.startsWith("Sa")); //true
console.log(kelime3.startsWith("salina", 7)); //true
console.log(kelime3.endsWith("!")); //true
console.log(kelime3.endsWith("salina", 13)); //true


//* ----------------------------------------------------------
//*  replace(searchFor, replaceWith) --immutable
//* ----------------------------------------------------------

let oku= "Oku Johny gibi, saf olma, saf olma saf olma";

oku=oku.replace("saf olma", "basarili ol");
console.log(oku);

console.log(oku.replace(/SAF/i, "fakir"));

// /SAF/i;= buradaki i harfi büyük kücük harfe duyarsiz ol demek.
console.log(oku);

console.log(oku.replace(/Saf olma/gi, "zengin ol")); 
//!gi ile yazılırsa tüm saf olma (büyük küçük harfe duyarsız) kelimelerini değiştirir, aksi takdirde ilk bulduğunu


//* ----------------------------------------------------------
//*  replaceAll() --immutable
//* ----------------------------------------------------------

let degistir = "Oku Johny gibi, saf olma, saf olma SAF olma";

console.log(degistir.replaceAll("saf olma", "akilli ol"));


//* ----------------------------------------------------------
//*  slice(beginIndex, endIndex)
//*  substring(beginIndex, endIndex)
//*  substr (depreceated)
//* ----------------------------------------------------------

const veysel="UZUN INCE BIR YOLDAYIM YÜRÜYORUM GÜNDÜZ GECE";

console.log(veysel.slice(33));
console.log(veysel.slice(17,30));
console.log(veysel.substring(17,30));
console.log(veysel.slice(-21,-15));
console.log(veysel.slice(-11));
console.log(veysel.substring(-11)); //! substring methodunda eksi index calismaz.



//* ----------------------------------------------------------
//* split= string i diziye çevirir
//* split(seperator , limit ) =>ikisi de optional
// //* split(" ")=>boşluklardan ayırır,boşlukları silip virgül+boşluk yapar ve yeni dizi döndürür.orjinal diziyi değiştirmez
//* ----------------------------------------------------------


const tarkan ="Gel gündüzle gece olalim";

console.log(tarkan.split("e")); //e harflerinden ayirarak bir dizi olustur
console.log(tarkan.split(" ")); //bosluklardan ayirarark bir dizi olustur
console.log(tarkan.split("")); //harf harf ayirarark bir dizi olustur

console.log(tarkan.split("e", 3)); //e lerden ayirinca olusan listenin ilk 3 elemanini gösterir.
console.log(tarkan.split()); //tek elemanli  bir dizi olustur



//* ----------------------------------------------------------
//* trim();
//* ----------------------------------------------------------


const ramazan="      Hos geldin ya Sehri Ramazan        "
console.log(ramazan);

console.log(ramazan.length); //41

console.log(ramazan.trim()); 
console.log(ramazan.trim().length); //27





































