import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import pokemonDetailsStyles from "../styles/pokemonDetailsStyles";
import { SectionsEnum } from "../enums/SectionsEnum";
import { Pokemon } from "../../shared/types/pokemon";

interface PokemonDetailsEvolutionsProps {
  pokemonDetails: Pokemon;
}

export const PokemonDetailsEvolutions: React.FC<
  PokemonDetailsEvolutionsProps
> = ({ pokemonDetails }) => {
  return (
    <View style={pokemonDetailsStyles.infoSectionContainer}>
      <View>
        <Text>Evolution</Text>
      </View>
    </View>
  );
};
