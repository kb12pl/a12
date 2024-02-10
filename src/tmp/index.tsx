import { View, Text } from 'react-native'
import React from 'react'
import { Redirect } from 'expo-router';
import xlog from '@/src/xlog';

export default function IndexTodo() {
  xlog("index todo");
  return (
     <Redirect href={'/todo/TodoList'} />    
  )
}