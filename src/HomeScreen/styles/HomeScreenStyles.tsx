import { StyleSheet } from "react-native";

const homeScreenStyles = StyleSheet.create({
  headerHome: {
    paddingVertical: 15,
    paddingHorizontal: 12,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sideBarButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  headerFiltersButtons: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});

export default homeScreenStyles;
