const getirCountry = async (name) => {
  try {
    const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);

    if (!res.ok) {
      throw new Error("url de hata var");
    }
    const data = await res.json();

    console.log(data);
    console.log(data[0]);

    //EKRANA BASTIRMAYI CAGIRDIK

    ekranaBastır(data[0])

  } catch (error) {
      console.log(error);
  }
};


let dizi = ["turkey", "peru", "canada", "germany"]

dizi.forEach((a)=>{
    getirCountry(a)
})



//EKRANA_BASTIR YAZMA

ekranaBastır=(country)=>{
    document.querySelector(
      ".countries"
    ).innerHTML += `<div class="card text-start w-50 shadow-lg bg-light">
      <img src=${country.flags.svg} class="card-img-top" alt="...">
      <div class="card-body">
         <h5 class="card-title"> ${country.name.common}</h5>
         <p class="card-text"></p>
      </div>
      <ul class="list-group list-group-flush">
         <li class="list-group-item"><i class="fas fa-lg fa-landmark"></i> ${country.capital}</li>
         <li class="list-group-item"><i class="fas fa-lg fa-comments"></i> ${Object.values(country.languages)} </li>
         <li class="list-group-item"><i class="fas fa-lg fa-money-bill-wave"></i> ${Object.values(country.currencies)[0].name} </li>
      </ul>
   </div> `; 
}




 //!ekrana bastırılacak dizi elemanlarının key leri farklı farklıysa===>>
  //!!!! Object.values()öğeleri, nesnede bulunan numaralandırılabilir  bir dizi döndürür, istenen nesne nin içindeki object in value larını yaz, bu value lar ,object.value sayesinde dizi içinde toplanır
  //? Object.values(country.currencies)=currencies in value larını bir dizide toplar
  //! TRY: nin value sini dizi yapar 0 indexli: [{name: 'Turkish lira', symbol: '₺'}]. TRY key i silinir
  //? Object.values(country.languages)=languages in value larını bir dizide toplar[eng,span..] eng key i silinir