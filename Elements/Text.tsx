import { useTheme } from "@react-navigation/native";
import React from "react";
import * as RN from "react-native";
import { useMediaQuery } from "react-responsive";

type CustomTextType = React.PropsWithChildren<RN.TextProps> & {
  size?: "xxl" | "xl" | "l" | "m" | undefined;
  weight?: "extra-bold" | "bold" | "regular" | "light" | undefined;
};

const fontSize = (size: number) => size * RN.PixelRatio.getFontScale();

export const Text: React.FC<CustomTextType> = (props) => {
  const { colors } = useTheme();

  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  const isPortrait = useMediaQuery({ orientation: "portrait" });

  const style = () => {
    let tmp: RN.StyleProp<RN.TextStyle> = {
      color: colors.text,
      fontFamily: "Nunito-500",
    };

    switch (props.weight) {
      case "extra-bold":
        tmp = RN.StyleSheet.compose(tmp, {
          fontFamily: "Nunito-900",
        });
        break;
      case "bold":
        tmp = RN.StyleSheet.compose(tmp, {
          fontFamily: "Nunito-800",
        });
        break;
      case "light":
        tmp = RN.StyleSheet.compose(tmp, {
          fontFamily: "Nunito-200",
        });
        break;
      default:
        tmp = RN.StyleSheet.compose(tmp, {
          fontFamily: "Nunito-500",
        });
        break;
    }

    switch (props.size) {
      case "xxl":
        tmp = RN.StyleSheet.compose(tmp, {
          fontSize: fontSize(45),
          ...RN.Platform.select({
            web: {
              fontSize: fontSize(isTabletOrMobile && isPortrait ? 45 : 80),
            },
          }),
        });
        break;
      case "xl":
        tmp = RN.StyleSheet.compose(tmp, {
          fontSize: fontSize(28),
        });
        break;
      case "l":
        tmp = RN.StyleSheet.compose(tmp, {
          fontSize: fontSize(25),
        });
        break;
      case "m":
        tmp = RN.StyleSheet.compose(tmp, {
          fontSize: fontSize(20),
        });
        break;
      default:
        tmp = RN.StyleSheet.compose(tmp, {
          fontSize: fontSize(14),
        });
        break;
    }

    if (props.style) {
      tmp = RN.StyleSheet.compose(tmp, props.style);
    }

    return tmp;
  };

  return <RN.Text style={style()} {...props} />;
};

export default React.memo(Text);
