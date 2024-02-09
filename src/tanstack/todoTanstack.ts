//import { getTodos } from "@/fetchLocal/todoFetchLocal";
import { getTodos } from "@/src/fetchSupabase/todoFetchSupabase";


//import { Todo } from "@/types/todo";


export const todoQuery={ queryKey: ['todos'], queryFn: getTodos }


/*
const mutation = useMutation({
  mutationFn: postTodo,
  onSuccess: () => {
    // Invalidate and refetch
    queryClient.invalidateQueries({ queryKey: ['todos'] })
  },
*/
