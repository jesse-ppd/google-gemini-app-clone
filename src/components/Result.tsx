import React, { memo, useEffect } from "react";
import { ScrollView, View } from "react-native";

import Markdown from "@ronradtke/react-native-markdown-display";
import colors from "../../colors";
import Animated, { useSharedValue, withTiming } from "react-native-reanimated";

interface ResultProps {
  data: string;
}

const Result = memo(({ data }: ResultProps) => {
  const opacity = useSharedValue(0);

  useEffect(() => {
    opacity.value = withTiming(1, {
      duration: 1000,
    });
  }, []);

  return (
    <Animated.View
      style={{
        opacity,
      }}
      className="flex-1"
    >
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
    </Animated.View>
  );
});

export default Result;
