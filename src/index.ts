import { type PokemonResponse, type Pokemon } from "./types/type.js";

const apiUrl = "https://pokeapi.co/api/v2/pokemon";

export const getPokemons = async (url: string): Promise<Pokemon[]> => {
  const response = await fetch(url);
  const pokemonsPromise = (await response.json()) as PokemonResponse;

  return pokemonsPromise.results;
};

const pokemons = await getPokemons(apiUrl);
console.log(pokemons);
