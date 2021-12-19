getRandomMeal();

async function getRandomMeal() {
  const randomMeal = await fetch(
    "http://www.themealdb.com /api/json/v1/1/random.php"
  );
  const respData = await Resp.json();
  const randomMeal = respData.meals[0];

  addMeal(randomMeal, true);
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
addMeal(mealData,random = false){
  const meal = document.createElement('div');
  meal.classList.add('meal');
}