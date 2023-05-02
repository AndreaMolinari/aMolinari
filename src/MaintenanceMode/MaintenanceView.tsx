import React from "react";
import { SafeAreaView } from "react-native";
import { Text, View, StatusBar } from "../../Elements";
import MaintenanceInfo from "./MaintenanceInfo";

const MaintenanceView: React.FC = () => {
  return (
    <>
      <StatusBar />
      <View
        style={{
          flex: 1,
          flexDirection: "column",
        }}
      >
        <SafeAreaView style={{ flex: 1 }}>
          <View centerContent>
            <MaintenanceInfo />
          </View>
          <View style={{ flexDirection: "column", flex: 1 }}>
            <View centerContent>
              <Text size="xxl">🚧 Work in progress 🚧</Text>
            </View>
          </View>
        </SafeAreaView>
      </View>
    </>
  );
};

export default React.memo(MaintenanceView);
