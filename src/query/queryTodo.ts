//import { getTodos } from "@/fetchLocal/todoFetchLocal";
import { getTodos,getTodo, createTodo, deleteTodo, getTypesTodo, saveTodo, getListsTodo, getStartTodo } from "@/src/apiSupabase/apiSupabaseTodo";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import xlog from "../xlog";
import { Todo } from "@/src/types/todo";
import { useAuth } from "@/src/provider/AuthProvider";



export const todoQuery={ queryKey: ['todos'], queryFn: getTodos }


export function useListTodo(id:string){  
  return useQuery({
    queryKey:['list',{id}],
    queryFn:()=>getListsTodo(id),
    staleTime: 15 * 1000,
  })
}



export function useTypesTodo(){
  return useQuery({
    queryKey:['types'],
    queryFn:getTypesTodo,
    staleTime: Infinity
    
  })
}


export function useTodo(id:string){  
  return useQuery({
    queryKey:['todo',{id}],
    queryFn:()=>getTodo(id),
    staleTime: 15 * 1000,
  })
}




export function useStartTodo(){
  return useQuery({ 
    queryKey: ['start'], 
    queryFn: getStartTodo 
})  
}    


export function useCreateTodo() {  
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Todo) => {      
      return createTodo(data)
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

export function useSaveTodo()
{
  const queryClient=useQueryClient();
  return useMutation({
    mutationFn:(todo:Todo)=>{
      return saveTodo(todo);
    },
    onSettled: async (_, error) => {
      //console.log("settled");
      if (error) {
        console.log(error);
        xlog('useSaveTodo',error);
      } else {
        await queryClient.invalidateQueries({ queryKey: ["todos"] });
      }
    },    
  });
}

export function useDeleteTodo()
{
  const queryClient=useQueryClient();
  return useMutation({
    mutationFn:(id:string)=>{
      return deleteTodo(id);
    },
    onSettled: async (_, error) => {
      //console.log("settled");
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


