import { Button, StyleSheet, Text, View } from "react-native";
import { useCallback, useContext, useEffect, useId, useMemo, useRef, useState } from "react";
import { useFocusEffect, useLocalSearchParams, usePathname, useRouter } from "expo-router";
import { useDeleteTodo, useSaveTodo, useTodo } from "@/src/query/queryTodo";
import { Todo } from "@/src/types/todo";

import KbListTodo from "@/src/components/KbListTodo";
import KbMenuContext from "@/src/components/KbMenuContext";
import xlog from "@/src/xlog";
import KbTypePicker from "@/src/components/KbTypePicker";



export default function Page() {
  const path=usePathname();
  const { todoId } = useLocalSearchParams<{ todoId: string }>();  

  const query = useTodo(todoId);
  const deleteMutation = useDeleteTodo();
  const saveMutation = useSaveTodo();
  const router = useRouter();
  
  let todo = useMemo(() => {
    return {} as Todo;
  }, []);
  
  const [disablaSave, setDisableSeve] = useState(true);

  

 

  const deleteTodo = () => {
    deleteMutation.mutate(String(todoId));
    router.back();
  };

  const saveTodo = () => {
    saveMutation.mutate(todo);
    xlog(todo);
  };

  
  
  if (!(query.isSuccess && query.data))
    return;
  
  if (query.data.type == "list") {
    return <KbListTodo id={todoId} />;
  }  
  

  return (
    <View style={styles.container}>
      
      <Text>{todo.title}</Text>
      <KbTypePicker
        selectedValue={todo.type || "simple"}
        onValueChange={(itemValue, itemIndex) => {
          xlog(String(itemValue));
          todo.type = String(itemValue);          
          setDisableSeve(!disablaSave);
        }}
      />
      <Button title="save" disabled={disablaSave} key={1} onPress={saveTodo} />

      <Button title="delete" key={2} onPress={deleteTodo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "grey",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});
