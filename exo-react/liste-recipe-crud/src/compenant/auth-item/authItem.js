import { createSlice } from "@reduxjs/toolkit";

const authItemSlice = createSlice({
  name: "authItems",
  initialState: {
    auth: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    
    addAuthAction(state, action) { 
      state.auth = action.payload
    }
   
  }
})

export const { addAuthAction,} = authItemSlice.actions

export default authItemSlice.reducer