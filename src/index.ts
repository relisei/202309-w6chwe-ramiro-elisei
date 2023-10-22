import { getPokemons } from "./data/getPokemon.js";

const apiUrl = "https://pokeapi.co/api/v2/pokemon";

const pokemons = await getPokemons(apiUrl);
console.log(pokemons);
