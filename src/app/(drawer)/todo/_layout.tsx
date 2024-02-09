import { View, Text } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'
import xlog from '@/src/xlog'

export default function LayoutTodo() {
  xlog('leyout todo');
  return (        
      <Stack>
        <Stack.Screen 
        name='TodoList'
        options={{
          headerShown:false,
        }} />
        
      </Stack>    
  )
}