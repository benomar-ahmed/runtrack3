document.addEventListener("DOMContentLoaded", function() {

    
    function showhide(){
        
        let vrai = document.querySelector("article");
        if(!vrai){
            let grosbody = document.querySelector("#body");
            let tortue = document.createElement("article");
            tortue.textContent = "L'important n'est pas la chute, mais l'atterrissage.";
            body.appendChild(tortue);
        }
        else{
            vrai.remove();
        }

    }




tetstettstettstettste


















    
    const button = document.querySelector("#button");
    button.addEventListener("click",showhide);

});