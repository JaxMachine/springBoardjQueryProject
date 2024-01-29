// Id to keep track of elements to remove
let currentId = 0;

//list of movies
let moviesList = [];


$(function(){
    $("#new-movie-form").on("submit", (evt) =>{
        evt.preventDefault();
        let title = $("#title").val();
        let rating = $("#rating").val();
        let movieData = {title, rating, currentId};
        const HTMLtoAppend = createEntry(movieData);

        if(title.length >= 2) {
            currentId++
            moviesList.push(movieData);
            $("#movie-table-body").append(HTMLtoAppend);
            $("#new-movie-form").trigger("reset");
        }

    });

    //Finding the index to remove
    $("tbody").on("click", ".btn.btn-danger", function (evt){
        console.log(evt.target);
        let removeIndex = moviesList.findIndex(movie => movie.currentId === +$(evt.target).data("deleteId"));
    

    //Remove from DOM
        moviesList.splice(removeIndex, 1);
        $(evt.target)
        .closest("tr")
        .remove();

    });

    $(".fas").on("click", function(evt) {
        let direction = $(evt.target).hasClass("fa-sort-down") ? "down" : "up";
        let idToSort = $(evt.target).attr("id");
        let sortedMovies = sortBy(moviesList, idToSort, direction);

        // Empty table to prep to sorted list
        $("#movie-table-body").empty();

        //Add items based on the sorted movie
        for (let movie of sortedMovies){
            const HTMLtoAppend = createEntry(movie);
            $("#movie-table-body").append(HTMLtoAppend);
        }

        //Arrow Toggle
        $(evt.target).toggleClass("fa-sort-down");
        $(evt.target).toggleClass("fa-sort-up");
    });
});

function sortBy(array, keyToSortBy, direction) {
    console.log(keyToSortBy);
    return array.sort(function(a, b) {
      // since rating is a number, we have to convert these strings to numbers
      if (keyToSortBy === "rating") {
        a[keyToSortBy] = +a[keyToSortBy];
        b[keyToSortBy] = +b[keyToSortBy];
      }
      if (a[keyToSortBy] > b[keyToSortBy]) {
        return direction === "up" ? 1 : -1;
      } else if (b[keyToSortBy] > a[keyToSortBy]) {
        return direction === "up" ? -1 : 1;
      }
      return 0;
    });
}

function createEntry(data){
    return`
    <tr>
        <td>${data.title}</td>
        <td>${data.rating}</td>
        <td>
            <button class ="btn btn-danger" data-delete-id=${data.currentId}>
            Delete
            </button>
        </td>
    </tr>
    `;
}