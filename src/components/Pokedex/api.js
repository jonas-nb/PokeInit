import axios from "axios";

export const api = {
  PokemonAPI: async () => {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${params.name}`
    );
    return response.data;
  },
};
