import React from "react";
import { StatusBar as ExpoStatusBar, StatusBarProps } from "expo-status-bar";
import { useTheme } from "@react-navigation/native";

export const StatusBar: React.FC<StatusBarProps> = (p) => {
  const { dark } = useTheme();

  const props: () => StatusBarProps = () => {
    return {
      ...p,
      style: dark ? "light" : "dark",
    };
  };

  return <ExpoStatusBar {...props} />;
};

export default React.memo(StatusBar);
