function Student(nombre, edad, cursosAprobados) {
  this.nombre = nombre;
  this.edad = edad;
  this.cursosAprobados = cursosAprobados;

  //metodos dentro de los prototipos
  /*this.aprobarCurso = function (nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
  };*/
}

//Metodos Directamente a los prototipos
Student.prototype.aprobarCurso = function (nuevoCurso) {
  this.cursosAprobados.push(nuevoCurso);
};

//Instanciar un objeto
const gabo = new Student("gabriel", 19, [
  "Analisis Matematico II",
  "Estructura de Datos",
]);

gabo.aprobarCurso("Bases de Datos")
console.log(gabo);



// Algo muy importante es que de la primera manera en la que se creó la función aprobar curso (dentro de la función constructora) NO es una buena práctica, ya que de esa manera todas las instancias de Student heredarían esa función, lo que a futuro afectaría el rendimiento, lo mejor es hacerlo de la segunda forma (Directamente al prototipo) para evitar ese consumo innecesario de recursos
