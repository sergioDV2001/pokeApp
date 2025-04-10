export const pokemonNumber = (pokemonId: number) => {
  if (pokemonId < 10) {
    return "#00" + pokemonId;
  } else if (pokemonId < 100) {
    return "#0" + pokemonId;
  }

  return "#" + pokemonId;
};
