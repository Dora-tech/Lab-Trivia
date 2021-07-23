function validarRespuestasTipoCine() {
  //const es otra forma para declaracion de variables que su valor no cambia despues
  //queryselector es una funcion que permite buscar una etiqueta a travez de un selector css
  //value es el valor de un input
  var respuesta1 = "";
  var respuesta2 = "";
  var respuesta3 = "";
  if (document.querySelector("input[name=opciones1]:checked"))
    //si es nulo no deberia leer value se colgaria
    respuesta1 = document.querySelector("input[name=opciones1]:checked").value;

  if (document.querySelector("input[name=opciones2]:checked"))
    respuesta2 = document.querySelector("input[name=opciones2]:checked").value;

  if (document.querySelector("input[name=opciones3]:checked"))
    respuesta3 = document.querySelector("input[name=opciones3]:checked").value;
  var buenas = 0;
  var malas = 0;
  //else se ejecuta cuabdo el if esta mal
  if (respuesta1 === "4") {
    buenas++;
    //el ++ se aumenta una variable en 1
  } else {
    malas++;
  }
  if (respuesta2 === "sid") {
    buenas++;
  } else {
    malas++;
  }
  if (respuesta3 === "piter weir") {
    buenas++;
  } else {
    malas++;
  }
  localStorage.setItem("buenas", buenas);
  localStorage.setItem("malas", malas);
}
function validarRespuestasTipoDeporte() {
  var value1 = document.querySelector("input[name=opciones1]:checked").value;
  var value2 = document.querySelector("input[name=opciones2]:checked").value;
  var value3 = document.querySelector("input[name=opciones3]:checked").value;
  var buenas = 0;
  var malas = 0;
  if (value1 === "4 años") {
    buenas++;
    //sentencias condicionales es para decir que si algo se cumple se realiza uno u otro
  } else {
    malas++;
  }
  if (value2 === "egipto") {
    buenas++;
  } else {
    malas++;
  }
  if (value3 === "100") {
    buenas++;
  } else {
    malas++;
  }

  localStorage.setItem("buenas", buenas);
  localStorage.setItem("malas", malas);
}

function validarRespuestasTipoCine() {
  //const es otra forma para declaracion de variables que su valor no cambia despues
  //queryselector es una funcion que permite buscar una etiqueta a travez de un selector css
  //value es el valor de un input
  var respuesta1 = "";
  var respuesta2 = "";
  var respuesta3 = "";
  if (document.querySelector("input[name=opciones1]:checked"))
    //si es nulo no deberia leer value se colgaria
    respuesta1 = document.querySelector("input[name=opciones1]:checked").value;

  if (document.querySelector("input[name=opciones2]:checked"))
    respuesta2 = document.querySelector("input[name=opciones2]:checked").value;

  if (document.querySelector("input[name=opciones3]:checked"))
    respuesta3 = document.querySelector("input[name=opciones3]:checked").value;
  var buenas = 0;
  var malas = 0;
  //else se ejecuta cuabdo el if esta mal
  if (respuesta1 === "4") {
    buenas++;
    //el ++ se aumenta una variable en 1
  } else {
    malas++;
  }
  if (respuesta2 === "sid") {
    buenas++;
  } else {
    malas++;
  }
  if (respuesta3 === "piter weir") {
    buenas++;
  } else {
    malas++;
  }
  localStorage.setItem("buenas", buenas);
  localStorage.setItem("malas", malas);
}
function validarRespuestasTipoDeporte() {
  var value1 = document.querySelector("input[name=opciones1]:checked").value;
  var value2 = document.querySelector("input[name=opciones2]:checked").value;
  var value3 = document.querySelector("input[name=opciones3]:checked").value;
  var buenas = 0;
  var malas = 0;
  if (value1 === "4 años") {
    buenas++;
    //sentencias condicionales es para decir que si algo se cumple se realiza uno u otro
  } else {
    malas++;
  }
  if (value2 === "egipto") {
    buenas++;
  } else {
    malas++;
  }
  if (value3 === "100") {
    buenas++;
  } else {
    malas++;
  }

  localStorage.setItem("buenas", buenas);
  localStorage.setItem("malas", malas);
}

function validarRespuestasTipoFruta() {
  var value1 = document.querySelector("input[name=opciones1]:checked").value;
  var value2 = document.querySelector("input[name=opciones2]:checked").value;
  var value3 = document.querySelector("input[name=opciones3]:checked").value;
  var buenas = 0;
  var malas = 0;
  if (value1 === "fresa") {
    buenas++;
  } else {
    malas++;
  }
  if (value2 === "arandano") {
    buenas++;
  } else {
    malas++;
  }
  if (value3 === "guayaba") {
    buenas++;
  } else {
    malas++;
  }

  localStorage.setItem("buenas", buenas);
  localStorage.setItem("malas", malas);
}
var controltiempo;
const tiempo = 5;
var contar;
function iniciarPreguntas() {
  document.getElementById("p1").style.display = "block";
  localStorage.setItem("numeroPregunta", 1);

  contar = tiempo;
  controltiempo = setInterval(cuentaatras, 1000);
}
function cuentaatras() {
  contar = contar - 1;
  document.getElementById("tiempo").innerHTML =
    "Tienes " + contar + " segundos para responder";
  if (contar <= 0) {
    clearInterval(controltiempo);
    document.getElementById("boton").click();
  }
}

function continuar(evento, tipoPregunta) {
  var numeroPregunta = localStorage.getItem("numeroPregunta");
  if (numeroPregunta === "1") {
    document.getElementById("p2").style.display = "block";
    document.getElementById("p1").style.display = "none";
    localStorage.setItem("numeroPregunta", 2);
    contar = tiempo;
    controltiempo = setInterval(cuentaatras, 1000);

    evento.preventDefault();
  }
  if (numeroPregunta === "2") {
    document.getElementById("p2").style.display = "none";
    document.getElementById("p3").style.display = "block";
    localStorage.setItem("numeroPregunta", 3);
    contar = tiempo;
    controltiempo = setInterval(cuentaatras, 1000);

    evento.preventDefault();
  }
  if (numeroPregunta === "3") {
    if (tipoPregunta === "cine") {
      validarRespuestasTipoCine();
    }
    if (tipoPregunta === "deporte") {
      validarRespuestasTipoDeporte();
    }

    if (tipoPregunta === "fruta") {
      validarRespuestasTipoFruta();
    }
  }
}
