import HomePage from "./components/home/Home";
import ServicePage from "./components/service/Service";
import Navbar from "./components/navbar/Navbar"
import { Route, Routes } from 'react-router-dom'


function App() {
  return (
    <>
      <Navbar />
      <HomePage/>
      <div>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/service" element={<ServicePage/>}/>
        </Routes>
      </div>
    </>

  );

}

export default App
