import { StatusBar } from "expo-status-bar";
import React from "react";
import Text from "../Elements/Text";
import { useIsDark } from "../Hooks/Colors";
import View from "../Elements/View";
import { Platform, SafeAreaView } from "react-native";
import HomeInfo from "./HomeInfo";

const HomeView: React.FC = () => {
  const isDark = useIsDark();
  return (
    <>
      <StatusBar style={isDark ? "dark" : "light"} />
      <View
        style={{
          flex: 1,
          flexDirection: "column",
        }}
      >
        <SafeAreaView style={{ flex: 1 }}>
          <View centerContent>
            <HomeInfo />
          </View>
          <View style={{ flexDirection: "column", flex: 1 }}>
            <View centerContent>
              <Text size="xxl">🚧 Work in progress 🚧</Text>
            </View>
          </View>
        </SafeAreaView>
      </View>
    </>
  );
};

export default React.memo(HomeView);
