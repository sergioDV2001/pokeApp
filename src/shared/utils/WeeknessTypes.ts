import { PokemonType } from "../types/pokemon";

const typeChart: Record<string, string[]> = {
  normal: ["fighting"],
  fire: ["water", "rock", "ground"],
  water: ["electric", "grass"],
  electric: ["ground"],
  grass: ["fire", "ice", "poison", "flying", "bug"],
  ice: ["fire", "fighting", "rock", "steel"],
  fighting: ["flying", "psychic", "fairy"],
  poison: ["ground", "psychic"],
  ground: ["water", "grass", "ice"],
  flying: ["electric", "ice", "rock"],
  psychic: ["bug", "ghost", "dark"],
  bug: ["fire", "flying", "rock"],
  rock: ["water", "grass", "fighting", "ground", "steel"],
  ghost: ["ghost", "dark"],
  dragon: ["ice", "Dragon", "fairy"],
  dark: ["fighting", "bug", "fairy"],
  steel: ["fire", "fighting", "ground"],
  fairy: ["poison", "steel"],
};

export const getWeaknesses = (pokemonTypes: PokemonType[]): string[] => {
  const weaknesses = new Set<string>();

  pokemonTypes.forEach((type) => {
    if (typeChart[type.type.name]) {
      typeChart[type.type.name].forEach((weakness) => weaknesses.add(weakness));
    }
  });

  return Array.from(weaknesses);
};
