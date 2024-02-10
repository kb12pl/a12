import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { useQuery } from '@tanstack/react-query';
import xlog from '@/src/xlog';
import {useTodo } from '@/src/tanstack/tanstackTodo';

export default function Page() {  
  const {id}=useLocalSearchParams();  
  const query=useTodo(id);  
  const todo=query.data;
  if(!todo)
    return null;
  return (
    <View>
      <Text>{todo.title}</Text>
    </View>
  )
}