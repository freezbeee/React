import { useState } from "react";
import { TodoInterface } from "./interface/todoInterface";
import { TodoForm } from "./todoForm";
import { TodoList } from "./todoList";



export const MainTodo = () => {
 
  const [todos, setTodos] = useState<TodoInterface[]>([])

  const addTodoHandler = (todo: TodoInterface) => {
    setTodos([...todos, todo])
  }
  const deleteTodo = (todoid : number) => {
    setTodos([...todos.slice(0, todoid), ...todos.slice(todoid + 1)])
  }

  
    

  return(
    <>
      <main className="container my-3">
  <div className="p-3 bg-dark text-light">
      <TodoForm onAddTodo={addTodoHandler} />
       <TodoList todos={todos} deleteTodo={()=>deleteTodo}/>
   
      </div>
      </main>

      </>

    
  );
}