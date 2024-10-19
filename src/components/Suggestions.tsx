import React, { useLayoutEffect } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SUGGESTIONS } from "../constants/suggestions";

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

interface SuggestionProps {
  onSelectSuggestion: (prompt: string) => void;
}
interface SuggestionItemProps {
  prompt: string;
  onPress: (prompt: string) => void;
  index: number;
}

const Suggestions = ({ onSelectSuggestion }: SuggestionProps) => {
  return (
    <View className="mt-6">
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 20,
        }}
        showsHorizontalScrollIndicator={false}
      >
        {SUGGESTIONS.map((prompt, index) => (
          <SuggestionItem
            key={`suggestion-${index}`}
            prompt={prompt}
            index={index}
            onPress={(prompt) => onSelectSuggestion(prompt)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const SuggestionItem = ({ prompt, onPress, index }: SuggestionItemProps) => {
  const opacityValue = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacityValue.value,
  }));

  useLayoutEffect(() => {
    opacityValue.value = withTiming(1, {
      duration: index * 500,
    });
  }, []);

  return (
    <TouchableOpacity onPress={() => onPress(prompt)}>
      <Animated.View
        style={animatedStyle}
        className="w-[150px] h-[140px] bg-ice-50 rounded-2xl mr-2 px-2 py-4"
      >
        <Text className="text-base flex-1">{prompt}</Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

export default Suggestions;
