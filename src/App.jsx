import LoginPage from "./components/LoginPage/LoginPage"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout/Layout"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
