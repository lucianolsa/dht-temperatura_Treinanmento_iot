const temperaturas = [
    {id: 1, temperatura: 23.9},
    {id: 2, temperatura: 25.4},
    {id: 3, temperatura: 21.1},
    {id: 4, temperatura: 32.7}
]

function simular_leitura(){
    //
    const numeroSorteio = Math.floor(Math.random() * temperaturas.length)

    const tempSorteada = temperaturas[numeroSorteio].temperatura


    const temperaturaPagina = document.getElementById("temperatura_id")
    temperaturaPagina.textContent = tempSorteada
}