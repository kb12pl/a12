import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Slot } from 'expo-router';
import xlog from '@/src/xlog';


export default function DrawerLayout() {
  xlog('drawer layoyt');
  const queryClient = new QueryClient()      
  return (    
    <GestureHandlerRootView style={{ flex: 1 }}>
      <QueryClientProvider client={queryClient}>
      <Drawer>
        
        <Drawer.Screen
          name="todo"
          options={{
            drawerLabel: 'Todo',
            title: 'Todo List ok',

            //headerTitle:'ewr',
            //headerShown:false,
          }}
        />
   <Drawer.Screen
          name="shoping"
          options={{
            drawerLabel: 'Shoping',
            title: 'Shoping List',
            headerTitle:'header',
          }}
     
        />
      
      </Drawer>    
      </QueryClientProvider>
    </GestureHandlerRootView>              
  );
}


//<Drawer.Screen name="index" options={{drawerItemStyle: { display: 'none' }}} />


/*


        */