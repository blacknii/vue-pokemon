const removeCaughtPokemon = (id: string) => {
  const CaughtPokemonArray = localStorage.getItem('CaughtPokemon')
  if (CaughtPokemonArray === null) {
    console.error('I am trying to remove no existing pokemon from cough')
  } else if (CaughtPokemonArray !== null) {
    localStorage.setItem(
      'CaughtPokemon',
      JSON.stringify(JSON.parse(CaughtPokemonArray).filter((pokemonId: string) => pokemonId !== id))
    )
  }

  console.log(`Pokemon ${id} removed from caught`, CaughtPokemonArray)
}

export default removeCaughtPokemon
