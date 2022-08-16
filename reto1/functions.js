function createClass(name, hours) {
  return {
    name: name,
    hours: hours,
  };
}

function initialize() {
  return [
    createClass("IA", 4),
    createClass("II", 2),
    createClass("DM", 4),
    createClass("CD", 3),
  ];
}
function calcular() {
  horasDisponibles = document.getElementById("horasDisp").value;

  let asignaturas=initialize();
  //asignaturas = [4, 2, 4, 3];
  asignaturas.sort((a, b) => {
    return b.hours - a.hours;
  });
  console.log(asignaturas);
  recomendados = [];
  suma = 0;

  for (var i = 0; i < asignaturas.length; i++) {
    if (recomendados.length < 2) {
      if (asignaturas[i].hours < horasDisponibles) {
        if (suma + asignaturas[i].hours < horasDisponibles) {
          recomendados.push(asignaturas[i].name);
        }
      }
    }
  }

  recomendacion = document.getElementById("recomendaciones");
  recomendacion.value = recomendados.toString();
  console.log(recomendados);
}
