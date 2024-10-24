import { useState } from "react";
import { Dimensions, Image, Text, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import Dots from "./Dots";

 export  default function Index() {
  const width = Dimensions.get("window").width;

  const [index, setIndex] = useState(0)
  return (
    <View style={{ flex: 1 }} className="relative">
      <Carousel
        loop={false}
        width={width}
        autoPlay={false}
        data={[
            require("@/assets/images/dyson1.png"),
            require("@/assets/images/dyson2.png"),
            require("@/assets/images/dyson3.png"),
        ]}
        scrollAnimationDuration={1000}
        onSnapToItem={(index) => setIndex(index)}
        renderItem={({ index, item }) => (
            <View key={index} className="mx-5 items-center flex-row p-5">
            <Image
              className="w-full aspect-[236/272]"
              resizeMode="contain"
              source={item}
            />
          </View>
        )}
      />
      <View className=" items-center absolute bottom-0 w-full">
      <Dots count={3} active={index} />
      </View> 
    </View>
  );
}

