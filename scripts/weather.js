//*** current day  */
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#current-weather-icon');
const captionDesc = document.querySelector('#current-caption-desc');

/***** second day */
const currentTempDay24 = document.querySelector('#temp-day-24');
const weatherIconDay24 = document.querySelector('#icon-day-24');
const captionDescDay24 = document.querySelector('#desc-day-24');

/***** third day */
const currentTempDay48 = document.querySelector('#temp-day-48');
const weatherIconDay48= document.querySelector('#icon-day-48');
const captionDescDay48 = document.querySelector('#desc-day-48');



const url = "https://api.openweathermap.org/data/2.5/forecast?lat=49.74880&lon=6.63401&units=imperial&appid=648276dc852d1411613be08976455040"
async function apiFetch() {
    try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }

}

function  displayResults(data) {
  currentTemp.innerHTML      = `<h2>${data.list[0].main.temp}&deg;F</h2>`;
  currentTempDay24.innerHTML = `<h2>${data.list[4].main.temp}&deg;F</h2>`;
  currentTempDay48.innerHTML = `<h2>${data.list[8].main.temp}&deg;F</h2>`;

  captionDesc.innerHTML      = `<h3>${data.list[0].weather[0].description}</h3>`; 
  captionDescDay24.innerHTML = `<h3>${data.list[4].weather[0].description}</h3>`;
  captionDescDay48.innerHTML = `<h3>${data.list[8].weather[0].description}</h3>`;

//*****today icon weather */
   const iconsrc = `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`; 
    weatherIcon.innerHTML = iconsrc;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);

    const iconsrc24 = `https://openweathermap.org/img/wn/${data.list[4].weather[0].icon}@2x.png`; 
    weatherIconDay24.innerHTML = iconsrc24;
    weatherIconDay24.setAttribute('src', iconsrc24);
    weatherIconDay24.setAttribute('alt', desc);

  captionDesc.textContent = descArr; 


/****table data  */
var table = document.createElement("table");
  var tbody = document.createElement("tbody");
  //Creating the first row 
  tbody.insertRow(0);
  tbody.row[0].insertCell(0);
  tbody.row[0].appendChild(document.createTextNode("cell 1,1"));
  
  document.body.appendChild(table);

//const url = "https://api.openweathermap.org/data/2.5/forecast?lat=49.74880&lon=6.63401&units=imperial&appid=648276dc852d1411613be08976455040"
const url = "https://api.openweathermap.org/data/2.5/forecast?lat=19.4285&lon=-99.1277&exclude=hourly&units=standard&appid=648276dc852d1411613be08976455040";
async function apiFetch() {
    try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      displayResults(data);
      /*console.log(data); */
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }

}

}

apiFetch();
