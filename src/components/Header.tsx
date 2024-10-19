import React from "react";
import { Image, View, SafeAreaView } from "react-native";

import GeminiLogo from "../assets/logo.png";

const Header: React.FC = () => {
  return (
    <View className="px-4">
      <Image source={GeminiLogo} />
    </View>
  );
};

export default Header;
