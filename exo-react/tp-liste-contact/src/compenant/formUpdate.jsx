import { useRef } from "react"


const FormUpdate = (props) => {

  

  const lastNameRef = useRef()
  const firstNameRef = useRef()
  const birthRef = useRef()
  const ageRef = useRef()
  const emailRef = useRef()
  const phoneRef = useRef()
  const avatarRef = useRef()

  const updateFormHandler = (event) => {
    event.preventDefault()

    const lasteName = lastNameRef.current.value
    const firstName = firstNameRef.current.value
    const birth = birthRef.current.value
    const age = ageRef.current.value
    const email = emailRef.current.value
    const phone = phoneRef.current.value
    const avatar = avatarRef.current.value

    const fishUpdate = {
    id : props.fishSelect.id,
      lasteName,
      firstName,
      birth,
      age,
      email,
      phone,
      avatar
      
    }

    lastNameRef.current.value = ""
    firstNameRef.current.value = ""
    birthRef.current.value = ""
    ageRef.current.value = ""
    emailRef.current.value = ""
    phoneRef.current.value = ""
    
    props.updateFishForm(fishUpdate)

  }

  return (
    <>
      <h3>Modification</h3>
      <hr />
      <form onSubmit={updateFormHandler}>
      <div className="mb-3">
          <label htmlFor="lastName" className="form-label">nom: </label>
          <input type="text" defaultValue={props.fishSelect.firstName} required id="lastName" ref={lastNameRef} className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">type: </label>
          <input required id="firstName"  defaultValue={props.fishSelect.lasteName} ref={firstNameRef} className="form-control" style={{resize: "none"}}></input>
        </div>
        <div className="mb-3">
          <label htmlFor="birth" className="form-label">Date de naissance: </label>
          <input type="date"  defaultValue={props.fishSelect.birth} required id="birth" ref={birthRef} className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">Age: </label>
          <input type="number"  defaultValue={props.fishSelect.age} required id="age" ref={ageRef} className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email: </label>
          <input type="mail" required id="email"  defaultValue={props.fishSelect.email} ref={emailRef} className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Telephone: </label>
          <input type="text" required id="phone"  defaultValue={props.fishSelect.phone} ref={phoneRef} className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="avatar" className="form-label">URL de ton avatar: </label>
          <input type="text" required id="avatar"  defaultValue={props.fishSelect.avatar} ref={avatarRef} className="form-control" />
        </div>
        <div className="text-end">
          <button className="btn btn-outline-dark"><i className="bi bi-send"></i> Modifier</button>
        </div>
      </form>
    </>
  )
}

export default FormUpdate