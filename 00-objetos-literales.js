//Los objetos literales son instancias del prototipo Object(), son distintos a los objetos usados en POO

const gabo = {
  nombre: "Gabriel",
  edad: 19,
  cursosAprobados: ["Python", "Js Basico"],

  //Metodo
  aprobarCurso(nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
  },

  //NOTA: No uso una arrow Function ya que no tienen THIS
  aprobarCursoOtraForma: function(nuevoCurso) { 
    this.cursosAprobados.push(nuevoCurso);
  } 
};

gabo.aprobarCurso("Mongo");
console.log(gabo);

//acceder a propiedades del objeto literal
console.log(gabo.nombre);
