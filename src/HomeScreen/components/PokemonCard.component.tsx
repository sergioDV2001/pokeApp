import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Image, Text, View, TouchableOpacity } from "react-native";
import pokemonCardStyles from "../styles/PokemonCardStyles";
import { PokemonTypeColors } from "../../shared/enums/PokemonTypeColors";
import { Pokemon } from "../../shared/types/pokemon";
import { pokemonNumber } from "../utils/pokemonNumber";
import { capitalizeFirstLetter } from "../../shared/utils/TextUtils";
import { RootStackParamList } from "../../shared/types/rootStackParamList";
import { PokemonTypeChip } from "../../shared/components/PokemontypeChip/PokemonTypeChip.component";

interface PokemonCardProps {
  pokemonData: Pokemon;
}
export const PokemonCard: React.FC<PokemonCardProps> = ({ pokemonData }) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() =>
        navigation.navigate("PokemonDetail", { pokemonId: pokemonData.id })
      }
      key={pokemonData.name}
      style={[
        pokemonCardStyles.containerCard,
        {
          backgroundColor:
            PokemonTypeColors[
              pokemonData.types[0].type.name as keyof typeof PokemonTypeColors
            ],
        },
      ]}
    >
      <View style={pokemonCardStyles.containerInfoPokemon}>
        <View style={pokemonCardStyles.containerNamePokemon}>
          <Text style={pokemonCardStyles.textCardPokemonNumber}>
            {pokemonNumber(pokemonData.id)}
          </Text>
          <Text style={pokemonCardStyles.textCardPokemonName}>
            {capitalizeFirstLetter(pokemonData.name)}
          </Text>
        </View>
        <View style={pokemonCardStyles.containerTypesPokemon}>
          {pokemonData.types.map((type, index) => (
            <PokemonTypeChip
              key={pokemonData.name + index}
              pokemonType={type}
            />
          ))}
        </View>
      </View>
      <Image
        source={require("../../shared/images/pokeballLogo.png")}
        style={pokemonCardStyles.pokeballBackground}
      />
      <Image
        source={{
          uri: pokemonData.sprites?.other?.["home"]?.front_default || "",
        }}
        style={pokemonCardStyles.imagePokemon}
      />
    </TouchableOpacity>
  );
};
