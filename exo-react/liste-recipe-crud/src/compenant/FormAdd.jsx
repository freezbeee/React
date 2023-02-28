import { useRef } from "react"
import { useSelector } from "react-redux"


const FormAddRecipe = (props) => {
  const ingredients = useSelector(state => state.recipeItems.ingredients)
  

//  const count = 0
  const titleRef = useRef()
  const instructionRef = useRef()
  const cookTimeRef = useRef()
  const prepTimeRef = useRef()
  const ingredientRef = useRef()


  const submitFormHandler = (event) => {
    event.preventDefault()

   
    const title = titleRef.current.value
    const instruction = instructionRef.current.value
    const cookTime = cookTimeRef.current.value
    const prepTime = prepTimeRef.current.value
    const ingredientsArray = []


    for (const opt of ingredientRef.current.options) {
      if (opt.selected) {
        ingredientsArray.push(ingredients.find(i => i.id === +opt.value))
      }
    }

    console.log(ingredientsArray);
    

    const newRecipe = {
      // id : ++count,
      title,
      instruction,
      cookTime,
      prepTime,
      ingredient: ingredientsArray
      
    }

   
    titleRef.current.value = ""
    instructionRef.current.value = ""
    cookTimeRef.current.value = ""
    prepTimeRef.current.value = ""
    ingredientRef.current.value = []
    
    props.addRecipe(newRecipe)

  }

  return (
    <>
      <h3>Ajout ton recipe</h3>
      <hr />
      <form onSubmit={submitFormHandler}>
      
        <div className="mb-3">
          <label htmlFor="title" className="form-label">title: </label>
          <input required id="title" ref={titleRef} className="form-control" style={{resize: "none"}}></input>
        </div>
        <div className="mb-3">
          <label htmlFor="instruction" className="form-label">instruction: </label>
          <textarea  required id="instruction" ref={instructionRef} className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="cookTime" className="form-label">cook time: </label>
          <input type="number" required id="cookTime" ref={cookTimeRef} className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="prepTime" className="form-label">prep Time: </label>
          <input type="number" required id="prepTime" ref={prepTimeRef} className="form-control" />
        </div>
        <div className="form-floating">
  <select className="form-select" id="floatingSelect" ref={ingredientRef} aria-label="Floating label select example" multiple>
    {ingredients.map(ingredient => <option key={ingredient.id} value={ingredient.id}>{ingredient.name}</option>)}
  </select>
</div>
       
        <div className="text-end">
          <button className="btn btn-outline-dark"><i className="bi bi-send"></i> Ajouter</button>
        </div>
      </form>
    </>
  )
}

export default FormAddRecipe