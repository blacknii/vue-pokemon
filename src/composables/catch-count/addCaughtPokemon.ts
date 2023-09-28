const addCaughtPokemon = (id: string) => {
  const CaughtPokemonArray = localStorage.getItem('CaughtPokemon')
  if (CaughtPokemonArray === null) {
    localStorage.setItem('CaughtPokemon', JSON.stringify([id]))
  } else if (CaughtPokemonArray !== null) {
    localStorage.setItem('CaughtPokemon', JSON.stringify([...JSON.parse(CaughtPokemonArray), id]))
  }

  console.log(`Pokemon ${id} added to caught`, CaughtPokemonArray)
}

export default addCaughtPokemon
