// Encontrar la media
// Dado un array de objetos representando datos sobre desarrolladores que se anotaron a una meetup,
//  escribir una función que encuentre la media de edad entre los inscriptos.

type desarrolladoresType = {
     firstName: string;
  lastName: string;
  country: string;
  continent: string;
  age: number;
  language: string;
}

const desarrolladoresMedia: desarrolladoresType[] = [
  {
    firstName: "Maria",
    lastName: "Y.",
    country: "Cyprus",
    continent: "Europe",
    age: 30,
    language: "Java",
  },
  {
    firstName: "Victoria",
    lastName: "T.",
    country: "Puerto Rico",
    continent: "Americas",
    age: 70,
    language: "Python",
  },
];

// => 50

// .reduce(accumulator, currentValue)

const mediDev = desarrolladoresMedia.reduce((a, b) => a + b.age, 0) / desarrolladoresMedia.length;

console.log(mediDev)