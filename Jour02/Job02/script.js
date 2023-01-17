document.addEventListener("DOMContentLoaded", function() {

    function showhide(){
        

        if(button.style.display == "none"){
            const body = document.querySelector("#body");
            const article = document.createElement("article");
            article.textContent = "L'important n'est pas la chute, mais l'atterrissage.";
        
            let body1 = body.appendChild(article);
            body1.style.display = "";
            
        }
        else if (button.style.display == ""){
            body1.style.Display = "none";
        }
        

    }
    
    const button = document.querySelector("#button");
    button.addEventListener("click",showhide);

});