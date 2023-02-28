import { useRef } from "react"

const Contact = () => {
    const titleRef = useRef()
    const choiceRef = useRef()
    const textArea = useRef()
   
    const submitTest = (e) => {
        e.preventDefault()
        console.log(titleRef.current.value)
        console.log(choiceRef.current.value)
        console.log(textArea.current.value)
    }
    return (
      <>
       <div className="container">
      <div className="bg-dark text-light my-3 mx-4 px-3">
  
     
       <h3>contacter-nous</h3>
       <form action="" onSubmit={submitTest}>
       <div className="form-group mt-4">
    <label htmlFor="exampleFormControlInput1">Titre</label>
    <input type="text" className="form-control" id="title" ref={titleRef} placeholder="Titre" />
  </div>
  <div className="form-group mt-4">
    <label htmlFor="exampleFormControlSelect1">Type de poisson concerné</label>
    <select className="form-control" id="exampleFormControlSelect1" ref={choiceRef}>
      <option value={"#"}>choix du type</option>
      <option value={"poisson-rouge"}>poisson-rouge</option>
      <option value={"poisson-clown"}>poisson-clown</option>
      <option value={"poisson-chat"}>poisson-chat</option>
      <option value={"blop"}>blop</option>

    
    </select>
  </div >
    <div className="form-group mt-4">
    <label htmlFor="exampleFormControlTextarea1">Message pour se poisson </label>
    <textarea className="form-control" ref={textArea} id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <button className="my-4 btn btn-outline-success ">Envoyer</button>
       </form>
       </div>
      </div>
      </>
    )
  }
  
  export default Contact