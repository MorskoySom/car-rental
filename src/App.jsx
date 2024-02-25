import { Layout } from "components/Layout/Layout";
import { CarGallery } from "./components/CarsGallery/CarsGallery";
import { FavCars } from "./pages/FavCarsPage";
import { Homepage } from "./pages/HomePage";
import { Route, Routes, Navigate  } from "react-router-dom";

function App() {
  return (    
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="/catalog" element={<CarGallery />} />
        <Route path="/favorites" element={<FavCars />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>    
  );
}

export default App;