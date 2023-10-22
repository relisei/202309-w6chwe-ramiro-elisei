import mockFetch from "./mockFetch";
import mockData from "./MockData.json";
import { getPokemons } from "./data/getPokemon";

describe("Given a getPokemon function", () => {
  describe("When it receives https://pokeapi.co/api/v2/pokemon?offset=20&limit=20", () => {
    test("Then it should return a pokemon list", async () => {
      const url = "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20";
      const expectedValue = "bulbasaur";

      window.fetch = mockFetch(mockData);

      const pokeResponse = getPokemons(url);

      expect((await pokeResponse).results[0].name).toBe(expectedValue);
    });
  });
});
