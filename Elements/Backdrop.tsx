import { useHeaderHeight } from "@react-navigation/elements";
import { useAssets } from "expo-asset";
import React from "react";
import { ImageBackground, ViewProps } from "react-native";
import { useColor } from "../Hooks/Colors";

const Backdrop: React.FC<ViewProps> = (props) => {
  const [assets] = useAssets([
    require("../assets/texture.png"),
    require("../assets/melette.png"),
  ]);
  const color = useColor();

  const header_height = useHeaderHeight();

  return (
    <>
      {assets && (
        <ImageBackground
          {...props}
          source={{ uri: assets[0].localUri as string }}
          resizeMode="repeat"
          style={{
            flex: 1,
            flexDirection: "column",
            paddingHorizontal: "10%",
            paddingTop: header_height,
            gap: 20,
          }}
          imageStyle={{
            backgroundColor: color.default,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        />
      )}
    </>
  );
};

export default Backdrop;
