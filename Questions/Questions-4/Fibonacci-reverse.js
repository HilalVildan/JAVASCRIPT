// Fibonacci Number

//? FIBONACCI terimleri:  1, 1, 2, 3, 5, 8, 13, 21, ...

const fibo=(n)=>{

    let fibLeft=1;
    let fibRight=2;

    let add=0;

    for(let i= 2; i<n ; i++){

        add=fibLeft+fibRight;
        fibLeft=fibRight;
        fibRight=add;
    }
return fibRight;
}

console.log(fibo(7)); 
console.log(fibo(12)); 


// Reverse String

const yazi = ["Clarusway Rocks!", "Happy"]

console.log(yazi[1].split("").reverse().join(""));
console.log(yazi[0].split("").reverse().join(""));


// Reverse Words

const yazi1 = ["Clarusway Rocks!", "Happy"];
yazi1.reverse()

console.log(yazi1);


// Merge Arrays

const liste1 = ["a", "b", "c", "d"];
const liste2 = [1, 2, 3, 4, 5];

const toplam = liste1.concat(liste2,["a", "b", "c"]);
console.log(toplam);