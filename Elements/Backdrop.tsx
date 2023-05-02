import { useHeaderHeight } from "@react-navigation/elements";
import { useTheme } from "@react-navigation/native";
import { useAssets } from "expo-asset";
import React from "react";
import {
  ImageBackground,
  ImageSourcePropType,
  Platform,
  StyleProp,
  View,
  ViewProps,
  ViewStyle,
} from "react-native";

const BackdropComponent: React.FC<ViewProps> = (props) => {
  const header_height = useHeaderHeight();
  const { dark, colors } = useTheme();
  const [assets] = useAssets([
    require(`../assets/melette.png`),
    require(`../assets/texture-light.png`),
    require("../assets/texture-dark.png"),
  ]);

  const get_asset = (name: string) => {
    var asset;

    const escapedName = `${name}`.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");

    const regexPattern = new RegExp(`^${escapedName}.*$`);

    if (assets) {
      asset = assets.filter((a) => regexPattern.test(a.name))[0];

      if (Platform.OS === "web") {
        asset = { uri: asset?.uri };
      }
      return asset as ImageSourcePropType;
    }

    return asset;
  };

  const background = React.useMemo(() => {
    return get_asset(dark ? "texture-dark" : "texture-light");
  }, [assets, dark]);

  const style: StyleProp<ViewStyle> = React.useMemo(() => {
    return {
      flex: 1,
      flexDirection: "column",
      paddingHorizontal: "10%",
      paddingTop: header_height,
      backgroundColor: colors.background,
    };
  }, [header_height, colors]);

  return (
    <>
      {background ? (
        <ImageBackground
          {...props}
          style={style}
          source={background}
          resizeMode="repeat"
        />
      ) : (
        <View {...props} style={style} />
      )}
    </>
  );
};

export const Backdrop = React.memo(BackdropComponent);
