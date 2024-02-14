import { View, Text, Button } from 'react-native'
import React from 'react'
import { Link, Stack, useLocalSearchParams, useRouter } from 'expo-router'
import { useQuery } from '@tanstack/react-query';
import xlog from '@/src/xlog';
import { useDeleteTodo, useTodo } from '@/src/query/queryTodo';

export default function Page() {
  xlog('in todo/[id]')
  const { id } = useLocalSearchParams<{id:string}>();
  const query =useTodo(id);
  const todo = query.data;
  const mutation=useDeleteTodo();
  const router=useRouter();
  const deleteTodo=()=>{
    mutation.mutate(String(id));
    router.back();
  }

  if (!todo)
    return null;
  return (
      <View>
        <Text>{todo.title}</Text>
        <Button title='delete' onPress={deleteTodo}/>
     </View>    

  )
}