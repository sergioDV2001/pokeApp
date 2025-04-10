import axios from "axios";

export const PAGE_SIZE = 25;

export const getListOfPokemons = async (offset: number) => {
  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=${PAGE_SIZE}&offset=${offset}`
    );
    return response.data.results;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getPokemonDetails = async (url: string) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getPokemonDetailsById = async (pokemonId: number) => {
  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
