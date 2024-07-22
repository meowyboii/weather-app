const initializeSearch = () => {
  const form = document.getElementById("search-form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const searchInput = document.getElementById("search").value;
    getWeatherData(searchInput, form);
  });
};
const getWeatherData = async (searchInput, form) => {
  const fetchURL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${searchInput}?unitGroup=us&key=P87L2MPWHRTGMEQBPHFEUV688&contentType=json`;
  try {
    const response = await fetch(fetchURL, { mode: "cors" });
    if (response.ok) {
      const weatherData = response.json();
      console.log(weatherData);
      form.reset();
    } else {
      console.log(`Error: ${response.status}`);
    }
  } catch (error) {
    console.log(error);
  }
};
document.addEventListener("DOMContentLoaded", () => {
  initializeSearch();
});
