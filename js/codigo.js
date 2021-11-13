let slider = document.querySelector(".slider-contenedor")
let sliderIndividual = document.querySelectorAll(".contenido-slider")
let contador = 1;
let width = 60;
let intervalo = 1000;

setInterval(function(){
    slides();
},intervalo);

function slides(){
    slider.style.transform = "translateY("+(+width*contador)+"px)";
    slider.style.transition = "transform .8s";
    contador++;

    if(contador == 4){
        setTimeout(function(){
            slider.style.transform = "translateY(0px)";
            slider.style.transition = "transform 0s";
            contador=1;
        },800)
    }
}
