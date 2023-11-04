import { StatusBar } from "expo-status-bar";
import React from "react";
import Text from "../Elements/Text";
import View from "../Elements/View";
import { useIsDark } from "../Hooks/Colors";
import HomeInfo from "./HomeInfo";

const HomeView: React.FC = () => {
  const isDark = useIsDark();
  return (
    <>
      <StatusBar style={isDark ? "dark" : "light"} />
      <View
        style={{
          flex: 1,
          flexDirection: "row",
        }}
      >
        <View>
          <HomeInfo />
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

export default React.memo(HomeView);
