import React, { memo } from "react";
import { ScrollView } from "react-native";

import Markdown from "@ronradtke/react-native-markdown-display";
import colors from "../../colors";

interface ResultProps {
  data: string;
}

const Result = memo(({ data }: ResultProps) => {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      showsVerticalScrollIndicator={false}
      className="mt-4 px-4"
      contentContainerStyle={{ paddingBottom: 40 }}
    >
      <Markdown
        style={{
          text: {
            fontSize: 18,
          },
          code_inline: {
            backgroundColor: colors.gray.DEFAULT,
          },
        }}
      >
        {data}
      </Markdown>
    </ScrollView>
  );
});

export default Result;
