const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", function(){

    const filter = this.value.toLowerCase();

    document.querySelectorAll(".card-link").forEach(function(link){

        if(link.textContent.toLowerCase().includes(filter)){
            link.style.display = "";
        }else{
            link.style.display = "none";
        }

    });

});