import { View, Text, Button,StyleSheet, Pressable } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { todoQuery } from '@/src/tanstack/todoTanstack';
import { useQuery  } from '@tanstack/react-query';
import { Link } from 'expo-router';
import xlog from '@/src/xlog';

export default function TodoList() {     
  const query =useQuery(todoQuery)       
  
  const Item = function ({item}: {item: any}) {  
    return (
    <Link href={`/todo/${item.id}`} asChild>
    <Pressable>
      <Text style={styles.text}>{item.title}</Text>      
    </Pressable>
    </Link>
    )
  }  

  return (    
    <View>      
      <FlatList data={query.data} renderItem={Item} />   
    </View>
  )
} 

const styles = StyleSheet.create({
  container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
    // backgroundColor: theme.colors.background
  },
  text: {
     //color: theme.colors.typography
     color: 'red',
     fontSize:30
  }
})
