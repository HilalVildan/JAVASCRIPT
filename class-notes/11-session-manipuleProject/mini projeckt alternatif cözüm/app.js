document.querySelector("h1").style.color="red";
document.querySelector("h1").style.textAlign="center";

let resim = document.querySelector(".resim");
let ses = document.querySelector(".ses");

//! ara butonu tiklandiginda

document.querySelector(".ara").onclick = () => {
    resim.src = "./img/img.gif"
    
    //play() fonksiyonu audio elemnetini calistirir
    ses.play();
    // sesin volumunu 0-1 arasinda deger vererek ayarlayabilirz
    ses.volume=0.2;
}


//!baglat butonu tiklandiginda

document.querySelector(".bagla").onclick = () => {

    resim.src="./img/telbağla.gif";
    //pause() metodu calisan audio sesini kapatir.
    ses.pause();
}

//!konus butonu tiklandiginda

document.querySelector(".konus").onclick =  () => {
    resim.src = "./img/telefon.gif"
    ses.pause();
}


//! mouse ile resmin üzerine gelince

resim.onmouseover=()=>{
    resim.src ="./img/aslan1.jpeg"
}

//! mouse ile resmin üzerinden ayrilinca

//yukaridaki gibi de yapilir. bu yolla da yapilir. bu metodu da görelim diye yapiyoruz.

resim.addEventListener("mouseout", () => {
  resim.src = "./img/aslan2.jpeg";
});

//!klavyeden inputa veri girisi yapilirken elimizi tustan cektigimizde varolan degisiklik

const text = document.querySelector (".textbox")
const tik = document.querySelector (".checkbox")


//checked=metodu checkbox inputun tikli olup olmadigini kontrol eder. tiklanmissa true döndürür.
// onkeyup= klavyeden elini cektiginde

text.onkeyup = ()=>{
    if(tik.checked){
        text.value=text.value.toUpperCase();

    }else{
        text.value= text.value.toLowerCase();

    }
}


//!listemin başına h1 tag i eklemek

// HTML'de input-div'in altına yeni bir H1 elemanı olusturalım.
//* const baslık = document.createElement("h1");
//* baslık.className = "a"; // a ismiyle class atayalim
//* const yazi = document.createTextNode("Programlama Dilleri");
//* Programlama Dilleri seklinde bir text olusturalim
//* baslık.appendChild(yazi); //h1 elementinin icine  olusan texti child yapalim
//* inputDiv.after(baslık); //input-div'in sonrasina h1'i ekliyoruz.

const bölüm = document.querySelector("section");

bölüm.innerHTML = `<h1 class="a">${"Programlama Dilleri"}</h1>` + bölüm.innerHTML ;

//! ekle butonuna basildiginda inputa girilen degerler ul listeme eklensin

//*UZUN YOL
  // yeni girilen satiri saklamak icin bir li olusturduk.
  // const yeniLi = document.createElement("li");
  // yeni li icin textnode olusturduk
  // const textNode = document.createTextNode(dil.value);
  //olusturdugumuz texnode'u yeni li'ye bagladik.
  // yeniLi.appendChild(textNode);
  // yeni eklenen satiri var olan listeye (ul) baglayalim.
  // liste.appendChild(yeniLi);


document.querySelector(".ekle").onclick=()=>{
    const liste = document.querySelector(".liste")
    const dil = document.querySelector(".dil")

    liste.innerHTML += ` <li>${dil.value}</li>`
    //!inputtaki veri listeye eklenince inputtan silinsin. 
    dil.value=""

}


//!sil butonu tiklandiginda ul listesinden silme metodu olan removeChild metodu kullanilacak

document.querySelector(".sil").onclick = () => {
  const liste = document.querySelector(".liste");
  liste.removeChild(liste.lastElementChild); //ul nin son childini sildik

  //! liste.removeChild(liste.firstElementChild); //ul nin ilk childini sildirdi.

  //! liste.removeChild(liste.children[2]); //ul nin [i] indexli childini sildik
}; 


//! klavyedeki keyCodlari kullanarak kod yazma 

document.querySelector(".dil").onkeydown=(tus)=>{
  //entere basilirsa
  if (tus.keyCode === 13) {
    document.querySelector(".ekle").click();
  }

  //*eğer delete =46 veya control=17 veya shift=16 tuşuna basılırsa sil butonu tetiklensin

  if(tus.keyCode === 17) {
      document.querySelector(".sil").click
  }
}

