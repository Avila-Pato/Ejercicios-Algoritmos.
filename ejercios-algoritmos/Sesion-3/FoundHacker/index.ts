// Encontrar al hacker
// Alguien estuvo hackeando las notas. El historial de notas de cada estudiante
//  se presenta como un array de arrays. El primer elemento de cada array es el nombre del estudiante,
// el segundo es el puntaje el tercero es un array de sus calificaciones.

type Studiantes = {
  name: string;
  score: number;
  notes: string[];
};

const estudiantes: Studiantes[] = [
  { name: "goncy", score: 445, notes: ["B", "A", "A", "C", "A", "A"] },
  { name: "mati", score: 140, notes: ["B", "A", "A", "A"] },
  { name: "caro", score: 200, notes: ["B", "A", "A", "C"] },
];

function FindTheHacker(estudiantes: Studiantes[]) {
const Hackers:  string[] = [];

  for (let i = 0; i < estudiantes.length; i++) {
    if(estudiantes[i].score <= 200) {
        Hackers.push(estudiantes[i].name)
    }
  }
  return Hackers.length ? Hackers : "No esta el Hacker"
}
console.log(FindTheHacker(estudiantes));
