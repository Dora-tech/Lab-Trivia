function cargarResultados() {
  var buenas = localStorage.getItem("buenas");
  //var es una forma para declarar una variable
  document.getElementById("buenas").innerHTML = buenas;
  //funcion para buscar un elemento html por su id
  var malas = localStorage.getItem("malas");
  document.getElementById("malas").innerHTML = malas;
  var total = parseInt(buenas) + parseInt(malas);
  //parseint es para trasformas string a numeros
  document.getElementById("total").innerHTML = total;
}
