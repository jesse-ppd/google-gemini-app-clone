import { SafeAreaView, View } from "react-native";

import Header from "./src/components/Header";
import Suggestions from "./src/components/Suggestions";
import MainInput from "./src/components/MainInput";
import Result from "./src/components/Result";
import { useCallback, useState } from "react";

import { geminiModel } from "./src/services/geminiModel";

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [textValue, setTextValue] = useState("");
  const [promptResult, setPromptResult] = useState("");

  const handlePrompt = useCallback(async () => {
    try {
      setIsLoading(true);
      if (textValue) {
        const result = await geminiModel.generateContent(textValue);

        const response = result.response;
        const text = response.text();
        if (text) {
          setTextValue("");
        }
        setPromptResult(text);
      }
    } catch (error) {
      alert(error);
    } finally {
      setIsLoading(false);
    }
  }, [textValue]);

  return (
    <View className="flex-1 bg-white">
      <SafeAreaView className="flex-1 bg-white">
        <Header />
        <Suggestions />
        <Result data={promptResult} />
        <MainInput
          isLoading={false}
          value={textValue}
          onChangeText={(value) => setTextValue(value)}
          onComplete={handlePrompt}
        />
      </SafeAreaView>
    </View>
  );
}
