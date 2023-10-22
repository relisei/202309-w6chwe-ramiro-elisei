import { type PokemonResponse } from "../types/type";

export const getPokemons = async (url: string): Promise<PokemonResponse> => {
  const response = await fetch(url);
  const pokemonsPromise = (await response.json()) as PokemonResponse;

  return pokemonsPromise;
};
