import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { EvilIcons } from '@expo/vector-icons'
import { useTailwind } from 'nativewind'

export default function Search() {
    
    
  return (
    <View className=' pt-6 relative'>
       <TextInput className='w-full h-12 p-4 pl-10 rounded-[15px]  border border-neutral-400' placeholder='search products and parts' />
       <EvilIcons style={useTailwind({className: 'absolute left-3 top-9 text-lg text-black'}) as any} name="search"  />
    </View>
  )
}
