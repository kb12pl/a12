import { Drawer } from 'expo-router/drawer';
import xlog from '@/src/xlog';

export default function DrawerLayout() {  
  xlog('drawer layout');  
  return (    
      <Drawer>        
        <Drawer.Screen
          name="todo"          
          options={{
            drawerLabel: 'Todo',
            title: 'Todo List ok',
          }}
        />
        <Drawer.Screen
          name="shoping"
          options={{
            drawerLabel: 'Shoping',
            title: 'Shoping List',            
          }}     
        />
        <Drawer.Screen name="index" options={{drawerItemStyle: { display: 'none' }}} />
      </Drawer>          
  );
}