class Student {
  constructor(nombre, edad, cursosAprobados) {
    this.nombre = nombre;
    this.edad = edad;
    this.cursosAprobados = cursosAprobados;
  }

  aprobarCurso(nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
  }
}

const val = new Student("Valeria", 19, ["Marketing Digital", "SEO"]);
val.aprobarCurso("Instagram Avanzado");
console.log(val);

//Una forma de pasar muchos parametros y alguno de ellos opcionales es de la siguiente manera

class Student2 {
  //recibo un objeto literal por parametro
  constructor({ name, cursosAprobados = [], age, email }) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
  }

  aprobarCurso(nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito);
  }
}
const miguelito = new Student2({
  name: 'Miguel',
  age: 28,
  email: "miguelito@platzi.com",
});

console.log(miguelito);
