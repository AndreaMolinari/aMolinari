import React from "react";
import MainNavigator from "./src/MainNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";

export const App: React.FC = () => (
  <SafeAreaProvider>
    <MainNavigator />
  </SafeAreaProvider>
);

export default App;
