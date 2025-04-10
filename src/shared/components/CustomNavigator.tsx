import { Text, TouchableOpacity, View } from "react-native";

export const CustomNavigator = ({ navigation }: { navigation: any }) => {
  return (
    <View
      style={{
        position: "absolute",
        width: "100%",
        zIndex: 999,
        bottom: 0,
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 15,
        backgroundColor: "#ddd",
      }}
    >
      <TouchableOpacity onPress={() => navigation.navigate("Pokedex")}>
        <Text style={{ fontSize: 16 }}>Pokedex</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Ataque")}>
        <Text style={{ fontSize: 16 }}>Ataque</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Defensa")}>
        <Text style={{ fontSize: 16 }}>Defensa</Text>
      </TouchableOpacity>
    </View>
  );
};
