import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router"
import { deleteContactAction } from "./contactsSlice"

  



  const DeleteContact = () => {
    const {id}  = useParams()
    const contacts = useSelector(state => state.contacts.contacts)
  .find(contact => contact.id === +id)
  const navigate = useNavigate()
  const dispatch = useDispatch()
    
  
    const submitContactDelete = (e) => {
      // console.log(contacts.length);
      e.preventDefault()
      alert("suppression reussite")
      navigate("/contact")
      dispatch(deleteContactAction(+id))
       
  

    }
    return (
      <>
       <div className="container">
      <div className="bg-dark text-light my-3 mx-4 px-3">
  
     
       <h3>contacter-nous</h3>
       <form action="" onSubmit={submitContactDelete}>
       <div className="form-group mt-4">
    <label htmlFor="exampleFormControlInput1">prenom du poisson</label>
    <input type="text" className="form-control" id="title"  disabled required defaultValue={contacts.firstName}/>
  </div>
  <div className="form-group mt-4">
    <label htmlFor="exampleFormControlSelect1">Type de poisson </label>
    <input type='text' className="form-control" id="exampleFormControlSelect1"  disabled required defaultValue={contacts.lastName}>
      
    
    </input>
  </div >
    <div className="form-group mt-4">
    <label htmlFor="exampleFormControlTextarea1">job du poisson </label>
    <input type="text" className="form-control"  id="exampleFormControlTextarea1"  disabled required defaultValue={contacts.Job}></input>
  </div>
  <button className="my-4 btn btn-outline-success ">Envoyer</button>
       </form>
       </div>
      </div>
      </>
    )
  }
  
  export default DeleteContact