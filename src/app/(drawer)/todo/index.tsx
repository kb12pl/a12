import { View, Text } from 'react-native'
import React from 'react'
import { Redirect, usePathname } from 'expo-router';
import xlog from '@/src/xlog';

export default function IndexTodo() {
  xlog(usePathname());
  return (
     <Redirect href={'/(drawer)/todo/listTodo'} />              
  )
}