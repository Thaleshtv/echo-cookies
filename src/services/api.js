export async function getCep({ cep }) {
    console.log(cep)
    const response = await fetch(`https://cep.awesomeapi.com.br/json/${cep}`)
    const data = await response.json()

    return data
}