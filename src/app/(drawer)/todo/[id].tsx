import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

export default function Page() {
  const {id}=useLocalSearchParams();
  return (
    <View>
      <Text>todo {id} </Text>
    </View>
  )
}