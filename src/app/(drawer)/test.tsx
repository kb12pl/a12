import { View, Text } from 'react-native'
import React from 'react'
import xlog from '@/src/xlog';
import { useQuery } from '@tanstack/react-query';

export default function Test() { 

  const {id}={id:1};//useLocalSearchParams();
  
  const x=useQuery({queryKey: ['todos',2]});  
  xlog(x);
  
  
  //xlog(new Date().toISOString());  
  return (
    <View>
      <Text>Test</Text>
    </View>
  )
}