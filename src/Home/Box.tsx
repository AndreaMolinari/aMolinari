import React from "react";
import { Text, View } from "../../Elements";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useColor } from "../../Hooks/Colors";

type BoxProps = React.PropsWithChildren & {
  link?: string;
  icon: string;
  title: string;
  text?: string | undefined;
};

const HomeBox: React.FC<BoxProps> = (props) => {
  const colors = useColor();

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        padding: 20,
        maxWidth: 280,
      }}
    >
      <Ionicons name={props.icon as any} size={48} color={colors.accent} />
      <Text size="xl">{props.title}</Text>
      {props.text ? <Text>{props.text}</Text> : props.children}
    </View>
  );
};

export default HomeBox;
