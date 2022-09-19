const baslik = document.querySelector(".image");
baslik.onmouseover = () => { baslik.src="./img/aslan1.jpeg"} 
baslik.onmouseout = () => { baslik.src = "./img/aslan2.jpeg"}


const btn1 = document.querySelector(".btn-outline-warning");
const btn2 = document.querySelector(".btn-outline-primary");
const btn3 = document.querySelector(".btn-outline-danger");
const audio = new Audio("./img/retro-ringtone .mp3");

btn1.onclick = () =>{
    audio.play();
    baslik.src = "./img/img.gif"

}

btn2.onclick = () => {
    audio.pause();
    baslik.src = "./img/telbağla.gif"

}

btn3.onclick = () => {
    baslik.src = "./img/telefon.gif"
}