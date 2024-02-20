import { Drawer } from "expo-router/drawer";
import {createContext, useContext, useReducer, useRef, useState} from "react";
import xlog, { ok } from "@/src/xlog";
import { Button, View } from "react-native";
import { LinearTransition } from "react-native-reanimated";
import { Link, Slot, useRouter } from "expo-router";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Text } from "react-native";
import { useGroupsTodo } from "@/src/query/queryTodo";
import { Todo } from "@/src/types/todo";
import KbMenuContext from "@/src/components/KbMenuContext";
import { KbMenuProp } from "@/src/types/KbMenuProp";


function CustomDrawerContent(props: DrawerContentComponentProps) {
  const router = useRouter();
  const query = useGroupsTodo();
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      {query.isSuccess
        ? query.data?.map((todo) => {
          return (
            <DrawerItem
              label={todo.title}
              key={todo.id}
              onPress={() => router.navigate(`/(drawer)/todo/${todo.id}`)}
            />
          );
        })
        : null}
    </DrawerContentScrollView>
  );
}



export default function DrawerLayout() {
  const router = useRouter();
  const [menuProp,setMenuProp]=useState<KbMenuProp>();

  //drawerContent={CustomDrawerContent}
  return (
    <KbMenuContext.Provider  value={{menuProp,setMenuProp}}>
    <Drawer >
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
