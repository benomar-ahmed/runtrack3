document.addEventListener("DOMContentLoaded", function() {

  
    let keylog = document.querySelector("#keylogger");
    window.addEventListener("keydown",function(keydown){
        let key = keydown.key;
        keylog.value += key;
        
    });

});