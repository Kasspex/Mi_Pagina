document.getElementById("enviar").addEventListener('click', function(){
    const input = document.getElementById("nombre-persona");
    const texto = input.value.trim();
    const alerta = document.getElementById("miAlerta")
    if(texto){
        document.getElementById("miAlerta").innerHTML = `Hola ${texto}, pronto nos contactaremos`
        alerta.style.display = "block";
    }
})