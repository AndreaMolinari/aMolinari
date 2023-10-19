import { useFonts } from "expo-font";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Fallback from "./src/Fallback";
import MainNavigator from "./src/MainNavigator";


export const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Nunito: require("./assets/fonts/Nunito/Nunito-VariableFont_wght.ttf"),
  });

  return (
    <SafeAreaProvider>
      {!fontsLoaded ? <Fallback /> : <MainNavigator />}
    </SafeAreaProvider>
  );
};

export default App;
