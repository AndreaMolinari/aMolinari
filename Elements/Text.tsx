import React from "react";
import {
  Platform,
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
      marginVertical: 10,
    };

    switch (props.size) {
      case "xxl":
        tmp = StyleSheet.compose(tmp, {
          fontSize: 32,
          ...Platform.select({
            web: {
              fontSize: 50,
            },
          }),
        });
        break;
      default:
        tmp = StyleSheet.compose(tmp, { fontSize: 14 });
        break;
    }

    if (props.style) {
      tmp = StyleSheet.compose(tmp, props.style);
    }

    return tmp;
  }, [props]);

  return <Text style={style}>{props.children}</Text>;
};
