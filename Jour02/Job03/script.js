document.addEventListener("DOMContentLoaded", function() {

    function addone(){
        let para = document.querySelector("#compteur").innerHTML;
        para++;
        document.getElementById("compteur").innerHTML = para;

    }


   let button= document.querySelector("button");
   button.addEventListener("click",addone);

});