import React, { useEffect, useState } from "react";
import { View, FlatList, Text, TouchableOpacity } from "react-native";
import homeScreenStyles from "../styles/HomeScreenStyles";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Pokemon, PokemonBasic } from "../../shared/types/pokemon";
import { PokemonCard } from "../components/PokemonCard.component";
import Icon from "react-native-vector-icons/Octicons";
import {
  getListOfPokemons,
  getPokemonDetails,
  PAGE_SIZE,
} from "../../shared/api/PokemonsApi";

export const PokedexScreen = () => {
  const [listOfPokemons, setListOfPokemons] = useState<Pokemon[]>([]);
  const [, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchPokemons = async (newOffset: number) => {
    if (loading) return;
    setLoading(true);
    const pokemonList = await getListOfPokemons(newOffset);
    const detailedPokemons = await Promise.all(
      pokemonList.map(async (pokemon: PokemonBasic) => {
        const details = await getPokemonDetails(pokemon.url);
        return details;
      })
    );
    setListOfPokemons((prev) => [
      ...prev,
      ...detailedPokemons.filter((pokemon) => pokemon !== null),
    ]);
    setLoading(false);
  };

  useEffect(() => {
    fetchPokemons(0);
  }, []);

  const handleLoadMore = () => {
    if (!loading) {
      setOffset((prevOffset) => {
        const newOffset = prevOffset + PAGE_SIZE;
        fetchPokemons(newOffset);
        return newOffset;
      });
    }
  };

  const renderPokemon = ({ item }: { item: Pokemon }) => (
    <PokemonCard pokemonData={item} />
  );

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={["top"]}>
        <View style={homeScreenStyles.headerHome}>
          <TouchableOpacity
            style={homeScreenStyles.sideBarButton}
            onPress={() => {
              console.log("buenas");
            }}
          >
            <Icon name="sidebar-collapse" size={25} color="#9c9c9c" />
            <Text style={{ fontSize: 25, fontWeight: 600, color: "black" }}>
              Pokedex
            </Text>
          </TouchableOpacity>
          <View style={homeScreenStyles.headerFiltersButtons}>
            <TouchableOpacity
              onPress={() => {
                console.log("buenas");
              }}
            >
              <Icon name="filter" size={25} color="#9c9c9c" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                console.log("buenas");
              }}
            >
              <Icon name="search" size={25} color="#9c9c9c" />
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          style={{ padding: 10 }}
          data={listOfPokemons}
          renderItem={renderPokemon}
          keyExtractor={(item) => item.id.toString()}
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
