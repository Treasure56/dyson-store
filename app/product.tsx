import { View, Text, Image } from "react-native";
import React from "react";
import { Feather, FontAwesome, Octicons } from "@expo/vector-icons";
import { useTailwind } from "nativewind";
import { router } from "expo-router";
import ProductCard from "@/components/ProductCard";
import Index from "@/components/Carousel";

export default function Product() {
  return (
    <View className="flex-1 bg-light">
      <View className="flex-row justify-between items-center mt-16 mx-5 pb-2">
        <Octicons
          onPress={() => router.back()}
          name="chevron-left"
          style={
            useTailwind({ className: "text-2xl text-primary font-bold" }) as any
          }
        />
        <View className="flex-row items-center ">
          <Feather
            name="upload"
            style={
              useTailwind({
                className: "text-2xl text-primary mx-4 font-bold",
              }) as any
            }
          />
          <FontAwesome
            name="heart-o"
            style={
              useTailwind({
                className: "text-2xl text-primary font-bold",
              }) as any
            }
          />
        </View>
      </View>

      <Index />
      <ProductCard />
    </View>
  );
}
