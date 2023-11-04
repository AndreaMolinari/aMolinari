import { useTheme } from "@react-navigation/native";
import React from "react";
import * as RN from "react-native";
import { type Theme } from "@react-navigation/native";

type ViewProps = React.PropsWithChildren<RN.ViewProps> & {
  centerContent?: true;
  color?: keyof Theme["colors"];
  border?: keyof Theme["colors"] | "none";
};

export const View: React.FC<ViewProps> = (props) => {
  const { colors } = useTheme();

  const style = React.useMemo(() => {
    let tmp: RN.StyleProp<RN.ViewStyle> = props.style;

    if (props.centerContent) {
      tmp = RN.StyleSheet.compose(
        {
          flex: 1,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 20,
        },
        tmp
      );
    }

    if (props.border) {
      if (props.border !== "none") {
        tmp = setBorder(tmp, colors, props.border);
      }
    }

    if (props.color) {
      tmp = setBackground(tmp, colors, props.color);
      if (props.color === "card" && props.border !== "none") {
        tmp = setBorder(tmp, colors, props.border ?? "border");
      }
    }

    if (props.style) {
      tmp = RN.StyleSheet.compose(tmp, props.style);
    }

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
  }, [props, colors]);

  return (
    <RN.View {...props} style={style}>
      {props.children}
    </RN.View>
  );
};

type SetBackgroundType = (
  style: RN.StyleProp<RN.ViewStyle>,
  colors: Theme["colors"],
  color: keyof Theme["colors"]
) => RN.StyleProp<RN.ViewStyle>;

const setBackground: SetBackgroundType = (tmp, colors, color) => {
  switch (color) {
    case "text":
      return RN.StyleSheet.compose({ backgroundColor: colors.text }, tmp);
    case "primary":
      return RN.StyleSheet.compose({ backgroundColor: colors.primary }, tmp);
    case "notification":
      return RN.StyleSheet.compose(
        { backgroundColor: colors.notification },
        tmp
      );
    case "border":
      return RN.StyleSheet.compose({ backgroundColor: colors.border }, tmp);
    case "background":
      return RN.StyleSheet.compose({ backgroundColor: colors.background }, tmp);
    case "card":
      return RN.StyleSheet.compose({ backgroundColor: colors.card }, tmp);
  }
};

type SetBorderType = (
  style: RN.StyleProp<RN.ViewStyle>,
  colors: Theme["colors"],
  color: keyof Theme["colors"] | "none"
) => RN.StyleProp<RN.ViewStyle>;

const setBorder: SetBorderType = (tmp, colors, color) => {
  tmp = RN.StyleSheet.compose(
    {
      borderWidth: 1,
      borderRadius: 10,
    },
    tmp
  );
  switch (color) {
    case "text":
      return RN.StyleSheet.compose({ borderColor: colors.text }, tmp);
    case "primary":
      return RN.StyleSheet.compose({ borderColor: colors.primary }, tmp);
    case "notification":
      return RN.StyleSheet.compose({ borderColor: colors.notification }, tmp);
    case "border":
      return RN.StyleSheet.compose({ borderColor: colors.border }, tmp);
    case "background":
      return RN.StyleSheet.compose({ borderColor: colors.background }, tmp);
    case "card":
      return RN.StyleSheet.compose({ borderColor: colors.card }, tmp);
  }
};
