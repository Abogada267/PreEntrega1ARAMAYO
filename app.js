ingreso();

function ingreso() {
  const edad = prompt("Ingresa tu edad:");

  if (edad >= 18) {
    let main = document.getElementById('ingreso');
    if (confirm('Hola, estas por ingresar a la pagina de la Dra. Aramayo sobre presupuestos, si desea ver los servicios que ofrece, haga click en "Aceptar", en caso contrario, en "Cancelar"')) {
      alert("Clickeo Aceptar!, se mostrará la pagina.");
      main.style.display = 'block';
    } else {
      alert("Hizo click en Cancelar!, que pena, usted se lo pierde!");
      main.style.display = 'none';
    }

    const telefono = prompt("Ingresa tu número de teléfono,Cod. Area ():");
    const regexTelefono = /^\(\d{4}\)\s*\d{6}$/;
    if (regexTelefono.test(telefono)) {
      console.log("El número de teléfono ingresado es válido.");
      alert("El número de teléfono ingresado es válido.");
    } else {
      console.error("El número de teléfono ingresado no es válido.");
      alert("El número de teléfono ingresado no es válido.");
    }

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
  } else {
    alert("DEBES SER MAYOR DE 18 AÑOS PARA ACCEDER A ESTA PÁGINA.");
    window.location.replace("https://www.google.com");
  }
}

