// 2.soru

const aySirasi = +prompt("Bir sayi giriniz")


switch (aySirasi) {
  case 1:
    ay= "OCAK"
    break;
  case 2:
    ay= "SUBAT"
    break;
  case 3:
    ay= "MART"
    break;
  case 4:
    ay= "NISAN"
    break;
  case 5:
    ay= "MAYIS"
    break;
  case 6:
    ay= "HAZIRAN"
    break;
  case 7:
    ay= "TEMMUZ"
    break;
  case 8:
    ay= "AGUSTOS"
    break;
  case 9:
    ay= "EYLÜL"
    break;
  case 10:
    ay= "EKIM"
    break;
  case 11:
    ay= "KASIM"
    break;
  case 12:
    ay= "ARALIK"
    break;
  
  default:
    alert("1-12 arasi bir sayi giriniz")
    break;
}

console.log(ay);