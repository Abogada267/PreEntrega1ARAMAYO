ingreso();

function ingreso() {
  let main = document.getElementById('ingreso');

  if (confirm('Hola, estas por ingresar a la pagina de la Dra. Aramayo sobre presupuestos, si desea ver los servicios que ofrece, haga click en "Aceptar", en caso contrario, en "Cancelar"')) {
    alert("Clickeo Aceptar!, se mostrará la pagina.");
    main.style.display = 'block';
  } else {
    alert("Hizo click en Cancelar!, que pena, usted se lo pierde!");
    main.style.display = 'none';
  }
}
let nombre = prompt(`Ingresa tu nombre:`);
alert(`Hola ${nombre}, Bienvenidos a la pagina.Es un gusto `);
function calcularPresupuesto() {
  let ele1 = document.getElementById('TIPO DE CONSULTA')
  let precio1 = ele1.options[ele1.selectedIndex].value;
  let ele2 = document.getElementById('INTERVENCION')
  let precio2 = ele2.options[ele2.selectedIndex].value;
  let ele3 = document.getElementById('ANALISIS')
  let precio3 = ele3.options[ele3.selectedIndex].value;
  precio1 = parseInt(precio1);
  precio2 = parseInt(precio2);
  precio3 = parseInt(precio3);
  let suma = precio1 + precio2 + precio3;
  document.getElementById('resultado').value = suma;
}
