import React from "react";
import { Text, View } from "../../Elements";
import { Linking, StyleSheet, TouchableOpacity } from "react-native";

const Repo: React.FC<{ repo: any }> = (props) => {
  return (
    <>
      <TouchableOpacity
        onPress={() => Linking.openURL(props.repo.html_url)}
        style={Style.container}
      >
        <Text>{props.repo.name}</Text>
        <Text>{props.repo.description}</Text>
      </TouchableOpacity>
    </>
  );
};

const Style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    borderColor: "#666",
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    gap: 5,
  },
});

export default Repo;
