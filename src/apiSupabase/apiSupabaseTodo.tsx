import { supabase } from '@/src/config/initSupabase';
import { Todo } from '@/src/types/todo';
import xlog from '@/src/xlog';
import { useAuth } from '../provider/AuthProvider';


function isError(fun:string, ret:any) {
    if (!ret) {
        xlog(fun,'return from supabase is null');
        return 1;
    }
    if (!ret.error)
        return;
    xlog('ERROR supabase',fun,'- - > >',ret.error.message);
    return 1;
}

export const getTodos = async () => {
    let ret = await supabase.from('todo').select('id,title');
    if (isError('getTodos',ret))
        return null;
    return ret.data;
}

export const getTodo = async (id: string) => {
    let ret = await supabase.from('todo').select('id,title,type').eq('id', id);
    if (isError('getTodos',ret))
        return null;    
    return ret.data![0];    
}

export const createTodo = async (data: Todo) => {            
    xlog('start', 'create Todo');    
    const ret = await supabase.from('todo').insert([{ title: data.title }])
    if (isError('createTdo',ret))
        return 1;
    xlog('end', 'create Todo');
    return 0;
}


export const deleteTodo = async (id:string) => {            
    xlog('start', 'delete  Todo',id);    
    const ret = await supabase.from('todo').delete().eq('id',id)
    
    if (isError('deleteTodo',ret))
        return 1;
    xlog('end', 'deleteTodo');
    return 0;
}






