import React from "react";
import { Text, View } from "../../Elements";
import { Image, Platform } from "react-native";

const MaintenanceInfo: React.FC = () => {
  return (
    <View
      color="disabled"
      style={{
        margin: "auto",
        flexDirection: "column",
        padding: 20,
        borderRadius: 15,
        ...Platform.select({
          web: {
            marginHorizontal: 40,
          },
        }),
      }}
    >
      <View color="disabled">
        <Text size="xxl" style={{ marginRight: 30 }}>
          Andrea
        </Text>
        <View
          color="disabled"
          style={{
            flexDirection: "column",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ textAlign: "right", marginVertical: 0 }}>Full</Text>
          <Text style={{ textAlign: "right", marginVertical: 0 }}>Stack</Text>
          <Text style={{ textAlign: "right", marginVertical: 0 }}>
            Developer
          </Text>
        </View>
      </View>
      <Image
        source={{
          uri: "https://orgoglionerd.it/wp-content/uploads/2020/08/la-cosa.jpg",
        }}
        style={{ height: 150, marginBottom: 20 }}
      />
      <Text>molinari@live.it</Text>
      <Text>Cesena (FC), Italy</Text>
    </View>
  );
};

export default MaintenanceInfo;
