// Contar los lenguajes

// Dado un array de objetos representando datos sobre desarrolladores que se anotaron a una meetup,
// escribir una función que cuente la cantidad de desarrolladores que hay para cada lenguaje.

const desarrolladores = [
  {
    firstName: "Noah",
    lastName: "M.",
    country: "Switzerland",
    continent: "Europe",
    age: 19,
    language: "C",
  },

  {
    firstName: "Anna",
    lastName: "R.",
    country: "Liechtenstein",
    continent: "Europe",
    age: 52,
    language: "JavaScript",
  },

  {
    firstName: "Ramon",
    lastName: "R.",
    country: "Paraguay",
    continent: "Americas",
    age: 29,
    language: "Ruby",
  },

  {
    firstName: "George",
    lastName: "B.",
    country: "England",
    continent: "Europe",
    age: 81,
    language: "C",
  },
];

// => { C: 2, JavaScript: 1, Ruby: 1 }
// const numbers = desarrolladores.map((l) => l.language);
// console.log(numbers);

// las propiedades son  los atributos que estan dentro del objeto 

// contador[propiedad] es lo mismo que 
// contador["C"]
// contador["JavaScript"]
// contador["Ruby"]

const contador: Record<string, number> = {};

for (let i = 0; i < desarrolladores.length; i++) {
  const propiedad = desarrolladores[i].language;
// El operador || significa:
// “si lo de la izquierda es falso, usa lo de la derecha”
// Por eso empieza en 0 y comoe s un bucle va ir sumando por propeidad encontrada
  contador[propiedad] = (contador[propiedad] || 0) + 1;
}
console.log(contador);
