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


 /**
 * When an item in the selected items list is clicked, remove it from the searchItems array and update the list
 */
$(document).on("click", ".selected-item", function() {
  let food = $(this).attr("food-item");
  let index = searchItems.indexOf(food);
  searchItems.splice(index,1);
  updateSelectedItemsList();
})

/**
 * When an item is clicked, add it to the searchItems array and update the selected items list
 */
$(document).on("click", ".single-option", function() {

  let food = $(this).attr("food-item");
  if (!searchItems.includes(food)) {
    searchItems.push(food);
    updateSelectedItemsList();
  }
})

  /*
  * Creates clickable images and puts them in the ingredients-options box
  */
 const createIngredientChoices = () => {
   let $ingredientOptions = $('#ingredient-options');
   $ingredientOptions.empty();
   let foodImage = "";

   for (let i = 0; i < ingredients.length; i++) {

     if (ingredients[i].image !== "") {
       foodImage = `<img id="ingredient-${i}" class="ingredient-option-image"  src=${ingredients[i].image}>`
     } else {
       foodImage = "";
     }

    $('#ingredient-options').append(`<div id="ingredient-${i}" class="m-1 float-left ingredient-frame">
      <div class="single-option" food-item="${ingredients[i].name}">
        <div class="text-center ingredient-name">${ingredients[i].name}</div>
        ${foodImage}
      </div>`);
   }
 }

  // ====================================
  const updateSelectedItemsList = () => {
    const $selectedList = $("#selected-list");
    $selectedList.empty();  // clear out current list
    if (searchItems) {
      let $listGroup = $selectedList.append("<div>").addClass("list-group");
      for (i=0; i<searchItems.length; i++) {
        $listGroup.append(`<button type="button" class="list-group-item list-group-item-action selected-item" food-item="${searchItems[i]}">${searchItems[i]}</button>`);
      }
    }

  }

  // Set this up to do the API search, and display on main view
  $("#search-api").on("click", function() {
    alert(`Search the api for:  ` + searchItems);
    $("#select-ingredients").modal('hide');
  })

// On click of add ingredient button
  $("#add-ingredient").on("click", (e) => {
    e.preventDefault();
    var subject = $("#new-ingredient-input").val().trim();
    console.log(subject);
    // if (subject !== "" && !ingredients["name"].includes(subject)) {
    if (subject !== "" && !ingredientExists(subject)) {
      ingredients.push(
        {
          image: "",
          name: subject,
        },
      );
      createIngredientChoices();
    }
    $("#new-ingredient-input").val('');    // clear input field
  })

  // Returns true if ingredient exists in list, otherwise returns false
  function ingredientExists(item) {

    var index = ingredients.filter((obj) => {
      console.log(obj.name);
      console.log(item);
      return obj.name === item;
    })

    console.log(index.length);
    if (index.length > 0) {
      return true;
    } else {
      return false;
    }
  }