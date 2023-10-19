import { useTheme } from "@react-navigation/native";
import React from "react";
import * as RN from "react-native";

type ViewProps = React.PropsWithChildren<RN.ViewProps> & {
  centerContent?: true;
};

export const View: React.FC<ViewProps> = (props) => {
  const { colors } = useTheme();

  const style = React.useMemo(() => {
    let tmp: RN.StyleProp<RN.ViewStyle> = props.style;

    if (props.centerContent) {
      tmp = RN.StyleSheet.compose(tmp, {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      });
    }

    if (props.style) {
      tmp = RN.StyleSheet.compose(tmp, props.style);
    }

    return tmp;
  }, [props, colors]);

  return (
    <RN.View {...props} style={style}>
      {props.children}
    </RN.View>
  );
};

export default React.memo(View);
