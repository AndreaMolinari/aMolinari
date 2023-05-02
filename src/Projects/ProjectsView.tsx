import React from "react";
import { FlatList, Platform, StyleSheet } from "react-native";
import { useMediaQuery } from "react-responsive";
import { Text, Backdrop, View } from "../../Elements";
import useGitHub from "../Hooks/useGitHub";
import Repo from "./Repo";

const FallbackContent: React.FC<{
  text?: string;
}> = (props) => (
  <Text>
    {props.text ||
      `In questo momento non sono ancora pronto a mostrarti questa parte di me 😜`}
  </Text>
);

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
      <Text size="xxl" weight="bold">
        Projects
      </Text>
      <View>
        {gh.languages.data?.length > 0 ? (
          <Text size="xl">
            Recent Language Popularity
            <Text size="xl" weight="bold">
              {` ${gh.languages.data?.join(", ")}`}
            </Text>
          </Text>
        ) : (
          <FallbackContent text={__DEV__ ? gh.languages.error : undefined} />
        )}
        {/* <ScrollView style={{ flex: 1 }}>
        <Text>{JSON.stringify(gh.respAny, null, 2)}</Text>
      </ScrollView> */}
        <View style={Style.repos}>
          <Text size="l" weight="bold">
            Repos
          </Text>
          {gh.repos.data?.length > 0 ? (
            <FlatList
              numColumns={columns}
              // ItemSeparatorComponent={ItemSeparator}
              data={gh.repos.data}
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
          ) : (
            <FallbackContent text={__DEV__ ? gh.repos.error : undefined} />
          )}
        </View>
      </View>
    </Backdrop>
  );
};

const Style = StyleSheet.create({
  repos: {
    marginVertical: 20,
  },
});

export default React.memo(ProjectsView);
