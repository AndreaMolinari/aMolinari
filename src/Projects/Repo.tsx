import React from "react";
import {
  Linking,
  ListRenderItemInfo,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import { Text, View } from "../../Elements";
import { CustomColor, useColor } from "../../Hooks/Colors";

const Repo: React.FC<
  ListRenderItemInfo<{
    name: string;
    description: string;
    html_url: string;
  }>
> = (props) => {
  const colors = useColor();

  const style = Style(colors);

  return (
    <TouchableHighlight
      onPress={() => Linking.openURL(props.item.html_url)}
      style={style.wrapper}
      onShowUnderlay={props.separators.highlight}
      onHideUnderlay={props.separators.unhighlight}
    >
      <View style={style.container}>
        <Text>{props.item.name}</Text>
        <Text>{props.item.description}</Text>
      </View>
    </TouchableHighlight>
  );
};

const Style = (colors: CustomColor) =>
  StyleSheet.create({
    wrapper: {
      flex: 1,
    },
    container: {
      flex: 1,
      flexDirection: "column",
      backgroundColor: colors.default,
      opacity: 0.95,
      borderColor: colors.disabled,
      borderWidth: 1,
      borderRadius: 10,
      padding: 10,
      gap: 5,
    },
  });

export default Repo;
