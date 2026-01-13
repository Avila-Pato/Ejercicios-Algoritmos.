// Escondiditto

// Ditto es un Pokémon que puede transformarse en casi cualquier otro Pokémon.
// En el laboratorio están aislados para evitar confundirlos con otros y poder tratarlos adecuadamente. 
// Pero un Ditto se escapó, sabemos que este Ditto en particular se convierte siempre en el Pokémon que tenga a sus lados,
//  así que decidimos ponerlos en fila. Sabemos que el Ditto va a tener al mismo Pokémon delante y detrás.

// Implementa una función que reciba un listado de Pokémon y devuelva el índice de Ditto en esa lista.

// Nunca habrá más de 3 Pokémon iguales juntos ni menos de 3 Pokémon en total

// ['abra', 'pikachu', 'psyduck', 'psyduck', 'blastoise', 'blastoise', 'blastoise', 'charmander'] => 5

// ['pikachu', 'pikachu', 'pikachu', 'psyduck', 'blastoise'] => 1


const escondidito = ['abra', 'pikachu', 'psyduck', 'psyduck', 'blastoise', 'blastoise', 'blastoise', 'charmander'] 

const escondidito2 = ['pikachu', 'pikachu', 'pikachu', 'psyduck', 'blastoise']

const PokemonTotales = (pokemon: any[]) => {
    let total: number[] = []

    for(let i = 0; i < pokemon.length; i++) {
        // ¿Este pokémon ya está guardado en total ?
        if(total.includes(pokemon[i])) {
            // Si lo está, entonces es el Ditto
            return i
        } else {
            // Si no lo está, entonces lo agregamos de esta manera aparecere la cantidad de pokémones sin estar repetidos
            total.push(pokemon[i])
        }
        console.log(total)
    }

    return total
}


console.log(PokemonTotales(escondidito))
console.log(PokemonTotales(escondidito2))