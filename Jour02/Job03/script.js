document.addEventListener("DOMContentLoaded", function() {

    function addone(){
        let compteur = document.querySelector("#compteur").innerHTML;
        compteur++;
        document.getElementById("compteur").innerHTML = compteur;

    }


   let button= document.querySelector("button");
   button.addEventListener("click",addone);

});