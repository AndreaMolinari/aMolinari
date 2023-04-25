import React from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import { useColor } from "../Hooks/Colors";

export default (props: React.PropsWithChildren) => {
  const color = useColor();

  const style = React.useMemo(() => {
    let tmp: StyleProp<ViewStyle> = {
      flex: 1,
      backgroundColor: color.default,
      alignItems: "center",
      justifyContent: "center",
    };

    return tmp;
  }, [props]);

  return <View style={style}>{props.children}</View>;
};
