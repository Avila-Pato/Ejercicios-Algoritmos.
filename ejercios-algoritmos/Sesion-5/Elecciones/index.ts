// Elecciones olvidadizas

// Un centro de jubilados realizó una votación para saber que juego deberían jugar la semana que viene. Como son muchos ancianos en el centro,
// abrieron varias mesas de votación para poder votar. El problema es que algunos jubilados se olvidaron si ya habían votado o no y votaron varias veces
// en diferentes mesas.

// Por suerte, al votar se piden diferentes datos, como el id. Por ende debemos implementar una función que itere todas las mesas
//  y nos devuelva una única lista con solamente un voto por participante.

// Nuestra función además de las mesas debe recibir el parámetro por el cual deberíamos hacer la unión

// Podemos asumir que los votantes siempre emitieron el mismo voto en las diferentes mesas

// // Input


// // Output

// [
//   {id: "123456", nombre: 'Gaspar', voto: 'Bingo'},
//   {id: "234123", nombre: 'Clelia', voto: 'Sudoku'},
//   {id: "643723", nombre: 'Pedro', voto: 'Sudoku'}
// ]

function Elecciones(mesas: any[], claveUnion: string) {
    const resultados: any[] = []

    for (const mesa of mesas)  {
        for (const persona of mesa) {
            // Busca en resultados una persona guardada cuyo id sea igual al id de la persona actual con su claveUnion que es el id
            // El valor del id de personaGuardada es igual al valor del id de persona
            const existe = resultados.find(personaGuardada => personaGuardada[claveUnion] === persona[claveUnion]

            )
            // si la persona no se encontro en resultados entonces la agregamos de esta manera no se repite
            if(!existe) {
                resultados.push(persona)
            }
        }
    }
    return resultados
    
}

const mesas = [
    [
        {id: "123456", nombre: 'Gaspar', voto: 'Bingo'},
        {id: "234123", nombre: 'Clelia', voto: 'Sudoku'},
        {id: "643723", nombre: 'Pedro', voto: 'Sudoku'}
    ],
    [
        {id: "123456", nombre: 'Gaspar', voto: 'Bingo'},
        {id: "234123", nombre: 'Clelia', voto: 'Sudoku'},
        {id: "643723", nombre: 'Pedro', voto: 'Sudoku'}
    ],
    [
        {id: "123456", nombre: 'Gaspar', voto: 'Bingo'},
        {id: "234123", nombre: 'Clelia', voto: 'Sudoku'},
        {id: "643723", nombre: 'Pedro', voto: 'Sudoku'}
    ],
]


console.log(Elecciones(mesas, 'id'))