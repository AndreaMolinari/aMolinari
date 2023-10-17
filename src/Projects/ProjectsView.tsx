import Constants from "expo-constants";
import React from "react";
import { Linking, ScrollView, StyleSheet } from "react-native";
import { Text, View } from "../../Elements";
import GlobalStyle from "../GlobalStyle";
import useGitHub from "../Hooks/useGitHub";
import Repo from "./Repo";

const ProjectsView: React.FC = () => {
  const accessToken: string = Constants.expoConfig?.extra?.github_token;
  const { repos, reqRepositos } = useGitHub(accessToken);

  const style = { ...GlobalStyle, ...Style };

  React.useEffect(() => {
    reqRepositos();
  }, []);

  return (
    <View style={style.wrapper}>
      <ScrollView style={style.container}>
        <Text size="xl">Bando alle ciance, scoprimo le api di github 😍</Text>

        <View style={style.repos}>
          {repos.map((item, index) => (
            <Repo key={index} repo={item} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const Style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  repos: {
    justifyContent: "center",
    gap: 10,
    flexWrap: "wrap",
  },
});

export default ProjectsView;
