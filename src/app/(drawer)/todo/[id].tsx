import { View, Text, Button, StyleSheet } from 'react-native'
import { useCallback, useMemo, useRef } from 'react'
import { Link, Stack, useLocalSearchParams, useRouter } from 'expo-router'
import { useQuery } from '@tanstack/react-query';
import xlog from '@/src/xlog';
import { useDeleteTodo, useTodo } from '@/src/query/queryTodo';
import BottomSheet from '@gorhom/bottom-sheet';

export default function Page() {
  xlog('in todo/[id]')
  const { id } = useLocalSearchParams<{ id: string }>();
  const { data: todo } = useTodo(id);
  const mutation = useDeleteTodo();
  const router = useRouter();
  const deleteTodo = () => {
    mutation.mutate(String(id));
    router.back();
  }
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['5%', '50%', '90%'], []);

  if (!todo)
    return null;
  return (
    <View style={styles.container} >
      <Text>123</Text>
      <Text>{todo.title}</Text>
      <Text>{todo.type}</Text>
      <Text>{todo.type}</Text>
      <Button title='delete' onPress={deleteTodo} />
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
      >
        <View style={styles.contentContainer}>
          <Text>Awesome lll </Text>
        </View>
      </BottomSheet>
    </View>

  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
