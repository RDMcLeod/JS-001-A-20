getRandomMeal();

async function getRandomMeal() {
  const randomMeal = await fetch(
    "http://www.themealdb.com /api/json/v1/1/random.php"
  );
  const randomMeal = await Response.json();
}
async function getMealById(id) {
  const meal = await fetch(
    "http://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id
  );
}

async function getMealsBySearch(term) {
  const meals = await fetch(
    "www.themealdb.com/api/json/v1/1/search.php?s=" + term
  );
}
