import HomePage from "./components/home/Home";
import ServicePage from "./components/service/Service";
import EquipePage from "./components/equipe/Equipe";
import ContactoPage from "./components/contacto/Contacto";
import Navbar from "./components/navbar/Navbar"
import { Route, Routes, Navigate  } from 'react-router-dom'


function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/team" element={<EquipePage/>}/>
          <Route path="/service" element={<ServicePage/>}/>
          <Route path="/contact" element={<ContactoPage/>}/>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </>

  );

}

export default App
