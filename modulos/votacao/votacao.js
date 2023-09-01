function exibeResultado(){
    document.getElementById("formResultado").removeAttribute("hidden");      
    document.getElementById("formVotacao").setAttribute("hidden","hidden");          
    console.log(document.querySelector("h1").textContent);
    document.querySelector("h1").textContent = "VOTO REALIZADO COM SUCESSO!"
}