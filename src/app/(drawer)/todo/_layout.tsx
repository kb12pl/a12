import { View, Text, Button } from 'react-native'
import { Link, Slot, Stack, usePathname } from 'expo-router'
import xlog from '@/src/xlog'

export default function LayoutTodo() {
  xlog(usePathname());
  return (
    <Stack>
      <Stack.Screen
        name='listTodo'
        options={{
          headerShown: false,
        }} />
      <Stack.Screen
        name="createTodo"
        options={{          
          presentation: 'modal',
          headerShown: false,
        }}
      />
    <Stack.Screen
      name="[idTodo]"
      options={{
        presentation: 'modal',
        headerShown: false,
      }}
    />

    </Stack>
  )
}