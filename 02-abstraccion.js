// 📦 Qué es abstracción

// Abstracción es una manera de reducir la complejidad y permitir un diseño e implementación más eficientes en sistemas de software complejos

// La abstracción consiste en abstraer los datos de un objeto segun el contexto para crear su, prototipo o clase. Para posteriormente crear instancias de dichos prototipos y nos ahorremos mucho tiempo
// Cada elemento de nuestro proyecto debe poderse abstraer para no repetir el código

// Ventajas de la Abstracción

// Evita duplicar código y aumenta la reusabilidad.
// Se puede cambiar la implementación interna de la clase de forma independiente sin afectar al usuario.
// Ayuda a aumentar la seguridad de la aplicación o programa, ya que solo los detalles importantes son proporcionados al usuario

class Course {
  constructor({ name, classes = [] }) {
    this.name = name;
    this.classes = classes;
  }
}

const cursoProgBasica = new Course({
  name: "Curso Gratis de Programación Básica",
});
const cursoDefinitivoHTML = new Course({
  name: "Curso Definitivo de HTML y CSS",
});
const cursoPracticoHTML = new Course({
  name: "Curso Practico de HTML y CSS",
});

class LearningPath {
  constructor({ name, courses = [] }) {
    this.name = name;
    this.courses = courses;
  }
}

const escuelaWeb = new LearningPath({
  name: "Escuela de Desarrollo Web",
  courses: [cursoProgBasica, cursoDefinitivoHTML, cursoPracticoHTML],
});

const escuelaData = new LearningPath({
  name: "Escuela de Data Science",
  courses: [cursoProgBasica, "Curso DataBusiness", "Curso Dataviz"],
});

const escuelaVgs = new LearningPath({
  name: "Escuela de Vidweojuegos",
  courses: [cursoProgBasica, "Curso de Unity", "Curso de Unreal"],
});

class Student {
  constructor({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = [],
  }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    };
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }
}

const juan2 = new Student({
  name: "JuanDC",
  username: "juandc",
  email: "juanito@juanito.com",
  twitter: "fjuandc",
  learningPaths: [escuelaWeb, escuelaVgs],
});

const miguelito2 = new Student({
  name: "Miguelito",
  username: "migelitofeliz",
  email: "miguelito@juanito.com",
  instagram: "migelito_feliz",
  learningPaths: [escuelaWeb, escuelaData],
});