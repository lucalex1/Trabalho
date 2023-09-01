function exibeduvida(op){
              
    document.getElementById("duvidas"+ op).toggleAttribute("hidden");     

    for (i=1; i <= document.querySelectorAll(".duvidas").length;i++){
        if (i != op){
            if  (document.getElementById("duvidas" + i).hasAttribute("hidden") == false){
                document.getElementById("duvidas" + i).toggleAttribute("hidden");
            }
        }
    }
}

