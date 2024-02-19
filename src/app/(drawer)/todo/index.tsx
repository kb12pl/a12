import { Text, View } from "react-native";
import React from "react";
import { Redirect, usePathname } from "expo-router";
import xlog from "@/src/xlog";
import { useGroupsTodo } from "@/src/query/queryTodo";

export default function IndexTodo() {
  xlog("index todo", usePathname());

  const query = useGroupsTodo();
  

  if (query.isSuccess && query.data) {
    const id=query.data[0].id;
    return <Redirect href={`/todo/${id}`} />;
  }

  return <Text>111</Text>;
}
