import React from "react";
import { View } from "../../Elements";
import { StyleSheet } from "react-native";

const ProjectsView: React.FC = () => {
  return <View style={Style.wrapper}></View>;
};

const Style = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});

export default ProjectsView;
