import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { RouteProp, useRoute, useNavigation } from "@react-navigation/native";
import pokemonDetailsStyles from "../styles/pokemonDetailsStyles";
import { getPokemonDetailsById } from "../../shared/api/PokemonsApi";
import { Pokemon } from "../../shared/types/pokemon";
import { PokemonTypeColors } from "../../shared/enums/PokemonTypeColors";
import { Ionicons } from "@expo/vector-icons"; // Importamos el icono de flecha
import { pokemonNumber } from "../utils/pokemonNumber";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { capitalizeFirstLetter } from "../../shared/utils/TextUtils";
import { PokemonTypeChip } from "../../shared/components/PokemontypeChip/PokemonTypeChip.component";
import { getWeaknesses } from "../../shared/utils/WeeknessTypes";
import { SectionsEnum } from "../enums/SectionsEnum";
import { PokemonDetailsInfo } from "../components/PokemonDetailsInfo.component";
import { PokemonDetailsStats } from "../components/PokemonDetailsStats.component";
import { PokemonDetailsEvolutions } from "../components/PokemonDetailsEvolutions.component";
import { HeaderSelector } from "../components/PokemonDetailsSelector.component";

type RootStackParamList = {
  PokemonDetail: { pokemonId: number };
};

type PokemonDetailScreenRouteProp = RouteProp<
  RootStackParamList,
  "PokemonDetail"
>;

export const PokemonDetailScreen: React.FC = () => {
  const route = useRoute<PokemonDetailScreenRouteProp>();
  const navigation = useNavigation(); // Hook para la navegación
  const { pokemonId } = route.params;
  const [pokemonDetails, setPokemonDetails] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState(false);
  const [sectionOpened, setSectionOpened] = useState<SectionsEnum>(
    SectionsEnum.INFO
  );

  const fetchPokemonsDetails = async (pokemonId: number) => {
    if (loading) return;
    setLoading(true);
    const pokemonDetails = await getPokemonDetailsById(pokemonId);
    setPokemonDetails(pokemonDetails);
    setLoading(false);
  };

  useEffect(() => {
    fetchPokemonsDetails(pokemonId);
  }, []);

  if (loading) return <Text>Cargando...</Text>;
  if (pokemonDetails === null) return <Text>No hay datos...</Text>;

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={[
          pokemonDetailsStyles.container,
          {
            backgroundColor:
              PokemonTypeColors[
                pokemonDetails.types[0].type
                  .name as keyof typeof PokemonTypeColors
              ],
          },
        ]}
        edges={["top"]}
      >
        <View style={pokemonDetailsStyles.headerPokemonDetails}>
          <View style={pokemonDetailsStyles.headerActions}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={30} color="white" />
            </TouchableOpacity>
            <Text style={pokemonDetailsStyles.textCardPokemonNumber}>
              {pokemonNumber(pokemonDetails.id)}
            </Text>
          </View>

          <View style={pokemonDetailsStyles.pokemonImageContainer}>
            <Image
              source={{
                uri:
                  pokemonDetails.sprites?.other?.["home"]?.front_default || "",
              }}
              style={pokemonDetailsStyles.imagePokemon}
            />
            <Image
              source={require("../../shared/images/pokeballLogo.png")}
              style={pokemonDetailsStyles.pokeballBackground}
            />
            <Text style={pokemonDetailsStyles.pokemonName}>
              {capitalizeFirstLetter(pokemonDetails.name)}
            </Text>
            <View style={pokemonDetailsStyles.containerTypesPokemon}>
              {pokemonDetails.types.map((type, index) => (
                <PokemonTypeChip
                  key={pokemonDetails.name + index}
                  pokemonType={type}
                />
              ))}
            </View>
          </View>
        </View>

        <View
          style={[
            pokemonDetailsStyles.containerDataPokemon,
            {
              position: "absolute",
              bottom: 0,
              backgroundColor: "white",
              height: 400,
            },
          ]}
        >
          <HeaderSelector
            sectionOpened={sectionOpened}
            setSectionOpened={setSectionOpened}
          />
          {sectionOpened === SectionsEnum.INFO && (
            <PokemonDetailsInfo
              sectionOpened={sectionOpened}
              pokemonDetails={pokemonDetails}
              setSectionOpened={setSectionOpened}
            />
          )}

          {sectionOpened === SectionsEnum.STATS && (
            <PokemonDetailsStats
              sectionOpened={sectionOpened}
              pokemonDetails={pokemonDetails}
              setSectionOpened={setSectionOpened}
            />
          )}

          {sectionOpened === SectionsEnum.EVOLUTIONS && (
            <PokemonDetailsEvolutions
              sectionOpened={sectionOpened}
              pokemonDetails={pokemonDetails}
              setSectionOpened={setSectionOpened}
            />
          )}
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
