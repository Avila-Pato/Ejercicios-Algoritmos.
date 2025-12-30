/*
 * Reto #8
 * DECIMAL A BINARIO
 * Fecha publicación enunciado: 18/02/22
 * Fecha publicación resolución: 02/03/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea un programa se encargue de transformar un número decimal a binario sin utilizar funciones propias del lenguaje que lo hagan directamente.
 *
    */


const Binario = () => {
    const decimal = 25;
    let binario = "";
    let num = decimal;

    while (num > 0) {
        binario = (num % 2) + binario;
        num = Math.floor(num / 2);
    }
    return (
        <div>
            <h1>Decimal a Binario</h1>
            <p>El número decimal {decimal} en binario es: {binario}</p>
            <section>
                <h2>Explicación:</h2>
                <section style={{ display: "flex", flexDirection: "column" }}>
                   <div>
                      25 ÷ 2 = 12  resto 1
                    </div>
                    <div>
                    12 ÷ 2 = 6   resto 0
                    </div>
                    <div>
                    6 ÷ 2 = 3    resto 0
                    </div>
                    <div>
                    3 ÷ 2 = 1    resto 1
                    </div>
                    <div>
                    1 ÷ 2 = 0    resto 1
                    </div>
                </section>
            </section>
        </div>
    )

}

export default Binario