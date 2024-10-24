import { View, Text, ScrollView, SafeAreaView, TextInput } from "react-native";
import React from "react";
import { Feather, Ionicons } from "@expo/vector-icons";
import Search from "@/components/Search";
import { StatusBar } from "expo-status-bar";
import Tabs from "@/components/Tabs";
import { useTailwind } from "nativewind";
import ProductList from "@/components/ProductList";
import { productDummy } from "@/utils/dummy";

export default function index() {
  return (
    <SafeAreaView className="flex-1 bg-light">
      <StatusBar style="dark" />
        <View className="flex-row justify-between mt-16 mx-5 pb-2">
          <Feather name="grid" style={useTailwind({className: 'text-3xl text-primary'}) as any} />
          <Text className="text-4xl font-bold">dyson</Text>
          <Ionicons name="notifications-outline" style={useTailwind({className: 'text-3xl text-primary'}) as any} />
        </View>
      <ScrollView className=" flex-1">
        <View className="mt-4 mx-5">
         <Search />
        </View>
        <View className="mt-8 mx-5">
          <Text className="text-4xl font-semibold">
            Dyson: Engeneered {"\n"} for Excellence!
          </Text>
        </View>
        <Tabs/>
        <ProductList
        title="Dyson Deals"
        items={productDummy}
        />
        <ProductList
        title="Dyson Renewed"
        items={[...productDummy].reverse()}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
