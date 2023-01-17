document.addEventListener("DOMContentLoaded", function() {
    
    function citation(){
        const article = document.getElementById('citation').innerHTML;
        console.log(article);
    }
    const button1 = document.querySelector("#button");
    button1.addEventListener("click",citation());

});