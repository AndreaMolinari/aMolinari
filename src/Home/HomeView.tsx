import { Ionicons } from "@expo/vector-icons";
import Constants from "expo-constants";
import React from "react";
import { Linking, StyleSheet } from "react-native";
import { Text, View } from "../../Elements";
import { useColor } from "../../Hooks/Colors";

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

  const colors = useColor();

  const validKeys = Object.keys(social).filter(
    (key) => key in social
  ) as SocialKeyType[];

  return (
    <View style={HomeStyle.wrapper}>
      <View style={HomeStyle.main}>
        <Text size="xl">👋 Hey there, I'm</Text>
        <Text size="xxl" weight="bold">
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
                color={colors.primary}
                onPress={() => navToLink(link)}
              />
            );
          })}
        </View>
        <View style={HomeStyle.copy}>
          <Text>&copy; Andrea Molinari {new Date().getFullYear()}</Text>
        </View>
      </View>
    </View>
  );
};

const HomeStyle = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: "10%",
  },
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
    justifyContent: "center",
    columnGap: 20,
  },
  copy: {
    justifyContent: "center",
  },
});

export default HomeView;
