let likedPokemons: string[] = []
const LikedPokemonArray = localStorage.getItem('LikedPokemon')
if (LikedPokemonArray !== null) {
  likedPokemons = JSON.parse(LikedPokemonArray)
}

let caughtPokemons: string[] = []
const CaughtPokemonArray = localStorage.getItem('CaughtPokemon')
if (CaughtPokemonArray !== null) {
  caughtPokemons = JSON.parse(CaughtPokemonArray)
}

const pokemonTypesColors = [
  {
    name: 'normal',
    backgroundColor: '#A8A878',
    textColor: '#FFFFFF'
  },
  {
    name: 'fighting',
    backgroundColor: '#C03028',
    textColor: '#FFFFFF'
  },
  {
    name: 'flying',
    backgroundColor: '#A890F0',
    textColor: '#FFFFFF'
  },
  {
    name: 'poison',
    backgroundColor: '#A040A0',
    textColor: '#FFFFFF'
  },
  {
    name: 'ground',
    backgroundColor: '#E0C068',
    textColor: '#000000'
  },
  {
    name: 'rock',
    backgroundColor: '#B8A038',
    textColor: '#FFFFFF'
  },
  {
    name: 'bug',
    backgroundColor: '#A8B820',
    textColor: '#FFFFFF'
  },
  {
    name: 'ghost',
    backgroundColor: '#705898',
    textColor: '#FFFFFF'
  },
  {
    name: 'steel',
    backgroundColor: '#B8B8D0',
    textColor: '#000000'
  },
  {
    name: 'fire',
    backgroundColor: '#F08030',
    textColor: '#FFFFFF'
  },
  {
    name: 'water',
    backgroundColor: '#6890F0',
    textColor: '#FFFFFF'
  },
  {
    name: 'grass',
    backgroundColor: '#78C850',
    textColor: '#000000'
  },
  {
    name: 'electric',
    backgroundColor: '#F8D030',
    textColor: '#000000'
  },
  {
    name: 'psychic',
    backgroundColor: '#F85888',
    textColor: '#FFFFFF'
  },
  {
    name: 'ice',
    backgroundColor: '#98D8D8',
    textColor: '#000000'
  },
  {
    name: 'dragon',
    backgroundColor: '#7038F8',
    textColor: '#FFFFFF'
  },
  {
    name: 'dark',
    backgroundColor: '#705848',
    textColor: '#FFFFFF'
  },
  {
    name: 'fairy',
    backgroundColor: '#EE99AC',
    textColor: '#000000'
  },
  {
    name: 'unknown',
    backgroundColor: '#68A090',
    textColor: '#FFFFFF'
  },
  {
    name: 'shadow',
    backgroundColor: '#5A5475',
    textColor: '#FFFFFF'
  }
]

export { likedPokemons, caughtPokemons, pokemonTypesColors }
