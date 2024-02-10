//import { getTodos } from "@/fetchLocal/todoFetchLocal";
import { getTodos,getTodo } from "@/src/fetchSupabase/todoFetchSupabase";
import { useQuery } from "@tanstack/react-query";
import xlog from "../xlog";


//import { Todo } from "@/types/todo";


export const todoQuery={ queryKey: ['todos'], queryFn: getTodos }

export function useTodo(id:string|string[]){
  xlog('todo',{id});
  return useQuery({
    queryKey:['todo',{id}],
    queryFn:()=>getTodo(id),
    staleTime: 15 * 1000,
  })
}


/*
const mutation = useMutation({
  mutationFn: postTodo,
  onSuccess: () => {
    // Invalidate and refetch
    queryClient.invalidateQueries({ queryKey: ['todos'] })
  },
*/


