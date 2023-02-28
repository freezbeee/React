import { createSlice } from "@reduxjs/toolkit";

const ContactsSlice = createSlice({
  name: "contacts",
  initialState: {
    contacts: [],
    isLoading: false,
    error: null
  },
  reducers: {
    addContactAction(state, action) {
      state.contacts.push(action.payload)
    },
    setContactAction(state, action) {
      state.contacts = action.payload
    },
    editContactAction(state, action) {
      const {id} = action.payload
      const contactFound = state.contacts.find(r => r.id === id)
      if (contactFound) {
        state.contacts = [...state.contacts.filter(r => r.id !== id), action.payload]
      }
    },
    deleteContactAction(state, action) {
      const id = action.payload
      const contactFound = state.contacts.find(r => r.id === id)
      if (contactFound) {
        state.contacts = state.contacts.filter(r => r.id !== id)
      }
    },
  }
})

export const { addContactAction, setContactAction, editContactAction, deleteContactAction } = ContactsSlice.actions


export default ContactsSlice.reducer