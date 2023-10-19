import React from "react";
import {
  Linking,
  ListRenderItemInfo,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import { Text, View } from "../../Elements";
import { Theme, useTheme } from "@react-navigation/native";

const Repo: React.FC<
  ListRenderItemInfo<{
    name: string;
    description: string;
    url: string;
    latestRelease: {
      name: string;
    };
    defaultBranchRef: {
      name: string;
      target: {
        history: {
          edges: [{ node: any }];
        };
      };
    };
  }>
> = (props) => {
  const theme = useTheme();

  const style = Style(theme);

  return (
    <TouchableHighlight
      onPress={() => Linking.openURL(props.item.url)}
      style={style.wrapper}
      onShowUnderlay={props.separators.highlight}
      onHideUnderlay={props.separators.unhighlight}
    >
      <View style={style.container}>
        <Text>{props.item.name}</Text>
        <Text>{props.item.description}</Text>
        {props.item.latestRelease?.name && (
          <Text>{props.item.latestRelease.name}</Text>
        )}
        {props.item.defaultBranchRef.target.history.edges.length > 0 && (
          <>
            {props.item.defaultBranchRef.target.history.edges
              .filter((f) => f.node.author.email === "molinari91@gmail.com")
              .map((i, n) => (
                <Text key={`commit-${props.item.name}-${n + Math.random()}`}>
                  {i.node.message}
                </Text>
              ))}
          </>
        )}
      </View>
    </TouchableHighlight>
  );
};

const Style = (colors: Theme) =>
  StyleSheet.create({
    wrapper: {
      flex: 1,
    },
    container: {
      flex: 1,
      flexDirection: "column",
      backgroundColor: colors.colors.background,
      opacity: 0.95,
      borderColor: colors.colors.border,
      borderWidth: 1,
      borderRadius: 10,
      padding: 10,
      gap: 5,
    },
  });

export default Repo;
