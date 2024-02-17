/* selecting grid list and cards */


/* Reading the json data file */
/*async function readData(){
    const response = await fetch(jasonFile);
    const records  = await response.json();
    displayData(records.businesses);
}

readData();
*/
const currentTemp = document.querySelector('#card-title');
const url = "data/members.json";
async function apiFetch() {
    try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      displayResults(data);
      console.log(data); 
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }

}

function  displayResults(data) {
 /* currentTemp.innerHTML = 'termino proceso';*/
   
}

apiFetch();