import React, { useCallback, useLayoutEffect } from "react";
import {
  View,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import colors from "../../colors";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { SendHorizonal } from "lucide-react-native";

interface MainInputProps extends TextInputProps {
  isLoading?: boolean;
  disabled?: boolean;
  onComplete: () => void;
}

const MainInput = ({
  isLoading,
  onComplete,
  disabled,
  ...props
}: MainInputProps) => {
  const translateYValue = useSharedValue(0);

  useLayoutEffect(() => {
    translateYValue.value = withTiming(1, {
      duration: 600,
    });
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: interpolate(translateYValue.value, [0, 1], [100, 0]),
      },
    ],
  }));

  const handleCompletPrompt = useCallback(() => {
    Keyboard.dismiss();
    onComplete();
  }, [onComplete]);

  return (
    <Animated.View
      style={animatedStyle}
      className="bg-white rounded-t-3xl h-[220px] shadow-xl absolute bottom-0 w-full px-4 pb-2 pt-6"
    >
      <TextInput
        placeholder="Type, talk or share a photo"
        placeholderTextColor={colors.dark.DEFAULT}
        className=" text-2xl flex-1"
        multiline
        {...props}
      />
      <View className="flex-row items-center justify-end mb-6 mr-4">
        <TouchableOpacity
          onPress={handleCompletPrompt}
          disabled={!props.value || disabled}
        >
          <View className="w-[50px] h-[50px]  rounded-full justify-center items-center">
            <SendHorizonal
              color={
                !props.value || disabled
                  ? colors.dark.DEFAULT
                  : colors.blue.DEFAULT
              }
            />
          </View>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

export default MainInput;
