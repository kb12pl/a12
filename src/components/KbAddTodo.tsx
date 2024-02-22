import { useState } from "react";
import { View, TextInput, Button } from "react-native";
import { useAddTodo } from "../query/queryTodo";
import KbText from "./KbText";

export function KbAddTodo(props) {
  const query = useAddTodo()
  const [title, setTitle] = useState('');

  const save = () => {
    query.mutate({ id: 0, title: title, type: 'list', parent: props.parent })
    props.show(false);
  }

  return (
    <View>
      <KbText text={props.parent} />
      <TextInput style={{ margin: 10, backgroundColor: "#ffb" }} onChangeText={setTitle} />
      <View>
        <Button title="Save" onPress={save}  />
      </View>
    </View>


  )
}



