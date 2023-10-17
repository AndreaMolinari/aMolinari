import React from "react";
import * as Expo from "expo-status-bar";
import { useIsDark } from "../Hooks/Colors";

export const StatusBar: React.FC = () => {
  const isDark = useIsDark();

  return <Expo.StatusBar style={!isDark ? "dark" : "light"} />;
};

export default StatusBar;
