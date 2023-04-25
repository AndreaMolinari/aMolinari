import { StatusBar } from "expo-status-bar";
import React from "react";
import Text from "../Elements/Text";
import View from "../Elements/View";
import { useIsDark } from "../Hooks/Colors";

const HomeView: React.FC = () => {
  const isDark = useIsDark();
  return (
    <>
      <StatusBar style={isDark ? "dark" : "light"} />
      <View>
        <Text size="xxl">🚧 Work in progress 🚧</Text>
      </View>
    </>
  );
};

export default React.memo(HomeView);
