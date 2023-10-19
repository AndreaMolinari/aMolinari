import { Ionicons } from "@expo/vector-icons";
import Constants from "expo-constants";
import React from "react";
import { Linking, StyleSheet } from "react-native";
import { Text, View, Backdrop } from "../../Elements";
import { useColor } from "../../Hooks/Colors";
import { useTheme } from "@react-navigation/native";

type Social = {
  facebook: string;
  instagram: string;
  github: string;
  linkedin: string;
}; // ? GLYPHS

type SocialKeyType = keyof Social;

const HomeView: React.FC = () => {
  const social: Social = Constants.expoConfig?.extra?.social;

  const navToLink = (link: string) => Linking.openURL(link);

  const { colors } = useTheme();

  const validKeys = Object.keys(social).filter(
    (key) => key in social
  ) as SocialKeyType[];

  return (
    <Backdrop>
      <View style={HomeStyle.main}>
        <Text size="xl">👋 Hey there, I'm</Text>
        <Text size="xxl" weight="extra-bold">
          Andrea Molinari
        </Text>
        <Text size="xl">Full Stack Developer based in Cesena, Italy</Text>
      </View>
      <View style={HomeStyle.footer}>
        <View style={HomeStyle.social}>
          {validKeys.map((name, i) => {
            const link = social[name];
            return (
              <Ionicons
                key={`key-social-${i}`}
                name={`logo-${name}`}
                size={48}
                color={colors.text}
                onPress={() => navToLink(link)}
              />
            );
          })}
        </View>
        <View style={HomeStyle.copy}>
          <Text>&copy; Andrea Molinari {new Date().getFullYear()}</Text>
        </View>
      </View>
    </Backdrop>
  );
};

const HomeStyle = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
    gap: 10,
  },
  footer: {
    justifyContent: "center",
    paddingVertical: 20,
    flexDirection: "column",
    rowGap: 20,
  },
  social: {
    flexDirection: "row",
    justifyContent: "center",
    columnGap: 20,
  },
  copy: {
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default HomeView;
