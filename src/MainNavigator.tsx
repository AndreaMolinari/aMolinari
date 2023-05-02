import {
  LinkingOptions,
  NavigationContainer,
  Theme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Constants from "expo-constants";
import React from "react";
import { ColorSchemeName, useColorScheme } from "react-native";
import Fallback from "./Fallback";
import HeaderView from "./HeaderView";
import HomeView from "./Home/HomeView";
import ProjectsView from "./Projects/ProjectsView";
import { RootStackParamList } from "./RootStackParamList";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

const MainStack = createNativeStackNavigator<RootStackParamList>();

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [
    `${Constants.expoConfig?.name}`,
    "https://amolinari.netlify.app/",
  ],
  config: {
    initialRouteName: "Home",
    screens: {
      Home: {
        path: `${Constants.expoConfig?.name}/Home`,
      },
      Projects: {
        path: `${Constants.expoConfig?.name}/Projects`,
      },
      NoMatch: "*",
    },
  },
};

type SceltaTema = (mode: ColorSchemeName) => Theme;

const MainNavigator: React.FC = () => {
  const initialRouteName = "Home";

  const scelta_tema: SceltaTema = (mode: ColorSchemeName) => {
    if (mode === "dark") {
      return {
        dark: true,
        colors: {
          background: "#111",
          text: "#ddd",
          primary: "#ffcc00",
          border: "#888",
          card: "rgba(17,17,17,.85)",
          notification: "#000",
        },
      };
    } else {
      return {
        dark: false,
        colors: {
          background: "#eee",
          text: "#222",
          primary: "#ffcc00",
          border: "#888",
          card: "rgba(238,238,238,.85)",
          notification: "#ddd",
        },
      };
    }
  };

  const colorScheme = useColorScheme();

  return (
    <NavigationContainer
      linking={linking}
      fallback={<Fallback />}
      theme={scelta_tema(colorScheme)}
    >
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
