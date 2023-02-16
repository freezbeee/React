import { useState } from "react"
import { TodoInterface } from "./interface/todoInterface"

interface Props {
    deleteTodo: (todo: TodoInterface) => void
    todos: TodoInterface[]
  }


export const TodoList = (props : Props) => {
    

    


    return(
        <>
           <div>
      {props.todos.length > 0 ? <div>
        {props.todos.map((todo,i) => (
          <div key={i} >
          
          <p>{todo.title}</p>
          <p>{todo.description}</p>
          <p>{todo.date}</p>
          <button className="btn btn-outline-danger" onClick={()=>props.deleteTodo(i)}>Delete</button>
          </div>
        ))}
      </div> :<h2>Ajouter une todo</h2> }
      </div></>

    )
}