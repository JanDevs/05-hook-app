import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const initialState = [
    // {
    //     id: new Date().getTime(),
    //     description: 'Recolectar la piedra del alma',
    //     done: false,
    // },
]

const init = () => {
    //Se va a regresar lo que haya en local storage, si no hay nada se regresa un arreglo vacío
    return JSON.parse( localStorage.getItem('todos') ) || [];
}

export const useTodo = () => {

     //El reducer lleva la función del reducer, el estado inicial del arreglo y los valores con los que se va a crear el objeto
    const [ todos, dispatch ] = useReducer( todoReducer, initialState, init);
    
    useEffect(()=>{
        localStorage.setItem( 'todos', JSON.stringify( todos ) );
    }, [ todos ]);

    const handleNewTodo = ( todo ) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo,
        }
        dispatch( action );
    }

    const handleDeleteTodo = ( id ) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id,
        });
    }

    const handleToggleTodo = ( id ) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id,
        });
    }

    return{
        todos,
        todosCount: todos.length,
        pendingTodosCount: todos.filter( todo => !todo.done ).length,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo
    }

}