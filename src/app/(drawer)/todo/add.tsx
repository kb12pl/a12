import { createTodo } from '@/src/fetchLocal/todoFetchLocal';
import { useCreateTodo } from '@/src/tanstack/tanstackTodo';
import { ok } from '@/src/xlog';
import React from 'react';
import {Button, SafeAreaView, StyleSheet, TextInput} from 'react-native';


export default function TextInputExample(){
  const [text, onChangeText] = React.useState('Useless Text');  
  const add=useCreateTodo()


  const save=()=>{    
    
    add.mutate({title:text})
    
  }
  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <Button title='save' onPress={save}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

