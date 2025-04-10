import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Dimensions,
} from "react-native";
import { SectionsEnum } from "../enums/SectionsEnum";

const sections = [
  SectionsEnum.INFO,
  SectionsEnum.STATS,
  SectionsEnum.EVOLUTIONS,
];
const screenWidth = Dimensions.get("window").width;
const indicatorWidth = screenWidth / sections.length;

interface HeaderSelectorProps {
  sectionOpened: SectionsEnum;
  setSectionOpened: (section: SectionsEnum) => void;
}

export const HeaderSelector: React.FC<HeaderSelectorProps> = ({
  sectionOpened,
  setSectionOpened,
}) => {
  const underlineAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(underlineAnim, {
      toValue: sections.indexOf(sectionOpened) * indicatorWidth,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [sectionOpened]);

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        paddingBottom: 10,
        position: "relative",
      }}
    >
      {sections.map((section, index) => (
        <TouchableOpacity
          key={section}
          onPress={() => setSectionOpened(section)}
          style={{ flex: 1, alignItems: "center" }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: sectionOpened === section ? "bold" : "normal",
              color: sectionOpened === section ? "black" : "gray",
            }}
          >
            {section}
          </Text>
        </TouchableOpacity>
      ))}
      <Animated.View
        style={{
          height: 3,
          width: indicatorWidth * 0.8,
          backgroundColor: "black",
          position: "absolute",
          bottom: 0,
          left: underlineAnim,
        }}
      />
    </View>
  );
};
