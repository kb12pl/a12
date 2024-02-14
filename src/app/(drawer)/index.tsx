import { Text } from 'react-native';
import { useRouter, useFocusEffect, Redirect } from 'expo-router';

import xlog from '@/src/xlog'
import { useQuery } from '@tanstack/react-query';
import { todoQuery, useTodo } from '@/src/query/queryTodo';

export default function DrowerIndex() {               
  return <Redirect href={'/todo/'} />
}  