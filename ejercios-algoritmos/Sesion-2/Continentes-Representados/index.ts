// Continentes representados
// Escribir una función que recibe como parametro una lista de desarrolladores que se anotaron para asistir a una meetup.
//  La función debe devolver true si existe al menos una persona de cada continente (Africa, Americas, Asia, Europe, Oceania).

// Nota: Los continentes siempre estarán presentes y escritos correctamente.

// Bonus:

// Hacer otra función para retornar la cantidad de JavaScript developers que vienen de Europa y escribir los tests necesarios
// Hacer otra función que retorne el mismo array pero con una nueva propiedad greeting que contenga el valor Hi < firstName here >, what do you like the most about < language here >? y escribir los tests necesarios
// Hacer otra función que liste los lenguajes representados, sin repetir y escribir los tests necesarios



// Datos de prueba
const developers: peopleTypes[] = [
  {
    firstName: "Juan",
    lastName: "García",
    country: "España",
    continent: "Europe",
    age: 28,
    language: "JavaScript",
  },
  {
    firstName: "Maria",
    lastName: "Silva",
    country: "Brasil",
    continent: "Americas",
    age: 32,
    language: "Python",
  },
  {
    firstName: "Ahmed",
    lastName: "Hassan",
    country: "Egipto",
    continent: "Africa",
    age: 25,
    language: "JavaScript",
  },
  {
    firstName: "Li",
    lastName: "Wang",
    country: "China",
    continent: "Asia",
    age: 29,
    language: "Java",
  },
  {
    firstName: "James",
    lastName: "Smith",
    country: "Australia",
    continent: "Fallo",
    age: 35,
    language: "TypeScript",
  },
];

type peopleTypes = {
  firstName: string;
  lastName: string;
  country: string;
  continent: string;
  age: number;
  language: string;
};

const continentesRepresentados = (getParam: peopleTypes[]): boolean => {
  const requiredContinents: string[] = [
    "Africa",
    "Americas",
    "Asia",
    "Europe",
    "Oceania",
  ];

  const foundContinents: string[] = [];

  // sacar continentes únicos
  for (let i = 0; i < getParam.length; i++) {
    if (!foundContinents.includes(getParam[i].continent)) {
      foundContinents.push(getParam[i].continent);
    }
  }

  console.log("Continentes encontrados:", foundContinents);
  // comprobar que estén TODOS
  for (let i = 0; i < requiredContinents.length; i++) {
    if (!foundContinents.includes(requiredContinents[i])) {
      return false;
    }
  }
  return true;
};

const resultado = continentesRepresentados(developers);
console.log("¿Todos los continentes representados?", resultado);
