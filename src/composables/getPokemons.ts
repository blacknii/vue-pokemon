import axios from 'axios'

const getPokemons = async () => {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon')
    const pokemonDataPromises = response.data.results.map(async (pokemon) => {
      const pokemonResponse = await axios.get(pokemon.url)
      return pokemonResponse.data
    })
    const pokemons = await Promise.all(pokemonDataPromises)
    return pokemons
  } catch (error) {
    console.error('Error fetching characters data:', error)
    return null
  }
}

export default getPokemons
