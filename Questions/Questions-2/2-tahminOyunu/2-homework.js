const rastgele = Math.ceil(Math.random() * 20);
console.log(rastgele);
let hak = 5;

while (hak > 0) {
  const tahmin = +prompt("0-20 arasında bir sayı giriniz");

  hak--;

  if (tahmin == rastgele) {
    console.log("Tebrikler Bildiniz🥳");
    let soru = prompt("Tekrar oynamak ister misiniz E/H");
    if (soru.toLowerCase() == "e") {
      hak = 5;
    } else {
      break;
    }
  } else if (tahmin < rastgele) {
    console.log(`Dikkat ${hak} hakkiniz kaldi`);
    console.log("ARTTIR 📈");
  } else {
    console.log(`Dikkat ${hak} hakkiniz kaldi`);

    console.log("AZALT📉");
  }

  if (hak == 0) {
    console.log("Oyunu kaybettiniz");
    let soru = prompt("Tekrar oynamak ister misiniz E/H");
    if (soru.toLowerCase() == "e") {
      hak = 5;
    } else {
      break;
    }
  }
}
