import { Button, StyleSheet, Text, View } from "react-native";
import { useId, useMemo, useRef, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import xlog from "@/src/xlog";
import { useDeleteTodo, useSaveTodo, useTodo } from "@/src/query/queryTodo";
import KbTypePicker from "@/src/components/KbTypePicker";
import { Todo } from "@/src/types/todo";
import KbListTodo from "@/src/components/KbListTodo";

export default function Page() {
  const { idTodo } = useLocalSearchParams<{ idTodo: string }>();
  const query = useTodo(idTodo);
  const deleteMutation = useDeleteTodo();
  const saveMutation = useSaveTodo();
  const router = useRouter();
  let initType = useRef("");

  let todo = useMemo(() => {
    return {} as Todo;
  }, []);
  const [disablaSave, setDisableSeve] = useState(true);

  const deleteTodo = () => {
    deleteMutation.mutate(String(idTodo));
    router.back();
  };

  const saveTodo = () => {
    saveMutation.mutate(todo);
    xlog(todo);
  };

  
  xlog('before',initType.current)
  if (query.isSuccess && query.data) {
    todo = query.data;
    initType.current = todo.type;
  } else {
    return;
  }

  xlog('render',initType.current)
  
  if (initType.current == "list") {
    xlog(123, todo.type);
    return <KbListTodo />;
  }

  return (
    <View style={styles.container}>
      <Text>123</Text>
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
