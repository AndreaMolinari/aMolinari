import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Fallback: React.FC = () => {
  return (
    <View>
      <Text>Loading...</Text>
    </View>
  );
};

const Style = StyleSheet.create({
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Fallback;
