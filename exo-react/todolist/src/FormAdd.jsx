import { useRef } from "react"


const FormAddFish = (props) => {

  

  const lastNameRef = useRef()
  const firstNameRef = useRef()
  const birthRef = useRef()
  const ageRef = useRef()
  const emailRef = useRef()
  const phoneRef = useRef()
  const avatarRef = useRef()

  const submitFormHandler = (event) => {
    event.preventDefault()

    const lasteName = lastNameRef.current.value
    const firstName = firstNameRef.current.value
    const birth = birthRef.current.value
    const age = ageRef.current.value
    const email = emailRef.current.value
    const phone = phoneRef.current.value
    const avatar = avatarRef.current.value

    const newFish = {
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
    
    props.addFish(newFish)

  }

  return (
    <>
      <h3>Ajout ton fish</h3>
      <hr />
      <form onSubmit={submitFormHandler}>
      <div className="mb-3">
          <label htmlFor="lastName" className="form-label">nom: </label>
          <input type="text" required id="lastName" ref={lastNameRef} className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">type: </label>
          <input required id="firstName" ref={firstNameRef} className="form-control" style={{resize: "none"}}></input>
        </div>
        <div className="mb-3">
          <label htmlFor="birth" className="form-label">Date de naissance: </label>
          <input type="date" required id="birth" ref={birthRef} className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">Age: </label>
          <input type="number" required id="age" ref={ageRef} className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email: </label>
          <input type="mail" required id="email" ref={emailRef} className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Telephone: </label>
          <input type="text" required id="phone" ref={phoneRef} className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="avatar" className="form-label">URL de ton avatar: </label>
          <input type="text" required id="avatar" ref={avatarRef} className="form-control" />
        </div>
        <div className="text-end">
          <button className="btn btn-outline-dark"><i className="bi bi-send"></i> Ajouter</button>
        </div>
      </form>
    </>
  )
}

export default FormAddFish