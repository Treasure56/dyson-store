import { View, Text, TextInput, Pressable } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

type LoginProps = {
    icon?: string
}

export default function Login({icon}: LoginProps) {
  return (
    <View className='flex-1 bg-light'>
     <View className='flex-row justify-center items-center mt-48  mx-5 pb-2'>
     <Text className='text-4xl font-bold'>Dyson</Text>
     </View>

     <View className='mt-8 mx-5'>
       {
         formValues.map((formValue, index) => (
          <View className=''>
            <Text className='text-xl font-semibold mb-2'>{formValue.title}</Text>
             <TextInput
           key={index}
           className='w-full h-12 p-4 rounded-[15px]  border border-neutral-400 mb-6'
           placeholder={formValue.placeholder}
           />
          </View>
         ))
       }

     </View>
     <Pressable className='bg-primary  h-12 rounded-[15px] flex-row justify-center items-center mx-5' onPress={() => router.push("/")}><Text className='text-white text-md'>Login</Text></Pressable>
    </View>
  )
}

const formValues = [ 
    {   name: "email",
        title: "Email",
        placeholder: "Enter email",
    },
    {   name: "password",
        title: "Password",
        placeholder: "Enter password",
    },
]