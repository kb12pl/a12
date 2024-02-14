import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Slot, useRouter, useSegments } from 'expo-router'
import { AuthProvider, useAuth } from '@/src/provider/AuthProvider';
import { useEffect } from 'react';
import xlog from '../xlog';



const InitialLayout = () => {
  const { session, initialized } = useAuth();
  const segments = useSegments();
  const router = useRouter();


  useEffect(() => {
    //xlog('useefect');
    if (!initialized) return;
    // Check if the path/url is in the (auth) group
    const inAuthGroup = segments[0] === '(drawer)';

    if (session && !inAuthGroup) {
      xlog('Redirect TO START');
      router.replace('/(drawer)/todo/');
    } else if (!session) {
      xlog('Redirect unauthenticated users to the login page');
      router.replace('/');
    }
  }, [session, initialized]);

  return <Slot />;
};


export default function AppLayout() {
  const queryClient = new QueryClient()
  return (
    <AuthProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <QueryClientProvider client={queryClient}>
          <InitialLayout />
        </QueryClientProvider>
      </GestureHandlerRootView>
    </AuthProvider>
  )
}