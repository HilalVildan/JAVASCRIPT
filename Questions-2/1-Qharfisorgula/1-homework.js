let girdi;
let toplam = 0;
let girdiSayisi = 0;

while (true) {
  girdi = prompt("lütfen bir not giriniz");
  if (girdi.toLowerCase() !== "q") {
    toplam += parseInt(girdi);
    girdiSayisi += 1;
  } else {
    break;
  }
}

console.log("ortalama", toplam / girdiSayisi);
