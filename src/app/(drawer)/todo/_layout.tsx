import { View, Text } from 'react-native'
import { Slot, Stack } from 'expo-router'
import xlog from '@/src/xlog'

export default function LayoutTodo() {
  xlog('layout todo');
  return (
    <Stack>
      <Stack.Screen
        name='todolist'
        options={{
          headerShown: false,
        }} />
      <Stack.Screen
        name="add"
        options={{
          // Set the presentation mode to modal for our modal route.
          presentation: 'modal',
        }}
      />
    </Stack>
  )
}