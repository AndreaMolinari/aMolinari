import React from "react";
import Constants from "expo-constants";
import { Text, View } from "../../Elements";
import HomeBox from "./Box";
const HomeView: React.FC = () => {
  const apiUrl = Constants.expoConfig?.extra?.apiUrl;
  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <Text size="xxl">HOME</Text>
      <View
        style={{
          justifyContent: "space-evenly",
          alignItems: "stretch",
        }}
      >
        <HomeBox
          icon="code-slash-outline"
          title="Ciao sono andrea"
          text="Ciao sono un testo"
        />
        <HomeBox
          icon="cube-outline"
          title="Ciao sono andrea"
          text="Ciao sono un testo"
        />
        <HomeBox
          icon="logo-github"
          title="GitHub"
        >
          <Text>Ma una volta che ci sei, mettila na stellina su github</Text>
        </HomeBox>
      </View>
    </View>
  );
};

export default HomeView;
