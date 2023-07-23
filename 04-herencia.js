//recordar que la herencia rompe el encapsulamiento

class Student {
  #name;
  #email;
  #username;
  #socialMedia = {};
  #aprovedCourses = [];

  constructor({
    name,
    email,
    username,
    socialMedia = {},
    aprovedCourses = [],
  }) {
    this.#name = name;
    this.#email = email;
    this.#username = username;
    this.#socialMedia = socialMedia;
    this.#aprovedCourses = aprovedCourses;
  }

  get name() {
    return this.#name;
  }

  get email() {
    return this.#email;
  }

  get username() {
    return this.#username;
  }

  get socialMedia() {
    return this.#socialMedia;
  }

  getAprovedCourses() {
    return this.#aprovedCourses;
  }
}

class ExpertStudent extends Student {
  constructor(props) {
    super(props);
  }
}

const gabo = new ExpertStudent({
  name: "gabriel",
  email: "gabriel@example.com",
  username: "gabrielpf08",
  socialMedia: { twitter: "gabo", instagram: "gabo" },
  aprovedCourses: ["Basic POO"],
});

console.log(gabo.name);
console.log(gabo.username)
