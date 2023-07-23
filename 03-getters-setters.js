/*Los getters y setters sirven para definir los Accessors, es decir, permiten modificar el funcionamiento de acceso para obtener los valores de las propiedades de los objetos.*/

class Course {
  #name;
  
  constructor({ name, clases = [] }) {
    this.#name = name; //no llamar al atributo desde afuera
    this.clases = clases;
  }

  get name() {
    return this.#name;
  }

  set name(nuevoNombre) {
    this.#name = nuevoNombre;
  }
}

curso = new Course({ name: "gabriel", clases: ["POO"] });

curso.name = "Putito";
console.log(curso.name);
