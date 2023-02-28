import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router"
import {  editContactAction } from "./contactsSlice"

  



  const UpdateContact = () => {
      const firstNameRef = useRef()
      const lastNameRef = useRef()
      const JobRef = useRef()
      const {id}  = useParams()
      const contacts = useSelector(state => state.contacts.contacts)
      .find(contact => contact.id === +id)
      const navigate = useNavigate()
      const dispatch = useDispatch()
      
      
      const submitContactUpdate = (e) => {
          // console.log(contacts.length);
          e.preventDefault()
          const newContact = {
        id : contacts.id,
        firstName :firstNameRef.current.value , 
        lastName : lastNameRef.current.value,
        Job : JobRef.current.value 
      }
      dispatch(editContactAction(newContact))
      alert("update reussite")
      navigate("/contact")
       
  

    }
    return (
      <>
       <div className="container">
      <div className="bg-dark text-light my-3 mx-4 px-3">
  
     
       <h3>contacter-nous</h3>
       <form action="" onSubmit={submitContactUpdate}>
       <div className="form-group mt-4">
    <label htmlFor="exampleFormControlInput1">prenom du poisson</label>
    <input type="text" className="form-control" id="title" ref={firstNameRef}   required defaultValue={contacts.firstName}/>
  </div>
  <div className="form-group mt-4">
    <label htmlFor="exampleFormControlSelect1">Type de poisson </label>
    <input type='text' className="form-control" ref={lastNameRef}  id="exampleFormControlSelect1"   required defaultValue={contacts.lastName}>
      
    
    </input>
  </div >
    <div className="form-group mt-4">
    <label htmlFor="exampleFormControlTextarea1">job du poisson </label>
    <input type="text" className="form-control" ref={JobRef}  id="exampleFormControlTextarea1"   required defaultValue={contacts.Job}></input>
  </div>
  <button className="my-4 btn btn-outline-success ">Envoyer</button>
       </form>
       </div>
      </div>
      </>
    )
  }
  
  export default UpdateContact