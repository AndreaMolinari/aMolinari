import React from "react";
import { ColorValue, useColorScheme } from "react-native";

export const useIsDark = () => {
  const colorScheme = useColorScheme() === "dark";

  return colorScheme;
};

export type CustomColor = {
  default: ColorValue;
  primary: ColorValue;
  accent: ColorValue;
  disabled: ColorValue;
  success: ColorValue;
  danger: ColorValue;
  warning: ColorValue;
};

export type AvailableColors = keyof CustomColor;

const LightColor: CustomColor = {
  default: "#eee",
  primary: "#333",
  accent: "#ffcc00",
  disabled: "#888",
  success: "rgb(32, 124, 54)",
  danger: "rgba(211, 48, 65, 1)",
  warning: "rgba(253, 185, 35, 1)",
};
const DarkColor: CustomColor = {
  default: "#333",
  primary: "#ddd",
  accent: "#ffcc00",
  disabled: "#888",
  success: "rgb(32, 124, 54)",
  danger: "rgba(211, 48, 65, 1)",
  warning: "rgba(253, 185, 35, 1)",
};

export const useColor = () => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  const Color = React.useMemo(() => {
    return isDark ? DarkColor : LightColor;
  }, [isDark]);

  return Color;
};
