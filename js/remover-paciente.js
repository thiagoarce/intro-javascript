var paciente = document.querySelectorAll(".paciente")

var tabelaPacientes = document.querySelector("#tabela-pacientes");

tabelaPacientes.addEventListener("click", function (event) {
   if (event.target.classList.contains("remove")) {
        event.target.parentNode.classList.add("fadeOut");
        setTimeout(function () {
            event.target.parentNode.remove();
        }, 500)

    }


})


/* pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick",function(){
        console.log("Fui clicado com duplo clique!")
        this.remove();
    })
}) */