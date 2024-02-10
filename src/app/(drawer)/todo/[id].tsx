import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { useQuery } from '@tanstack/react-query';
import xlog from '@/src/xlog';
import { todoQuery } from '@/src/tanstack/todoTanstack';

export default function Page() {
  const {id}=useLocalSearchParams();
  const idx=Number(id);
  const query=useQuery(todoQuery);  
  if(!query.data) 
    return null;
  
    const todo=query.data[idx];  

  return (
    <View>
      <Text>{todo.title}</Text>
    </View>
  )
}