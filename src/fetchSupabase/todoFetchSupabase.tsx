import { supabase } from '@/src/config/initSupabase';
import { Todo } from '@/src/types/todo';
import xlog from '../xlog';


function isError(fun:string, ret:any) {
    if (!ret) {
        xlog(fun,'return from supabase is null');
        return 1;
    }
    if (!ret.error)
        return;
    xlog(fun,'- - > >',ret.error.message);
    return 1;
}

export const getTodos = async () => {
    let { data: todos } = await supabase.from('todo').select('id,title');
    return todos;
}

export const getTodo = async (id: string) => {
    let { data: todos } = await supabase.from('todo').select('id,title').eq('id', id);
    return todos && todos[0];
}

export const createTodo = async (data: Todo) => {    
    xlog('start', 'create Todo');
    const { user } = useAuth();
    const ret = await supabase.from('todo').insert([{ title: data.title }])
    if (isError('createTdo',ret))
        return 1;
    xlog('end', 'create Todo');
    return 0;
}








