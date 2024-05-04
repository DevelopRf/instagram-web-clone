import LoginPage from "./components/LoginPage/LoginPage"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<LoginPage />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
