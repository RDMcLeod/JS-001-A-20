function getRandomMeal() {
  fetch("http://www.themealdb.com /api/json/v1/1/random.php");
}
function getMealById(id) {
  fetch("http://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id);
}

function getMealsBySearch(term) {}
