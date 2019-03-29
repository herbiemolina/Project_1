// temporary data to play with

const ingredients = [
  {
    image: "./assets/images/gem_1.png",
    name: "chicken",
  },
  {
    image: "./assets/images/gem_2.png",
    name: "beef",
  },
  {
    image: "./assets/images/gem_3.png",
    name: "salmon",
  },
  {
    image: "./assets/images/gem_4.png",
    name: "carrots",
  },
  {
    image: "./assets/images/gem_5.png",
    name: "penne",
  },
  {
    image: "./assets/images/gem_1.png",
    name: "peanut butter",
  },
  {
    image: "./assets/images/gem_2.png",
    name: "cheese",
  },
  {
    image: "./assets/images/gem_3.png",
    name: "green beans",
  },
];

var searchItems = [];

$("#open-select-ingredients").on("click", function(e) {
  e.preventDefault();
  // show default images
  createIngredientChoices();
})

$(document).on("click", ".single-option", function() {

  let food = $(this).attr("food-item");
  if (!searchItems.includes(food)) {
    searchItems.push(food);
  }
  // console.log(food);
})
  /*
  * Creates clickable images and puts them in the ingredients-options box
  */
 const createIngredientChoices = () => {
   let $ingredientOptions = $('#ingredient-options');
   $ingredientOptions.empty()
   for (let i = 0; i < ingredients.length; i++) {
    $('#ingredient-options').append(`<div id="ingredient-${i}" class="m-1 float-left ingredient-frame">
      <div class="single-option" food-item="${ingredients[i].name}">
        <div class="text-center ingredient-name">${ingredients[i].name}</div>
        <img id="ingredient-${i}" class="ingredient-option-image"  src=${ingredients[i].image}>
      </div>
    </div>`);
   }
 }

  // ====================================
