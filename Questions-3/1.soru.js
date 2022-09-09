// 1.soru


function degerler(taban, yükseklik){

    const alan= (taban*yükseklik)/2
    console.log(`ücgenin alani..: ${alan}`);
    return alan;
}

const alan= degerler(3,4)


// 2.soru

const kareAl= (sayi) => sayi**2;

const küpAl= (sayi) => sayi**3;

const üsAl= (sayi, n) => sayi**n;

const hesapla = function (secim, sayi, n) {
  let sonuc;

  if (secim == "kare") {
    sonuc = kareAl(sayi);
  } else if (secim == "küp") {
    sonuc = küpAl(sayi);
  } else if (secim == "üs") {
    sonuc = üsAl(sayi, n);
  }
  return sonuc;
};

console.log(hesapla("kare", 3));
console.log(hesapla("üs", 3, 4)); 


// 3.soru

let artikYil=function(yil){
    return (yil%4==0 && (yil%100!=0 || yil%400==0) ? "artik yil" : "artik yil degildir")
}

console.log(artikYil(1800));