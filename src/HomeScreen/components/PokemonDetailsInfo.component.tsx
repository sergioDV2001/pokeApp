import React from "react";
import { Text, View } from "react-native";
import { PokemonTypeChip } from "../../shared/components/PokemontypeChip/PokemonTypeChip.component";
import { getWeaknesses } from "../../shared/utils/WeeknessTypes";
import pokemonDetailsStyles from "../styles/pokemonDetailsStyles";
import { Pokemon } from "../../shared/types/pokemon";
import { capitalizeFirstLetter } from "../../shared/utils/TextUtils";

interface PokemonDetailsInfoProps {
  pokemonDetails: Pokemon;
}

export const PokemonDetailsInfo: React.FC<PokemonDetailsInfoProps> = ({
  pokemonDetails,
}) => {
  return (
    <View style={pokemonDetailsStyles.infoSectionContainer}>
      <View style={pokemonDetailsStyles.containerSections}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "600",
            borderBottomWidth: 3,
            borderBottomColor: "grey",
            paddingBottom: 5,
            alignSelf: "flex-start",
          }}
        >
          Info
        </Text>
        <View style={pokemonDetailsStyles.dataInfo}>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text
              style={{
                width: 80,
                fontSize: 14,
                fontWeight: 600,
              }}
            >
              Species
            </Text>
            <Text style={{ color: "grey" }}>{pokemonDetails.species.name}</Text>
          </View>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text
              style={{
                width: 80,
                fontSize: 14,
                fontWeight: 600,
              }}
            >
              Height
            </Text>
            <Text style={{ color: "grey" }}>{pokemonDetails.height}</Text>
          </View>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text
              style={{
                width: 80,
                fontSize: 14,
                fontWeight: 600,
              }}
            >
              Weight
            </Text>
            <Text style={{ color: "grey" }}>{pokemonDetails.weight}</Text>
          </View>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text
              style={{
                width: 80,
                fontSize: 14,
                fontWeight: 600,
              }}
            >
              Abilities
            </Text>
            <View style={{ display: "flex", flexDirection: "row", gap: 6 }}>
              {pokemonDetails.abilities.map((ability, index) => (
                <Text style={{ color: "grey" }} key={index}>
                  {capitalizeFirstLetter(
                    ability.ability.name.replace("-", " ")
                  )}
                  {pokemonDetails.abilities.length !== index + 1 ? "," : ""}
                </Text>
              ))}
            </View>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
            }}
          >
            <Text
              style={{
                width: 80,
                fontSize: 14,
                fontWeight: 600,
              }}
            >
              Weakness
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                flexWrap: "wrap",
                maxWidth: 300,
                gap: 6,
              }}
            >
              {getWeaknesses(pokemonDetails.types).map((weeknes) => (
                <PokemonTypeChip
                  key={weeknes}
                  pokemonType={{
                    slot: 0,
                    type: {
                      name: weeknes,
                      url: "",
                    },
                  }}
                />
              ))}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
