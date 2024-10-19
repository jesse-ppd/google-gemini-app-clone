import React, { memo } from "react";
import { ScrollView, Text, TextInput, View } from "react-native";
import { useDelayedTextValue } from "../hooks/useDelayedTextValue";

import Markdown from "@ronradtke/react-native-markdown-display";

interface ResultProps {
  data: string;
}

const Result = memo(({ data }: ResultProps) => {
  const delayedValue = useDelayedTextValue(data);

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      showsVerticalScrollIndicator={false}
      className="mt-4 px-4"
    >
      <Markdown>{delayedValue}</Markdown>
    </ScrollView>
  );
});

export default Result;
