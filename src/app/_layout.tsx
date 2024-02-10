import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Slot } from 'expo-router'

export default function AppLayout() {
  const queryClient = new QueryClient()        
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <QueryClientProvider client={queryClient}>  
        <Slot/>
      </QueryClientProvider>
    </GestureHandlerRootView>              
  )
}