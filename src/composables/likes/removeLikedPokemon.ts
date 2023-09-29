const removeLikedPokemon = (id: string) => {
  const LikedPokemonArray = localStorage.getItem('LikedPokemon')
  if (LikedPokemonArray === null) {
    console.error('I am trying to remove no existing pokemon from cough')
  } else if (LikedPokemonArray !== null) {
    localStorage.setItem(
      'LikedPokemon',
      JSON.stringify(JSON.parse(LikedPokemonArray).filter((pokemonId: string) => pokemonId !== id))
    )
  }
}

export default removeLikedPokemon
