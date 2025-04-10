import React from "react";
import { Text, View } from "react-native";
import { capitalizeFirstLetter } from "../../utils/TextUtils";
import { PokemonTypeChipColors } from "../../enums/PokemonTypeColors";
import { PokemonType } from "pokeapi-typescript";
import pokemonTypeChipStyles from "./pokemonTypeChipStyles";

interface PokemonTypeChipProps {
  pokemonType: PokemonType;
}

export const PokemonTypeChip: React.FC<PokemonTypeChipProps> = ({
  pokemonType,
}) => {
  return (
    <View
      style={[
        pokemonTypeChipStyles.containerChipType,
        {
          backgroundColor:
            PokemonTypeChipColors[
              pokemonType.type.name as keyof typeof PokemonTypeChipColors
            ],
        },
      ]}
    >
      <Text style={{ color: "white" }}>
        {capitalizeFirstLetter(pokemonType.type.name)}
      </Text>
    </View>
  );
};
