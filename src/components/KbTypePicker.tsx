import { Text, View } from "react-native";
import { useState,ComponentProps, FunctionComponent  } from "react";
import { Picker, PickerProps } from "@react-native-picker/picker";
import { useTypesTodo } from "../query/queryTodo";
import xlog from "../xlog";

type KbTypePickerProps = {
  xxx?:string;
}


export default function KbTypePicker(props:KbTypePickerProps&PickerProps){
  const query=useTypesTodo();
  return (
    <View>
      <Picker {...props}>
        {query.isSuccess && query.data?.map( (type) => <Picker.Item label={type.name} value={type.type} key={type.type} /> )}
      </Picker>
    </View>
  );
}
