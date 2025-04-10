import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import pokemonDetailsStyles from "../styles/pokemonDetailsStyles";
import { SectionsEnum } from "../enums/SectionsEnum";
import { Pokemon } from "../../shared/types/pokemon";

interface PokemonDetailsStatsProps {
  pokemonDetails: Pokemon;
}

const MAX_STAT_VALUE = 255;

const STAT_COLORS: Record<string, string> = {
  hp: "#FF5959",
  attack: "#F5AC78",
  defense: "#FAE078",
  "special-attack": "#9DB7F5",
  "special-defense": "#A7DB8D",
  speed: "#FA92B2",
};

export const PokemonDetailsStats: React.FC<PokemonDetailsStatsProps> = ({
  pokemonDetails,
}) => {
  return (
    <View style={pokemonDetailsStyles.infoSectionContainer}>
      <View>
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
          Stats
        </Text>
        <View style={{ marginTop: 10 }}>
          {pokemonDetails.stats.map((stat) => (
            <View
              key={stat.stat.name}
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 8,
              }}
            >
              <Text
                style={{
                  width: 140,
                  fontSize: 14,
                  fontWeight: 600,
                }}
              >
                {stat.stat.name.toUpperCase().replace("-", " ")}
              </Text>
              <View
                style={{
                  flex: 1,
                  height: 12,
                  backgroundColor: "#ddd",
                  borderRadius: 6,
                  overflow: "hidden",
                  marginLeft: 5,
                }}
              >
                <View
                  style={{
                    height: "100%",
                    width: `${(stat.base_stat / MAX_STAT_VALUE) * 100}%`,
                    backgroundColor: STAT_COLORS[stat.stat.name] || "#4CAF50",
                  }}
                />
              </View>
              <Text
                style={{
                  color: "grey",
                  marginLeft: 10,
                  width: 30,
                }}
              >
                {stat.base_stat}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};
