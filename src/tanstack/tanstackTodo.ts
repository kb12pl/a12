//import { getTodos } from "@/fetchLocal/todoFetchLocal";
import { getTodos,getTodo, createTodo } from "@/src/fetchSupabase/todoFetchSupabase";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import xlog from "../xlog";
import { Todo } from "@/src/types/todo";


export const todoQuery={ queryKey: ['todos'], queryFn: getTodos }

export function useTodo(id:string|string[]){
  xlog('todo',{id});
  return useQuery({
    queryKey:['todo',{id}],
    queryFn:()=>getTodo(id),
    staleTime: 15 * 1000,
  })
}

export function useCreateTodo() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Todo) => createTodo(data),
    onMutate: () => {
      console.log("mutate");
    },

    onError: () => {
      console.log("error");
    },

    onSuccess: () => {
      console.log("success");
    },

    onSettled: async (_, error) => {
      console.log("settled");
      if (error) {
        console.log(error);
      } else {
        await queryClient.invalidateQueries({ queryKey: ["todos"] });
      }
    },
  });
}


/*


const mutation = useMutation({
  mutationFn: postTodo,
  onSuccess: () => {
    // Invalidate and refetch
    queryClient.invalidateQueries({ queryKey: ['todos'] })
  },
*/


