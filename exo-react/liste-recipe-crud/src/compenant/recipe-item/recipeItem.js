import { createSlice } from "@reduxjs/toolkit";

const recipeItemSlice = createSlice({
  name: "recipeItems",
  initialState: {
    recipes: [],
    ingredients: [
      {id: 1, name: "Tomate"},
      {id: 2, name: "Lait"},
      {id: 3, name: "Chocolat"},
      {id: 4, name: "Pomme"},
      {id: 5, name: "Farine"},
    ],
    isLoading: false,
    error: null,
  },
  reducers: {
    
    addRecipeAction(state, action) { 
      state.recipes.push(action.payload)
    },
    editRecipeAction(state, action) {
      const recipeEdit = state.recipes.find(recipe => recipe.id === action.payload.id)
      if (recipeEdit) {
        state.recipes = [...state.recipes.filter(recipe => recipe.id !== action.payload.id), action.payload]
      }
    },
    
    removeRecipeAction(state, action) {
      state.recipes = state.recipes.filter(recipe => recipe.id !== action.payload)
    },
    
    setRecipeAction(state, action) {
      state.recipes = action.payload
    }
  }
})

export const { addRecipeAction, editRecipeAction, removeRecipeAction, setRecipeAction } = recipeItemSlice.actions

export default recipeItemSlice.reducer