//* ======================================================
//*    NEW GENERATION OPERATORS: DESTRUCTURING (OBJECT)
//* ======================================================


const car={
    title :"BMW",
    model : "1990",
    engine : 1.6
}

//* 1.klasik yol

console.log(car.model);
console.log(car["engine"]);


//* 2. yol destructuring

const {title, engine} = car 

console.log(title, engine, car.model); //modeli acmadigimiz icin car.model yazmak zorundayiz.


//*NESTED OBJECT example:

const arabalar = {
  car1: {
    title1: "BMW",
    model1: "1990",
    engine1: 1.6,
  },

  car2: {
    title1: "Mercedes",
    model1: "1980",
    engine1: 2.0,
  }
};

// console.log(arabalar.car1.title);

const{car1, car2} = arabalar
console.log(car1);
console.log(car1.model1);

const{title1,model1,engine1}=car1;
console.log(title1);

// car1 icin title1 i model1i kullandigimizdan car2 de kullanamayiz. bu yüzden yeni isim verdik. 
const{title1:baslik, model1:model2, engine1:motor}=car2;
console.log(baslik);

//!!!!JavaScript'te, iterable protokolü uygulamadıkça Objects iterable değildir. 
//! Bu nedenle, bir object in özellikleri üzerinde iterate yapmak için for…of (forEach, map, filter da) 
//! kullanamazsınız. sadece klasik for döngüsü ve for in kullanilabilir.

//* örnek object-object gezinme

for(let i in arabalar){
    console.log(i);
 //elemani kucaklayip gelemez sadece car1 ve car2 yi bulur gelir.
    console.log(arabalar[i].title1);
}





//* örnek: Array-Object gezinme

const people = [
  {
    name: "Mustafa",
    surname: "Gertrud",
    job: "developer",
    age: 30,
  },
  {
    name: "Halo",
    surname: "Müller",
    job: "tester",
    age: 35,
  },
  {
    name: "Mehmet",
    surname: "Rosenberg",
    job: "team lead",
    age: 40,
  },
  {
    name: "Ozkul",
    surname: "Gutenberg",
    job: "developer",
    age: 26,
  },

  {
    name: "Baser",
    surname: "Shaffer",
    job: "tester",
    age: 24,
  },
];


people.forEach((item)=>{

   // console.log(item.name);
   // console.log(item.surname);
   // console.log(item.job);
   // console.log(item.age);

    const{name, surname, job, age}=item
    console.log(name, surname, job, age);
})


//? Fonksiyonlar object parametleri dest yapabilir

const yazdir=({id, name})=>{

    // parametre olarak b ismiyle karsilasaydik yorumdaki islemleri yapmak zorunda kalirdik.
    // console.log(b);
    // const {id, name} = b;
    console.log(id, name);
}
const a={id:1, name:"Osman"}

yazdir(a);



//*======================================================
//*   NEW GENERATION OPERATORS: SPREAD OR REST (...)
//* ======================================================

//? ------------------------------------------------------
//?  REST =>>[...name]=diziden alınmayan, geri kalanları yeni bir (diziyse) diziye,(object se)object e atıyor
//? ------------------------------------------------------


//! 1- Bir dizi veya object'deki bazi degerlerden geri kalanlarini
//!    ayri dizi yada objelere kopyalanmasini saglayabilir.

//* REST OBJECT********************************************************

const personel={
    pName:"Johny",
    surname:"Deep",
    job:"Aktor",
    age:55
}

const{pName,...gerisi}=personel

console.log(pName);
console.log(gerisi);
console.log(gerisi.surname, personel.surname);

//* OBJECT kopyalama

const ikizPersonel =personel
console.log(personel);
console.log(ikizPersonel); //böyle kopyalama sacmadir. kopya üzerinde islem yapinda asil obje de zarar görür


const{...personelGerisi}= personel
console.log(personelGerisi); //bu mantikli bir kopyadir birbirinden etkilenmezler. degisiklik yapildiginda asil obje degismez. birbirinden kopuklardir.


console.log("***********************");
personelGerisi.age=40; //bagimsiz kopyada degisiklik yaptim.
console.log(personel); //asil obje de degisiklik olmaz
console.log(ikizPersonel);
console.log(personelGerisi); //degisiklik sadece bu kopyada olur

console.log("*************************");
ikizPersonel.age=100; // orginali de etkileyen kopyada degisiklik yaptim
console.log(personel); //dolayisiyla burdaki yas da etkilendi ve degisti.
console.log(ikizPersonel);
console.log(personelGerisi);





//* REST ARRAYS ************************************************

const autos = ["anadol", "renault", "bmw", "mercedes", "ferrari"]

const[birinci, ikinci, ...autoGerisi]=autos;

console.log(birinci, ikinci);
console.log(autoGerisi); 

//* ARRAY kopyalama

const esasNumber= [10, 20, 30, 40]

const ikizNumber= esasNumber // orjinali etkileyen kopya
const [...arkadasNumber] = esasNumber // bagimsiz kopya

arkadasNumber.push(999); // bagimsiz kopyanin sonuna 999 ekledim.

console.log(esasNumber);
console.log(ikizNumber);
console.log(arkadasNumber);

console.log("***********************************");

ikizNumber.unshift(222); // orjinali etkileyen kopyanin basina ekledim. 
esasNumber.push(111111); // orjinal diziye eklersem ikiz de etkilenir.

console.log(esasNumber);
console.log(ikizNumber);
console.log(arkadasNumber);






//! 2- Bir fonksiyonun argümanlarini(parametrelerini) diziye cevirmek icin kullanilabilir. 

// * 1. yol: sikayet etmez ama gücü kadar yapar yani burada sadece 2 argumanin degerini hesaplar.2 adet karsilayan var
const sum=(x,y)=> x+y;

console.log(sum(1, 2, 3, 4, 5))

//*2.yol: 

const sum2 = (...x)=>{

    // console.log(x);
 console.log(x.reduce((toplam, eleman)=>toplam+eleman,0));   

}
sum2(1, 2, 3, 4, 5)



//? ------------------------------------------------------
//?  SPREAD==>> parçala (yapısını boz)-> istenilen diziye ekle,içinde gezin vs
//? ------------------------------------------------------


const zeugs=["Aircraft", "Helicopter", "Bicycle"]

const otomobiles=["Trucks" , "Bus", "Car", "SUV"]


console.log([zeugs, otomobiles]);
console.log(zeugs.concat(otomobiles));

const birlesik=[...zeugs,"otobus" ,...otomobiles,"tir"]
console.log(birlesik);


//* Stringi arraye cevirme

let kelime="Hello Almanya"
console.log([...kelime]);
console.log(Array.from(kelime));









