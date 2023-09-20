import axios from 'axios'

const getPokemon = async (id: string) => {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon/' + id)
    const pokemon = {
      id: response.data.id,
      name: response.data.name,
      types: response.data.types.map((elem) => elem.type.name),
      weight: response.data.weight,
      height: response.data.height,
      sprite: response.data.sprites.other.home.front_default
    }
    return pokemon
  } catch (error) {
    console.error('Error fetching character data:', error)
    return null
  }
}

export default getPokemon
