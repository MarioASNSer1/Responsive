let menuVisible = false;

function mostrarocultarMenu() {
  if (menuVisible) {
     document.getElementById("nav").classList ="";
     menuVisible = false;
  } else {
    document.getElementById("nav").classList ="responsive";
    menuVisible = true;
  }
}

function seleccionar() {
  document.getElementById("nav").classList = "";
  menuVisible = false;
}

function efectoHabilidades() {
  var skills = document.getElementById("skills");
  var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
  if (distancia_skills >= 300) {
    let habilidades = document.getElementsByClassName("progreso");
    habilidades[0].classList.add("HTML");
    habilidades[1].classList.add("CSS");
    habilidades[2].classList.add("JavaScript");
    habilidades[3].classList.add("React");
    habilidades[4].classList.add("Phyton");
    habilidades[5].classList.add("Angular");
    habilidades[6].classList.add("CreadorDeContenido");
    habilidades[7].classList.add("Edicion");
    habilidades[8].classList.add("IngenieroDeSistemas");
    habilidades[9].classList.add("TrabajoEnEquipo");
    habilidades[10].classList.add("Comunicacion");
    habilidades[11].classList.add("Creatividad");
    habilidades[12].classList.add("Dedicacion");
  }
}

window.onscroll = function() {
  efectoHabilidades();
}
