import axios from 'axios'
import { likedPokemons } from '../data/db'

const getPokemons = async () => {
  try {
    const pokemonDataPromises = likedPokemons.map(async (id) => {
      const pokemonResponse = await axios.get('https://pokeapi.co/api/v2/pokemon/' + id)
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
