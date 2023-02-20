import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import { API_KEY } from "../api_key";
import ModalComponent from "./shared/modalCompenant";

export const MainCompenant = () => {
    
    const BDD = "https://m2i-demo-auth-theo-default-rtdb.europe-west1.firebasedatabase.app/"
    const [modalVisible, setModalVisible] = useState(false)
    
    const [isLogged, setIsLogged] = useState(false)
    const [isLogging, setIsLogging] = useState(false)
    const emailRef = useRef()
    const passwordRef = useRef()


    const submitFormHandler = async (event) => {
        event.preventDefault()
    
        let BASE_URL = ""
    
        // En fonction de si l'utilisateur se logue ou s'enregistre, l'endpoint API est différent
        console.log(isLogging)
        if (isLogging) 
        
        {
          BASE_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`
    
        } else {
          BASE_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`
        }
    
        try {
    
          const response = await fetch(BASE_URL, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body : JSON.stringify({
              email: emailRef.current.value,
              password: passwordRef.current.value,
              returnSecureToken: true
            })
          })
      

          if(!response.ok) {
            throw new Error("Il y a eu une erreur !!!!!!!")
          } 
    
          
          const data = await response.json()
          
         
          localStorage.setItem('token', data.idToken)
    
          emailRef.current.value = ""
          passwordRef.current.value = ""
    
          setIsLogged(true)
          setModalVisible(false)
        } catch (error) {
          console.error(error.message);
          alert(error.message)
        }
      }
    


    return (
        <>
        {modalVisible && createPortal(<ModalComponent closeModal={()=> setModalVisible(false)}>
        <div className="d-flex justify-content-between align-items center">
        <h3>login</h3>
        <button onClick={() =>setModalVisible(false)} className="btn btn-outline-dark rounded-circle"><i className="bi bi-x"></i></button>
        </div>
        <hr />
        <form onSubmit={submitFormHandler}>
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email : </label>
            <input type="text" required ref={emailRef} className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password : </label>
            <input type="password" required ref={passwordRef} className="form-control" />
          </div>
          <div className="text-end">
            
            <button className="btn btn-primary">Valider</button>
          </div>
        </form>
       
        </ModalComponent>, document.getElementById("modal-root"))}
       
        <nav>
            <div className=" d-flex bg-dark text-white ">
            <i className="bi bi-arrow-through-heart-fill ms-4 d-flex"></i>
            <h1 className="d-flex">Adopt un fish</h1>
            <div className="d-flex  justify-content-end">
                {isLogging ?<> <button className="btn btn-outline-info m-2" onClick={()=>setModalVisible(true) }>log-in</button>
            <button className="btn btn-outline-success m-2"  onClick={()=>setModalVisible(true)}>sign-up</button> </> : 
            <button className="btn btn-outline-success m-2"  onClick={()=>setModalVisible(true)}>disconnect</button>}
            
            </div>
            </div>
        </nav>
        </>
    )
}