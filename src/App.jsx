import { CarGallery } from "./CarsGallery/CarsGallery";
import { FavCars } from "./FavCars";
import { Homepage } from "./Home";
import { NavLink, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/catalog">CarGallery</NavLink>
          <NavLink to="/favorites">FavCars</NavLink>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/catalog" element={<CarGallery />}></Route>
        <Route path="/favorites" element={<FavCars />}></Route>
      </Routes>    
    </>
    
    
  );
}

export default App;
