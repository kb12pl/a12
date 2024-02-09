import { View, Text } from 'react-native'
import React from 'react'
import xlog from '@/src/xlog';

export default function Test() {
  xlog('test page');
  return (
    <View>
      <Text>Test</Text>
    </View>
  )
}