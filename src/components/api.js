import axios from "axios";

export const api = {
  //contem um pokemon teste
  apiTeste: async () => {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon/1");
    return response.data;
  },
  //  Contem todos os pokemons de todas gerações
  catchApi: async () => {
    const response = await axios.get(
      "https://pokeapi.co/api/v2?limit=100000&offset=0/"
    );
    return response.data;
  },
  // contem os pokemons da primeira geração -----------------
  firstGenerationAPI: async () => {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0/"
    );
    return response.data;
  },
  pokemonAPI: async () => {
    const response = await axios.get(
      "https://pokeapi.co/api/v2?limit=151&offset=0/"
    );
    return response.data;
  },
};
