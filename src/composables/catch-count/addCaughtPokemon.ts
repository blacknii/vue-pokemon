const addCaughtPokemon = (id: string) => {
  localStorage.setItem('CaughtPokemon', id)
  console.log(`Pokemon ${id} added to caught`)
}

export default addCaughtPokemon
