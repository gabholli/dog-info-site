import "./index.css"
import { Routes, Route } from "react-router-dom"
import Layout from './components/Layout'
import Home from "./pages/Home"
import BreedList from "./pages/DogInfo/BreedList"
import NotFound from "./pages/NotFound/NotFound"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="breeds" element={<BreedList />} />

        <Route path="*" element={<NotFound />} />

      </Route>
    </Routes>
  )
}

export default App
