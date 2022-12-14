// ?=========================================================
// ?                DİZİLER (ARRAYS)
// ?=========================================================

//* Dizi Tanımlama
//* ---------------------------------------------------------


//! 1.YÖNTEM (Array Literal) - tercih edilen yöntem


const yaslar=[30, 54, 22, 18, 5]

console.log(yaslar);
console.log(yaslar.length);


// ! hata const keywordu ile tanimlanmis bir diziyi tamamiyla degistiremezsiniz. 
//! ancak tek tek degisiklige izin verir 
// yaslar=[1,2,3,4,5]



//! 2. YÖNTEM ( Array Constructor)

const cars=new Array("BMW", "Mercedes", "Volvo")
console.log(cars);


//! 10 elemanli bir array tanimlama

const sayilar=new Array (10)
console.log(sayilar);

sayilar[4]=256;
sayilar[9]="Ayse";
console.log(sayilar);



console.log("********************************************");

const dogum=1996;
const isimler=["Hilal", "Faruk", "Hilmi", 2022-dogum, "Sinan" , true, yaslar]

console.log(isimler);

//* Dizinin elemanlarina veri yazma (indisleme)

isimler[5]=false;
isimler[7]=16;
console.log(isimler);
console.log(isimler[2]);
console.log(isimler[6] [2]);
console.log(isimler[isimler.length-2][yaslar.length-2]);


console.log(--isimler[6][2]); // elemani bir eksilttik. 
console.log(isimler[6][2]); // kalici bir degisiklik olmus oldu.




// ?=========================================================
// ?        DİZİYI DEGISTIREN METHODLAR (MUTATOR)
// ?=========================================================

//* pop() ====== dizinin son elemanini siler, yazdirirsak sildigi elemani döndürür.

const meyveler=["Elma", "Erik", "Armut", "Muz", "Kivi"]
console.log(meyveler);
console.log(meyveler, "sildigim meyve...:", meyveler.pop());

//* shift() ====== dizinin ilk elemanini siler yazdirirsak sildigi elemani döndürür.

console.log(meyveler, meyveler.shift()); 

//* push() ======= dizinin sonuna eleman ekler, yazdirirsak dizinin güncel eleman sayisini döndürür.

const sayi = meyveler.push("Cilek", "Kavun", "karpuz")
console.log(meyveler, sayi);

//* unshift() ======== dizinin basina eleman ekler, yazdirirsak dizinin güncel eleman sayisini döndürür.

meyveler.unshift("Ayva");
console.log(meyveler);


//* reverse() ===== dizinin tamamini ters cevirir.

meyveler.reverse()
console.log(meyveler);

console.log(meyveler[4].split("").reverse());

// meyveler dizisinin 4. elemanini önce diziye cevirdik sonra tersini aldik. cünkü reverse dizilere ait bir methoddur.
console.log(meyveler);

//* sort() ====== , string ifadelerde alfabetik sıralar(ascII değerlerine göre)
//* sort metodu diziyi iterasyona uğratır ve parametre olarak aldığı arrow fonksiyonunu 
//* (a-b>0 önce b yi yaz gibi) dizinin her bir elemanına uygular. Bu sayade küçük sayılar ile 
//* büyük sayıları yer değişirerek sıralama işlemini gerçleştirir.

const number= [3,5,1,35,10,22,55,77,231];
number.sort()
console.log(number);

number.sort((a,b) => (a-b));
console.log(number);

//*sadece sort dersek 22 den sonra 231 sonra 3 ü getirir, 
//* o yüzden alttaki gibi yazarız=bütün sayıları karşılaştır küçük olanı önce yaz 

meyveler.sort();
console.log(meyveler);

//*splice() ====== 1. parametre dizinin eleman ekleyecegimiz indexsini belirtir. 
//* 2. parametre= 0 ise belirttigim indexdeki eelemani saga ittir artik yeni yazdigim gelsin
//* 2. parametre =1 ise belirttigim indexteki elemani sil üstüne yaz.
//* 3. parametre yazilacak sey

// ["Armut", "Ayva", "Cilek", "Erik", "Kavun", "Muz", "karpuz"];

meyveler.splice(2, 0, "Mango");
console.log(meyveler); //['Armut', 'Ayva', 'Mango', 'Cilek', 'Erik', 'Kavun', 'Muz', 'karpuz']

meyveler.splice(1, 1, "Ananas");
// meyveler [1]="Ananas"
console.log(meyveler); //['Armut', 'Ananas', 'Mango', 'Cilek', 'Erik', 'Kavun', 'Muz', 'karpuz']





//? ===========================================================
//?  DİZİ ERİŞİM METOTLARI (diziyi değiştirmezler)
//? ===========================================================

console.log("***********");

const sayilar1=[3, 5, 2, "2", "üc", 2, "bes", 5]



//* includes()
//*-----------------------------------------------------------

console.log(sayilar1.includes("5")); //false
console.log(sayilar1.includes(5)); //true


//* indexOf(),  lastIndexOf();
//*-----------------------------------------------------------

console.log(sayilar1.indexOf("2"));
console.log(sayilar1.indexOf(2, 4)); //2 yil bul ama 4. indesten sonraki ilk 2 yi bul

console.log(sayilar1.lastIndexOf(5));



//! örnek

//* kullanıcıdan sayı isteyin. girilen sayının hem string hem number hali sayılar dizisinde 
//* var mı araştır, varsa index ini döndür

// const sayilar1 = [3, 5, 2, "2", "üc", 2, "bes", 5];

// const sayiString= prompt("Lütfen bir sayi giriniz");

// const sayiNumber = Number(sayiString)

// let varMi=false;

// if(sayilar1.includes(sayiString)){
//     console.log("aradiginiz string indexi...:" , sayilar1.indexOf(sayiString));
//     varMi=true;
// }
// if(sayilar1.includes(sayiNumber)){
//     console.log("aradiginiz numberin indexi....:", sayilar1.indexOf(sayiNumber));
//     varMi = true;
// }

// if(varMi==false){
//     console.log("aradiginiz eleman yok");
// }

// 2.yol
// if(sayilar1.includes(sayiString)==false && sayilar1.includes(sayiNumber)== false){
//     console.log("aradiginiz eleman yok");}


//* join()
//*-----------------------------------------------------------
//? join, dizinin elamanlari birlestirip string hale cevirir.join(" ")=>virgül+boşluk sil boşluklarla 
//? (join parantezinde 2 varsa her eleman arasına 2 koy) ayır
//* split(" ")=>string i boşluklardan ayırır,boşlukları silip virgül+boşluk yapar ve yeni dizi döndürür.
//* orijinal diziyi değiştirmez


// const sayilar1 = [3, 5, 2, "2", "üc", 2, "bes", 5];
console.log(sayilar1.join(" ")); //tirnak icine ne yazarsan aralarina onu koyup yazdirir

  //*dizinin 2 indexli elemanını tersten string olarak yazdır

  //['Armut', 'Ananas', 'Mango', 'Cilek', 'Erik', 'Kavun', 'Muz', 'karpuz']

console.log(meyveler[2].split("").reverse().join("")); 


//* toString()
//*-----------------------------------------------------------
//? toString fonksiyonu sadece dizinin elemanlarinin aralarina
//? (virgul) koyarak birlestirir ve string yapar.


console.log(sayilar1.toString());


//* slice()
//*-----------------------------------------------------------


const arabalar=["BMW", "Mercedes", "Audi", "Ferrari", "Anadol"]

console.log(arabalar.slice(3));
console.log(arabalar.slice(1,3));

//! diziyi kopyalamak icin kullanilabilir.
const arabalarCopy=arabalar.slice();
console.log(arabalarCopy);

//* concat()
//*-----------------------------------------------------------

const yazilar= ["ali", "dogu", "hilal", "ipek"]
const rakamlar= [3, 5, 7, 1, 4]

const birlesik= yazilar.concat(rakamlar, true, ["a", "b", "c"], [["x", "y", "z"]]);
console.log(birlesik);



//* every()
//*-----------------------------------------------------------
//? Tum diziyi itere eder ve aldigi callback fonksiyonuna gore
//? test gerceklestirir.Tum elemanlar icin test basarili ise
//? true aksi takdirde false deger dondurur.


const yas=[18, 23, 35, 44, 57, 89, 15]
console.log(yas.every((a)=> a>=18) ? "dizideki herkesin yasi 18 ve daha büyüktür" : "dizide 18 yas alti eleman var");



//* some()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? En az bir eleman icin bile test basarili ise true aksi
//? takdirde false deger dondurur.


console.log(yas.some((a)=> a>70)); //true
console.log(yas.some((a)=> a>90)); //false



//* find(), findLast()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? Kosulu saglayan ilk dizi elemaninin dondurur.
//? Eger hic bir eleman kosulu saglamazsa undefined dondurur.

//?Ornek: Yasi 30 dan buyuk olan ilk elemani yazdirin

console.log(yas.find((item)=> item>30));
console.log(yas.findLast((item)=> item>30));


//* findIndex()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? Kosulu saglayan ilk dizi elemaninin indeksini dondurur.
//? Eger hic bir eleman kosulu saglamazsa -1 dondurur.

//?Ornek: Yasi 30 dan buyuk olan ilk elemanin indexini yazdirin

console.log(yas.findIndex((i)=> i>30));






















