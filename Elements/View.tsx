import React from "react";
import * as RN from "react-native";
import { AvailableColors, useColor } from "../Hooks/Colors";

type ViewProps = React.PropsWithChildren<RN.ViewProps> & {
  color?: AvailableColors | undefined;
  centerContent?: true;
};

export const View: React.FC<ViewProps> = (props) => {
  const color = useColor();

  const style = () => {
    let tmp: RN.StyleProp<RN.ViewStyle> = {
      flexDirection: "row",
      // alignItems: "flex-start",
      // justifyContent: "space-around",
    };

    if (props.centerContent) {
      tmp = RN.StyleSheet.compose(tmp, {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      });
    }

    switch (props.color) {
      case "disabled":
        tmp = RN.StyleSheet.compose(tmp, { backgroundColor: color.disabled });
        break;
      default:
        tmp = RN.StyleSheet.compose(tmp, { backgroundColor: color.default });
        break;
    }

    if (props.style) {
      tmp = RN.StyleSheet.compose(tmp, props.style);
    }

    return tmp;
  };

  return <RN.View style={style()}>{props.children}</RN.View>;
};

export default React.memo(View);
