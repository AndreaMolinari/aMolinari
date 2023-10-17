import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeView from "./Home/HomeView";
import { RootStackParamList } from "./RootStackParamList";
import ProjectsView from "./Projects/ProjectsView";
import HeaderView from "./HeaderView";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

const MainNavigator: React.FC = () => {
  const Stack = createNativeStackNavigator();
  const initialRouteName = "Home";

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRouteName}>
        <Stack.Group
          screenOptions={{
            headerShown: __DEV__,
            header(props) {
              return <HeaderView {...props} />;
            },
          }}
        >
          <Stack.Screen name="Home" component={HomeView} />
          <Stack.Screen name="Projects" component={ProjectsView} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
