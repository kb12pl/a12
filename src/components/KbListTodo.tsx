import { Button, FlatList, Pressable, StyleSheet, Text, TextInput, TextInputBase, View } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { useAddTodo, useListTodo } from "@/src/query/queryTodo";
import { Link, useRouter } from "expo-router";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import BottomSheet from '@gorhom/bottom-sheet';
import xlog from "../xlog";
import KbText from "./KbText";
import { KbAddTodo } from "./KbAddTodo";


const Bar = function (props) {
  const [plus, setPlus] = useState(true);
  const plusOnPress = () => {
    props.show(plus)
    setPlus(!plus);
  }
  return (
    <View style={{ flexDirection: "row", margin: 10 }}>
      <Button title="menu" />
      <TextInput style={{ flex: 1 }} />
      <Button title={plus ? "+++" : "xxx"} onPress={plusOnPress} />
    </View>
  )
}

export default function KbListTodo(props) {
  const todoId=props.id
  const query = useListTodo(props.id);
  const router = useRouter();

  const snapPoints = useMemo(() => ['10%', '50%', '75%'], []);

  const bottomSheetRef = useRef<BottomSheet>(null);
  const show = (state: boolean) => state ? bottomSheetRef.current?.expand() : bottomSheetRef.current?.close();

  const onRefresh=()=>{
    query.refetch();
  } 
 
  const Item = function ({ item }: { item: any }) {
    return (
      <Link push href={`/todo/${item.id}`} asChild>
        <Pressable>
          <Text style={styles.text}>{item.title}</Text>
        </Pressable>
      </Link>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <Bar show={show} />
      <FlatList data={query.data} renderItem={Item} refreshing={false} onRefresh={onRefresh}/>
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
      //enablePanDownToClose={true}
      >
        <KbAddTodo parent={todoId} show={show} />
      </BottomSheet>
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
