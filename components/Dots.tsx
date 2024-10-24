import { View, Text } from 'react-native'
import React from 'react'

export type DotsProps = {
    active: number,
    count: number
}
export default function Dots({active, count}: DotsProps) {
  return (
    <View className='flex-row bg-light-300 rounded-[35px] items-center justify-center p-2'>
        {
            Array(count).fill(0).map((_, index) => (
                <View key={index} className={`w-2 h-2 rounded-full ${index === active ? 'bg-black' : 'bg-neutral-400'} mx-1`}/>
            ))
        }
      
    </View>
  )
}