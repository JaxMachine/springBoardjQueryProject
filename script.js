
//First Console Log message

$(function(){
    console.log("Let's get ready to party with jQuerey!");
})

//Add Image Center Style
$("article img").addClass("Image-center");

//Remove last paragrph in the article
$("article p:last-child").remove();

//Set title font size randomly
$("#title").css("font-size", Math.random() * 100);

//Add a list item
$("ol").append($("<li>", {text: "Additonal list item has been added"}));

//Add an apology for the list
$("aside").empty().append($("<p>", {text: "Sorry about the contents of the list"}));

//Numbers that change the background color of the body

$(".form-control").on('keyup blur change', function(){
    let red =$(".form-control").eq(0).val();
    let blue =$(".form-control").eq(1).val();
    let green =$(".form-control").eq(2).val();
    $("body").css("background-color",
    "rgb("+ red + "," + green + "," + blue + ")");
});

//IMage Removal Script

$("img").on("click", function(e){
    $(e.target).remove();
});