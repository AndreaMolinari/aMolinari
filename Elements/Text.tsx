import React from "react";
import * as RN from "react-native";
import { useColor } from "../Hooks/Colors";
import { useMediaQuery } from "react-responsive";
import { useFonts } from "expo-font";

type CustomTextType = React.PropsWithChildren<RN.TextProps> & {
  size?: "xxl" | "xl" | undefined;
};

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
      marginVertical: 10,
      fontFamily: "Nunito",
      fontWeight: "500",
    };

    switch (props.size) {
      case "xxl":
        tmp = RN.StyleSheet.compose(tmp, {
          fontSize: 32,
          ...RN.Platform.select({
            web: {
              fontSize: isTabletOrMobile && isPortrait ? 32 : 50,
            },
          }),
        });
        break;
      case "xl":
        tmp = RN.StyleSheet.compose(tmp, {
          fontSize: 28,
        });
        break;
      default:
        tmp = RN.StyleSheet.compose(tmp, { fontSize: 14 });
        break;
    }

    if (props.style) {
      tmp = RN.StyleSheet.compose(tmp, props.style);
    }

    return tmp;
  }, [props, isPortrait, isTabletOrMobile]);

  return <RN.Text style={style}>{props.children}</RN.Text>;
};

export default Text;
