import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import React from "react";
import { Platform, StyleSheet, TouchableOpacity } from "react-native";
import { EdgeInsets, useSafeAreaInsets } from "react-native-safe-area-context";
import { Text, View } from "../Elements";

const HeaderView: React.FC<NativeStackHeaderProps> = (props) => {
  const insets = useSafeAreaInsets();
  const style = HeaderStyle(insets);

  return (
    <View style={style.wrapper}>
      <TouchableOpacity
        style={style.button}
        onPress={() => props.navigation.navigate("Home")}
      >
        <Text
          size="m"
          weight={props.route.name === "Home" ? "bold" : "regular"}
        >
          Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={style.button}
        onPress={() => props.navigation.navigate("Projects")}
      >
        <Text
          size="m"
          weight={props.route.name === "Projects" ? "bold" : "regular"}
        >
          Projects
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const HeaderStyle = (insets: EdgeInsets) =>
  StyleSheet.create({
    wrapper: {
      flexDirection: "row",
      justifyContent: "flex-end",
      gap: 20,
      paddingTop: insets.top,
      paddingHorizontal: 30,
      ...Platform.select({
        web: {
          paddingTop: 20,
        },
        android: {
          paddingTop: insets.top + 10,
        },
      }),
    },
    button: {},
  });

export default HeaderView;
