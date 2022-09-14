// 1.soru

const fiyatlar=[100, 250, 50, 90];

fiyatlar.forEach((p, i, prices)=>{

    prices[i]=p*1.1;
  
})

console.log(fiyatlar);


// 2. soru

const fiyatlar2 = [100, 250, 50, 90];


const yeniFiyat = fiyatlar2.filter((p) => p > 90);
console.log(yeniFiyat);

// 3. soru

const fiyatlar3 = [100, 250, 50, 90];

fiyatlar3.map((p, i, array) => {
  if (p < 110) {
    array[i] = p * 1.1;
  } 
});

console.log(fiyatlar3);


// 4.soru

const maas = [3000, 5000, 4000, 6000, 6500];

const yeniMaas = maas.filter((p)=> p< 4000).map((i)=>i*1.5);

console.log(yeniMaas);

// 5.Soru

const maas2 = [3000, 5000, 4000, 6000, 6500];


console.log(maas.filter((p)=> p>4000).map((i)=> i*1.25) );