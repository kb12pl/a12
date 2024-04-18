import { Alert, Button, FlatList, Modal, Pressable, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TextInputBase, View } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { useAddTodo, useListTodo } from "@/src/query/queryTodo";
import { Link, useRouter } from "expo-router";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import BottomSheet from '@gorhom/bottom-sheet';
import xlog from "../xlog";
import KbText from "./KbText";
import { KbAddTodo } from "./KbAddTodo";
import KbBar from "./KbBar";




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
    <SafeAreaView style={{ flex: 1 }}>
    <View style={{ flex: 1 }}>
      <KbBar show={show} />
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
    <StatusBar  />
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: theme.colors.background
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  text: {
    //color: theme.colors.typography
    //color: 'red',
    fontSize: 30,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
