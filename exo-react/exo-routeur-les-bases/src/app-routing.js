import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./routes/Abbout";
import Contact from "./routes/contact";
import Erreur from "./routes/error";
import HomePage from "./routes/Home";
import Project from "./routes/project";




export const router = createBrowserRouter([
    {
        path: "/",
        element:<App/>,
        errorElement: <Erreur />,
        children : [
         {   path: "/",
            element: <HomePage />},
            {
                path: "/about",
                element: <About />
              },
            {
                path: "/project",
                element: <Project />
              },
            {
                path: "/contact",
                element: <Contact />
              }
        ]
    }
])

