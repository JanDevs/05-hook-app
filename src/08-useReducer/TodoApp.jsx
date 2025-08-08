import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd";
import { useTodo } from "../hooks/useTodo";


const TodoApp = () => {

    const { todos, todosCount, pendingTodosCount, handleNewTodo, handleDeleteTodo, handleToggleTodo } = useTodo();

    return (
    <>
        <h1>TodoApp: { todosCount } <small>pendientes: { pendingTodosCount }</small> </h1>
        <hr />

        <div className="row">
            <div className="col-7">
                {/* TODOLIST */}
                <TodoList todos={ todos } onDeleteTodo={ handleDeleteTodo } onToggleTodo={ handleToggleTodo } />
                {/* Fin TodoList */}
            </div>
            
            <div className="col-5">

                <h4>Agregar TODO</h4>
                <hr />
                {/* TodoAdd onNewTodo( todo ) */}
                <TodoAdd onNewTodo={ handleNewTodo } />
                {/* Fin TodoAdd */}
            </div>
        </div>
        
    </>
  )

}
export default TodoApp
