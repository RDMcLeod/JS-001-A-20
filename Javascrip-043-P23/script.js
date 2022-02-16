getweatherbylocation("London");
const APIURL = "https://www.metaweather.com/api/";

async function getweatherbylocation(location) {
  const resp = await fetch(APIURL + "/location/search/?query=" + location);
  const respData = await resp.json();
}
getweatherbylocation("London");
