
import {  useSelector } from "react-redux";
import { useNavigate } from "react-router";
import ContactDisplay from "./contactDisplay";

const Contact = () => {
  const contacts = useSelector(state => state.contacts.contacts)
  console.log(contacts.length)
  const navigate = useNavigate()
  
  const clickHandler = () => {
    

    navigate("/contact/add")
  }
    return(
      <>
      <div className="bg-dark text-light my-3 border mx-4">
      {contacts.length === 0 ? <h2> il n'y a pas de contact </h2> : 
      [...contacts].sort((a,b) => a.firstName.localeCompare(b.firstName)).map(contact => <div className="my-3 mx-2 border border-info"  key={contact.id}><ContactDisplay contactId={contact.id}/></div>)}
      <button className="btn btn-outline-success my-4 " onClick={clickHandler}>add</button>
      </div>
      </>
    )}
  
  export default Contact