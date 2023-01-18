document.addEventListener("DOMContentLoaded", function() {



    let bougefooter = document.querySelector('footer');
    window.addEventListener("scroll", () =>{
        let y = window.scrollY;
        
        if(y<800){
            bougefooter.className="bleu";
        }

        if(y>800){
            bougefooter.className="rouge";
        }

        if(y> 1200){
            bougefooter.className="black";
        }

        if(y>1500){
            bougefooter.className="orange";
        }

        if(y>2000){
            bougefooter.className="vert";
        }

        
    });

    

});