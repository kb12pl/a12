import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { useQuery } from "@tanstack/react-query";
import {  useListTodo } from "@/src/query/queryTodo";
import { Link, useRouter } from "expo-router";

export default function KbListTodo(props) {
  const query = useListTodo(props.id);
  const router = useRouter();

  const Item = function ({ item }: { item: any }) {
    return (
      <Link href={`/todo/${item.id}`} asChild>
        <Pressable>
          <Text style={styles.text}>{item.title}</Text>
        </Pressable>
      </Link>
    );
  };
  return (
    <View>
      <FlatList data={query.data} renderItem={Item} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: theme.colors.background
  },
  text: {
    //color: theme.colors.typography
    //color: 'red',
    fontSize: 30,
  },
});
