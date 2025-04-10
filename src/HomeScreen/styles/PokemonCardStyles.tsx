import { StyleSheet } from "react-native";

const pokemonCardStyles = StyleSheet.create({
  containerCard: {
    position: "relative",
    width: "100%",
    borderRadius: 10,
    padding: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    overflow: "hidden",
    marginBottom: 15,
  },

  containerInfoPokemon: {
    display: "flex",
    justifyContent: "space-between",
  },

  containerNamePokemon: {
    display: "flex",
  },

  textCardPokemonNumber: {
    fontSize: 18,
    fontWeight: 400,
    color: "white",
  },

  textCardPokemonName: {
    fontSize: 20,
    fontWeight: 600,
    color: "white",
  },

  containerTypesPokemon: {
    display: "flex",
    flexDirection: "row",
    gap: 7,
  },

  containerChipType: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 4,
  },

  pokeballBackground: {
    position: "absolute",
    right: -60,
    top: -40,
    width: 250,
    height: 250,
    opacity: 0.1,
    transform: [{ rotate: "40deg" }],
  },

  imagePokemon: {
    width: 140,
    height: 140,
  },
});

export default pokemonCardStyles;
