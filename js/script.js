let barraNavegacion = false;
function menu(){
    if(barraNavegacion){
        document.getElementById("nav").classList ="";
        barraNavegacion = false;
    }else{
        document.getElementById("nav").classList ="oculto";
        barraNavegacion = true;
    }
}

function seleccionar(){
    document.getElementById("nav").classList = "";
    barraNavegacion = false;
}
