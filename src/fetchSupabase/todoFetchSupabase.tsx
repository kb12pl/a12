import { supabase } from '@/src/config/initSupabase';

export const getTodos = async() => {    
    let { data: todos } = await supabase.from('todo').select('id,title');
    return todos;     
}

export const getTodo = async(id:string)=> {    
    let { data: todos } = await supabase.from('todo').select('id,title').eq('id',id);    
    return todos && todos[0];     
}

