import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router';

export default function UserId() {
  const {user}=useLocalSearchParams();
  const {id}=useLocalSearchParams();
  return (
    <View>
      <Text>UserId  {user}   /// {id}  ??</Text>
    </View>
  )
}