import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { API_KEY } from "../api_key";
import FisheDisplay from "./fisheDisplay";
import FormAddFish from "./FormAdd";
import FormUpdate from "./formUpdate";
import ModalComponent from "./shared/modalCompenant";
import ModalComponentForm from "./shared/modalForm";


export const MainCompenant = () => {
  
  const BDD = "https://m2i-demo-auth-theo-default-rtdb.europe-west1.firebasedatabase.app/"
  const [modalVisible, setModalVisible] = useState(false)
  const [modalFormVisible, setModalFormVisible] = useState(false)
  const [fishes, setFishes] = useState([])
  const [fishSelect, setFishSelect] = useState(null)
  const [update, setUpdate] = useState(false)
  const [isLogged, setIsLogged] = useState(false)
  const [isLogging, setIsLogging] = useState(false)
  const emailRef = useRef()
  const passwordRef = useRef()
  
  const logOutHandler = () => {
    localStorage.removeItem('token')
    setIsLogged(false)
  }
  
  const submitFormHandler = async (event) => {
    event.preventDefault()
    
        let BASE_URL = ""
    
        // En fonction de si l'utilisateur se logue ou s'enregistre, l'endpoint API est différent
        // console.log(isLogging)
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
      const logIn = () => {
        setModalVisible(true) 
        setIsLogging(true)
      }

      const addFishHandler = async (fish) => {
        // console.log(fish)
        try {
          const token = localStorage.getItem('token')
          if (token) {
            const response = await fetch(`${BDD}fishes.json?auth=${token}`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body : JSON.stringify(fish)
            })
    
            if (!response.ok) {
              throw new Error("Il y a eu un problème lors de l'ajout !")
            }
    
            const data = await response.json()
            setFishes([...fishes, {id: data.name, ...fish}])
            refreshFish()
    
          }
        } catch (error) {
          console.error(error.message);
        }
      }

      const refreshFish = async () => {
        try {
          const response = await fetch(`${BDD}fishes.json`)
    
          if (!response.ok) {
            throw new Error("Il y a eu une erreur lors de la requête GET !")
          }
    
          const data = await response.json()
          
          const tmpfishe = []
          for (const key in data) {
            tmpfishe.push({id: key, ...data[key]})
          }
          setFishes(tmpfishe)
          
        } catch (error) {
          console.error(error.message);
        }
      }
      
      useEffect(() => {
        refreshFish()
      }, [])
      
      const deleteFisheHandler = async (fisheId) => {
        // eslint-disable-next-line no-restricted-globals
        if(confirm("Etes-vous sûr ?")) {
          const fishFound = fishes.find(fish => fish.id === fisheId)
          console.log(fishFound)
          if (fishFound) {
            try {
              const token = localStorage.getItem('token')
              if (token) {
                const response = await fetch(`${BDD}fishes/${fisheId}.json?auth=${token}`, {
                  method: "DELETE"
                })
                
                if (!response.ok) {
                  throw new Error("Erreur lors de la suppression !")
                }
                
                setFishes([...fishes.filter(fish => fish !== fishFound)])
              }
            } catch (error) {
              console.error(error.message);
            }
            
          }
        }
      }
      
      const updateFishHandler = async (newFish) => {
        // console.log('coucou')
        const fishFound = fishes.find(fish => fish.id === newFish.id)
        console.log(fishFound)
        if (fishFound) {
          // console.log('coucou2')
          const token = localStorage.getItem('token')
          if (token) {
            try {
              
              // console.log('coucou3')
              const response = await fetch(`${BDD}fishes/${newFish.id}.json?auth=${token}`, {
                method: "PATCH",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(newFish)
              })
              // console.log('coucou4')
              
              if (!response.ok) {
                throw new Error("Erreur durant la requête PATCH !")
              }
              
              const data = await response.json()
              console.log(data);
              setUpdate(false)
              setFishes([...fishes.filter(fish => fish !== fishFound), newFish])
              // console.log('coucou5')
              
            } catch (error) {
              console.error(error.message);
            }
            // console.log('coucou6')
          }
        }
      }
      const updateFish = (fisheId) =>{
        // console.log(fisheId)
        setFishSelect( fishes.find(fish => fish.id === fisheId )) 
        setUpdate(true)
        setModalFormVisible(true)
      }
     
      const switchadd = () =>{
        setUpdate(false)
        setModalFormVisible(true)
      }


    
      
      
      return (
        <>
        {modalFormVisible && createPortal(<ModalComponentForm closeModal={()=> setModalFormVisible(false)}>
          {update ? <FormUpdate updateFishForm={updateFishHandler} fishSelect={fishSelect}></FormUpdate> 
          :
          <FormAddFish addFish={addFishHandler}></FormAddFish>}
          
          
          </ModalComponentForm>,document.getElementById("modal-root"))}
        
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
                 {!isLogged && <button className="btn btn-outline-info m-2" onClick={logIn}>log-in</button>}
            <button className="btn btn-outline-success m-2"  onClick={() => isLogged ? logOutHandler() : setModalVisible(true)}>{isLogged ? 'Log Out' : 'sign-up'}</button> 

            
            </div>
            </div>
        </nav>
        <div className="container bg-dark m-5 text-white ">
          <div className="d-flex justify-content-end">
        {isLogged && <button className="btn btn-outline-info m-2" onClick={switchadd}><i className="bi bi-plus-circle me-1"></i>Add Fish</button>}
        </div>
        
        {fishes.length === 0 ? 
              <p>Il n'y a pas de poisson dans la base de données !</p> : 
              fishes.map(fish => <FisheDisplay key={fish.id} fish={fish} isLogged={isLogged} deletFish={deleteFisheHandler} updateFish={updateFish}   />)}
            </div>
            
        </>
    )
}