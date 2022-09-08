// * =======================================================
// *                     DÖNGÜLER
// * =======================================================

//************************ FOR ****************************

// ekrana 10 kere merhaba yazdir

for (let i = 1; i <= 10; i++) {
    console.log("merhaba",i);
    
}


// 1 den N e kadar olan tam sayilari topla

// const n = +prompt("n icin kullanilacak sayiyi girin")
// let toplam = 0
// for (let i=1; i<= n; i++){
//     toplam =+i;
// }
// console.log(toplam);


//? ÖRNEK: Dışarıdan girilen sayının Asal olup olmadığını tespit ederek sonucu yazdıran programı yazınız.


// const sayi= +prompt("asal kontrolu icin bir sayi giriniz");
// let sonuc =true;

// for (let i=2; i<sayi; i++){
//     if(sayi%i==0){
//         sonuc=false
//     }
// }
// console.log(sonuc==true ? "asaldir" : "asal degildir");

// sonuc==true yerine sadece asal yazilabilir.
// sonuc==false yerine de !true yazmak ayni seydir.



//************************ WHILE ****************************

// ÖRNEK 1: while icin 1-100 arasinda bir sayi giriniz. aksi durumda error mesaji verip tekrar sayi iste

// let number = +prompt("While icin 0-100 arasi bir sayi giriniz")

// while(number<0 || number>100){
//     console.error("number 0-100 arasinda olmalidir")
//     number = +prompt("While icin 0-100 arasi bir sayi giriniz");
// }

// console.log("girdiginiz sayi 0-100 arasindadir");

//! Whiledaki sart true oldugu sürece altindaki suslu isler false oldugu anda süslünün disina cikilir


//************************ DO WHILE ****************************

// let number1;

// do{
//     number1=+prompt("enter a number for do while")
//     alert(number1);
// }while(number1>100 || number1>100)

// sarta bakmadan ilk etapta do nun icindeki istek yapilir sonrasinda while ici true old sürece do icindeki istek yapilmaya devam edilir

// console.log(number1);

//? ORNEK2: klavyeden q karakteri girilene kadar not girişi yapan bir programı döngü kullanarak yazınız

let sayi1;
do{
    sayi1= prompt("please sayi giriniz");

}while(sayi1!="q")

console.log(sayi1);


//? : Tahmin Oyunu
//* Program 0*100 arasında rasgele bir sayı tutacak ve kullanıcının bu sayıyı 5 kere(hak) de bilmesini isteyecektir. Her yanlışta hakkını bir düşürecek ve ARTTIR/AZALT diyerek kullanıcıyı yönlendirecektir.Sonuç olarak kullanıcının hakkı 0 olursa "Üzgünüz bilemediniz" eğer bildi ise "Tebrikler  bildiniz" yazacaktır.





