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

const yazi= ["Clarusway Rocks!", "Happy"]

console.log(yazi[1].split("").reverse().join(""));
console.log(yazi[0].split("").reverse().join(""));



