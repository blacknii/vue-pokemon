import axios from 'axios'

const getPokemon = async (id: string) => {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon/' + id)
    return response.data
  } catch (error) {
    console.error('Error fetching character data:', error)
    return null
  }
}

export default getPokemon
