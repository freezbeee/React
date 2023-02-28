import { useSelector } from "react-redux"

const RecipeDisplay = (props) => {
  // const recipeItem = useSelector(state => state.recipeItems.recipes)
  // .find(recipe => recipe.id === recipeItemId)
  // console.log(props.isLogged)
  // console.log(props.isLogged)
  
  return (
    <div>
      <h3>{props.recipe.title}</h3>
      <hr />
      <p>{props.recipe.instruction}</p>
      <h3>{props.recipe.cookTime}</h3>
    
      <hr />
      {/* <p>{recipeItem.recipe.prepTime}</p> */}
      <ul>
        {props.recipe.ingredient.map(i => <li key={i.id}>{i.name}</li>)}
      </ul>
   
      <button className="btn btn-outline-warning m-2" onClick={()=> props.updateRecipe(props.recipeItemId)}><i className="bi bi-pen-fill"></i></button>
        <button className="btn btn-outline-danger m-2"  onClick={() => props.deleteRecipe(props.recipeItemId)} ><i className="bi bi-trash me-1"></i></button>
        
      
    </div>
  )
}

export default RecipeDisplay