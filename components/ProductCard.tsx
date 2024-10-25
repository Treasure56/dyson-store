import { View, Text, Button, Pressable } from "react-native";
import React from "react";
import { useTailwind } from "nativewind";
import ColorShades from "./ColorShades";
import { Feather, Ionicons } from "@expo/vector-icons";

export default function ProductCard() {
  return (
    <View className="flex-1 bg-white rounded-tl-3xl rounded-tr-3xl mt-8 p-4">
      <Text className="mt-4 text-xl">$569.99</Text>
      <View className="flex-row items-start">
        <Text className="text-4xl font-semibold text-black">
          Dyson supertonic
        </Text>
        <Text className="text-xl font-semibold text-black">TM</Text>
      </View>

      <View className=" mt-4 flex-row items-center">
        <Text className=" text-lg text-neutral-400">Color: </Text>
        <Text className="text-lg text-black font-semibold">Blue/Copper</Text>
      </View>
      <View className=" mt-4 flex-row items-center">
        <ColorShades color1="#333333" color2="#2E345A" />
        <ColorShades color1="#333333" color2="#A26942" />
        <ColorShades color1="#2E345A" color2="#CF0072" />
        <ColorShades color1="#C9CACD" color2="#C47F50" />
      </View>
      <View className="mt-4">
        <Text className="text-lg">
          the Dyson Supertonic is a powerful, compact and quiet air purifier
          that can help you clean your home with ease and convenience.
        </Text>
      </View>
      <View className="mt-4 flex-row justify-between">
        <Text className="font-semibold text-lg">
          {"\u2022"} Supertonic hairdryer
        </Text>
        <Text className="font-semibold text-lg">
          {"\u2022"} Flyaway attachment
        </Text>
      </View>
      <View className="flex-1" />
      <View className="flex flex-row mt-4 justify-between items-center">
        <Pressable className="bg-primary rounded-xl  flex-1 mr-5 p-4 items-center justify-center flex-row">
          <Feather
            className="mr-2"
            name="shopping-bag"
            size={20}
            color="white"
          />
          <Text className="flex-row mx-2 text-white text-lg">Buy now</Text>
        </Pressable>
        <Pressable className="bg-light-300 rounded-xl w-14 aspect-square items-center justify-center">
          <Ionicons
            name="bag-check-outline"
            style={
              useTailwind({ className: "text-xl text-primary text-2xl mb-2" }) as any
            }
          />
        </Pressable>
      </View>
    </View>
  );
}
