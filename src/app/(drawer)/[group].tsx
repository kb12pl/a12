import { View, Text } from 'react-native'
import React from 'react'
import { usePathname } from 'expo-router';
import xlog from '@/src/xlog';

export default function Group() {  
  const g=usePathname();

  return (
    <View>
      <Text>Group {g}</Text>
    </View>
  )
}