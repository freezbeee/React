import { useRef } from "react"
import { useDispatch } from "react-redux"
import {  useNavigate } from "react-router"
import { addContactAction } from "./contactsSlice"

const AddContact = () => {
    const firstNameRef = useRef()
    const lastNameRef = useRef()
    const JobRef = useRef()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    // let count = 0
    // const contacts = useSelector(state => state.contacts.contacts)
    
    const submitContact = (e) => {
      // console.log(contacts.length);
      e.preventDefault()
       
        const newContact = {
          id : Math.floor(Math.random() * 100),
          firstName :firstNameRef.current.value , 
          lastName : lastNameRef.current.value,
          Job : JobRef.current.value 
        }
        console.log(newContact)
        // contacts.push(contact)
        dispatch(addContactAction({...newContact}))
        navigate("/contact")
        alert('ajout avec succes')
  

    }
    return (
      <>
       <div className="container">
      <div className="bg-dark text-light my-3 mx-4 px-3">
  
     
       <h3>contacter-nous</h3>
       <form action="" onSubmit={submitContact}>
       <div className="form-group mt-4">
    <label htmlFor="exampleFormControlInput1">prenom du poisson</label>
    <input type="text" className="form-control" id="title" ref={firstNameRef} placeholder="bubule" />
  </div>
  <div className="form-group mt-4">
    <label htmlFor="exampleFormControlSelect1">Type de poisson </label>
    <input type='text' className="form-control" id="exampleFormControlSelect1" placeholder="le poisson rouge" ref={lastNameRef}>
      
    
    </input>
  </div >
    <div className="form-group mt-4">
    <label htmlFor="exampleFormControlTextarea1">job du poisson </label>
    <input type="text" className="form-control" ref={JobRef} id="exampleFormControlTextarea1" placeholder="agent d'entretin des ocean" rows="3"></input>
  </div>
  <button className="my-4 btn btn-outline-success ">Envoyer</button>
       </form>
       </div>
      </div>
      </>
    )
  }
  
  export default AddContact