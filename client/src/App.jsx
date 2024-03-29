import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomeScreen from "./views/HomeScreen"
import LoginAndRegister from './views/LoginAndRegister'
import UserDashBoard from './views/UserDashBoard'
import AddRecipe from './views/AddRecipe'
import Show1Recipe from './views/Show1Recipe'

function App() {

  return (
    <>
      <Routes>
        {/* Route  */}
        {/* Landing Page */}
        <Route path="/" element={<HomeScreen />} />
        <Route path="/loginandregister" element={<LoginAndRegister />} />
        <Route path="/user/dashboard" element={<UserDashBoard />} />
        <Route path="/user/addARecipe" element={<AddRecipe />} />
        <Route path="/showOneRecipe" element={<Show1Recipe />} />
      </Routes>
    </>
  )
}

export default App
