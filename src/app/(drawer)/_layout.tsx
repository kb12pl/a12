import { Drawer } from "expo-router/drawer";
import {useState} from "react";
import xlog, { ok } from "@/src/xlog";
import { Button, View } from "react-native";
import { useRouter } from "expo-router";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { useStartTodo } from "@/src/query/queryTodo";
import KbMenuContext from "@/src/components/KbMenuContext";
import { KbMenuProp } from "@/src/types/KbMenuProp";


function CustomDrawerContent(props: DrawerContentComponentProps) {
  const query = useStartTodo();
  const router = useRouter();
  return (
    <DrawerContentScrollView {...props}>
      {/* <DrawerItemList {...props} /> */}
      {query.isSuccess? <DrawerItem
              label="Start"
              key={query.data?.id}
              onPress={() => router.navigate(`/(drawer)/todo/${query.data?.id}`)}
            />: null}
    </DrawerContentScrollView>
  );
}



export default function DrawerLayout() {
  const router = useRouter();
  const [menuProp,setMenuProp]=useState<KbMenuProp>();

  
  return (
    <KbMenuContext.Provider  value={{menuProp,setMenuProp}}>
    <Drawer drawerContent={CustomDrawerContent} >
      <Drawer.Screen
        name="todo"
        options={{ 
          //drawerItemStyle: { display: "none" } ,
          title:menuProp?.title,
          drawerLabel:'Start',
          headerRight:()=>router.canGoBack()?<Button title="<<<" onPress={()=>router.back()} />:null
        }}
      />
    </Drawer>
    </KbMenuContext.Provider>
  );
}
