import Constants from "expo-constants";
import React from "react";
import { FlatList, Platform, StyleSheet, View } from "react-native";
import { useMediaQuery } from "react-responsive";
import { Text } from "../../Elements";
import Backdrop from "../../Elements/Backdrop";
import useGitHub from "../Hooks/useGitHub";
import Repo from "./Repo";

const ItemSeparator = () => {
  return <View style={{ height: 10 }} />;
};

const ProjectsView: React.FC = () => {
  const accessToken: string = Constants.expoConfig?.extra?.github_token;
  const { repos, reqRepositos } = useGitHub(accessToken);

  React.useEffect(() => {
    reqRepositos();
  }, []);

  const isL = useMediaQuery({ maxWidth: 1600 });
  const isM = useMediaQuery({ maxWidth: 1200 });
  const isS = useMediaQuery({ maxWidth: 600 });

  const columns = React.useMemo(() => {
    if (Platform.OS === "web") {
      return isS ? 1 : isM ? 2 : isL ? 3 : 4;
    } else {
      return 1;
    }
  }, [isL, isM, isS]);

  const rand = React.useMemo(() => {
    return Math.random().toString();
  }, [columns]);

  return (
    <Backdrop>
      <Text size="xl">Bando alle ciance, scoprimo le api di github 😍</Text>
      <FlatList
        numColumns={columns}
        style={Style.container}
        // ItemSeparatorComponent={ItemSeparator}
        data={repos}
        key={`fl-${rand}`}
        renderItem={(item) => <Repo {...item} />}
        keyExtractor={(item) => `${item.id}`}
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
        columnWrapperStyle={{
          justifyContent: "space-between",
          gap: 20,
        }}
      />
    </Backdrop>
  );
};

const Style = StyleSheet.create({
  container: {
    gap: 10,
  },
});

export default React.memo(ProjectsView);
