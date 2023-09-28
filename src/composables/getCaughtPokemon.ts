import axios from 'axios'
import { caughtPokemons } from '../data/db'

const getPokemons = async () => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=5&limit=20`)
    const pokemonDataPromises = response.data.results.map(async (pokemon) => {
      console.log({ pokemon })

      const pokemonResponse = await axios.get(pokemon.url)
      return pokemonResponse.data
    })
    const pokemonsRaw = await Promise.all(pokemonDataPromises)
    const pokemons = pokemonsRaw.map((response) => {
      return {
        id: response.id,
        name: response.name,
        types: response.types.map((elem: any) => elem.type.name),
        weight: response.weight,
        height: response.height,
        sprite: response.sprites.other.home.front_default
      }
    })

    return pokemons
  } catch (error) {
    console.error('Error fetching characters data:', error)
    return null
  }
}

export default getPokemons
