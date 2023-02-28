import { configureStore } from "@reduxjs/toolkit";
import ContactsSlice from "./routes/contact/contactsSlice";



/*
  Pour créer un store Redux, il vaut mieux passer par la fonction 'configureStore' de '@reduxjs/toolkit'.

  Cette fonction va prendre en paramètre un objet Javascript dont l'attribut à donner est 'reducer'.
  Cet objet va se charger de créer pour nous un state global de notre application, dont chaque sous ensemble sera une 'tranche'
  de notre state global.


  Par exemple, dans notre state global, on pourrait avoir une section concernant les clients, une concernant les produits, etc...
*/

const store = configureStore({
  reducer: {

    contacts: ContactsSlice
  }
})

/*
  state: {
    todoItems: {
      todos: [],
      error: null,
      isLoading: false
    }
  }
*/

export default store