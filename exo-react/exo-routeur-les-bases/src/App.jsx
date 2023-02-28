import { NavLink, Outlet } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
         
         <h2>Navbar</h2>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
             
              <NavLink className="nav-link" to="/">Home</NavLink>
              <NavLink className="nav-link" to="/project">projet</NavLink>
              <NavLink className="nav-link" to="/about">About</NavLink>
              <NavLink className="nav-link" to="/contact">contact</NavLink>
            </div>
          </div>
        </div>
      </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
