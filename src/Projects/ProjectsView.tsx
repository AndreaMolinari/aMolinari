import React from "react";
import { FlatList, Platform, StyleSheet, View } from "react-native";
import { useMediaQuery } from "react-responsive";
import { Text, Backdrop } from "../../Elements";
import useGitHub from "../Hooks/useGitHub";
import Repo from "./Repo";

const ItemSeparator = () => {
  return <View style={{ height: 20 }} />;
};

const ProjectsView: React.FC = () => {
  const gh = useGitHub();

  React.useEffect(() => {
    gh.reqRepositos();
    // gh.repoLang();
    // gh.reqActivities();
    gh.reqLang();
    gh.reqAny();
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
      <View style={Style.container}>
        {gh.languages && (
          <Text size="xl">
            Recent Language Popularity
            <Text size="xl" weight="bold">
              {` ${gh.languages.join(", ")}`}
            </Text>
          </Text>
        )}
        {/* <ScrollView style={{ flex: 1 }}>
        <Text>{JSON.stringify(gh.respAny, null, 2)}</Text>
      </ScrollView> */}
        <FlatList
          numColumns={columns}
          style={Style.container}
          // ItemSeparatorComponent={ItemSeparator}
          data={gh.repos}
          key={`fl-${rand}`}
          renderItem={(item) => <Repo {...item} />}
          keyExtractor={(item) => `${item.name}`}
          ItemSeparatorComponent={ItemSeparator}
          columnWrapperStyle={
            columns > 1 && {
              justifyContent: "space-between",
              gap: 20,
            }
          }
        />
      </View>
    </Backdrop>
  );
};

const Style = StyleSheet.create({
  container: {
    gap: 20,
  },
});

export default React.memo(ProjectsView);
