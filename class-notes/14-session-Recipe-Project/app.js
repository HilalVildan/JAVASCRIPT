//!ilk ekrandaki yemek resimlerinin api den çekilmesi

// www.themealdb.com/api/json/v1/1/search.php?s=
//?console da kontrol edip
//?ekrana bas fonksiyonuna yollama

//!api den gelen verilerin ekrana bastırılması

// DİV.innerHTML=""
{
  /* <div class="col-md-3 p-4 m-4"><p>${}</p>   <img class="malzeme" style=width:200px  src=${} class="card-img-top" ></div> */
}

//!arama inputunda arama yapma (oninput kulanarak)

// input.target.value

//?ekranı güncelle

//!bayraklara tıklandığında, ilgili api den verilerin çekilmesi ve ekranabastır fonksiyonuna gönderme

// `www.themealdb.com/api/json/v1/1/filter.php?a=${ülke}`

//?ekrana bastıra gönder


const input = document.querySelector(".form-control");
const display = document.querySelector(".food");
let dizi = [];
const getDataFromApi = () => {
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.meals);
      dizi = data.meals;
      pressDisplay(dizi);
    });
};
getDataFromApi();
//Ekrana bastirma
const pressDisplay = (items) => {
  items.forEach((e) => {
    display.innerHTML += `<div class=“col-md-3 p-4 m-4”><p>${e.strMeal}</p>   <img class=“malzeme” style=width:200px  src=“${e.strMealThumb}” class=“card-img-top” ></div>`;
  });
};
input.oninput = () => {
  console.log("sonra", dizi);
  const newArray = dizi.filter((a) =>
    a.strMeal.toLowerCase().includes(input.value)
  );
  display.innerHTML = "";
  pressDisplay(newArray);
};
document.querySelectorAll(".ulke").forEach((a) => {
  a.onclick = () => {
    console.log(a.id);
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${a.id}`)
      .then((response) => response.json())
      .then((data) => {
        //console.log(“a”, data);
        display.innerHTML = "";
        pressDisplay(data.meals);
      });
  };
});