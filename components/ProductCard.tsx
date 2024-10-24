import { View, Text } from "react-native";
import React from "react";

export default function ProductCard() {
  return (
    <View className="flex-1 bg-white rounded-t-xl mt-8 p-4">
      <Text className="mt-4 text-xl">$569.99</Text>
      <View className="flex-row items-start">
        <Text className="text-4xl font-semibold text-black">
          Dyson supertonic
        </Text>
        <Text className="text-xl font-semibold text-black">TM</Text>
      </View>
    </View>
  );
}
