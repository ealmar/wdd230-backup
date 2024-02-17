const baseURL = "https://ealmarazr.github.io/wdd230/";
const linksURL = "https://ealmarazr.github.io/wdd230/data/links.json";

async function getLinks() {
    try {
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          displayLink(data)
        } else {
          throw Error(await response.text());
        }
      } catch (error) {
        console.log(error);
      }
  }
  
  

  displayLinks(weatherData){
    day = watherData.list[0];

  }