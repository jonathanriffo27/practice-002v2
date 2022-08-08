import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Canales from "./components/layout/Canales";
import Login from "./components/layout/Login";
import Main from "./components/layout/Main";


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/canales" element={<Canales />} />
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
