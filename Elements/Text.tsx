import React from "react";
import * as RN from "react-native";
import { useColor } from "../Hooks/Colors";
import { useMediaQuery } from "react-responsive";
import { useFonts } from "expo-font";

type CustomTextType = React.PropsWithChildren<RN.TextProps> & {
  size?: "xxl" | "xl" | "l" | "m" | undefined;
  weight?: "bold" | "regular" | undefined;
};

const fontSize = (size: number) => size * RN.PixelRatio.getFontScale();

export const Text: React.FC<CustomTextType> = (props) => {
  const color = useColor();

  const [fontsLoaded] = useFonts({
    Nunito: require("../assets/fonts/Nunito/Nunito-VariableFont_wght.ttf"),
  });

  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  const isPortrait = useMediaQuery({ orientation: "portrait" });

  const style = React.useMemo(() => {
    let tmp: RN.StyleProp<RN.TextStyle> = {
      color: color.primary,
      fontFamily: "Nunito",
      fontWeight: "500",
    };

    switch (props.weight) {
      case "bold":
        tmp = RN.StyleSheet.compose(tmp, {
          fontWeight: "700",
        });
        break;
      default:
        tmp = RN.StyleSheet.compose(tmp, {
          fontWeight: "500",
        });
        break;
    }

    switch (props.size) {
      case "xxl":
        tmp = RN.StyleSheet.compose(tmp, {
          fontSize: fontSize(32),
          ...RN.Platform.select({
            web: {
              fontSize: fontSize(isTabletOrMobile && isPortrait ? 32 : 80),
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
  }, [props, isPortrait, isTabletOrMobile, color, fontsLoaded]);

  return <RN.Text style={style}>{props.children}</RN.Text>;
};

export default Text;
