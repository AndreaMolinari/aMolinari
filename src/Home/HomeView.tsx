import Constants from "expo-constants";
import React from "react";
import { Text, View } from "../../Elements";
import { Linking, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useColor } from "../../Hooks/Colors";

const HomeView: React.FC = () => {
  const apiUrl = Constants.expoConfig?.extra?.apiUrl;

  const navToLink = (link: string) => Linking.openURL(link);

  const colors = useColor();

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
          <Ionicons
            name="logo-facebook"
            size={48}
            color={colors.primary}
            onPress={() =>
              navToLink("https://www.facebook.com/AndreaJrMolinari/")
            }
          />
          <Ionicons
            name="logo-instagram"
            size={48}
            color={colors.primary}
            onPress={() =>
              navToLink("https://www.instagram.com/imatto_official/")
            }
          />
          <Ionicons
            name="logo-github"
            size={48}
            color={colors.primary}
            onPress={() => navToLink("https://github.com/AndreaMolinari")}
          />
          <Ionicons
            name="logo-linkedin"
            size={48}
            color={colors.primary}
            onPress={() =>
              navToLink("https://www.linkedin.com/in/amolinaricom/")
            }
          />
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
