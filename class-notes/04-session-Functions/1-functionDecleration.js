// ? ==========================================================
// ?                    FONKSİYONLAR
// ? ==========================================================

// !-----------------------------------------------------------
// ! 1.YÖNTEM  : FUNCTION DECLARATION
// !-----------------------------------------------------------
console.log("************ 1- FUNC DECLARATION *************");

//* Örnek1:
//****************************************************************/
//Fonksiyonun tanımlanması


function yazdir() {
    console.log("hello world");
    
}

yazdir(); //call veya invoke
yazdir();

//* Örnek2: PARAMETRELI FONKS
//****************************************************************/

function adYazdir(a, b, c){
    console.log(c, a, b);

}

adYazdir("Dogu", "Mevlüt", "KUZU");
adYazdir("Hilal", "Güler", "KURSUN");


//* Örnek3: PARAMETRELI ve dönüs degerli (returnlü) FONKS
//****************************************************************/

function yasHesapla(ad, dogumTarihi){

   const yas=2022-dogumTarihi;
   console.log(`Benim adim ${ad} ve ben ${yas} yasindayim`);
    return yas;
}



const Muhammed = yasHesapla("Muhammed", 1990)
const Ipek = yasHesapla("Ipek", 1979)
const Haluk = yasHesapla("Haluk", 1976)

console.log(Muhammed ,Ipek, Haluk);

console.log("3 arkadasin yas ortalamasi=", (Muhammed+Ipek+Haluk/3));


//* Örnek4: Parametreli, Dönüş değerli
//**********************************************************/
//! Function declaration yöntemi ile  fonksiyonun tanımlanması çağrılmasında önce veya sonra olabilir.

// tek sayi cift sayi kontrolü

 console.log(tekCiftSayi(5)); 
 console.log(tekCiftSayi(12)); 

function tekCiftSayi(x){

   return x%2==1 ? "tektir" : "cifttir"


}





let isValid = true;
function soru15(isValid) {
  if (isValid === false) {
    return 0;
  } else {
    return 1;
  }
}
console.log(soru15(isValid));



