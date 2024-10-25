import { View, Text } from 'react-native'
import React from 'react'
import { useTailwind } from 'nativewind'

type ColorShadesProps = {
    color1: string
    color2: string
}

export default function ColorShades({color1, color2}: ColorShadesProps) {
  return (
    <View className='w-8 h-8 mr-2 flex-row overflow-hidden rounded-full focus:outline-2'>
          <View className="flex-1" style={{backgroundColor: color1}}></View>
          <View className=" flex-1" style={{backgroundColor: color2}}></View>
        </View>
  )
}