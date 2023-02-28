import authItemSlice from "./compenant/auth-item/authItem";
import recipeItemSlice from "./compenant/recipe-item/recipeItem";




const { configureStore } = require("@reduxjs/toolkit");


const store = configureStore({
    reducer:{
        recipeItems : recipeItemSlice,
        authItem : authItemSlice
    }
})

export default store