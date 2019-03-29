// ===== Variables =============================
// const recipes = [];

// $("#spoonacular-search").on("click", function(event) {
//     event.preventDefault();

// var settings = {
//     "async": true,
//     "crossDomain": true,
//     "url": "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/479101/information",
//     "method": "GET",
//     "headers": {
//       "X-RapidAPI-Key": "13639e06b5msh6d9dc61e3c615b9p1f0efcjsn980ee447f232",
//       "cache-control": "no-cache",
//       "Postman-Token": "93e85d06-a15d-45b5-b778-3914b88e4fe0"
//     }
//   }
  
//   $.ajax(settings).done(function (response) {
//     console.log(response);
//   });
// })

$("#spoonacular-search").on("click", function(event) {
  event.preventDefault();
  var items = ["beef","cashews","onions"];
  getRecipes(items, 3);
})

/*
 *  Makes AJAX call to get the recipes based on the search criteria provided.
 *
 *  Parameters:
 *    ingredients:   an array of ingredients to include in the recipe
 *    quantity:      the number of recipes to return 
 */
const getRecipes = (ingredients, quantity) => {
  console.log(ingredients);
  // The next line changes the array into a string where each item is separated by %2C and any
  //   spaces in the search ingredients are replaced by a + 
  var convertedString = ingredients.join("%2C").replace(/ /g,"+");

  var settings = {
    "async": true,
    "crossDomain": true,
    "url": `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=${quantity}&ranking=1&ignorePantry=false&ingredients=${convertedString}`,
    "method": "GET",
    "headers": {
      "X-RapidAPI-Key": "13639e06b5msh6d9dc61e3c615b9p1f0efcjsn980ee447f232",
      "cache-control": "no-cache",
      "Postman-Token": "93e85d06-a15d-45b5-b778-3914b88e4fe0"
    }
  }
  
  $.ajax(settings).done(function (response) {
    var recipes = createRecipeArray(response);
    console.log(recipes);
  });
}

// Generates an array of recipe objects. Each object contains the recipe ID, title, and image url.
function createRecipeArray(resp) {
  var recipes = [];
  resp.forEach((o) => {
    recipes.push({
      "id": o.id,
      "title": o.title,
      "image": o.image,
    })
  })
  return recipes;
}

