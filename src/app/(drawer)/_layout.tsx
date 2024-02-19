import { Drawer } from "expo-router/drawer";
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
              onPress={() => router.push(`/(drawer)/todo/${todo.id}`)}
            />
          );
        })
        : null}
    </DrawerContentScrollView>
  );
}

export default function DrawerLayout() {
  const router = useRouter();
  return (
    <Drawer drawerContent={CustomDrawerContent}>
      <Drawer.Screen
        name="todo"
        options={{ 
          drawerItemStyle: { display: "none" } ,
          title: 'User',
          drawerLabel:''
        }}
      />
    </Drawer>
  );
}
