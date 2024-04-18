import { View, Text, Button } from 'react-native'
import { Link, Slot, Stack, usePathname } from 'expo-router'
import xlog from '@/src/xlog'

export default function LayoutTodo() {  
  return (
    <Stack>
      <Stack.Screen
        name="createTodo"
        options={{
          presentation: 'modal',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="[todoId]"
        options={{
          headerShown: false,
        }}
      />

    </Stack>
  )
}