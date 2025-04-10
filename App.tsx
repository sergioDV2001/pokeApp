import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { PokedexScreen } from "./src/HomeScreen/screen/PokedexScreen";
import { AttackScreen } from "./src/AttackScreen/screen/AttackScreen";
import { DefenseScreen } from "./src/DefenseScreen/screen/DefenseScreen";
import { View } from "react-native";
import { enableScreens } from "react-native-screens";
import { CustomNavigator } from "./src/shared/components/CustomNavigator";
import { PokemonDetailScreen } from "./src/HomeScreen/screen/PokemonDetails";
import { RootStackParamList } from "./src/shared/types/rootStackParamList";

// Habilitar pantallas optimizadas
enableScreens();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Pokedex"
        screenOptions={{
          headerShown: false,
          animation: "none",
        }}
      >
        <Stack.Screen name="Pokedex" component={PokedexScreenWithNav} />
        <Stack.Screen name="Ataque" component={AttackScreenWithNav} />
        <Stack.Screen name="Defensa" component={DefenseScreenWithNav} />
        <Stack.Screen name="PokemonDetail" component={PokemonDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Stack = createStackNavigator<RootStackParamList>(); // Usa el tipo aquí

// Componente que envuelve las pantallas
const ScreenWrapper = ({
  navigation,
  children,
}: {
  navigation: any;
  children: any;
}) => {
  return (
    <View style={{ flex: 1 }}>
      <CustomNavigator navigation={navigation} />
      {children}
    </View>
  );
};

// Pantallas con navegación incluida
const PokedexScreenWithNav = ({ navigation }: { navigation: any }) => (
  <ScreenWrapper navigation={navigation}>
    <PokedexScreen />
  </ScreenWrapper>
);
const AttackScreenWithNav = ({ navigation }: { navigation: any }) => (
  <ScreenWrapper navigation={navigation}>
    <AttackScreen />
  </ScreenWrapper>
);
const DefenseScreenWithNav = ({ navigation }: { navigation: any }) => (
  <ScreenWrapper navigation={navigation}>
    <DefenseScreen />
  </ScreenWrapper>
);
