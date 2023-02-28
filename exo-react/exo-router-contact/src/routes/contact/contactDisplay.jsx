import { useSelector } from "react-redux"
import { useNavigate } from "react-router"

const ContactDisplay = ({contactId}) => {
  const contacts = useSelector(state => state.contacts.contacts)
  .find(contact => contact.id === contactId)
  const navigate = useNavigate()

  const toDelete = () => {
    navigate(`/contact/delete/${contacts.id}`)   
  }
    const toEdit = () => {
        navigate(`/contact/edit/${contacts.id}`)
    }
  return (
    <div>
      <h3>{contacts.firstName}// {contacts.lastName} </h3>
      <hr />
      <p>Job : {contacts.Job}</p>
      <div className="d-flex justify-content-around my-2">
      <button className="btn btn-outline-danger " onClick={toDelete}>delete</button>
      <button className="btn btn-outline-warning " onClick={toEdit}>edit</button>
      </div>
    </div>
  )
}

export default ContactDisplay