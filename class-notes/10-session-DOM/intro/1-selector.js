//* ======================================================
//*                   GETELEMENTBYID()
//* ======================================================

//* example 1 (Button style)
const buton = document.getElementById("btn");

buton.style.width="200px";
buton.style.height = "80px";
buton.style.color = "yellow";
buton.style.backgroundColor = "red";
buton.style.fontSize = "40px";
buton.textContent = "ARA";

//* example 2 (Paragraf style)

const paragraf = document.getElementById("par1").style;

paragraf.backgroundColor = "darkgray";
paragraf.color = "pink";
paragraf.fontSize = "50px";
paragraf.padding = "5px"


//* ======================================================
//*                   GETELEMENTSBYTAGNAME()
//* tag ismiyle çağırıyoruz.aynı tag den çok olacağı için index le hangisini seçtiğimizi belirtiyoruz
//* (HTMLCollection- Array özellikleri gösterir)
//*================================================

//* example 3 (img style)

const resim = document.getElementsByTagName("img");
console.log(resim);

resim[0].style.width = "300px"
resim[1].style.border = "5px solid red"



//* ======================================================
//*                   GETELEMENTSBYCLASSNAME()
//* class ismiyle çağırıyoruz
//*======================================================

//* example 4 

const baslik = document.getElementsByClassName("H1");
console.log(baslik); // [dom selector, merhaba]

baslik[0].style.color = "red";
baslik[0].style.textAlign = "center"

// for(let i=0; i<baslik.length; i++){
 //   baslik[i].style.color = "purple";
  //  baslik[i].style.textAlign = "center";
// }

// dizilerde iki elemanin da ortak degisiklikler yapmak istiyorsan for döngüsü yapabilirsin ya da 
// baslik[0,1] yazman lazim.




// * DOM SELECTOR yazisi gidiyor alttaki a etiketi geliyor.
baslik[0].innerHTML = " <a href= 'http://www.clarusway.com'> DOM COK KOLAY</a>"



//* ======================================================
//*                  QUERYSELECTOR,QUERYSELECTORALL
//*======================================================


document.querySelector("title").textContent = " DOM MANUPULATION 💜 "; //etiket

document.querySelector("#badi").style.backgroundImage = "linear-gradient(green,pink)"; //id

document.querySelector(".H2").style.color = "pink" //class

const paragraf2 = document.querySelectorAll("p")
console.log(paragraf2); //NodeList = array gibi gözükürler, indisle ulasirsin for ile dolasirsin 
// ama diziyi kalici olarak degistiren etiketleri kullanamazsin. mesela eleman ekleyemezsin, cikaramazsin gibi.....

paragraf2[1].style.fontSize = "50px";

// Bir NodeList ve bir HTMLcollection hemen hemen aynı şeydir.

// Her ikisi de bir belgeden çıkarılan düğümlerin (öğelerin) dizi benzeri koleksiyonlarıdır (listeleridir). Düğümlere indeks numaraları ile erişilebilir. Endeks 0'dan başlar.

// Her ikisinin de listedeki (koleksiyon) öğelerin sayısını döndüren bir uzunluk özelliği vardır.


//!(örnek üstlerde baslik kısmında var) HTMLCollection öğelerine adları, kimlikleri veya dizin numaralarıyla erişilebilir.
// baslik.namedItem("id1").style.color = "red";
//  baslik[0].style.color="red";

// NodeList öğelerine yalnızca dizin numaralarıyla erişilebilir.

// Bir HTMLCollection her zaman canlı bir koleksiyondur. Örnek: DOM'daki bir listeye bir <li> öğesi eklerseniz, HTMLCollection'daki liste de değişecektir.

// Bir NodeList genellikle statik bir koleksiyondur. Örnek: DOM'daki bir listeye bir <li> öğesi eklerseniz, NodeList'teki liste değişmez.
// getElementsByClassName()ve yöntemleri , getElementsByTagName() canlı bir HTMLCollection döndürür.

// querySelectorAll(), statik bir NodeList döndürür.
//!burada netten https://softauthor.com/javascript-htmlcollection-vs-nodelist/ adresinden göster
// Dizi Değil!
// Bir NodeList bir dizi gibi görünebilir ama öyle değildir.

// Bir NodeList içinde döngü yapabilir ve düğümlerine dizine göre başvurabilirsiniz.

// Ancak, bir NodeList'te push(), pop() veya join() gibi Array yöntemlerini kullanamazsınız.






































