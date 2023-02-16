// import { log } from "console"
import { FormEvent, MutableRefObject, useRef } from "react"
import { TodoInterface } from "./interface/todoInterface"

interface Props {
    onAddTodo: (todo: TodoInterface) => void
  }


export const TodoForm = (props : Props) => {

    const titleRef = useRef() as MutableRefObject<HTMLInputElement> 
    const descriptionRef = useRef() as MutableRefObject<HTMLTextAreaElement> 
    const dateRef = useRef() as MutableRefObject<HTMLInputElement> 


    const submitFormHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    
        const newtodo: TodoInterface = {
            
            title: titleRef.current.value,
            description: descriptionRef.current.value,
            date: dateRef.current.value
        }
    
        props.onAddTodo(newtodo)
        console.log(newtodo)
      }

    return(
          
  <>
  <h1>TodoList App</h1>
      <hr/>
      <h3>Ajout de la Todo</h3>
      <form id="todoForm" method="post" onSubmit={submitFormHandler}>
      <div className="mb-3">
          <span>Votre titre :</span>
          <input type="text" ref={titleRef} className="form-control" name="title" id="title" required/>
        </div>
      <div className="mb-3">
          <span>description :</span>
          <textarea cols={30} rows={10} ref={descriptionRef}  className="form-control" name="title" id="title"   required/>
        </div>
      <div className="mb-3">
          <span>Date :</span>
          <input type="date" ref={dateRef} className="form-control" name="title" id="title" required/>
        </div>
        <button className="w-100 btn btn-secondary"><i className="bi bi-send"></i> Envoyer</button>
      </form>
      <hr />
      </>
      
    )
}