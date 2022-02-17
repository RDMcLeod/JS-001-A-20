getweatherbylocation("London");
const APIURL =
  "https://cors-anywhere.herokuapp.com/http://www.metaweather.com/api/";

async function getweatherbylocation(location) {
  const resp = await fetch(APIURL + "/location/search/?query=" + location, {});
  const respData = await resp.json();

  console.log(respData);
}
getweatherbylocation("London");
