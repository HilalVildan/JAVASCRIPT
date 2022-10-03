//*=================================================================
//*              1- Senkron-Asenkron Programlama
//* ================================================================

//! Javascript, bir single-threaded ve Asenkron Programlama dilidir.

//? Asenkron Programlama
//? --------------------------------------------------------------
//? Asenkron Programlama, bir alt gorevin uygulamanin asil thread'inden
//? bagimsiz olarak arka planda calistirilmasina izin veren paralel programlama
//? teknigidir. Bu alt gorev tamamlandiginda (basariyla veya basarisizlikla)
//? asil thread bu konuda bilgilendirilir. Asenkron programlama, uygulamalarin
//? performansininin artirilmasina ve daha iyi kullanici deneyimine katki saglamaktadir.

//? Ozellikle bir API'den veya Veritabanindan veri cekme, Giris/Cikis islemleri,
//? Dosya Okuma/Yazma islemleri gibi zaman tuketen kodlarda Async Programlama
//? kullanilmasi cok onemlidir.




//* Senkron Programlama ******************************/
//!blocking code

// const bekle = (ms) => {

//     const start = new Date().getTime()
//     while(new Date().getTime()<start+ms){}
// }

// console.log("hello");
// console.time("timer1") //kronometre baslat
// bekle(3000);
// console.timeEnd("timer1") //kronometre durdur
// console.log("naber");



//* Asenkron (setTimeout) 1seferlik
//******************************* */

// setTimeout(()=>{

//     console.log("Selam");

// },2000) //süslüden sonra virgul koyup kac sn istiyorsak onu yaziyoruz.

// console.log("sana da selam ");

// setTimeout(() => {
//   console.log("Naber napiyosun");
// }, 3000);

//!Sana da Selam-Selam - Naber napiyosun çalışır, 3. nün süresi 1.den azsa, 2-3-1 sırasında çalışır
//!settimeout müsait zamanda ortaya çıkar, onun sırası geçtiğinde alttaki işlemler bitince çalışır


//*Asenkron(setInterval, clearInterval) belli araliklarla durdurulana kadar devam eder. 
//*mesela dakikada bir döviy kurunu güncellemek icin yapilabilir
//*******************************+ */


//? setInterval non-blocking

// console.log("counter started");
// let counter = 0

// const interval1 = setInterval(() => {

//    console.log(++counter);

//   if(counter===5){
//     clearInterval(interval1) //counter 5 oldugunda setIntervali durdur.
//   }
    
// }, 1000);


// console.log("counter finished");


//? callback hell

setTimeout(() => {
  console.log("ayse:s.a. ahmet");
  setTimeout(() => {
    console.log("ahmet:a.s. ayse nasılsın");
    setTimeout(() => {
      console.log("ayse:iyiyim sağol");
    }, 1000);
  }, 1000);
}, 1000);