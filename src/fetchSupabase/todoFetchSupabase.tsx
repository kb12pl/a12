import { supabase } from '@/src/config/initSupabase';
import {Todo} from '@/src/types/todo'

export const getTodos = async():Promise<Todo[]>  => {    
    let { data: todo } = await supabase.from('todo').select('id,title');
    return todo;     
        
        
    
/*
    const response = await fetch(`${API_URL}/todos`)    
    .catch(error => {
        console.error(error);
      });    
    const data = await (response as Response).json();    
    return data;
*/    
}
