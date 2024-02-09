//import sleep from 'sleep-promise'
import {Todo}  from '@/src/types/todo'
const API_URL = 'http://192.168.100.100:3000'



export const getTodos = async():Promise<Todo[]>  => {
    
    const response = await fetch(`${API_URL}/todos`)    
    .catch(error => {
        console.error(error);
      });    
    const data = await (response as Response).json();    
    return data;
}

export const createTodo = async (title: string) => {
    const todo = {
        title,
        done: false,
    };
    const response = await fetch(`${API_URL}/todos`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo),
    })
    .catch(error => {
        console.error(error);
      });
    
    const data = await (response as Response).json();
    
    return data;
}

export const updateTodo = async (todo: Todo) => {
    const response = await fetch(`${API_URL}/todos/${todo.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo),
    })
    .catch(error => {
        console.error(error);
      });
    
    const data = await (response as Response).json();
    
    return data;
}


export const deleteTodo = async (id:string) => {    
    const response = await fetch(`${API_URL}/todos/${id}`, {
        method: 'DELETE',            
    })
    .catch(error => {
        console.error(error);
      });      
    const data = await  (response as Response).json();    
    return id;    
}   

