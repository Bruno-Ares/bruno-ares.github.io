var indexSlide = 1;

mostrarDivs(indexSlide)

function moverDivs(n){
    mostrarDivs(indexSlide += n)
}

function mostrarDivs(n){

    var i;
    var x = document.getElementsByClassName("slideshow")
    if (n > x.length) {indexSlide = 1}
    if (n < 1) {indexSlide = x.length}

    for (i = 0; i < x.length; i++){
        x[i].style.display = "none"
    }

    x[indexSlide-1].style.display = "block"

}

//Script para Whatsapp

document.getElementById("btnEnviar").addEventListener("click", () =>{

    var email = document.getElementById("inputEmail").value
    var mensagem = document.getElementById("conversa").value
    var celular = "55079988630351"
    var texto = "--Essa mensagem foi encaminhada pelo site de Bruno Ares-- \n Email: " + email + "\n Mensagem: " + mensagem

    texto = window.encodeURIComponent(texto);


    window.open("https://api.whatsapp.com/send?phone=" + celular + "&text=" + texto);
})

document.getElementById("drop1").addEventListener("click", () =>{
    document.getElementById("dropContent1").classList.toggle("invisible")
    if (document.getElementById("dropContent1").classList.contains("invisible")) {
        
        document.getElementById("v1").innerHTML = "v"
    } else{
        document.getElementById("v1").innerHTML = "^"
    }
})

document.getElementById("drop2").addEventListener("click", () =>{
    document.getElementById("dropContent2").classList.toggle("invisible")
    if (document.getElementById("dropContent2").classList.contains("invisible")) {
        
        document.getElementById("v2").innerHTML = "v"
    } else{
        document.getElementById("v2").innerHTML = "^"
    }
})

document.getElementById("drop3").addEventListener("click", () =>{
    document.getElementById("dropContent3").classList.toggle("invisible")
    if (document.getElementById("dropContent3").classList.contains("invisible")) {
        
        document.getElementById("v3").innerHTML = "v"
    } else{
        document.getElementById("v3").innerHTML = "^"
    }
})

