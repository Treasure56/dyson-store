import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import index from '@/app'
import { useTailwind } from 'nativewind'

export default function Tabs() {
  return (
    <ScrollView horizontal className='mx-5 mt-8'
    showsHorizontalScrollIndicator={false}
    >
        {
            scrollContents.map((scrollContent,index) =>
                <View key={index} className='flex-row mx-1 items-center  bg-light-300 rounded-[15px] p-4'>
        <MaterialCommunityIcons name={scrollContent.icon as any} style={useTailwind({className: ' text-lg text-primary'}) as any} />
        <Text className='ml-2'>{scrollContent.name}</Text>
        </View>
            )
        }
    </ScrollView>
  )
}


const scrollContents =[
    {
        icon:"vacuum-outline",
        name:"Vacuum Cleanser"
    },
    {
        icon:"air-purifier",
        name:"Air Purifier"
    },
    {
        icon:"basket-plus-outline",
        name:"Air Conditioner"
    }
]