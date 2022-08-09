import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Canales from "./components/funcional/Canales";
import Switch from "./components/funcional/Switch";


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/canales" element={<Canales />} />
          <Route path="/" element={<Switch />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
