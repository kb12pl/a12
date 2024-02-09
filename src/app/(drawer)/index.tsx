import { View, Text } from 'react-native'
import React from 'react'
import { Redirect, Slot } from 'expo-router'
import xlog from '@/src/xlog'

export default function DrowerIndex() {  
  xlog('idenex drawer');
  return (      
    <Redirect href={'/todo/TodoList'}/>    
   )
  }  