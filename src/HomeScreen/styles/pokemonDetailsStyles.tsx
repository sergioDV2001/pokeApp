import { StyleSheet } from "react-native";

const pokemonDetailsStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
  },

  headerPokemonDetails: {
    width: "100%",
    marginTop: 10,
    paddingHorizontal: 15,
    display: "flex",
    flexDirection: "column",
  },

  headerActions: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  pokemonImageContainer: {
    position: "relative",
    marginTop: 60,
    width: "100%",
    height: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },

  imagePokemon: {
    width: 200,
    height: 200,
    zIndex: 100,
  },

  pokeballBackground: {
    position: "absolute",
    width: 330,
    height: 330,
    top: -95,
    opacity: 0.1,
    transform: [{ rotate: "25deg" }],
  },

  pokemonName: {
    fontSize: 35,
    color: "white",
    fontWeight: 700,
  },

  containerTypesPokemon: {
    display: "flex",
    flexDirection: "row",
    gap: 7,
  },

  textCardPokemonNumber: {
    fontSize: 24,
    fontWeight: 600,
    color: "white",
  },

  containerDataPokemon: {
    display: "flex",
    width: "100%",
    position: "relative",
  },

  infoSectionContainer: {
    display: "flex",
    width: "100%",
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    paddingHorizontal: 25,
    paddingTop: 20,
  },
  containerSections: {
    display: "flex",
    flexDirection: "column",
  },

  dataInfo: {
    display: "flex",
    gap: 15,
    flexDirection: "column",
    marginTop: 20,
  },
});

export default pokemonDetailsStyles;
