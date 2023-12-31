import App from "./App/App.js";
import { getPokemons } from "./data/getPokemon.js";

const apiUrl = "https://pokeapi.co/api/v2/pokemon";

const pokemons = await getPokemons(apiUrl);
console.log(pokemons.results);

const appComponent = document.querySelector("body")!;
const app = new App(appComponent);
app.render();

export default pokemons;
