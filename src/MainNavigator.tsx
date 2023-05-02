import React from "react";
import { RootStackParamList } from "./RootStackParamList";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import MaintenanceView from "./MaintenanceMode/MaintenanceView";
import HomeView from "./Home/HomeView";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

const MainNavigator: React.FC = () => {
  const Stack = createNativeStackNavigator();
  const initialRouteName = __DEV__ ? "Home" : "Maintenance";

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRouteName}>
        <Stack.Group
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Maintenance" component={MaintenanceView} />
        </Stack.Group>
        <Stack.Group>
          <Stack.Screen name="Home" component={HomeView} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
