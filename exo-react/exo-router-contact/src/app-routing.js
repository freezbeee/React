import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AddContact from "./routes/contact/addContact";

import Contact from "./routes/contact/contact";
import DeleteContact from "./routes/contact/deleteContact";
import UpdateContact from "./routes/contact/updateContact";

import Erreur from "./routes/error";
import HomePage from "./routes/Home";





export const router = createBrowserRouter([
    {
        path: "/",
        element:<App/>,
        errorElement: <Erreur />,
        children : [
         {   path: "/",
            element: <HomePage />},
           
           
            {
                path: "/contact",
                element: <Contact />
              },
              {
                path: "/contact/add",
                element: <AddContact />
              },
              {
                path: "/contact/delete/:id",
                element: <DeleteContact />
              },
              {
                path: "/contact/edit/:id",
                element: <UpdateContact />
              }
        ]
    }
])

