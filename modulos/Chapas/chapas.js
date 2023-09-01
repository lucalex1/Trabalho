function exibechapa(op){
              
    document.getElementById("chapas"+ op).toggleAttribute("hidden");

    if (document.getElementById("botaochapa"+ op).hasAttribute("style")){
        document.getElementById("botaochapa"+ op).toggleAttribute("style")
    }
    else{
        document.getElementById("botaochapa"+ op).style.backgroundColor = "#678696";
    }



    for (i=1; i <= document.querySelectorAll(".botaochapa").length;i++){
        if (i != op){
            if  (document.getElementById("chapas" + i).hasAttribute("hidden") == false){
                document.getElementById("chapas" + i).toggleAttribute("hidden");
            }
        }
    }
}
