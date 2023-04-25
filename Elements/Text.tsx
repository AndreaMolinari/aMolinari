import React from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextProps,
  TextStyle,
} from "react-native";
import { useColor } from "../Hooks/Colors";

type CustomTextType = React.PropsWithChildren<TextProps> & {
  size?: "xxl" | undefined;
};

export default (props: CustomTextType) => {
  const color = useColor();

  const style = React.useMemo(() => {
    let tmp: StyleProp<TextStyle> = {
      color: color.primary,
    };

    switch (props.size) {
      case "xxl":
        tmp = StyleSheet.compose(tmp, { fontSize: 50 });
        break;
      default:
        tmp = StyleSheet.compose(tmp, { fontSize: 14 });
        break;
    }

    return tmp;
  }, [props]);

  return <Text style={style}>{props.children}</Text>;
};
