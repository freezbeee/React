import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import { useDispatch, useSelector } from "react-redux"
import { BDD, signIn, signUp } from "../API_KEY"
import { addAuthAction } from "./auth-item/authItem"
import FormAddRecipe from "./FormAdd"
import RecipeDisplay from "./recipe-item/recipeDisplay"
import { addRecipeAction, removeRecipeAction, setRecipeAction } from "./recipe-item/recipeItem"
import ModalComponent from "./shared/modalCompenant"
import ModalComponentForm from "./shared/modalForm"



export const MainCompenant = () => {
    const [modalVisible, setModalVisible] = useState(false)
    // const [update, setUpdate] = useState(false)
    const [modalFormVisible, setModalFormVisible] = useState(false)
    const [isLogged, setIsLogged] = useState(false)
    const [isLogging, setIsLogging] = useState(false)
    const emailRef = useRef()
    const passwordRef = useRef()
    
        const recipes = useSelector(state => state.recipeItems.recipes)
        const dispatch = useDispatch()
    
    
    
    
    
    const logOutHandler = () => {
        localStorage.removeItem('token')
        setIsLogged(false)
    }
    
    
    const submitFormHandler = async (event) => {
        event.preventDefault()
        let BASE_URL = ""

    if(isLogging){
         BASE_URL = `${signIn}`
    }else {
         BASE_URL = `${signUp}`
        
    }

    try{
        const newAuth = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
            returnSecureToken: true

        }
        const response = await fetch(BASE_URL,{
            method : "POST",
            headers : {
                "Content-Type": "application/json"
            },
            body : JSON.stringify(newAuth)
           
        })
    

        if(!response.ok) {
            throw new Error("Il y a eu une erreur au moment du log => !!!!!!!")
          } 

          const data = await response.json()
          dispatch(addAuthAction(data))
          localStorage.setItem('token',data.idToken)

        // console.log(newAuth)
          emailRef.current.value = ""
          passwordRef.current.value = ""
    
          setIsLogged(true)
          setModalVisible(false)
    } catch(error){
        console.error(error.message);
          alert(error.message)

    }
}

    const addRecipeHandler = async (recipe) => {
        console.log(recipe)
        try {
            const token = localStorage.getItem('token')
            const response = await fetch(`${BDD}recipeItems.json?auth=${token}`, {
                method: "POST",
                headers: {
          "Content-Type": "application/json"
        },
      
                body: JSON.stringify(recipe)
            }) 
            if (!response.ok){
                throw new Error ("Un probleme est survenue lors de vortre ajout de tache !!!")
            }

            const data = await response.json()

            dispatch(addRecipeAction({...recipe, id : data.name}))
          setModalFormVisible(false)
          refreshRecipe()

        } catch (error){ 
            console.error(error.message)

        }
    }
    const deleteRecipeHandler = async (recipeId) => {
         // eslint-disable-next-line no-restricted-globals
        if(confirm("Etes-vous sûr ?")) {
          const recipefound = recipes.find(reciepe => reciepe.id === recipeId)
          // console.log(fishFound)
          if (recipefound) {
            try {
              const token = localStorage.getItem('token')
              if (token) {
                const response = await fetch(`${BDD}recipeItems/${recipeId}.json?auth=${token}`, {
                  method: "DELETE"
                })
                
                if (!response.ok) {
                  throw new Error("Erreur lors de la suppression !")
                }
                const data = await response.json()
                
                dispatch(removeRecipeAction({recipefound, id : data.name}))
              }
            } catch (error) {
              console.error(error.message);
            }
            
          }
        }
      }
      const updateRecipe = async (recipeId) => {
        console.log({recipeId})
      }

    const refreshRecipe = async () => {
        try {
          const response = await fetch(`${BDD}recipeItems.json`, {
            method: "GET",
            headers: {
      "Content-Type": "application/json"
    }})

    
    if (!response.ok) {
        throw new Error("Il y a eu une erreur lors de la requête GET !")
    }
    
    const data = await response.json()
    const tmpArray = []
    for (const key in data){
        tmpArray.push({id : key,...data[key]})
    }
    dispatch(setRecipeAction(tmpArray))
          
         
          
          
        } catch (error) {
          console.error(error.message);
        }
      }
    const logIn = () => {
        setModalVisible(true) 
        setIsLogging(true)
      }


      const switchadd = () =>{
        // setUpdate(false)
        setModalFormVisible(true)
      }
    // // console.log(recipes)

    useEffect(() => {
        refreshRecipe()
      }, [])
      

    return(
        <>
        {modalFormVisible && createPortal(<ModalComponentForm closeModal={()=> setModalFormVisible(false)}>
         
          <FormAddRecipe addRecipe={addRecipeHandler}></FormAddRecipe>
          
          
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
        <div className=" d-flex justify-content-between bg-dark text-white  ">
         
            <div className="logo d-flex">
            <i className="bi bi-book-half"></i>
        <h1 className="d-flex">Votre liste de rectte</h1>
        </div>
        <div className="d-flex  ">
             {!isLogged && <button className="btn btn-outline-info m-2" onClick={logIn}>log-in</button>}
            
        <button className="btn btn-outline-success m-2"  onClick={() => isLogged ? logOutHandler() : setModalVisible(true)}>{isLogged ? 'Log Out' : 'sign-up'}</button> 
        
        </div>
        </div>
    </nav>
        <div className="container  m-5 text-white p-3 liste">
          <div className="d-flex justify-content-end">
         { isLogged && <button className="btn btn-outline-info m-2" onClick={switchadd}><i className="bi bi-plus-circle me-1"></i>Add recipe</button>}
        </div>
        
        {recipes.length === 0 ? 
              <p>Il n'y a pas de recette de chef dans la base de données !</p> : 
              recipes.map(recipe => <RecipeDisplay key={recipe.id} recipeItemId={recipe.id} recipe={recipe} isLogged={isLogged} deleteRecipe={deleteRecipeHandler} updateRecipe={updateRecipe}  />)}
            </div>
        
        </>
   
    )
}