$(document).ready(function(){

        $("#hide").click(function(){
            $("p").hide();
        });

        $("#show").click(function(){
            let afficher = $("<p>Les logiciels et les cathédrales, c'est un peu la même chose - d'abord on les construit ensuite on prie</p>");
            $("body").append(afficher);
            $("p").show();
        });

   
});