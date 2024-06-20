import { Text, View } from "react-native";
import React, { useEffect } from "react";
import { Redirect, router, usePathname } from "expo-router";
import xlog from "@/src/xlog";
import { useStartTodo } from "@/src/query/queryTodo";


export default function IndexTodo() {
  //xlog("index todo", usePathname());
  const query = useStartTodo();
  useEffect(()=>{    
    if (query.isSuccess) 
      router.replace(`/todo/${query.data?.id}`);
  },[query]);  
  return <Text>Start</Text>;
}