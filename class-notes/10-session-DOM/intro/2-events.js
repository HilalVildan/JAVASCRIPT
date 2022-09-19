//* ======================================================
//*                        EVENTS
//* ======================================================

//* EXAMPLE-1 (Mouse Over, Mouse Out )
//* -------------------------------------------------------

//?METHOD-1 (HTML-INLINE)
//?---------------------------------------------------------------
//! alttaki kod index.html de, görmek için buraya da yazdık
//  <h1 class="header" onmouseover="style.color='black'" onmouseout="style.color='blue'">DOM Temelleri</h1>


//? METHOD-2 (Function calling in HTML)
//?---------------------------------------------------------------
//! index.html deki kod
//*  <h1 class="H5" onmouseover=black() onmouseout=blue()>DOM Basics</h1>  
// HTML bu sayfaya script tag ini yazmamız lazım

//JAVASCRİPT
const header = document.querySelector(".H5");
const blue = () => (header.style.color = "blue");
const black = () => (header.style.color = "black");


//? METHOD-3 (SADECE JAVASCRIPTTE YAZILAN YOL)
//? 1.yol---------------------------------------------------------------

// example-1

document.querySelector(".H2").onmouseover = () => {

    document.querySelector("#badi").style.backgroundColor = "pink";

}


// document.querySelector(".H2").onmouseout = () => {
//  document.querySelector("#badi").style.backgroundColor = "aqua";
// }

const baslik= document.querySelector(".H1");
baslik.onmouseover=()=>{baslik.style.color="red"}
baslik.onmouseout=()=>{baslik.style.color="blue"} 

//* example-2 onclick- ondblclick

const birinci= document.querySelector(".bir");
const ikinci= document.querySelector(".iki");

birinci.onclick=()=>{
birinci.src="./img/logo2.png"
ikinci.src="./img/js_logo.png"

}

birinci.ondblclick=()=>{
birinci.src="./img/winter1.jpg"
ikinci.src="./img/dom-olaylar.png"

// ikinci.src = "./img/logo2.png";
// birinci.src = "./img/js_logo.png";
}

ikinci.onclick = () => {
ikinci.src = "./img/logo2.png";
birinci.src = "./img/js_logo.png";
};


//* example-3 (button onclick)

const buton = document.querySelector("#btn")

 buton.onclick=()=>{
     document.querySelector("body").style.backgroundImage = "linear-gradient(to right, purple,gray)";
     
     buton.textContent ="SEARCH";
     buton.style.fontSize="30px";
     header.style.color = "red"
 }


//!aynı element e hem onclick hem onmouseover atandığında, önce onmouseover  sonra onclick i çalıştırırsanız 
//! sorun olmaz, tersi durumda onclick baskın old için onmouseover çalışmaz


// ? METHOD-4 (ONLY JAVASCRIPTte yazilir - addEventListener())
// ? 2.yol---------------------------------------------------------------

buton.addEventListener("click", () => {
  document.querySelector("body").style.backgroundImage =
    "linear-gradient(to right, purple,gray)";

  buton.textContent = "SEARCH";
  buton.style.fontSize = "30px";
  header.style.color = "red";
});






















