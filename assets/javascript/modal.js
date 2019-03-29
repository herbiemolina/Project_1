// temporary data to play with


var ingredients = [];

var defaultIngredients = ['chicken', 'beef', 'cheese', 'salmon'];
var searchItems = [];
const defaultImage = "./assets/images/groceries.png";  // this isn't working

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
       try {
         foodImage = `<img id="ingredient-${i}"
          class="ingredient-option-image"
          src=${ingredients[i].image}
          onerror="this.src='${defaultImage}'" >`
       } catch {
         foodImage = "";
       }
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
    if (subject !== "" && !ingredientExists(subject)) {
      ingredients.push(createIngredientObject(subject))
      createIngredientChoices();
    }
    $("#new-ingredient-input").val('');    // clear input field
  })

  // Returns true if ingredient exists in list, otherwise returns false
  function ingredientExists(item) {

    var index = ingredients.filter((obj) => {
      return obj.name === item;
    })
    if (index.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  function createIngredientObject(item) {
    return (
      {
        "name": item,
        "image": getIngredientImage(item),
      }
    )
  }

  function getIngredientImage(food) {
    let findImage;
    try {
      findImage = `https://www.themealdb.com/images/ingredients/${food}.png`;
    } catch {
      findImage = '';
    }
    return findImage
  }

  // this isn't working
  // $(document).on("error", ".ingredient-option-image", function()    {
  //   $(this).attr('src', defaultImage);
  // });

  $(document).ready(() =>{
    defaultIngredients.forEach((item) => {
      ingredients.push(createIngredientObject(item))
      createIngredientChoices();
    })    

  })