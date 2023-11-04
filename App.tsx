import { useFonts } from "expo-font";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Fallback from "./src/Fallback";
import MainNavigator from "./src/MainNavigator";
import { StatusBar } from "./Elements";

export const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Nunito: require("./assets/fonts/Nunito/Nunito-VariableFont_wght.ttf"),
    "Nunito-900": require("./assets/fonts/Nunito/static/Nunito-Black.ttf"),
    "Nunito-800": require("./assets/fonts/Nunito/static/Nunito-ExtraBold.ttf"),
    "Nunito-700": require("./assets/fonts/Nunito/static/Nunito-Bold.ttf"),
    "Nunito-600": require("./assets/fonts/Nunito/static/Nunito-SemiBold.ttf"),
    "Nunito-500": require("./assets/fonts/Nunito/static/Nunito-Medium.ttf"),
    "Nunito-400": require("./assets/fonts/Nunito/static/Nunito-Regular.ttf"),
    "Nunito-300": require("./assets/fonts/Nunito/static/Nunito-Light.ttf"),
    "Nunito-200": require("./assets/fonts/Nunito/static/Nunito-ExtraLight.ttf"),
  });

  return (
    <>
      <StatusBar />
      <SafeAreaProvider>
        {!fontsLoaded ? <Fallback /> : <MainNavigator />}
      </SafeAreaProvider>
    </>
  );
};

export default App;
