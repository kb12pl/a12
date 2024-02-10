import { Text } from 'react-native';
import { useRouter, useFocusEffect, Redirect } from 'expo-router';

import xlog from '@/src/xlog'
import { useQuery } from '@tanstack/react-query';
import { todoQuery } from '@/src/tanstack/todoTanstack';

export default function DrowerIndex() {          
  xlog(222,22);    
  
  return <Redirect href={'/todo/TodoList'} />
}  