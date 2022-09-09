// ? ==========================================================
// ?                    FONKSİYONLAR
// ? ==========================================================

// !-----------------------------------------------------------
// !3.YÖNTEM  : ARROW FUNCTIONS
// !-----------------------------------------------------------

console.log("****** 3- ARROW FUNCTIONS ******");

// //!Funct expression ve arrow func yontemlerinde
// //! Once fonks tanimlanmalidir sonra cagrilmalidir.
// //! Aksi takdirde hata alırsiniz.


//* Örnek1: 3 ün kati mi diye kontrol etme
//**********************************************************/


const katMi=(sayi) => sayi%3==0 ? "3 ün kati" : "3ün kati degil";


console.log(katMi(5)); 



 //* Örnek2:Menu fonksiyon
  // ! ok(arrow) fonksiyonunda birden fazla ifade varsa, fonksiyonda süslü parantez kullanmalıyız
//****************************

const menu=(x)=>{
console.log("===========================");
console.log("     JAVASCRİPT DERSİ      ");
console.log("===========================");


}

menu(3);


//* Örnek3 yas hesapla
//****************************

// new Date()= bize şu anın tüm tarihini verir. .getFullYear() bu şekilde . ile istediğimiz tarihi çağırabiliriz (dakika saat gün ay vs)

const yasHesapla = (tarih) => new Date().getFullYear()-tarih;
console.log(yasHesapla(1996));

//alternatif yol
 // const yasHesapla2=(tarih)=> 
 // {const yas=new Date().getFullYear()-tarih;
 // return yas}









 //* Örnek4:silindirin hacmini hesaplayan fonksiyon
//********************************************************

const hacimHesapla=(r,h)=> Math.PI*r*r*h;

// toFixed(n)= virgullu bir sayida virgulden sonra istedigimiz adette (n) rakam gormemizi saglar. bir sey yazmazsak sadce tam kismini gösterir
console.log(hacimHesapla(3,5).toFixed(3)); 











 //* ORNEK5: Girilen n. terimdeki kadar Fibonacci sayisını  yazdiran fonksiyonu dongu ile kodlayiniz.
//? FIBONACCI terimleri:  1, 1, 2, 3, 5, 8, 13, 21, ...

const fibo=(n)=>{

    let fibLeft=1;
    let fibRight=1;

    let add=0;

    for(let i= 2; i<n ; i++){

        add=fibLeft+fibRight;
        fibLeft=fibRight;
        fibRight=add;
    }
return fibRight;
}

console.log(fibo(3)); 