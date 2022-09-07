// 1.soru

const not = +prompt("Lütfen notunuzu giriniz")
let notKarsiligi = 0

if (not >= 0 && not <= 25) {
  notKarsiligi = "FF";
} else if (not >= 26 && not <= 45) {
  notKarsiligi == "DD";
} else if (not >= 46 && not <= 65) {
  notKarsiligi == "CC";
} else if (not >= 66 && not <= 75) {
  notKarsiligi == "BB";
} else if (not >= 76 && not <= 90) {
  notKarsiligi == "BA";
} else if (not >= 91 && not <= 100) {
  notKarsiligi == "DD";
} else {
    alert("0 ile 100 arasinda bir not girmelisiniz")
}

console.log(notKarsiligi);