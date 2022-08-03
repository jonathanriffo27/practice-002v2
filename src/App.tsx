import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./components/layout/Login";


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<div>
            
          </div>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
