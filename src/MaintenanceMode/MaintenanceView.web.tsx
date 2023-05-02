import React from "react";
import MaintenanceInfo from "./MaintenanceInfo";
import { useMediaQuery } from "react-responsive";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { StatusBar, Text, View } from "../../Elements";

const MaintenanceView: React.FC = () => {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  const isPortrait = useMediaQuery({ orientation: "portrait" });

  const container = React.useMemo(() => {
    var tmp: StyleProp<ViewStyle> = {
      flex: 1,
      flexDirection: "row",
    };
    if (isTabletOrMobile && isPortrait) {
      tmp = StyleSheet.compose(tmp, {
        flexDirection: "column",
        alignItems: "center",
      });
    }

    return tmp;
  }, [isTabletOrMobile, isPortrait]);

  return (
    <>
      <StatusBar />
      <View style={container}>
        <View>
          <MaintenanceInfo />
        </View>
        <View style={{ flexDirection: "column", flex: 1 }}>
          <View centerContent>
            <Text size="xxl">🚧 Work in progress 🚧</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default React.memo(MaintenanceView);
