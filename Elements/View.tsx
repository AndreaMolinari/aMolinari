import React from "react";
import {
  StyleProp,
  StyleSheet,
  View,
  ViewProps,
  ViewStyle,
} from "react-native";
import { AvailableColors, useColor } from "../Hooks/Colors";

type CustomViewType = React.PropsWithChildren<ViewProps> & {
  color?: AvailableColors | undefined;
  centerContent?: true;
};

export default (props: CustomViewType) => {
  const color = useColor();

  const style = React.useMemo(() => {
    let tmp: StyleProp<ViewStyle> = {
      flexDirection: "row",
      // alignItems: "flex-start",
      // justifyContent: "space-around",
    };

    if (props.centerContent) {
      tmp = StyleSheet.compose(tmp, {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      });
    }

    switch (props.color) {
      case "disabled":
        tmp = StyleSheet.compose(tmp, { backgroundColor: color.disabled });
        break;
      default:
        tmp = StyleSheet.compose(tmp, { backgroundColor: color.default });
        break;
    }

    if (props.style) {
      tmp = StyleSheet.compose(tmp, props.style);
    }

    return tmp;
  }, [props]);

  return <View style={style}>{props.children}</View>;
};
