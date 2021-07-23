function myFunction(event) {
  //obtener nombre
  let nombre = document.getElementById("nombre").value;

  if (nombre === "") {
    alert("Debe ingresar un nombre");
    event.preventDefault();
  }
  //guardar nombre
  localStorage.setItem("nombre", nombre);
  //navegar
}
  