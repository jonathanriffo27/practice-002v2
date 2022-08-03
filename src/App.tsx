import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./components/layout/Login";
import Menu from "./components/layout/Menu";


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Menu />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
