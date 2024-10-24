import { View, Text, Image, ScrollView, ImageSourcePropType, Pressable } from 'react-native'
import React from 'react'
import { router } from 'expo-router';

export type CardProps = {
    image: ImageSourcePropType;
    title: string;
    decription: string;
    price: string;
}


export default function Card({image, decription, title, price}: CardProps) {
  return (
    
           <Pressable onPress={() => router.push("/product")}>
             <View className='bg-white rounded-lg p-4 mt-4 w-56 items-center mx-2'>
                <Image  resizeMode='contain' className='h-60' source={image} />
                <Text className='w-full font-semibold text-lg'>{title}</Text>
                <Text className=' w-full mt-2 text-neutral-500 text-md'>{decription}</Text>
                <Text className=' w-full mt-2 font-semibold text-lg'>{price}</Text>
            </View>
           </Pressable>

     
  )
}

