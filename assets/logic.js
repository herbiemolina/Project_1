
$("#search").on("click", function(event) {
    event.preventDefault();
    
    var query = $("#ingredient-input").val().trim();
    console.log(query);

    var queryURL = "https://api.edamam.com/search?q=" +
    query + "&app_id=64760290&app_key=b202394ba44a6ecd22f361ca5ed5bbde";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(queryURL);
        console.log(response);

        var results = response.data;

        
    })

    

    // var query = $("#ingredient-input").val().trim();
    // console.log(query);

    // var queryURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=" +
    // query;

    // $.ajax({
    //     url: queryURL,
    //     method: "GET"
    // }).then(function(response) {
    //     console.log(queryURL);
    //     console.log(response);

    //     var results = response.data;

        
    // })
    

    
})
