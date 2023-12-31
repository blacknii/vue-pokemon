const addLikedPokemon = (id: string) => {
  const LikedPokemonArray = localStorage.getItem('LikedPokemon')
  if (LikedPokemonArray === null) {
    localStorage.setItem('LikedPokemon', JSON.stringify([id]))
  } else if (LikedPokemonArray !== null) {
    localStorage.setItem('LikedPokemon', JSON.stringify([...JSON.parse(LikedPokemonArray), id]))
  }
}

export default addLikedPokemon
