import { Drawer } from 'expo-router/drawer';
import xlog,{ ok } from '@/src/xlog';
import { Button } from 'react-native';
import { LinearTransition } from 'react-native-reanimated';
import { Link, Slot } from 'expo-router';

export default function DrawerLayout() {  
  return (
    <Drawer>
      <Drawer.Screen
        name="todo"
        options={{
          drawerLabel: 'Todo',
          title: 'Todo List ok',
          headerRight: () => (
            <Link href="/todo/add" asChild>
            <Button title="+"/>
            </Link>
          ),
        }}
      />
      <Drawer.Screen
        name="shoping"
        options={{
          drawerLabel: 'Shoping',
          title: 'Shoping List',
        }}
      />
      <Drawer.Screen name="index" options={{ drawerItemStyle: { display: 'none' } }} />      
    </Drawer>
  );
}

