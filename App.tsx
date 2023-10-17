import React from "react";
import MainNavigator from "./src/MainNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";

export const App: React.FC = () => {

  const [fontsLoaded] = useFonts({
    Nunito: require("./assets/fonts/Nunito/Nunito-VariableFont_wght.ttf"),
  });

  return (
  <SafeAreaProvider>
    <MainNavigator />
  </SafeAreaProvider>
)};

export default App;
