import axios from 'axios'

const getPokemons = async () => {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon')
    return response.data.results
  } catch (error) {
    console.error('Error fetching characters data:', error)
    return null // Return null or handle the error as needed
  }
}

export default getPokemons
