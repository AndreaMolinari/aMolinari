import { LinkingOptions, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HeaderView from "./HeaderView";
import HomeView from "./Home/HomeView";
import ProjectsView from "./Projects/ProjectsView";
import { RootStackParamList } from "./RootStackParamList";
import { Text } from "../Elements";
import Fallback from "./Fallback";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

const MainStack = createNativeStackNavigator<RootStackParamList>();

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: ["aMolinari://", "https://andreamolinari.github.io/aMolinari/"],
  config: {
    initialRouteName: "Home",
    screens: {
      Home: {
        path: "/Home",
      },
      Projects: {
        path: "/Projects",
      },
      NoMatch: "*",
    },
  },
};

const MainNavigator: React.FC = () => {
  const initialRouteName = "Home";

  return (
    <NavigationContainer linking={linking} fallback={<Fallback />}>
      <MainStack.Navigator initialRouteName={initialRouteName}>
        <MainStack.Group
          screenOptions={{
            headerShown: __DEV__,
            headerTransparent: true,
            header(props) {
              return <HeaderView {...props} />;
            },
          }}
        >
          <MainStack.Screen name="Home" component={HomeView} />
          {__DEV__ && (
            <MainStack.Screen name="Projects" component={ProjectsView} />
          )}
        </MainStack.Group>
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
