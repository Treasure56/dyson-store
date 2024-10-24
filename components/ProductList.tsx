import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Card, { CardProps } from './Card'

export type ProductListProps = {
    title: string
    items: CardProps[]
}

export default function ProductList({items, title}: ProductListProps) {
  return (
    <View className='mt-8 mx-5'>
    <Text className='text-xl font-semibold'>{title}</Text>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
       {
        items.map((item, index) => (
            <Card key={index} {...item} />
        ))
       }
</ScrollView>
  </View>
  )
}


